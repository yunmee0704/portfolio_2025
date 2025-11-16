# 포트폴리오 프로젝트 기술 면접 대비 정리

본 문서는 현재 코드베이스를 기준으로 아키텍처, 컴포넌트 설계, 스타일 전략, 성능·접근성 고려, 확장성, 예상 질문/모범 답변을 면접 대응용으로 요약합니다.

## 1) 개요 · 스택
- 빌드/개발: Vite (ESM 기반, 빠른 HMR)
- UI 라이브러리: React
- 라우팅: React Router (`Routes`, `Route`, `Navigate`, `useLocation`)
- 스타일: SCSS + SCSS Modules
- 슬라이더: Swiper (`FreeMode`, `Navigation`, `Thumbs`)
- 에셋: 정적 이미지 import와 외부 URL 혼용

## 2) 라우팅 · 전역 상태
- 경로 구성은 `src/App.jsx`에서 정의:
  - `/Project1`, `/Project2`, `/Project3` 라우트 등록
  - 매칭 실패 시 홈으로 리다이렉트 (`<Navigate to="/" replace />`)
- 다크모드 토글: `useState`로 모드 저장, `useEffect`로 `document.body` 및 특정 요소에 `lightmode/darkmode` 클래스를 토글
  - 클래스 토글 → 스타일 계층을 유지하면서 테마 전환

## 3) 스타일 전략
- SCSS Modules로 컴포넌트 단위 클래스 스코프 보장 (`.module.scss`)
- 공통 변수는 `styles/variables.scss`에서 관리
- 페이지별 레이아웃은 `Project1.module.scss`의 공통 섹션 클래스(visual, content, cardbox)를 재사용

## 4) 레이아웃 컴포지션(Composition) 설계
- 공통 템플릿: `src/pages/components/ProjectTemplate.jsx`
  - 상단 비주얼(배너), 본문(children), 하단 프로젝트 카드 리스트를 한곳에서 구성
  - props:
    - `visual`: `VisualCard`로 전달할 `{ imageSrc, text }`
    - `projectCards`: 하단 카드 배열 데이터(없으면 `projectCardsCount`만큼 기본 카드)
    - `projectCardsCount`: 기본 카드 수
    - `children`: 페이지별 본문 컴포넌트(Text/Detail 등)
- 목적: 디자인은 통일, 콘텐츠만 변경되는 요구를 템플릿+데이터 주입 방식으로 해결

## 5) 데이터 주입형 컴포넌트
- `Project-card` (`src/pages/components/card/Project-card.jsx`)
  - 역할: 프로젝트 단위 카드(제목, 기간, 슬라이드, 설명)
  - props: `title`, `period`, `desc`(JSX 허용), `slides`(배열: `{ src, text? }`)
  - 내부에서 `Slide` 컴포넌트로 슬라이드 렌더링
- `Slide` (`src/pages/components/slide/Slide.jsx`)
  - 역할: 메인+썸네일 슬라이더
  - props: `slides` (미전달 시 기본 데모 슬라이드 배열 사용)
  - Swiper 모듈: `FreeMode`, `Navigation`, `Thumbs`
- `Text-card` (`src/pages/components/card/Text-card.jsx`)
  - props: `title`, `description`
- `Detail-card` (`src/pages/components/card/Detail-card.jsx`)
  - props: `href`, `title`, `text`
- `Visual-card` (`src/pages/components/card/Visual-card.jsx`)
  - props: `imageSrc`, `text`

## 6) 페이지별 구성 예시
- `Project1` (`src/pages/Project1/Project1.jsx`)
  - `ProjectTemplate`에 `visual` 전달, `children`으로 `TextCard` + 여러 `DetailCard` 합성
  - 하단 카드: 현재는 `projectCardsCount`로 기본 카드 4개 사용 (필요 시 `projectCards`로 데이터화)
- `Project2`, `Project3`
  - `projectCards` 배열을 통해 카드별 `title/period/desc/slides`를 데이터로 주입
  - 레이아웃/스타일은 템플릿에서 통일, 내용만 다르게 표시

## 7) 성능 · 접근성 고려
- 이미지:
  - 실제 배포 시 WebP/AVIF 등 경량 포맷 고려, 사이즈 최적화
  - `loading="lazy"`(필요 시 커스텀)와 썸네일/프리로드 전략
- 코드 스플리팅:
  - 라우트 단위 `React.lazy`/`Suspense` 적용 여지로 초기 번들 감소 가능
- 다크모드:
  - 현재 클래스 토글 기반 → CSS 변수 기반 테마로 확장 가능
- 접근성:
  - 이미지 대체 텍스트 부여(`alt`), 명도 대비 준수
  - 슬라이더 키보드 내비게이션/포커스링 개선 가능

## 8) 확장 가이드: 새 프로젝트 페이지 추가
1. `src/pages/Project4.jsx` 생성
2. `ProjectTemplate`를 사용해 `visual`, `projectCards` 또는 `projectCardsCount` 지정
3. 필요하면 본문에 `TextCard`, `DetailCard` 조합 전달
4. 라우터(`App.jsx`)에 `/Project4` 등록

샘플:
```jsx
// src/pages/Project4.jsx
import ProjectTemplate from './components/ProjectTemplate';

export default function Project4() {
  const projectCards = [
    {
      title: 'Project 4 - Landing',
      period: '2025.01 ~ 2025.02',
      desc: <>랜딩 페이지 구축…</>,
      slides: [{ src: '/images/p4-1.jpg' }, { src: '/images/p4-2.jpg' }]
    }
  ];
  return (
    <ProjectTemplate
      visual={{ text: 'PROJECT 4' }}
      projectCards={projectCards}
    />
  );
}
```

## 9) 예상 질문 · 모범 답변
Q1. 템플릿 패턴을 도입한 이유는 무엇인가요?  
A1. “디자인은 동일하고 콘텐츠만 다른 요구라, 레이아웃은 템플릿으로 고정하고 데이터/children만 바꾸는 합성 패턴이 유지보수성과 확장성에 유리합니다. 새 페이지 추가 시 중복을 최소화할 수 있습니다.”

Q2. Swiper를 선택한 근거는 무엇인가요?  
A2. “썸네일-메인, 네비게이션, 루프 등 요구 기능을 안정적으로 제공하고, 구현·검증 시간을 단축합니다. 커스터마이징이 필요한 지점도 모듈로 대응 가능합니다.”

Q3. 스타일 충돌은 어떻게 방지했나요?  
A3. “SCSS Modules로 클래스 스코프를 컴포넌트 단위로 격리했습니다. 공통 변수는 `variables.scss`에 모아 테마/리팩터링에 유리합니다.”

Q4. 다크모드 전환은 어떻게 처리했나요?  
A4. “전역 클래스를 토글하여 스타일 레이어를 바꿉니다. 추후 CSS 변수 테마로 확장하면 토글 시 리렌더 비용/스타일 일관성을 더 개선할 수 있습니다.”

Q5. 페이지 추가 시 작업 플로우는 어떻게 되나요?  
A5. “`ProjectTemplate` 재사용 → `visual`/`projectCards`/children 데이터만 정의 → 라우터 등록. 디자인 변경은 템플릿 한 곳에서 통제합니다.”

Q6. 접근성 관점에서 보완하고 싶은 점은?  
A6. “이미지 `alt`의 구체화, 슬라이더 키보드/ARIA 개선, 포커스 스타일 명확화 등입니다. 구조가 컴포넌트화되어 있어 해당 부분만 개선하면 전체에 전파됩니다.”

Q7. 성능 최적화 방안은?  
A7. “라우트 코드 스플리팅, 이미지 최적화·지연 로딩, 불필요 렌더 최소화, Swiper 슬라이드 개수/옵션 조절 등을 적용할 수 있습니다.”

Q8. 이 설계의 트레이드오프는?  
A8. “템플릿이 커질수록 props가 복잡해질 수 있어, 범용성-명확성 균형이 중요합니다. 필요 시 세부 섹션을 더 작은 컴포넌트로 쪼개거나, 페이지 전용 데이터 스키마를 정의해 가독성을 유지합니다.”

## 10) 참고 파일 경로
- 라우팅/전역: `src/App.jsx`
- 템플릿: `src/pages/components/ProjectTemplate.jsx`
- 카드: `src/pages/components/card/Project-card.jsx`
- 슬라이드: `src/pages/components/slide/Slide.jsx`
- 텍스트/디테일/비주얼 카드:
  - `src/pages/components/card/Text-card.jsx`
  - `src/pages/components/card/Detail-card.jsx`
  - `src/pages/components/card/Visual-card.jsx`
- 스타일:
  - `src/pages/Project1/Project1.module.scss`
  - `src/pages/components/card/page-card.module.scss`
  - `src/styles/variables.scss`


