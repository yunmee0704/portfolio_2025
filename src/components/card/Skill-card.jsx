import "./Card.scss";

const skillList = [
  { id: 1, title: "skill1", desc: "skilldesc1" },
  { id: 2, title: "skill2", desc: "skilldesc2" },
  { id: 3, title: "skill3", desc: "skilldesc3" },
];

const skillItem = skillList.map((item) => (
  <div className="card card-skill" key={item.id}>
    <div className="card-skill__icon">
      <img src="/src/assets/img/skills_icon_1.png" alt="skill icon" />
    </div>
    <div className="card-skill__title">{item.title}</div>
    <div className="card-skill__description">{item.desc}</div>
  </div>
));

function SkillCard() {
  return skillItem ;
}

export default SkillCard;
