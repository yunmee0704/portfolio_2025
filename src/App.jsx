import { useState } from 'react';
import { useEffect } from 'react';

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

function App() {
    const [mode, Setmode] = useState(false);
    const modechange =() =>{
        Setmode(!mode);
    }

    useEffect(() => {
        if (mode) {
            document.body.classList.add('darkmode');
            document.body.classList.remove('lightmode');
            const headerElement = document.querySelector('header');
            if (headerElement) {
                headerElement.classList.add('darkmode');
                headerElement.classList.remove('lightmode');
            }
            const buttonElement = document.querySelector('button');
            if (buttonElement) {
                buttonElement.classList.add('darkmode');
                buttonElement.classList.remove('lightmode');
            }
        } else {
            document.body.classList.add('lightmode');
            document.body.classList.remove('darkmode');
            const headerElement = document.querySelector('header');
            if (headerElement) {
                headerElement.classList.add('lightmode');
                headerElement.classList.remove('darkmode');
            }

            const buttonElement = document.querySelector('button');
            if (buttonElement) {
                buttonElement.classList.add('lightmode');
                buttonElement.classList.remove('darkmode');
            }
        }
    }, [mode]);
  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <section className="section section-about" id="About">
          <div className="section-about-content">
            <div className="section-about__content-title">
              <span>Branding | Image making | Product design</span>
              <h1>Visual Designer</h1>
              <p>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com
              </p>
            </div>
            <Button mode={mode} onToggle={modechange}></Button>
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
        <section className="section section-card" id="Work">
          <div className="section-card__title">
            <h2>Work</h2>
          </div>
          <div className="section-card__content-grid">
            <WorkCard />
          </div>
        </section>
        <section className="section section-contact" id="Contact">
          <div className="section-contact__title">
            <h2>Lets work together</h2>
          </div>
          <div className="section-contact__content">
            <div className="section-contact__social">
              <p>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com This is a template Figma file, turned
                into code using Anima. Learn more at AnimaApp.com
              </p>
              <SnsCard />
            </div>
            <div className="section-contact__form">
              <form action="">
                <Input />
                <Button mode={mode} onToggle={modechange}></Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <DarkModeBtn mode={mode} onToggle={modechange} />
    </div>
  );
}

export default App;
