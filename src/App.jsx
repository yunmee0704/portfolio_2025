import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';





// 컴포넌트 연결
import Header from "./components/header/Header";
import SkillCard from "./components/card/Skill-card";
import CareerCard from "./components/card/Career-card";
import WorkCard from "./components/card/Work-card";
import SnsCard from "./components/card/Sns-card";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import DarkModeBtn from "./components/button/DarkMode";
// import Header from './components/Header';
import "../src/styles/main.scss";

//PROJECT 상세페이지
import Project1 from "./pages/Project1/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";


function App() {
  const [mode, Setmode] = useState(false);
  const modechange = () => {
    Setmode(!mode);
  }
  const location = useLocation();

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
      <Routes>
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {location.pathname === '/' && (
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
            <img src="../src/assets/img/about.png" alt="about" />
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
          <div className="button-box">
            <Button mode={mode} onToggle={modechange} text="View all projects"></Button>
          </div>
        </section>
      </main>
      )}
      <DarkModeBtn mode={mode} onToggle={modechange} />
    </div>
  );
}

export default App;
