import ProjectTemplate from './components/ProjectTemplate';

function Project2() {
  const projectCards = [
    {
      title: 'Project 2 - Renewal',
      period: '2024.09 ~ 2024.10',
      desc: (
        <>
          🗓️ 작업 개요: 반응형 리뉴얼 및 접근성 개선<br/>
          <br/>
          💪🏻 기여도: 퍼블리싱 100%<br/>
          <br/>
          ✅ 핵심 포인트<br/>
          - CSS 구조 재정리(컴포넌트/유틸 단위 분리)<br/>
          - Swiper 기반 썸네일-메인 갤러리 구현<br/>
          - 다크모드 대응 변수화<br/>
        </>
      ),
      slides: [
        { src: 'https://swiperjs.com/demos/images/nature-1.jpg' },
        { src: 'https://swiperjs.com/demos/images/nature-2.jpg' },
        { src: 'https://swiperjs.com/demos/images/nature-3.jpg' },
        { src: 'https://swiperjs.com/demos/images/nature-4.jpg', text: '상세 설명 예시' },
      ]
    }
  ];
  return <ProjectTemplate projectCards={projectCards} />;
}

export default Project2;