import styles from "./Card.module.scss";
import Button from "../button/Button";
import work2 from "../../assets/img/work_1.png";
import work3 from "../../assets/img/work_2.png";
import work5 from "../../assets/img/work_5.png";
import work6 from "../../assets/img/work_6.png";

const workList = [
  {
    id: 1,
    title: "미트매치 컴포넌트 가이드페이지 작성",
    desc: [
      "- 🗓️ 프로젝트 기간 : 2026.08 (1주)",
      "- 💪🏻 기여도 : 100%",
      "- 미트매치 컴포넌트 가이드페이지 작성",
      "- 🛠️ 기술 : HTML5, CSS, SCSS, jQuery",
    ],
    ctaUrl: "https://yunmee0704.github.io/project_meat/html/guide-component.html",
    ctaLabel: "페이지 보기",
  },
  {
    id: 2,
    src: work2,
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
    id: 3,
    src: work3,
    title: "LS Electric LG-LENS 웹/어드민 신규 구축",
    desc: [
      "- 🗓️ 프로젝트 기간 : 2025.05 ~ 2025.06 (2개월)",
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
    id: 4,
    title: "자사 홈페이지 리뉴얼 신규 구축",
    desc: [
      "- 🗓️ 프로젝트 기간 : 2025.01 ~ 2025.02(2개월)",
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
    id: 5,
    src: work5,
    title: "에듀윌 회계사 수험정보 페이지",
    desc: [
      "- 🗓️ 프로젝트 기간 : 2024.08 (3일)",
      "- 💪🏻 기여도 : 100%",
      "- 헤더와 푸터를 제외한 PC/Mobile 전체 내용 리뉴얼 및 스타일 조정",
      "- Jquery로 탭 기능 구현",
      "- 🛠️ 기술 : HTML5, CSS, SCSS, jQuery",
    ],
    ctaUrl: "https://cpta.eduwill.net/Contents/CommonPage?strUrl=_114_1/info/about",
    ctaLabel: "페이지 보기",
  },
  {
    id: 6,
    src: work6,
    title: "국제무역사 서브노트",
    desc: [
      "- 🗓️ 프로젝트 기간 : 2024.01 (3일)",
      "- 💪🏻 기여도 : 100%",
      "- 기존 통이미지 중심 작업 방식에서 벗어나 웹 표준과 접근성을 고려해 퍼블리싱",
      "- 대체 텍스트를 작성하고 텍스트는 시스템 폰트로 구현, 필요한 크기만 이미지 슬라이스 후 CSS 배치",
      "- TweenMax를 활용해 타이틀 애니메이션 효과 구현",
      "- 기획 의도에 맞춰 특정 스크롤 시점에서 동작하는 애니메이션 구현",
      "- 후기 작성 양식 퍼블리싱",
      "- 🛠️ 기술 : HTML5, CSS, SCSS, jQuery",
    ],
    ctaUrl: "https://event.eduwill.net/event/2023/_101/SubNote",
    ctaLabel: "페이지 보기",
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
              {item.id === 1 || item.id === 5 ? "component-guide" : "PORTFOLIO"}
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
