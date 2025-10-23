// 컴포넌트 연결
import Header from "./components/header/Header";
import SkillCard from "./components/card/Skill-card";
import CareerCard from "./components/card/Career-card";
import WorkCard from "./components/card/Work-card";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
// import Header from './components/Header';
import "../src/styles/main.scss";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <section className="section section-about">
          <div className="section-about-content">
            <div className="section-about__container-content-title">
              <span>Branding | Image making | Product design</span>
              <h1>Visual Designer</h1>
              <p>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com
              </p>
            </div>
            <Button></Button>
          </div>
          <div className="section-about__container-image">
            <img src="../src/assets/img/about.png" alt="about" />
          </div>
        </section>
        <section className="section section-card">
          <div className="section-card__content">
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
          </div>
        </section>
        <section className="section section-card">
          <div className="section-card__title">
            <h2>Career</h2>
          </div>
          <div className="section-card__content">
            <CareerCard></CareerCard>
            <CareerCard></CareerCard>
            <CareerCard></CareerCard>
          </div>
        </section>
        <section className="section section-card">
          <div className="section-card__title">
            <h2>Work</h2>
          </div>
          <div className="section-card__content-grid">
            <WorkCard></WorkCard>
            <WorkCard></WorkCard>
            <WorkCard></WorkCard>
            <WorkCard></WorkCard>
            <WorkCard></WorkCard>
            <WorkCard></WorkCard>
          </div>
        </section>
        <section className="section section-contact">
        <div className="section-contact__title">
            <h2>Lets work together</h2>
          </div>
        <div className="section-contact__content">
        <div className="section-contact__social">
     
     <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
   </div>
   <div className="section-contact__form">
     <form action="">
       <Input></Input>
       <Input></Input>
       <Button></Button>
     </form>
   </div>
        </div>
        </section>
      </main>
    </div>
  );
}

export default App;
