import { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePortfolioMotion } from './hooks/usePortfolioMotion';
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
  const mainRef = usePortfolioMotion();
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

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [mode]);

  return (
    <div className="container">
      <Header></Header>
      <main className="main" ref={mainRef}>
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
        <section className="section section-card portfolio-section" id="Skill">
          <div className="section-card__content">
            <SkillCard />
          </div>
        </section>
        <section className="section section-lineage portfolio-section" id="Career">
          <div className="section-lineage__inner">
            <header className="section-lineage__head">
              <span className="section-lineage__eyebrow">Experience</span>
              <h2>Career</h2>
            </header>
            <CareerCard />
          </div>
        </section>
        <section className="section section-card portfolio-section" id="Project">
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
