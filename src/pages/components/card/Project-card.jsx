import styles from './page-card.module.scss';
import Slide from '../slide/Slide';

function ProjectCard({
  title = 'Project -title',
  period = 'periode',
  desc,
  slides
}) {
  return (
    <div className={styles['project__card']}>
      <div className={styles['project__card-title']}>
        <p>{title}</p>
        <span>{period}</span>
      </div>
      <Slide slides={slides} />
      <div className={styles['project__card-desc']}>
        {desc ? (
          desc
        ) : (
          <>
            🗓️ 퍼블리싱 작업 기간 : 2024.10~2024.11<br/>
            <br/>
            💪🏻 기여도 : 퍼블리싱 100%<br/>
            <br/>
            ✅ 주요 내용 및 특징<br/>
            <br/>
            1. 고객사와의 협업 기반의 효율적 페이지 구성<br/>
            - 페이지 디자인 중복 최소화를 위해 실제 필요한 페이지만 퍼블리싱 대상으로 선정<br/>
            - 협의 단계에서 불필요한 케이스를 정리하고, 개발 연계 효율성 향상<br/>
            <br/>
            2. Jquery를 활용한 동적 UI 구현<br/>
            - 퍼블리싱 단계에서 구현 가능한 인터랙션(아코디언, 체크박스,탭 등)을 Jquery로 직접 구현<br/>
            - 기획의도에 맞게 모든 케이스를 동적으로 표현하여 QA이전 단계에서 사용자 흐름 검증 가능<br/>
            <br/>
            3. CSS관리 효율화 및 향후 확장성 대비<br/>
            - 이 프로젝트에 전용 독립CSS 파일을 분리 구성.<br/>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectCard;