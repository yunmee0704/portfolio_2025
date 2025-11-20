# 포트폴리오 프로젝트 기술 면접 대비 정리

본 문서는 현재 코드베이스를 기준으로 아키텍처, 컴포넌트 설계, 스타일 전략, 성능·접근성 고려, 확장성, 예상 질문/모범 답변을 면접 대응용으로 요약합니다.

## 1) 개요 · 스택
- 빌드/개발: Vite (ESM 기반, 빠른 HMR)
- UI 라이브러리: React
- 스타일: SCSS + SCSS Modules
- 에셋: 정적 이미지 import와 외부 URL 혼용

## 2) 전역 상태
- 다크모드 토글: `useState`로 모드 저장, `useEffect`로 `document.body` 및 특정 요소에 `lightmode/darkmode` 클래스를 토글
  - 클래스 토글 → 스타일 계층을 유지하면서 테마 전환

## 3) 스타일 전략
- SCSS Modules로 컴포넌트 단위 클래스 스코프 보장 (`.module.scss`)
- 공통 변수는 `styles/variables.scss`에서 관리
 

## 7) 성능 · 접근성 고려
- 이미지:
  - 실제 배포 시 WebP/AVIF 등 경량 포맷 고려, 사이즈 최적화
  - `loading="lazy"`(필요 시 커스텀)와 썸네일/프리로드 전략
- 다크모드:
  - 현재 클래스 토글 기반 → CSS 변수 기반 테마로 확장 가능
- 접근성:
  - 이미지 대체 텍스트 부여(`alt`), 명도 대비 준수
  - 슬라이더 키보드 내비게이션/포커스링 개선 가능

## 9) 예상 질문 · 모범 답변
Q3. 스타일 충돌은 어떻게 방지했나요?  
A3. “SCSS Modules로 클래스 스코프를 컴포넌트 단위로 격리했습니다. 공통 변수는 `variables.scss`에 모아 테마/리팩터링에 유리합니다.”

Q4. 다크모드 전환은 어떻게 처리했나요?  
A4. “전역 클래스를 토글하여 스타일 레이어를 바꿉니다. 추후 CSS 변수 테마로 확장하면 토글 시 리렌더 비용/스타일 일관성을 더 개선할 수 있습니다.”

Q6. 접근성 관점에서 보완하고 싶은 점은?  
A6. “이미지 `alt`의 구체화, 슬라이더 키보드/ARIA 개선, 포커스 스타일 명확화 등입니다. 구조가 컴포넌트화되어 있어 해당 부분만 개선하면 전체에 전파됩니다.”

## 10) 참고 파일 경로
- 라우팅/전역: `src/App.jsx`
- 스타일:
  - `src/styles/variables.scss`



## 블로그용: 포트폴리오 2025 핵심 로직 및 코드

- 단일 페이지(앵커 네비게이션), 다크모드 토글, 모바일 메뉴 토글, 데이터 기반 카드 렌더링
- 전역 상태는 `App.jsx`에서 보유(`useState`, `useEffect`), 자식은 `props`로 값/핸들러 수신
- 리스트는 `map` + 고유 `key`, 이미지 유무/상태에 따른 조건부 렌더/조건부 클래스 적용

### App.jsx

```jsx
import { useState } from 'react';
import { useEffect } from 'react';
// 라우터 제거: 단일 페이지 앵커 네비게이션만 사용

// 컴포넌트 연결
import Header from "./components/header/Header";
import SkillCard from "./components/card/Skill-card";
import CareerCard from "./components/card/Career-card";
import WorkCard from "./components/card/Work-card";
import SnsCard from "./components/card/Sns-card";
import DarkModeBtn from "./components/button/DarkMode";
// import Header from './components/Header';
import "../src/styles/main.scss";
import aboutImg from "./assets/img/about.png";


function App() {
  const [mode, Setmode] = useState(true);
  const modechange = () => {
    Setmode(!mode);
  }

  useEffect(() => {
    const themeClass = mode ? 'darkmode' : 'lightmode';
    const oppositeClass = mode ? 'lightmode' : 'darkmode';

    const elements = [
      document.body,
      ...document.querySelectorAll('header, button')
    ];

    elements.forEach(element => {
      if (element) {
        element.classList.remove(oppositeClass);
        element.classList.add(themeClass);
      }
    });
  }, [mode]);

  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <section className="section section-about" id="About">
          <div className="section-about-content">
            <div className="section-about__content-title">
              <span>Structured | Reliable | Collaborative</span>
              <h1>Web Publisher </h1>
              <p>
                코드를 정리하고 구조를 잡는 일을 좋아하는 퍼블리셔입니다.<br />
                HTML과 SCSS로 깔끔한 마크업을 만드는 데 익숙하고,<br />
                최근에는 React를 공부하며 더 유연한 UI 구조를 만들어가고 있습니다.<br />
                디자인보다 완성도와 유지보수성을 고민합니다.
              </p>
            </div>
            <SnsCard />
          </div>
          <div className="section-about__content-image">
            <img src={aboutImg} alt="about" />
          </div>
        </section>
        <section className="section section-card" id="Skill">
          <div className="section-card__content">
            <SkillCard />
          </div>
        </section>
        <section className="section section-card" id="Career">
          <div className="section-card__title">
            <h2>Career</h2>
          </div>
          <div className="section-card__content">
            <CareerCard />
          </div>
        </section>
        <section className="section section-card" id="Project">
          <div className="section-card__title">
            <h2>Project</h2>
          </div>
          <div className="section-card__content-grid">
            <WorkCard />
          </div>
        </section>
      </main>
      <DarkModeBtn mode={mode} onToggle={modechange} />
    </div>
  );
}


export default App;
```

### Header.jsx

```jsx
import styles from "./Header.module.scss";
import { useState } from "react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalShow = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuList = [
    { title: "About", id: 1, link: "#About" },
    { title: "Skill", id: 2, link: "#Skill" },
    { title: "Career", id: 3, link: "#Career" },
    { title: "Project", id: 4, link: "#Project" },

  ];
  
  const listItems = menuList.map((item) => <li key={item.id}><a href={item.link} onClick={modalShow}>{item.title}</a></li>);

  return (
    <header className={styles.header}>
      <div className={styles["header__container"]}>
        <h1 className={styles["header__logo"]}>ㅛㅕㅜㅡ</h1>
        <button className={styles["header__menu-toggle"]} onClick={modalShow}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H21M3 12H21M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <ul className={`${styles["header__menu"]} ${isMenuOpen ? styles["header__menu--open"] : ''}`}>
            {listItems}</ul>
      </div>
    </header>
  );
}
```

### DarkMode.jsx

```jsx
import styles from "./Button.module.scss";

function DarkModeBtn({mode, onToggle}) {
    return (
        <button className={`${styles.modeBtn} ${ mode ? 'lightmode':'darkmode'}`} onClick={onToggle}>
            <span>{mode? '☀️':'🌙'}</span>
        </button>
    )
}

export default DarkModeBtn;
```

### Button.jsx

```jsx
import styles from "./Button.module.scss";

function Button({text,link}) {
    return (
        <a className={styles.default} href= {link}>
            {text}
        </a>
    )
}

export default Button;
```

### Sns-card.jsx

```jsx
import styles from "./Card.module.scss";
import contact1 from "../../assets/img/contact_1.png";
import contact2 from "../../assets/img/contact_2.png";

const snsList = [
    {id : 1, link:"link1", src: contact1, alt:"블로그"},
    {id : 2, link:"link2", src: contact2, alt:"깃헙"}
]

const snsItem = snsList.map(item =>
    <li key={item.id}>
        <a href={item.link}>
            <img src={item.src} alt={item.alt} />
        </a>
    </li>
)

function SnsCard(){
    return (
        <ul className={styles['card-sns']}>
            {snsItem}
        </ul>
    )
}

export default SnsCard;
```

### Skill-card.jsx

```jsx
import styles from "./Card.module.scss";
import skill1 from "../../assets/img/skill_1.png";
import skill2 from "../../assets/img/skill_2.png";
import skill3 from "../../assets/img/skill_3.png";

const skillImgById = {
  1: skill1,
  2: skill2,
  3: skill3,
};

const skillList = [
  {
    id: 1,
    title: "구조화된 퍼블리싱",
    desc: [
      { id: 1, text: "CSS → SCSS 리팩토링" },
      { id: 2, text: "컴포넌트 기반 구조 설계" },
      { id: 3, text: "유지보수성과 확장성을 높이는 퍼블리싱" }
    ],
  },
  {
    id: 2,
    title: "동적 인터랙션 구현 능력",
    desc: [
      { id: 1, text: "jQuery·Swiper 기반 인터랙션" },
      { id: 2, text: "컴포넌트 기반 스타일 설계" },
      { id: 3, text: "문제 해결 및 QA 대응 역량" }
    ],
  },
  {
    id: 3,
    title: "협업 중심의 퍼블리싱",
    desc: [
      { id: 1, text: "Git·Jira·Confluence·Figma 협업툴 경험" },
      { id: 2, text: "React 기반 앱 스타일 유지보수 경험" },
      { id: 3, text: "커뮤니케이션 능력 및 일정 책임감 있는 진행" }
    ],
  },
];

const skillItem = skillList.map((item) => (
  <div className={`${styles.card} ${styles['card-skill']}`} key={item.id}>
    <div className={styles['card-skill__icon']}>
      <img src={skillImgById[item.id]} alt={`skill_${item.id}`} />
    </div>
    <div className={styles['card-skill__title']}>{item.title}</div>
    <div className={styles['card-skill__description']}>
      <ul>
        {item.desc.map((descItem) => (
          <li key={descItem.id}>{descItem.text}</li>
        ))}
      </ul>
    </div>
  </div>
));

function SkillCard() {
  return skillItem;
}

export default SkillCard;
```

### Work-card.jsx

```jsx
import styles from "./Card.module.scss";
import Button from "../button/Button";
import work1 from "../../assets/img/work_1.png";
import work2 from "../../assets/img/work_2.png";
import work3 from "../../assets/img/work_3.png";

const workList = [
  {
    id: 1,
    src: work1,
    title: '미트매치 앱·웹 구축 및 유지보수',
    desc: [
      '- 🗓️ 프로젝트 기간 : 2024.07 ~ 2025.11 (약 1년 5개월)',
      '- 💪🏻 평균 기여도 : 약 85%',
      '- 퍼블리싱 구조를 정리하고 SCSS 기반으로 표준화하여 유지보수 효율 증가',
      '- 중복된 UI를 컴포넌트화하고 전체 페이지 수를 대폭 줄여 작업 환경을 개선',
      '- 퍼블리싱 리딩을 맡아 SCSS 구조 도입과 컴포넌트 가이드를 구축',
      '- Jquery와 JS를 활용해 다양한 동적 UI를 구현',
      '- SCSS전환 작업으로 컴포넌트 통일화, 페이지별 파일리스트 작성으로 구조 재정비.',
      '🛠️ 기술 : HTML5, CSS, SCSS, jQuery'
    ],
    ctaUrl: 'https://yunmee0704.github.io/project_meat/',
    ctaLabel: '주요 페이지 보기'
  },
  {
    id: 2,
    src: work2,
    title: 'LG-LENS 웹/어드민 신규 구축',
    desc: [
      '- 🗓️ 프로젝트 기간 : 2024.05 ~ 2024.06 (2주)',
      '- 💪🏻 기여도 : 100%',
      '- PC·Mobile 반응형 웹 퍼블리싱 구현',
      '- 피그마 디자인 시안 분석 후 정밀 퍼블리싱 적용',
      '- UI 일관성을 위한 컴포넌트 가이드 작성',
      '🛠️기술 : HTML5, SCSS, jQuery, Slick.js'
    ],
    ctaUrl: 'https://lens.ls-electric.com/',
    ctaLabel: '사이트 보기'
  },
  {
    id: 3,
    src: work3,
    title: '자사 홈페이지 리뉴얼 신규 구축',
    desc: [
      '- 🗓️ 프로젝트 기간 : 2024.05 ~ 2024.06(2주)',
      '- 💪🏻 기여도 : 100%',
      '- PC·Mobile 반응형 웹 퍼블리싱 구현',
      '- 피그마 디자인 시안 분석 후 정밀 퍼블리싱 적용',
      '- 카카오맵으로 지도 구현',
      '🛠️기술 : HTML5, SCSS, jQuery, Slick.js'
    ],
    ctaUrl: 'https://yunmee0704.github.io/4usoft',
    ctaLabel: '사이트 보기'
  },
  {
    id: 4,
    // src를 생략하면 텍스트 타일로 대체 렌더링
    title: 'Portfolio 2025',
    desc: [
      '- React + Vite + SCSS로 개인 포트폴리오 구축',
      '- useState/useEffect로 다크모드 테마 전환 구현',
      '- props와 map으로 카드/버튼 등 재사용 컴포넌트 구성',
      '- CSS 변수 + 글라스모피즘 UI, 반응형 레이아웃 적용',
      '🛠️기술 : React, Vite, SCSS'
    ],
    ctaUrl: 'https://github.com/yunmee0704/portfolio_2025',
    ctaLabel: 'GitHub 보기'
  }
];

const workItem = workList.map(item => (
  <div className={`${styles.card} ${styles['card-work']}`} key={item.id}>
    <div className={styles['card-work__link']}>
      <div className={styles['card-work__media']}>
        {item.src ? (
          <img src={item.src} alt="work img" />
        ) : (
          <span className={styles['card-work__logo-fallback']}>PORTFOLIO</span>
        )}
      </div>
      <div className={styles['card-work__body']}>
        <h3 className={styles['card-work__title']}>{item.title}</h3>
        {Array.isArray(item.desc) ? (
          <div className={styles['card-work__desc']}>
            {item.desc.map((line, index) => (
              <p key={index} className={styles['card-work__desc-line']}>{line}</p>
            ))}
          </div>
        ) : (
          <p className={styles['card-work__desc']} style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
        )}
        {item.ctaUrl && (
          <div className={styles['card-work__actions']}>
            <Button text={item.ctaLabel} link={item.ctaUrl} />
          </div>
        )}
      </div>
    </div>
  </div>
));

function WorkCard() {
  return workItem;
}

export default WorkCard;
```
