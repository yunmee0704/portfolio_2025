import styles from "./Card.module.scss";

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
      <img src={`/src/assets/img/skill_${item.id}.png`} alt={`skill_${item.id}`} />
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
