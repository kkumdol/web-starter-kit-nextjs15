// 🚀 웹 스타터킷 메인 설정 파일
export const AppConfig = {
  // 📱 앱 기본 정보
  app: {
    name: "웹 스타터킷",
    shortName: "WSK",
    description: "Next.js 14 풀스택 웹 스타터킷",
    version: "1.0.0",
    author: "Your Name",
    url: "https://your-domain.com",
    email: "support@your-domain.com",
  },

  // 🎨 브랜딩 & 테마
  branding: {
    logo: {
      text: "WebKit",
      icon: "🚀", // 이모지 또는 아이콘 컴포넌트
      url: "/", // 로고 클릭 시 이동할 URL
    },
    colors: {
      primary: "blue",
      secondary: "slate",
      accent: "violet",
    },
    // 📱 다양한 브랜딩 템플릿
    theme: "modern", // modern | minimal | corporate | creative
  },

  // 🔧 기능 토글 (On/Off)
  features: {
    // 🔐 인증 관련
    auth: {
      enabled: true,
      providers: ["email", "google", "github"], // email, google, github, facebook
      registration: true,
      emailVerification: true,
      passwordReset: true,
    },
    
    // 🎨 UI/UX 기능
    ui: {
      darkMode: true,
      animations: true,
      sound: false,
      breadcrumbs: true,
      search: true,
      notifications: true,
      help: true,
    },
    
    // 🌐 다국어
    i18n: {
      enabled: false,
      languages: ["ko", "en", "ja"],
      defaultLanguage: "ko",
    },
    
    // 📊 분석 & 모니터링
    analytics: {
      enabled: true,
      google: false,
      hotjar: false,
      customEvents: true,
    },
    
    // 💳 결제 시스템
    payment: {
      enabled: false,
      providers: ["stripe", "paypal"],
      currency: "KRW",
    },
    
    // 📧 이메일 시스템
    email: {
      enabled: false,
      provider: "nodemailer", // nodemailer, sendgrid, resend
      templates: true,
    },
    
    // 📱 API 기능
    api: {
      rest: true,
      graphql: false,
      rateLimit: true,
      cors: true,
      swagger: true,
      phpCompatibility: false, // PHP API 호환성
    },
  },

  // 🗃️ 데이터베이스 설정
  database: {
    provider: "postgresql", // mysql, postgresql, sqlite, mongodb
    orm: "prisma", // prisma, drizzle, mongoose
    enableMigrations: true,
    enableSeeding: true,
    enableBackup: true,
  },

  // 📁 파일 & 미디어
  media: {
    upload: {
      enabled: true,
      maxSize: "10MB",
      allowedTypes: ["image", "video", "document"],
      storage: "local", // local, s3, cloudinary
    },
    cdn: {
      enabled: false,
      provider: "cloudflare",
    },
  },

  // 🚀 배포 & 환경
  deployment: {
    environment: "development" as EnvironmentType,
    provider: "vercel" as const,
    domain: "localhost:3000",
    ssl: false,
    cdn: false,
  },

  // 🏗️ 메뉴 템플릿 설정
  menu: {
    template: "admin" as MenuTemplate, // crm, ecommerce, blog, admin, saas
    customization: {
      allowCollapse: true,
      showIcons: true,
      showBadges: true,
      grouping: true,
    },
  },

  // 🔒 보안 설정
  security: {
    csrf: true,
    rateLimit: {
      enabled: true,
      requests: 100,
      window: "15m",
    },
    encryption: true,
    headers: {
      hsts: true,
      xframe: "DENY",
      contentType: true,
    },
  },
} as const;

// 🏗️ 타입 정의
export type AppConfigType = typeof AppConfig;
export type MenuTemplate = 'crm' | 'ecommerce' | 'blog' | 'admin' | 'saas' | 'custom';
export type ThemeType = 'modern' | 'minimal' | 'corporate' | 'creative';
export type EnvironmentType = 'development' | 'staging' | 'production';

// 🔧 환경별 설정 오버라이드
export const getEnvironmentConfig = (env: EnvironmentType) => {
  switch (env) {
    case 'production':
      return {
        deployment: {
          environment: 'production' as const,
          provider: 'vercel' as const,
          domain: "your-domain.com",
          ssl: true,
          cdn: true,
        },
        security: {
          csrf: true,
          rateLimit: {
            enabled: true,
            requests: 60,
            window: "15m",
          },
          encryption: true,
          headers: {
            hsts: true,
            xframe: "DENY" as const,
            contentType: true,
          },
        },
      };
    case 'staging':
      return {
        deployment: {
          environment: 'staging' as const,
          provider: 'vercel' as const,
          domain: "staging.your-domain.com",
          ssl: true,
          cdn: false,
        },
      };
    default:
      return {};
  }
};

// 🎯 설정 유틸리티 함수들
export const isFeatureEnabled = (feature: string): boolean => {
  const keys = feature.split('.');
  let current: any = AppConfig.features;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return false;
    }
  }
  
  return Boolean(current);
};

// 예시 사용법:
// isFeatureEnabled('auth.enabled') // true
// isFeatureEnabled('payment.enabled') // false 