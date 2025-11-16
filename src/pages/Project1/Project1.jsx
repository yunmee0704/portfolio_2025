// 컴포넌트
import TextCard from '../components/card/Text-card';
import DetailCard from '../components/card/Detail-card';
import ProjectTemplate from '../components/ProjectTemplate';
import styles from './Project1.module.scss';


function Project1() {
  return (
    <ProjectTemplate projectCardsCount={4} visual={{ text: 'PROJECT 1' }}>
      <TextCard
        title="Project 1 - Commerce Redesign"
        description="대규모 커머스 서비스 리디자인. 컴포넌트 기반 마크업과 반응형 그리드로 유지보수성 향상."
      />
      <div className={styles['detail-cardbox']}>
        <DetailCard
          href="#overview"
          title="Overview"
          text="프로젝트 목표와 핵심 요구 사항 요약"
        />
        <DetailCard
          href="#ui"
          title="UI 구조"
          text="레이아웃/네비게이션/카드 컴포넌트 설계"
        />
        <DetailCard
          href="#a11y"
          title="접근성"
          text="키보드 내비게이션, 대체 텍스트, 명도 대비 준수"
        />
        <DetailCard
          href="#performance"
          title="성능"
          text="이미지 최적화와 불필요 렌더링 최소화"
        />
      </div>
    </ProjectTemplate>
  );
}
export default Project1;