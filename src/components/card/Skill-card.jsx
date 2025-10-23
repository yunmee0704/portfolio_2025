import "./Card.scss";

function SkillCard() {
    return (
        <div className="card card-skill">
            <div className="card-skill__icon">
                <img src="/src/assets/img/skills_icon_1.png" alt="skill icon" />
            </div>
            <div className="card-skill__title">
            Product Design
            </div>
            <div className="card-skill__description">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </div>
        </div>
    )
}

export default SkillCard;