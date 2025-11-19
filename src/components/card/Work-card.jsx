import styles from "./Card.module.scss";
import Button from "../button/Button";

const workList = [
  {
    id: 1,
    src: './src/assets/img/work_1.png',
    title: '미트매치 앱·웹 구축 및 유지보수',
    desc: [
      '- 🗓️ 프로젝트 기간 : 2024.07 ~ 2025.11 (약 1년 5개월)',
      '- 💪🏻 평균 기여도 : 약 85%',
      '- 퍼블리싱 구조를 정리하고 SCSS 기반으로 표준화하여 유지보수 효율 증가',
      '- 중복된 UI를 컴포넌트화하고 전체 페이지 수를 대폭 줄여 작업 환경을 개선',
      '- 퍼블리싱 리딩을 맡아 SCSS 구조 도입과 컴포넌트 가이드를 구축',
      '- Jquery와 JS를 활용해 다양한 동적 UI를 구현',
      '- SCSS전환 작업으로 컴포넌트 통일화, 페이지별 파일리스트 작성으로 구조 재정비.',
      '🛠️ 기술 : HTML5, CSS, SCSS, jQuery'
    ],
    ctaUrl: 'https://yunmee0704.github.io/project_meat/',
    ctaLabel: '주요 페이지 보기'
  },
  {
    id: 2,
    src: './src/assets/img/work_2.png',
    title: 'LG-LENS 웹/어드민 신규 구축',
    desc: [
      '- 🗓️ 프로젝트 기간 : 2024.05 ~ 2024.06 (2주)',
      '- 💪🏻 기여도 : 100%',
      '- PC·Mobile 반응형 웹 퍼블리싱 구현',
      '- 피그마 디자인 시안 분석 후 정밀 퍼블리싱 적용',
      '- UI 일관성을 위한 컴포넌트 가이드 작성',
      '🛠️기술 : HTML5, SCSS, jQuery, Slick.js'
    ],
    ctaUrl: 'https://lens.ls-electric.com/',
    ctaLabel: '사이트 보기'
  },
  {
    id: 3,
    src: './src/assets/img/work_3.png',
    title: '자사 홈페이지 리뉴얼 신규 구축',
    desc: [
      '- 🗓️ 프로젝트 기간 : 2024.05 ~ 2024.06(2주)',
      '- 💪🏻 기여도 : 100%',
      '- PC·Mobile 반응형 웹 퍼블리싱 구현',
      '- 피그마 디자인 시안 분석 후 정밀 퍼블리싱 적용',
      '- 카카오맵으로 지도 구현',
      '🛠️기술 : HTML5, SCSS, jQuery, Slick.js'
    ],
    ctaUrl: 'https://github.com/0704lym/4usoft-homepage',
    ctaLabel: 'github 보기'
  },
  {
    id: 4,
    // src를 생략하면 텍스트 타일로 대체 렌더링
    title: 'Portfolio 2025',
    desc: [
      '- React + Vite + SCSS로 개인 포트폴리오 구축',
      '- useState/useEffect로 다크모드 테마 전환 구현',
      '- props와 map으로 카드/버튼 등 재사용 컴포넌트 구성',
      '- CSS 변수 + 글라스모피즘 UI, 반응형 레이아웃 적용',
      '🛠️기술 : React, Vite, SCSS'
    ],
    ctaUrl: 'https://github.com/',
    ctaLabel: 'GitHub 보기'
  }
];

const workItem = workList.map(item => (
  <div className={`${styles.card} ${styles['card-work']}`} key={item.id}>
    <div className={styles['card-work__link']}>
      <div className={styles['card-work__media']}>
        {item.src ? (
          <img src={item.src} alt="work img" />
        ) : (
          <span className={styles['card-work__logo-fallback']}>PORTFOLIO</span>
        )}
      </div>
      <div className={styles['card-work__body']}>
        <h3 className={styles['card-work__title']}>{item.title}</h3>
        {Array.isArray(item.desc) ? (
          <div className={styles['card-work__desc']}>
            {item.desc.map((line, index) => (
              <p key={index} className={styles['card-work__desc-line']}>{line}</p>
            ))}
          </div>
        ) : (
          <p className={styles['card-work__desc']} style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
        )}
        {item.ctaUrl && (
          <div className={styles['card-work__actions']}>
            <Button text={item.ctaLabel} link={item.ctaUrl} />
          </div>
        )}
      </div>
    </div>
  </div>
));

function WorkCard() {
  return workItem;
}

export default WorkCard;
