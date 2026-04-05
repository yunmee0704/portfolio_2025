import styles from "./Card.module.scss";
import Button from "../button/Button";
import work1 from "../../assets/img/work_1.png";
import work2 from "../../assets/img/work_2.png";
import work3 from "../../assets/img/work_3.png";

const workList = [
  {
    id: 5,
    title: "보험 추천 챗봇(목데이터) 웹 구축",
    desc: [
      "- 📌 개인 프로젝트",
      "- 🗓️ 프로젝트 기간 : 2026.03.29 ~ 2026.04.05(약 1주)",
      "- 💪🏻 기여도 : 100%",
      "- React 기반으로 채팅 화면을 MessageList, InputBox, InsuranceRecCard 컴포넌트로 분리해 UI 구조화 및 유지보수성 강화",
      "- 보험 키워드 기반 추천 로직을 설계해 사용자 입력 맥락에 맞는 상품 카드 노출(조건 분기/데이터 매핑) 구현",
      "- OpenAI API 키로 연결하여 프로젝트 만든 후 배포용 목데이터 응답 흐름을 구성해 배포 안정성과 데모 재현성 확보",
      "- Enter 전송, 로딩(typing) 상태, 자동 스크롤 등 사용자 중심 인터랙션을 구현해 대화 UX 개선",
      "- SCSS 기반 스타일 분리 및 반응형 레이아웃 적용으로 PC/모바일 환경에서 일관된 UI 제공",
      "- 🛠️ 기술 : React, Vite, JavaScript(ES6+), SCSS, HTML5, CSS3",
    ],
    ctas: [
      { label: "사이트 보기", url: "https://yunmee0704.github.io/chat_project/" },
      { label: "GitHub 보기", url: "https://github.com/yunmee0704/chat_project" },
    ],
  },
  {
    id: 1,
    src: work1,
    title: "미트매치 앱·웹 구축 및 유지보수",
    desc: [
      "- 🗓️ 프로젝트 기간 : 2024.07 ~ 2025.11 (약 1년 5개월)",
      "- 💪🏻 평균 기여도 : 약 85%",
      "- 퍼블리싱 구조를 정리하고 SCSS 기반으로 표준화하여 유지보수 효율 증가",
      "- 중복된 UI를 컴포넌트화하고 전체 페이지 수를 대폭 줄여 작업 환경을 개선",
      "- 퍼블리싱 리딩을 맡아 SCSS 구조 도입과 컴포넌트 가이드를 구축",
      "- Jquery와 JS를 활용해 다양한 동적 UI를 구현",
      "- SCSS전환 작업으로 컴포넌트 통일화, 페이지별 파일리스트 작성으로 구조 재정비.",
      "- 🛠️ 기술 : HTML5, CSS, SCSS, jQuery",
    ],
    ctaUrl: "https://yunmee0704.github.io/project_meat/",
    ctaLabel: "주요 페이지 보기",
  },
  {
    id: 2,
    src: work2,
    title: "LS Electric LG-LENS 웹/어드민 신규 구축",
    desc: [
      "- 🗓️ 프로젝트 기간 : 2024.05 ~ 2024.06 (2주)",
      "- 💪🏻 기여도 : 100%",
      "- PC·태블릿·모바일 대응 반응형 웹 퍼블리싱 전 구간 구현",
      "- 피그마 디자인 시안 분석 후 브레이크포인트별 정밀 퍼블리싱 적용",
      "- UI 일관성을 위한 컴포넌트 가이드 작성",
      "- 🛠️기술 : HTML5, SCSS, jQuery, Slick.js",
    ],
    ctaUrl: "https://lens.ls-electric.com/",
    ctaLabel: "사이트 보기",
  },
  {
    id: 3,
    src: work3,
    title: "자사 홈페이지 리뉴얼 신규 구축",
    desc: [
      "- 🗓️ 프로젝트 기간 : 2024.05 ~ 2024.06(2주)",
      "- 💪🏻 기여도 : 100%",
      "- PC·Mobile 반응형 웹 퍼블리싱 구현",
      "- 피그마 디자인 시안 분석 후 정밀 퍼블리싱 적용",
      "- 카카오맵으로 지도 구현",
      "- 🛠️기술 : HTML5, SCSS, jQuery, Slick.js",
    ],
    ctaUrl: "https://yunmee0704.github.io/4usoft",
    ctaLabel: "사이트 보기",
  },
  {
    id: 4,
    title: "Portfolio 2025",
    desc: [
      "- React + Vite + SCSS로 개인 포트폴리오 구축",
      "- useState/useEffect로 다크모드 테마 전환 구현",
      "- props와 map으로 카드/버튼 등 재사용 컴포넌트 구성",
      "- CSS 변수 + 글라스모피즘 UI, 반응형 레이아웃 적용",
      "- 🛠️기술 : React, Vite, SCSS",
    ],
    ctaUrl: "https://github.com/yunmee0704/portfolio_2025",
    ctaLabel: "GitHub 보기",
  },
];

function resolveCtas(item) {
  if (item.ctas?.length) return item.ctas;
  if (item.ctaUrl) return [{ label: item.ctaLabel, url: item.ctaUrl }];
  return [];
}

const workItem = workList.map((item) => {
  const ctas = resolveCtas(item);
  return (
    <div className={`${styles.card} ${styles["card-work"]}`} key={item.id}>
      <div className={styles["card-work__link"]}>
        <div className={styles["card-work__media"]}>
          {item.src ? (
            <img src={item.src} alt="" />
          ) : (
            <span className={styles["card-work__logo-fallback"]}>
              {item.id === 5 ? "CHAT" : "PORTFOLIO"}
            </span>
          )}
        </div>
        <div className={styles["card-work__body"]}>
          <h3 className={styles["card-work__title"]}>{item.title}</h3>
          {Array.isArray(item.desc) ? (
            <div className={styles["card-work__desc"]}>
              {item.desc.map((line, index) => (
                <p key={index} className={styles["card-work__desc-line"]}>
                  {line}
                </p>
              ))}
            </div>
          ) : (
            <p className={styles["card-work__desc"]} style={{ whiteSpace: "pre-line" }}>
              {item.desc}
            </p>
          )}
          {ctas.length > 0 && (
            <div className={styles["card-work__actions"]}>
              {ctas.map((cta) => (
                <Button key={cta.url} text={cta.label} link={cta.url} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

function WorkCard() {
  return workItem;
}

export default WorkCard;
