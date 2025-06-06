"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppConfig } from "@/config/app-config";
import { getMenuByTemplate, type MenuItem } from "@/config/menu-templates";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export function Sidebar({
  collapsed = false,
  onCollapsedChange,
}: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const menuItems = getMenuByTemplate(AppConfig.menu.template);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  const isExpanded = (itemId: string) => expandedItems.includes(itemId);

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const expanded = isExpanded(item.id);
    const active = isActive(item.href);

    return (
      <div key={item.id} className="space-y-1">
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors group",
            "hover:bg-accent hover:text-accent-foreground",
            active && "bg-accent text-accent-foreground font-medium",
            depth > 0 && "ml-4",
            collapsed && depth === 0 && "justify-center px-2"
          )}
        >
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(item.id)}
              className="flex items-center gap-3 flex-1 text-left"
            >
              <item.icon
                className={cn(
                  "w-4 h-4 flex-shrink-0",
                  collapsed && depth === 0 && "w-5 h-5"
                )}
              />
              {(!collapsed || depth > 0) && (
                <>
                  <span className="flex-1">{item.title}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      expanded && "rotate-90"
                    )}
                  />
                </>
              )}
            </button>
          ) : (
            <Link
              href={item.href || "#"}
              className="flex items-center gap-3 flex-1"
            >
              <item.icon
                className={cn(
                  "w-4 h-4 flex-shrink-0",
                  collapsed && depth === 0 && "w-5 h-5"
                )}
              />
              {(!collapsed || depth > 0) && (
                <>
                  <span className="flex-1">{item.title}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                  {item.isNew && (
                    <Badge variant="default" className="text-xs">
                      NEW
                    </Badge>
                  )}
                  {item.isBeta && (
                    <Badge variant="outline" className="text-xs">
                      BETA
                    </Badge>
                  )}
                </>
              )}
            </Link>
          )}
        </div>

        {hasChildren && expanded && (!collapsed || depth > 0) && (
          <div className="space-y-1">
            {item.children?.map((child) => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "bg-background border-r border-border transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo & Toggle */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">{AppConfig.branding.logo.icon}</span>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg leading-none">
                  {AppConfig.branding.logo.text}
                </h1>
                <p className="text-xs text-muted-foreground">
                  v{AppConfig.app.version}
                </p>
              </div>
            )}
          </Link>
          {AppConfig.menu.customization.allowCollapse && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCollapsedChange?.(!collapsed)}
              className={cn("ml-auto", collapsed && "ml-0")}
            >
              {collapsed ? (
                <Menu className="w-4 h-4" />
              ) : (
                <X className="w-4 h-4" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex items-center justify-between">
              <span>환경</span>
              <Badge variant="outline" className="text-xs">
                {AppConfig.deployment.environment}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>템플릿</span>
              <Badge variant="secondary" className="text-xs capitalize">
                {AppConfig.menu.template}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
