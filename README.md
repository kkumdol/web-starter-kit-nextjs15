# 🚀 Web Starter Kit - Next.js 15

**견고한 기반 + 확장 가능한 모듈 방식의 현대적인 웹 애플리케이션 스타터킷**

빠른 시작을 위한 핵심 기능만 포함하고, 프로젝트 요구사항에 따라 점진적으로 기능을 추가할 수 있습니다.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-blue)

## ✨ 주요 특징

### 🎯 **견고한 기반 + 점진적 확장**
- **핵심 기능**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **즉시 사용**: 11개 UI 컴포넌트, 다크모드, 반응형 레이아웃
- **모듈 확장**: 인증, 데이터베이스, 결제 등 필요한 기능만 추가

### 🎨 **설정 기반 커스터마이징**
- **메뉴 템플릿**: Admin, CRM, E-commerce, Blog, SaaS
- **브랜딩 설정**: 앱 이름, 로고, 색상 테마
- **기능 토글**: 필요한 기능만 선택적 활성화

### 🔧 **모던 기술 스택**
- Next.js 15.3.3 + React 19.1.0
- TypeScript 완전 지원
- Tailwind CSS + shadcn/ui
- Turbopack 개발 서버
- 완벽한 다크모드
- 반응형 디자인

### ⚡ **최신 기능 지원**
- **React 19**: 최신 React 기능 (use API, Actions 등)
- **Turbopack**: 빠른 개발 서버 (Webpack 대비 10배 빠름)
- **타입 안전성**: 전체 프로젝트 TypeScript 적용

## 🚀 빠른 시작

### 📖 **가이드 문서**
- ⚡ **[빠른 시작 가이드](./QUICK_START.md)** - 5분 만에 시작하기
- 📚 **[전체 가이드](./STARTER_KIT_GUIDE.md)** - 모든 모듈과 기능 설명

### 설치

```bash
# 프로젝트 클론
git clone <repository-url>
cd web-starter-kit

# 의존성 설치
npm install

# 개발 서버 시작 (Turbopack 사용)
npm run dev --turbo
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 설정 변경

1. **메뉴 템플릿 변경**
```typescript
// src/config/app-config.ts
export const AppConfig = {
  menu: {
    template: "crm" as MenuTemplate, // admin, crm, ecommerce, blog, saas
  }
}
```

2. **브랜딩 설정**
```typescript
export const AppConfig = {
  app: {
    name: "내 애플리케이션",
    description: "애플리케이션 설명",
  },
  branding: {
    logo: {
      text: "MyApp",
      icon: "🚀",
    }
  }
}
```

3. **기능 활성화/비활성화**
```typescript
export const AppConfig = {
  features: {
    ui: {
      darkMode: true,
      search: true,
      notifications: true,
    },
    auth: {
      enabled: true,
      providers: ["email", "google", "github"],
    }
  }
}
```

## 📁 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
│   ├── dashboard/       # 대시보드 페이지
│   ├── users/          # 사용자 관리
│   └── system/         # 시스템 설정
├── components/         # 재사용 컴포넌트
│   ├── ui/            # shadcn/ui 컴포넌트
│   ├── sidebar.tsx    # 사이드바
│   ├── header.tsx     # 헤더
│   └── dashboard-layout.tsx
├── config/            # 설정 파일들
│   ├── app-config.ts  # 메인 설정
│   └── menu-templates.ts # 메뉴 템플릿
└── lib/              # 유틸리티 함수들
```

## 🎨 메뉴 템플릿

### Admin 템플릿 (기본)
- 대시보드
- 사용자 관리
- 콘텐츠 관리
- 분석 & 통계
- 시스템 관리

### CRM 템플릿
- 회원관리
- 상담관리
- 예약관리
- 통계/분석
- 리포트

### E-commerce 템플릿
- 상품관리
- 주문관리
- 고객관리
- 마케팅
- 통계

### Blog 템플릿
- 포스트 관리
- 카테고리
- 댓글관리
- SEO 관리
- 미디어

### SaaS 템플릿
- 워크스페이스
- 결제/구독
- API & 개발
- 분석
- 설정

## 🛠️ 커스터마이징

### 새로운 메뉴 템플릿 추가

1. `src/config/menu-templates.ts`에 새 템플릿 정의
2. 메뉴 아이템 구조 작성
3. 타입에 추가하여 TypeScript 지원

### 새로운 기능 추가

1. `src/config/app-config.ts`의 features에 추가
2. 컴포넌트에서 `isFeatureEnabled()` 사용
3. 조건부 렌더링 적용

### 테마 커스터마이징

- `src/app/globals.css`에서 CSS 변수 수정
- `tailwind.config.ts`에서 색상 체계 변경
- shadcn/ui 컴포넌트 스타일 오버라이드

## 🚀 배포

### Vercel 배포
```bash
npm run build
# Vercel에 배포
```

### Docker 배포
```bash
# Dockerfile 작성 후
docker build -t web-starter-kit .
docker run -p 3000:3000 web-starter-kit
```

## 📋 환경별 설정

### Development
```typescript
AppConfig.deployment.environment = "development"
```

### Production
```typescript
// 자동으로 SSL, CDN 등 프로덕션 최적화 적용
AppConfig.deployment.environment = "production"
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🆘 지원

문제가 있거나 질문이 있으시면:
- GitHub Issues 생성
- 이메일: support@your-domain.com

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
