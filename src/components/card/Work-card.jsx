import "./Card.scss";
import { Link } from "react-router-dom";

const workList = [
    {id: 1, src:'./src/assets/img/work_1.png', title: '미트매치 앱·웹 구축 및 유지보수', desc :[
      {id: 1, content: "기존 500페이지 규모의 퍼블리싱 구조를 SCSS 기반으로 재편성하여 130페이지로 74% 축소"},
      {id: 2, content: "CSS → SCSS 전환, 컴포넌트화, 퍼블리싱 가이드 구축으로 QA 이슈 75% 감소"},
      {id: 3, content: "신규 페이지 구축·운영까지 전체 퍼블리싱 프로세스를 정비하며 프로젝트 일관성과 유지보수성 향상"},
    ]},
    {id: 2, src:'./src/assets/img/work_2.png', title: 'LG-LENS 웹/어드민 신규 구축',desc :[
      {id: 1, content: "반응형 UI 기반 SCSS 구조 설계 및 컴포넌트 단위 퍼블리싱 가이드 구축"},
      {id: 2, content: "다중 디바이스 환경에서 재사용성 높은 UI 컴포넌트를 설계하여 개발 협업 효율성 향상"},
      {id: 3, content: "Jira·Confluence 기반 협업 환경에서 생산성 개선 및 SCSS 체계 정립"},
    ]},
    {id: 3, src:'./src/assets/img/work_3.png', title: 'NAMING 브랜드몰 전체 리뉴얼', desc :[
      {id: 1, content: "Cafe24 템플릿 분석 후 단독으로 전체 사이트 리뉴얼 퍼블리싱 수행"},
      {id: 2, content: "프로모션 기획에 맞춰 UI 개선 및 상세/프로모션 페이지 제작"},
      {id: 3, content: "제약 있는 Cafe24 환경에서 슬라이드·옵션 UI 등 커스텀 기능 구현으로 사이트 완성도 향상"},
    ]},
 

];

const workItem = workList.map(item => 
    <div className="card card-work" key={item.id}>
    <Link to={`/Project${item.id}`} className="card-work__link" target="_blank" rel="noopener noreferrer">
      <div className="card-work__img">
        <img src={item.src} alt="work img" />
      </div>
      <div className="card-work__title">{item.title}</div>
      <div className="card-work__description">
      <ul>
        {item.desc.map((descItem) => (
          <li key={descItem.id}>{descItem.content}</li>
        ))}
      </ul>
      </div>
    </Link>
  </div>
)



function WorkCard() {
  return (
    workItem
  );
}

export default WorkCard;
