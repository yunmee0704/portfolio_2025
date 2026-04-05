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
      {
        id: 1,
        text: "Vue.js 서비스에서 기존 컴포넌트 구조 분석·재사용으로 UI 개발, 시안 기반 퍼블리싱·인터랙션·반응형",
      },
      {
        id: 2,
        text: "신규 컴포넌트 추가·구조 확장으로 유지보수성·확장성 개선, 기획·디자인·개발과 스펙·일정 맞춤 협업",
      },
      { id: 3, text: "Git·Jira·Confluence·Figma 협업, React 앱 스타일 유지보수" },
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
