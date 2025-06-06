"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppConfig } from "@/config/app-config";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={AppConfig.features.ui.darkMode ? "system" : "light"}
      enableSystem={AppConfig.features.ui.darkMode}
      disableTransitionOnChange={!AppConfig.features.ui.animations}
      storageKey={`${AppConfig.app.shortName.toLowerCase()}-theme`}
    >
      {children}
    </NextThemesProvider>
  );
}
