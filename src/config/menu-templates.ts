import {
  LayoutDashboard,
  Users,
  UserPlus,
  MessageSquare,
  Calendar,
  HelpCircle,
  BarChart3,
  Settings,
  CreditCard,
  FileText,
  TrendingUp,
  ShoppingCart,
  Package,
  BookOpen,
  Shield,
  Home,
  Mail,
  Bell,
  Search,
  Database,
  Key,
  Globe,
  Monitor,
  Smartphone,
  Cloud,
  Zap,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
  id: string;
  title: string;
  icon: LucideIcon;
  href?: string;
  badge?: string | number;
  children?: MenuItem[];
  // 🎯 스타터킷 확장 기능
  permissions?: string[];
  enabled?: boolean;
  template?: string;
  description?: string;
  isNew?: boolean;
  isBeta?: boolean;
}

// 🏗️ 메뉴 템플릿 타입
export type MenuTemplate = 'crm' | 'ecommerce' | 'blog' | 'admin' | 'saas' | 'custom';

// 🎯 Admin 메뉴 템플릿 (기본)
export const adminMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    title: "대시보드",
    icon: LayoutDashboard,
    href: "/dashboard",
    description: "시스템 전체 현황을 확인하세요",
  },
  {
    id: "users",
    title: "사용자 관리",
    icon: Users,
    children: [
      {
        id: "user-list",
        title: "사용자 목록",
        icon: Users,
        href: "/users",
        description: "등록된 사용자들을 관리하세요",
      },
      {
        id: "user-roles",
        title: "권한 관리",
        icon: Shield,
        href: "/users/roles",
        description: "사용자 권한 및 역할을 설정하세요",
      },
      {
        id: "user-add",
        title: "사용자 추가",
        icon: UserPlus,
        href: "/users/add",
        description: "새로운 사용자를 등록하세요",
      },
    ],
  },
  {
    id: "content",
    title: "콘텐츠 관리",
    icon: FileText,
    children: [
      {
        id: "pages",
        title: "페이지 관리",
        icon: FileText,
        href: "/content/pages",
      },
      {
        id: "media",
        title: "미디어 라이브러리",
        icon: Package,
        href: "/content/media",
      },
    ],
  },
  {
    id: "analytics",
    title: "분석 & 통계",
    icon: BarChart3,
    children: [
      {
        id: "overview",
        title: "전체 현황",
        icon: TrendingUp,
        href: "/analytics/overview",
      },
      {
        id: "traffic",
        title: "트래픽 분석",
        icon: Globe,
        href: "/analytics/traffic",
      },
      {
        id: "performance",
        title: "성능 모니터링",
        icon: Zap,
        href: "/analytics/performance",
        isNew: true,
      },
    ],
  },
  {
    id: "system",
    title: "시스템 관리",
    icon: Settings,
    children: [
      {
        id: "settings",
        title: "일반 설정",
        icon: Settings,
        href: "/system/settings",
      },
      {
        id: "database",
        title: "데이터베이스",
        icon: Database,
        href: "/system/database",
      },
      {
        id: "security",
        title: "보안 설정",
        icon: Key,
        href: "/system/security",
      },
      {
        id: "backup",
        title: "백업 관리",
        icon: Cloud,
        href: "/system/backup",
      },
    ],
  },
  {
    id: "notifications",
    title: "알림 센터",
    icon: Bell,
    href: "/notifications",
    badge: 3,
  },
  {
    id: "help",
    title: "도움말",
    icon: HelpCircle,
    href: "/help",
  },
];

// 🎯 CRM 메뉴 템플릿
export const crmMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    title: "대시보드",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "members",
    title: "회원관리",
    icon: Users,
    children: [
      {
        id: "member-list",
        title: "회원목록",
        icon: Users,
        href: "/members",
      },
      {
        id: "member-register",
        title: "회원등록",
        icon: UserPlus,
        href: "/members/add",
      },
      {
        id: "member-grade",
        title: "회원등급",
        icon: CreditCard,
        href: "/members/grades",
      },
    ],
  },
  {
    id: "consulting",
    title: "상담관리",
    icon: MessageSquare,
    children: [
      {
        id: "consulting-list",
        title: "상담목록",
        icon: MessageSquare,
        href: "/consulting",
      },
      {
        id: "consulting-schedule",
        title: "상담일정",
        icon: Calendar,
        href: "/consulting/schedule",
      },
    ],
  },
  {
    id: "reservation",
    title: "예약관리",
    icon: Calendar,
    children: [
      {
        id: "reservation-list",
        title: "예약목록",
        icon: Calendar,
        href: "/reservations",
      },
      {
        id: "reservation-calendar",
        title: "예약달력",
        icon: Calendar,
        href: "/reservations/calendar",
      },
    ],
  },
  {
    id: "analytics",
    title: "통계/분석",
    icon: BarChart3,
    children: [
      {
        id: "visit-stats",
        title: "방문통계",
        icon: TrendingUp,
        href: "/analytics/visits",
      },
      {
        id: "sales-stats",
        title: "매출통계",
        icon: BarChart3,
        href: "/analytics/sales",
      },
      {
        id: "member-stats",
        title: "회원통계",
        icon: Users,
        href: "/analytics/members",
      },
    ],
  },
  {
    id: "reports",
    title: "리포트",
    icon: FileText,
    children: [
      {
        id: "daily-report",
        title: "일일리포트",
        icon: FileText,
        href: "/reports/daily",
      },
      {
        id: "monthly-report",
        title: "월간리포트",
        icon: FileText,
        href: "/reports/monthly",
      },
    ],
  },
  {
    id: "settings",
    title: "설정",
    icon: Settings,
    children: [
      {
        id: "system-settings",
        title: "시스템설정",
        icon: Settings,
        href: "/settings/system",
      },
      {
        id: "user-settings",
        title: "사용자설정",
        icon: Users,
        href: "/settings/users",
      },
    ],
  },
];

// 🛒 E-commerce 메뉴 템플릿
export const ecommerceMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    title: "대시보드",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "products",
    title: "상품관리",
    icon: Package,
    children: [
      {
        id: "product-list",
        title: "상품목록",
        icon: Package,
        href: "/products",
      },
      {
        id: "product-add",
        title: "상품등록",
        icon: UserPlus,
        href: "/products/add",
      },
      {
        id: "categories",
        title: "카테고리",
        icon: FileText,
        href: "/products/categories",
      },
      {
        id: "inventory",
        title: "재고관리",
        icon: Database,
        href: "/products/inventory",
        isNew: true,
      },
    ],
  },
  {
    id: "orders",
    title: "주문관리",
    icon: ShoppingCart,
    children: [
      {
        id: "order-list",
        title: "주문목록",
        icon: ShoppingCart,
        href: "/orders",
      },
      {
        id: "order-status",
        title: "주문상태",
        icon: TrendingUp,
        href: "/orders/status",
      },
      {
        id: "shipping",
        title: "배송관리",
        icon: Package,
        href: "/orders/shipping",
      },
    ],
  },
  {
    id: "customers",
    title: "고객관리",
    icon: Users,
    href: "/customers",
  },
  {
    id: "marketing",
    title: "마케팅",
    icon: Mail,
    children: [
      {
        id: "campaigns",
        title: "캠페인",
        icon: Mail,
        href: "/marketing/campaigns",
      },
      {
        id: "coupons",
        title: "쿠폰/할인",
        icon: CreditCard,
        href: "/marketing/coupons",
      },
    ],
  },
  {
    id: "analytics",
    title: "통계",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    id: "settings",
    title: "설정",
    icon: Settings,
    href: "/settings",
  },
];

// 📝 Blog 메뉴 템플릿
export const blogMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    title: "대시보드",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "posts",
    title: "포스트",
    icon: BookOpen,
    children: [
      {
        id: "post-list",
        title: "포스트 목록",
        icon: BookOpen,
        href: "/posts",
      },
      {
        id: "post-write",
        title: "포스트 작성",
        icon: UserPlus,
        href: "/posts/write",
      },
      {
        id: "drafts",
        title: "임시저장",
        icon: FileText,
        href: "/posts/drafts",
        badge: 5,
      },
    ],
  },
  {
    id: "categories",
    title: "카테고리",
    icon: FileText,
    href: "/categories",
  },
  {
    id: "comments",
    title: "댓글관리",
    icon: MessageSquare,
    href: "/comments",
    badge: "new",
  },
  {
    id: "media",
    title: "미디어",
    icon: Package,
    href: "/media",
  },
  {
    id: "seo",
    title: "SEO 관리",
    icon: Search,
    href: "/seo",
    isBeta: true,
  },
  {
    id: "analytics",
    title: "통계",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    id: "settings",
    title: "설정",
    icon: Settings,
    href: "/settings",
  },
];

// 🚀 SaaS 메뉴 템플릿
export const saasMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    title: "대시보드",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "workspace",
    title: "워크스페이스",
    icon: Monitor,
    children: [
      {
        id: "projects",
        title: "프로젝트",
        icon: FileText,
        href: "/workspace/projects",
      },
      {
        id: "team",
        title: "팀 관리",
        icon: Users,
        href: "/workspace/team",
      },
      {
        id: "integrations",
        title: "연동 서비스",
        icon: Zap,
        href: "/workspace/integrations",
      },
    ],
  },
  {
    id: "billing",
    title: "결제/구독",
    icon: CreditCard,
    children: [
      {
        id: "subscription",
        title: "구독 관리",
        icon: CreditCard,
        href: "/billing/subscription",
      },
      {
        id: "invoices",
        title: "청구서",
        icon: FileText,
        href: "/billing/invoices",
      },
      {
        id: "usage",
        title: "사용량",
        icon: BarChart3,
        href: "/billing/usage",
      },
    ],
  },
  {
    id: "api",
    title: "API & 개발",
    icon: Globe,
    children: [
      {
        id: "api-keys",
        title: "API 키",
        icon: Key,
        href: "/api/keys",
      },
      {
        id: "webhooks",
        title: "웹훅",
        icon: Zap,
        href: "/api/webhooks",
      },
      {
        id: "docs",
        title: "API 문서",
        icon: BookOpen,
        href: "/api/docs",
      },
    ],
  },
  {
    id: "analytics",
    title: "분석",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    id: "settings",
    title: "설정",
    icon: Settings,
    href: "/settings",
  },
];

// 🚀 메뉴 템플릿 매핑
export const menuTemplates: Record<MenuTemplate, MenuItem[]> = {
  admin: adminMenuItems,
  crm: crmMenuItems,
  ecommerce: ecommerceMenuItems,
  blog: blogMenuItems,
  saas: saasMenuItems,
  custom: adminMenuItems, // 기본값
};

// 🔧 메뉴 유틸리티 함수들

// 메뉴 템플릿 선택
export function getMenuByTemplate(template: MenuTemplate): MenuItem[] {
  return menuTemplates[template] || adminMenuItems;
}

// 권한 기반 메뉴 필터링
export function filterMenuByPermissions(
  menu: MenuItem[], 
  userPermissions: string[]
): MenuItem[] {
  return menu.filter(item => {
    if (item.permissions && item.permissions.length > 0) {
      return item.permissions.some(permission => userPermissions.includes(permission));
    }
    return true;
  }).map(item => ({
    ...item,
    children: item.children ? filterMenuByPermissions(item.children, userPermissions) : undefined
  }));
}

// 활성화된 메뉴만 필터링
export function filterEnabledMenuItems(menu: MenuItem[]): MenuItem[] {
  return menu.filter(item => item.enabled !== false).map(item => ({
    ...item,
    children: item.children ? filterEnabledMenuItems(item.children) : undefined
  }));
}

// 메뉴 검색
export function searchMenuItems(menu: MenuItem[], query: string): MenuItem[] {
  const lowerQuery = query.toLowerCase();
  
  return menu.filter(item => {
    // 제목이나 설명에서 검색
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const descMatch = item.description?.toLowerCase().includes(lowerQuery);
    
    // 자식 메뉴에서도 검색
    const childMatch = item.children?.some(child => 
      child.title.toLowerCase().includes(lowerQuery) ||
      child.description?.toLowerCase().includes(lowerQuery)
    );
    
    return titleMatch || descMatch || childMatch;
  });
}

// 메뉴 깊이 계산
export function getMenuDepth(menu: MenuItem[]): number {
  let maxDepth = 0;
  
  function traverse(items: MenuItem[], depth: number) {
    maxDepth = Math.max(maxDepth, depth);
    items.forEach(item => {
      if (item.children) {
        traverse(item.children, depth + 1);
      }
    });
  }
  
  traverse(menu, 1);
  return maxDepth;
} 