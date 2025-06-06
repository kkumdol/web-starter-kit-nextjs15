# 🚀 Web Starter Kit - 확장 가능한 Next.js 15 스타터킷

> **빠른 시작을 위한 견고한 기반 + 필요에 따른 점진적 확장**

## 📋 **킷 개요**

이 스타터킷은 **최소한의 핵심 기능만 포함**하여 빠른 시작이 가능하며, 프로젝트 요구사항에 따라 **모듈 단위로 기능을 추가**할 수 있습니다.

### **🎯 설계 철학**
- ✅ **빠른 시작**: 바로 개발을 시작할 수 있는 견고한 기반
- ✅ **점진적 확장**: 필요한 기능만 선택해서 추가
- ✅ **표준 준수**: 업계 표준 라이브러리와 패턴 사용
- ✅ **타입 안전성**: 전체 프로젝트에 TypeScript 적용

---

## 🏗️ **현재 포함된 핵심 기능**

### **Core Framework**
| 기능 | 버전 | 설명 |
|------|------|------|
| Next.js | 15.3.3 | React 기반 풀스택 프레임워크 |
| React | 19.1.0 | 최신 React 19 기능 지원 |
| TypeScript | 5.x | 전체 프로젝트 타입 안전성 |
| Turbopack | ✅ | 빠른 개발 서버 |

### **Styling & UI**
| 기능 | 라이브러리 | 설명 |
|------|-----------|------|
| CSS Framework | Tailwind CSS 3.4.1 | 유틸리티 우선 CSS |
| UI Components | shadcn/ui | 11개 기본 컴포넌트 |
| Icons | Lucide React | 일관된 아이콘 시스템 |
| Dark Mode | next-themes | 완벽한 다크모드 지원 |

### **Layout & Navigation**
| 기능 | 상태 | 설명 |
|------|------|------|
| 반응형 사이드바 | ✅ | 접을 수 있는 네비게이션 |
| 헤더 시스템 | ✅ | 검색, 알림, 사용자 메뉴 |
| 동적 메뉴 | ✅ | 템플릿 기반 메뉴 구성 |
| 테마 토글 | ✅ | 라이트/다크 모드 전환 |

### **포함된 UI 컴포넌트**
```typescript
// 즉시 사용 가능한 11개 컴포넌트
- Button          // 다양한 버튼 스타일
- Card            // 콘텐츠 카드
- Dialog          // 모달/다이얼로그
- Dropdown Menu   // 드롭다운 메뉴
- Input           // 입력 필드
- Label           // 폼 라벨
- Badge           // 상태 배지
- Progress        // 진행률 표시
- Switch          // 토글 스위치
- Toast           // 알림 메시지
- Toaster         // 토스트 컨테이너
```

### **개발 경험**
| 기능 | 상태 | 설명 |
|------|------|------|
| Hot Reload | ✅ | Turbopack으로 빠른 리로드 |
| ESLint | ✅ | 코드 품질 검사 |
| Git 설정 | ✅ | .gitignore 포함 |
| 환경변수 | ✅ | .env 지원 |

---

## 🧩 **확장 가능한 모듈들**

### **🔐 Authentication Module**
**추가 시기:** 사용자 로그인이 필요한 시점
**예상 시간:** 4-6시간

```bash
# 설치 명령
npm install next-auth @auth/prisma-adapter
npm install bcryptjs @types/bcryptjs
```

**포함 기능:**
- ✅ 이메일/비밀번호 로그인
- ✅ 소셜 로그인 (Google, GitHub)
- ✅ JWT 토큰 관리
- ✅ 세션 관리
- ✅ 비밀번호 암호화
- ✅ 권한 기반 라우팅

**사용 케이스:**
- SaaS 애플리케이션
- 회원제 사이트
- 관리자 대시보드

### **📝 Form & Validation Module**
**추가 시기:** 복잡한 폼이 필요한 시점
**예상 시간:** 3-4시간

```bash
# 설치 명령
npm install react-hook-form @hookform/resolvers zod
npm install react-dropzone # 파일 업로드 필요시
```

**포함 기능:**
- ✅ 폼 상태 관리
- ✅ 실시간 검증
- ✅ 스키마 기반 검증
- ✅ 파일 업로드
- ✅ 에러 처리

**사용 케이스:**
- 사용자 등록 폼
- 설정 페이지
- 데이터 입력 폼

### **🗄️ Database Module**
**추가 시기:** 데이터 저장이 필요한 시점
**예상 시간:** 4-5시간

```bash
# 설치 명령 (PostgreSQL 예시)
npm install prisma @prisma/client
npm install @prisma/adapter-neon # Neon DB 사용시
```

**포함 기능:**
- ✅ Prisma ORM
- ✅ 데이터베이스 마이그레이션
- ✅ 타입 안전한 쿼리
- ✅ 시드 데이터
- ✅ 관계형 데이터 모델

**지원 데이터베이스:**
- PostgreSQL (추천)
- MySQL
- SQLite
- Neon, Supabase, PlanetScale

### **🌐 State Management Module**
**추가 시기:** 복잡한 상태 관리가 필요한 시점
**예상 시간:** 3-4시간

```bash
# 설치 명령
npm install zustand
npm install @tanstack/react-query
```

**포함 기능:**
- ✅ 전역 상태 관리 (Zustand)
- ✅ 서버 상태 캐싱 (TanStack Query)
- ✅ 낙관적 업데이트
- ✅ 에러/로딩 상태
- ✅ 오프라인 지원

**사용 케이스:**
- 실시간 데이터
- 복잡한 UI 상태
- API 캐싱

### **📊 Advanced UI Module**
**추가 시기:** 고급 UI 컴포넌트가 필요한 시점
**예상 시간:** 6-8시간

```bash
# 설치 명령
npm install @tanstack/react-table
npm install recharts
npm install react-day-picker
npm install @dnd-kit/core @dnd-kit/sortable
```

**포함 기능:**
- ✅ 데이터 테이블 (정렬, 필터, 페이지네이션)
- ✅ 차트/그래프 (막대, 선, 파이 차트)
- ✅ 날짜 선택기
- ✅ 드래그 앤 드롭
- ✅ 이미지 갤러리
- ✅ 파일 업로더

**사용 케이스:**
- 대시보드
- 데이터 시각화
- 콘텐츠 관리

### **💳 Payment Module**
**추가 시기:** 결제 기능이 필요한 시점
**예상 시간:** 8-10시간

```bash
# 설치 명령
npm install stripe @stripe/stripe-js
npm install @stripe/react-stripe-js
```

**포함 기능:**
- ✅ Stripe 결제 통합
- ✅ 구독 관리
- ✅ 웹훅 처리
- ✅ 결제 이력
- ✅ 영수증 생성

**사용 케이스:**
- E-commerce
- SaaS 구독
- 디지털 상품 판매

### **📧 Communication Module**
**추가 시기:** 이메일/알림이 필요한 시점
**예상 시간:** 4-5시간

```bash
# 설치 명령
npm install resend react-email
npm install @react-email/components
```

**포함 기능:**
- ✅ 이메일 전송 (Resend)
- ✅ 이메일 템플릿
- ✅ 푸시 알림
- ✅ 실시간 알림

**사용 케이스:**
- 사용자 알림
- 마케팅 이메일
- 트랜잭셔널 이메일

### **🔍 Search & Analytics Module**
**추가 시기:** 검색/분석이 필요한 시점
**예상 시간:** 5-6시간

```bash
# 설치 명령
npm install @algolia/client-search algoliasearch
npm install @vercel/analytics
```

**포함 기능:**
- ✅ 전체 텍스트 검색
- ✅ 실시간 검색
- ✅ 웹 분석
- ✅ 사용자 행동 추적

**사용 케이스:**
- 콘텐츠 검색
- 제품 검색
- 사용자 분석

### **🛠️ DevOps Module**
**추가 시기:** 배포 자동화가 필요한 시점
**예상 시간:** 6-8시간

```bash
# 포함 파일들
- Dockerfile
- docker-compose.yml
- .github/workflows/
- vercel.json
```

**포함 기능:**
- ✅ Docker 설정
- ✅ CI/CD 파이프라인
- ✅ 환경별 배포
- ✅ 로깅 및 모니터링
- ✅ 성능 최적화

**지원 플랫폼:**
- Vercel (추천)
- Netlify
- AWS
- DigitalOcean

---

## 🎯 **프로젝트 타입별 추천 조합**

### **📱 SaaS 애플리케이션**
```
Core + Authentication + Database + State Management + Payment
예상 추가 시간: 15-20시간
```

### **🛒 E-commerce 사이트**
```
Core + Authentication + Database + Advanced UI + Payment + Search
예상 추가 시간: 25-30시간
```

### **📊 관리자 대시보드**
```
Core + Authentication + Database + Advanced UI + Analytics
예상 추가 시간: 20-25시간
```

### **📝 블로그/CMS**
```
Core + Authentication + Database + Form Validation + Communication
예상 추가 시간: 12-15시간
```

### **🎮 간단한 웹앱**
```
Core + Form Validation + State Management
예상 추가 시간: 6-8시간
```

---

## 🚀 **시작하기**

### **1. 스타터킷 복사**
```bash
git clone <repository-url>
cd web-starter-kit
npm install
npm run dev
```

### **2. 프로젝트 설정**
```typescript
// src/config/app-config.ts 수정
export const AppConfig = {
  app: {
    name: "Your App Name",
    description: "Your app description",
  },
  // ... 기타 설정
}
```

### **3. 필요한 모듈 추가**
원하는 모듈의 설치 가이드를 따라 점진적으로 기능 추가

### **4. 배포**
```bash
npm run build
# Vercel, Netlify 등으로 배포
```

---

## 📚 **모듈별 상세 가이드**

각 모듈에 대한 자세한 설치 및 사용 가이드는 별도 문서에서 제공됩니다:

- [Authentication Module 가이드](./docs/auth-module.md)
- [Database Module 가이드](./docs/database-module.md)
- [State Management 가이드](./docs/state-module.md)
- [Advanced UI 가이드](./docs/ui-module.md)
- [Payment Module 가이드](./docs/payment-module.md)

---

## 🤝 **기여하기**

새로운 모듈을 추가하거나 기존 기능을 개선하고 싶다면:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add documentation
5. Submit a pull request

---

## 📄 **라이선스**

MIT License - 자유롭게 사용, 수정, 배포 가능

---

**이 스타터킷으로 멋진 웹 애플리케이션을 만들어보세요! 🚀** 