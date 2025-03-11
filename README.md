# Next.js 15 & React 18 Boilerplate with FSD

Next.js 15와 Feature-Sliced Design 아키텍처를 기반으로 한 보일러플레이트 프로젝트입니다.

## Tech Stack

- **Framework:** Next.js 15.2.1
- **Language:** TypeScript
- **UI Library:** React 18.3
- **Architecture:** Feature-Sliced Design (FSD)
- **Styling:** Styled Components
- **State Management:** Zustand
- **Animation:** Framer Motion
- **Linting:** ESLint

## Project Structure

The project follows Feature-Sliced Design methodology with the following structure:

```
src/
├── app/                  # 애플리케이션 초기화 레이어
│   ├── providers/       # 전역 프로바이더 (Theme, Store 등)
│   └── layout.tsx       # 루트 레이아웃
│
├── entities/            # 비즈니스 엔티티 레이어
│   └── [entity]/       # 개별 비즈니스 엔티티 (User, Product 등)
│
├── features/            # 사용자 상호작용 레이어
│   └── [feature]/      # 개별 기능 구현
│
├── widgets/            # 복합 컴포넌트 레이어
│   ├── modal/         # 모달 관련 위젯
│   └── toast/         # 토스트 관련 위젯
│
└── shared/            # 재사용 가능한 인프라 레이어
    ├── api/          # API 통합 (API 클라이언트, 요청 함수 등)
    ├── config/       # 설정 (테마, 환경 변수 등)
    ├── constants/    # 전역 상수
    ├── lib/          # 유틸리티 함수 및 훅
    ├── store/        # 전역 상태 관리
    ├── styles/       # 전역 스타일
    └── ui/          # UI 컴포넌트
```

## 레이어 설명

### 📱 app

- 애플리케이션의 진입점
- 전역 프로바이더 및 설정
- 페이지 레이아웃 관리

### 🎯 entities

- 비즈니스 로직의 핵심 엔티티
- 도메인 모델 및 관련 로직
- 독립적인 비즈니스 객체

### ⚡ features

- 사용자 상호작용 기능
- 특정 비즈니스 요구사항 구현
- 하나 이상의 엔티티를 사용하는 기능

### 🎨 widgets

- 재사용 가능한 복합 컴포넌트
- 여러 기능이 조합된 UI 블록
- 독립적으로 동작 가능한 UI 단위

### 🔧 shared

- 프로젝트 전반에 걸쳐 재사용되는 코드
- 인프라 수준의 유틸리티
- UI 기본 컴포넌트

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm 9.0 or later

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Runs the development server with Turbopack
- `npm run build` - Creates a production build
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting

## Project Features

- 🚀 Next.js 15 with App Router
- 📝 TypeScript for type safety
- 🏗️ Feature-Sliced Design architecture
- 🔍 ESLint for code linting
- 🔄 Fast Refresh for quick iterations
- 🛠️ Turbopack for faster development

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
