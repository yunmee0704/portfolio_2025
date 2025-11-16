import ProjectTemplate from './components/ProjectTemplate';

export default function Project3() {
  const projectCards = [
    {
      title: 'Project 3 - Mobile First',
      period: '2024.11 ~ 2024.12',
      desc: (
        <>
          🗓️ 작업 개요: 모바일 퍼스트 전략으로 신규 구축<br/>
          <br/>
          💪🏻 기여도: 퍼블리싱 100%<br/>
          <br/>
          ✅ 핵심 포인트<br/>
          - 모바일 기준 레이아웃 설계 후 데스크톱 확장<br/>
          - 상태기반 컴포넌트로 재사용성 확보<br/>
          - SCSS 변수/믹스인 표준화<br/>
        </>
      ),
      slides: [
        { src: 'https://swiperjs.com/demos/images/nature-5.jpg' },
        { src: 'https://swiperjs.com/demos/images/nature-6.jpg' },
        { src: 'https://swiperjs.com/demos/images/nature-7.jpg' },
        { src: 'https://swiperjs.com/demos/images/nature-8.jpg' },
      ]
    }
  ];
  return <ProjectTemplate projectCards={projectCards} />;
}