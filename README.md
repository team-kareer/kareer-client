<h1> 🐦 Kareer </h1>

${\textsf{\color{blue}한국 커리어 여정, Kareer와 함께 명확하게}}$

```
한국에서 커리어를 시작/전환하는 외국인 유학생을 위한 커리어·비자 가이드
Korea + Career = Kareer, 나만의 커리어 여정을 정리하다

ㄴ 전공/언어/비자 상태 기반으로 지원 가능한 직무,비자 옵션을 자동 제시
ㄴ 개인 맞춤 타임라인과 To-Do로 준비 단계를 한눈에 정리
```

## 👨🏻‍💻 팀원 소개

|                                                         장정훈                                                          |                                                         이훈진                                                          |                                                         김윤지                                                          |                                                         손하은                                                          |
| :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img width="200px" alt="Image" src="https://github.com/user-attachments/assets/58a6798a-1ba3-45d0-96ad-8bfa94bc84cd" /> | <img width="200px" alt="Image" src="https://github.com/user-attachments/assets/93c3d6bb-4fdc-469b-b101-6333d8e1b424" /> | <img width="200px" alt="Image" src="https://github.com/user-attachments/assets/f0188770-1a6f-4f9d-a9ce-919af523344c" /> | <img width="200px" alt="Image" src="https://github.com/user-attachments/assets/74307efc-8cb5-45e3-9ddd-9a69486e1cef" /> |
|                                     [@jeonghoon11](https://github.com/jeonghoon11)                                      |                                      [@huniversal](https://github.com/huniversal)                                       |                                    [@yooncandooit](https://github.com/yooncandooit)                                     |                                        [@sonnnnhe](https://github.com/sonnnnhe)                                         |

<br />

## 🛠 기술 스택

## [Kareer 팀 기술 스택 선정과정 바로가기](https://github.com/team-kareer/kareer-client/discussions/20)

| 역할                 | 종류                                                                                                                                                                                                                | 선정 이유                                                                 |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| UI Library           | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)                                                                                                                 | 컴포넌트 기반 개발로 유지보수성과 재사용성을 높이기 위해 선정             |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)                                                                                                   | 코드 안정성과 생산성을 동시에 확보하기 위해 사용                          |
| Build Tool           | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)                                                                                                                     | 빠른 번들링과 HMR로 개발 속도를 높이기 위해 사용                          |
| Styling              | ![vanilla-extract](https://img.shields.io/badge/vanilla--extract-F27B9A?style=for-the-badge&logo=vanillaextract&logoColor=white)                                                                                    | Zero-runtime과 타입 안전 스타일링으로 일관성을 확보하기 위함              |
| Data Fetching        | ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=tanstack&logoColor=white) ![Ky](https://img.shields.io/badge/Ky-111111?style=for-the-badge&logo=ky&logoColor=white) | 캐싱/동기화와 경량 HTTP 클라이언트로 안정적인 데이터 흐름을 위해 선정     |
| Error Tracking       | ![Sentry](https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white)                                                                                                               | 운영 환경 에러를 빠르게 탐지하고 원인을 추적하기 위해 도입                |
| Build System         | ![Turborepo](https://img.shields.io/badge/Turborepo-000000?style=for-the-badge&logo=turborepo&logoColor=white)                                                                                                      | 모노레포에서 캐싱/병렬 빌드로 생산성을 높이기 위해 사용                   |
| Package Manager      | ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)                                                                                                                     | 워크스페이스 의존성 관리와 설치 속도를 개선하기 위해 사용                 |
| Version Control      | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)                  | 협업과 코드 리뷰 흐름을 표준화하기 위해 사용                              |
| Git Hook             | ![Lefthook](https://img.shields.io/badge/Lefthook-FF1E56?style=for-the-badge&logo=lefthook&logoColor=white)                                                                                                         | 커밋 전 자동 검증으로 품질 기준을 지키기 위해 도입                        |
| Deployment           | ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)                                                                                                   | 해외 사용자 대응을 위해 글로벌 엣지 서버 기반 전송이 가능한 플랫폼을 선택 |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)   | 코드 스타일과 품질 기준을 일관되게 유지하기 위해 사용                     |

<br />

## 📏 Convention

### 📭 Git Convention

<details>
<summary>🌿 Git Flow</summary>

- **main branch**: 항상 배포 가능한 안정 상태 유지
- **develop branch**: 통합 브랜치, 모든 기능 브랜치는 여기서 분기/병합
- **feature branch**: `develop`에서 분기 → 작업 완료 후 `develop`으로 PR
- **배포**: `develop`이 안정화되면 `main`으로 병합 후 배포

</details>

<details>
<summary>🗂️ 브랜치 네이밍</summary>

- `feat/chip-component/#43`
- 개발/단위/이슈번호 기준으로 일관되게 작성합니다.

</details>

<details>
<summary>📝 PR 명 예시</summary>

- `[Feat] 로그인 기능추가`
- `Feat(web):` apps/web 관련 변경
- `Feat(kds):` packages/kds-ui 관련 변경

</details>

<details>
<summary>✅ Commit 예시</summary>

- `feat: 비즈니스 로직 추가`
- `fix: 입력값 검증 수정`
- `chore: 의존성 업데이트`

</details>

<details>
<summary>🏷️ GitHub 라벨 사용</summary>

| 라벨명   | 설명                                                   |
| -------- | ------------------------------------------------------ |
| chore    | 유지/관리 작업 (ESLint, Prettier, package 업데이트 등) |
| deploy   | 배포 작업                                              |
| docs     | 문서화 작업                                            |
| feature  | 새로운 기능 개발                                       |
| fix      | 문제 해결 작업                                         |
| refactor | 코드 리팩토링 (기능 변화 없음)                         |
| style    | 디자인 관련 작업                                       |
| test     | 테스트 코드 작성 및 수정                               |

</details>

### 💻 Coding Convention

<details>
<summary>✅ 컴포넌트</summary>

- Props interface는 `Props` 접미사 사용 (`CardProps`, `ChipProps`)
- 의미 없는 `<div>` 대신 최상단은 `Fragment` (`<>...</>`) 사용
- children이 없으면 `<Component />` 형태의 self-closing 사용
- 디자인 시스템 컴포넌트는 Headless UI 원칙(비즈니스 로직 최소화)
- 도메인 의존 컴포넌트는 디자인 시스템이 아닌 `apps/web` 내부에 구현

```tsx
interface InfoTextProps {
  name: string;
}

const InfoText = ({ name }: InfoTextProps) => {
  return (
    <>
      <h1>Welcome, {name}!</h1>
      <p>This is our new page, we're glad you are here!</p>
    </>
  );
};
```

</details>

<details>
<summary>📁 폴더명</summary>

- 소문자로 시작
- 복수형 유지 (`s` 붙이기)
- 케밥 케이스 사용
- 예시: `shared/inputs`, `widgets`, `user-pages`

</details>

<details>
<summary>📝 타입</summary>

- 기본은 `interface` 사용
- 유니언/튜플/리터럴 타입처럼 필요한 경우에만 `type` 사용

```tsx
interface UserProps {
  name: string;
  age: number;
}

type Status = 'loading' | 'success' | 'error';
type Position = [number, number];
```

</details>

<details>
<summary>🔑 변수</summary>

- `var` 금지
- 선언 순서: `const` → `let`
- 문자열 조합은 템플릿 리터럴 사용
- 상수는 영문 대문자 스네이크 케이스 (`API_KEY`)
- 변수명은 의미가 명확해야 함 (길어도 OK)
- boolean은 `is` 접두사 사용 (`isActive`)

> 💡 Key 사용 규칙
>
> - ❌ 랜덤 값 사용 금지
> - ✅ 정적 리스트는 `index` 사용 가능
> - ✅ 동적 리스트는 고유 `id` 사용
> - ✅ 상태가 없는 결과 리스트(페이지네이션/검색)는 `index` 사용 가능

</details>

<details>
<summary>⚙️ 함수</summary>

- 함수명은 동사+명사 형태로 명확하게
- 접두사 예시: `get`, `create`, `check`, `convert`, `add`, `minus`, `filter`
- 이벤트 핸들러는 `handle` 접두사 필수
  - 예: `handleResetClick`, `handleSubmitClick`
- 유틸 함수는 반환값 기준 네이밍 (`hasEmail`)
- 2개 이상 도메인에서 사용 시 `utils`로 이동
- 화살표 함수 사용

</details>

<details>
<summary>🧩 배열/구조</summary>

- 배열 복사 시 스프레드 연산자 사용 (`const copies = [...originals]`)
- `for`보다는 `forEach`/`map` 사용
- 구조 분해 할당 적극 활용

```tsx
interface ScheduleCardProps {
  title: string;
  deadline: string;
}

interface UserProfileProps {
  name: string;
  major: string;
}

const ScheduleCard = ({ title, deadline }: ScheduleCardProps) => {
  // ...
};

function getUserProfileLabel({ name, major }: UserProfileProps) {
  // ...
}
```

</details>

<details>
<summary>🎨 스타일</summary>

- 시맨틱 태그 적극 활용 (MDN 문서 참고)
- UI 컴포넌트에 불필요한 `<div>` 사용 금지
- Wrapper가 필요하면 `Container`로 네이밍

</details>

<details>
<summary>⚛️ React</summary>

- 고차 컴포넌트는 `with` 접두사 사용
- Context는 `Context` 접미사 사용
- React 타입은 개별 import 사용

```tsx
import { ReactNode } from 'react';
```

- React Compiler 사용 전제, 불필요한 수동 메모이제이션(useMemo/useCallback) 남발 지양

</details>

### 📋 Ground Rule

<details>
<summary>🤝 협업 기본 원칙</summary>

- 질문 많이 하기, 모르는 것은 부끄러워하지 않기
- 둥글게 말하기, 존중/감사 표현하기
- 수용적인 태도로 피드백 주고받기
- 일정/리스크가 보이면 즉시 공유하기
- 내부적으로 의논 중인 이슈는 외부에 노출하지 않기

</details>

<details>
<summary>🔍 코드 리뷰 규칙</summary>

- 합숙 기간 동안은 당일 올라온 PR은 최대한 당일 리뷰 (늦어도 다음날)
- 코드 리뷰는 자는 시간 제외 3시간 이내로 마무리하기
- 근거 있는 리뷰 작성하기 (레퍼런스 첨부 권장)
- 둥글게 말하기, 공격적인 표현 지양
- PR 단위는 작게, "원기옥 PR" 지양

</details>

<details>
<summary>📝 PR/커밋 운영</summary>

- PR은 작게, 문서는 크게 (작성 시간도 개발 시간으로 인식)
- PR은 자세히 작성해 고민/결정 과정까지 공유
- 커밋은 작은 단위로 분리

</details>

## 📁 폴더 구조

```text
kareer-client/
├── apps/
│   ├── web/
│   │   ├── public/
│   │   └── src/              # FSD 구조
│   │       ├── app/
│   │       ├── pages/
│   │       ├── widgets/
│   │       ├── features/
│   │       ├── entities/
│   │       └── shared/
│   └── desktop/              # 추후 데스크톱 앱 개발 예정
├── packages/
│   ├── kds-ui/
│   │   └── src/
│   │       ├── components/
│   │       └── styles/
│   ├── icons/
│   │   └── src/
│   └── configs/
│       ├── eslint/
│       ├── prettier/
│       └── typescript/
└── pnpm-workspace.yaml       # catalog 기반 버전 관리
```
