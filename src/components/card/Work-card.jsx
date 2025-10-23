import "./Card.scss";

function WorkCard() {
  return (
    <div className="card card-work">
      <a href="#" className="card-work__link">
        <div className="card-work__img">
          <img src="/src/assets/img/work_card_1.png" alt="work img" />
        </div>
        <div className="card-work__title">Work Title</div>
        <div className="card-work__description">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </div>
      </a>
    </div>
  );
}

export default WorkCard;
