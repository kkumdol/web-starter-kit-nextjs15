# ⚡ Quick Start Guide

> **5분 안에 웹 애플리케이션 시작하기**

## 🚀 **즉시 시작**

### **1. 프로젝트 설정**
```bash
# 1. 저장소 클론 또는 다운로드
git clone <this-repository>
cd web-starter-kit

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

### **2. 브라우저에서 확인**
- 🌐 **로컬 주소**: `http://localhost:3000`
- ✅ **다크모드**: 헤더 우측 상단 토글 버튼
- ✅ **반응형**: 모바일/태블릿/데스크톱 지원
- ✅ **메뉴**: 사이드바 접기/펼치기

## 🎨 **첫 번째 커스터마이징**

### **앱 이름 변경**
```typescript
// src/config/app-config.ts
export const AppConfig = {
  app: {
    name: "My Awesome App",        // ← 여기 수정
    description: "Next.js 15 App", // ← 여기 수정
  },
  // ...
}
```

### **메뉴 설정**
```typescript
// src/config/menu-templates.ts
// 기본 제공 템플릿 중 선택하거나 새로 만들기
export const menuItems = dashboardMenuItems; // 또는 다른 템플릿
```

### **색상 테마 변경**
```css
/* src/app/globals.css */
:root {
  --primary: 222.2 84% 4.9%;     /* ← 메인 색상 */
  --secondary: 210 40% 96%;      /* ← 보조 색상 */
  /* ... */
}
```

## 📦 **자주 사용하는 모듈 추가**

### **폼 검증 (추천)**
```bash
npm install react-hook-form @hookform/resolvers zod
```

### **인증 시스템**
```bash
npm install next-auth @auth/prisma-adapter bcryptjs
```

### **데이터베이스**
```bash
npm install prisma @prisma/client
```

### **상태 관리**
```bash
npm install zustand @tanstack/react-query
```

## 🔧 **개발 도구 설정**

### **Prettier 설정**
```bash
npm install --save-dev prettier
```

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### **추가 ESLint 규칙**
```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

## 🌟 **추천 워크플로우**

### **개발 단계별 접근**

**1단계: 기본 설정 (5분)**
- ✅ 앱 이름/설명 변경
- ✅ 기본 색상 조정
- ✅ 메뉴 구조 확인

**2단계: 첫 페이지 만들기 (15분)**
- ✅ 새 페이지 추가
- ✅ 기본 컴포넌트 사용
- ✅ 라우팅 테스트

**3단계: 필요 기능 추가 (프로젝트별)**
- 🔐 인증이 필요하면 → Authentication Module
- 📝 폼이 많으면 → Form Validation Module  
- 💾 데이터 저장하면 → Database Module

## 🎯 **프로젝트 타입별 빠른 설정**

### **📱 간단한 웹앱**
```bash
# Form + State Management만 추가
npm install react-hook-form zod zustand
```

### **📊 대시보드**
```bash
# Auth + Database + Charts 추가
npm install next-auth prisma @prisma/client recharts
```

### **🛒 E-commerce**
```bash
# 전체 패키지 추가
npm install next-auth prisma @prisma/client stripe recharts
```

## 📚 **더 자세한 가이드**

- 📖 **전체 가이드**: [STARTER_KIT_GUIDE.md](./STARTER_KIT_GUIDE.md)
- 🔧 **설정 가이드**: [docs/](./docs/) 폴더
- 🐛 **문제해결**: GitHub Issues

---

**이제 웹 애플리케이션 개발을 시작하세요! 🚀**

질문이 있으시면 GitHub Issues를 활용해주세요. 