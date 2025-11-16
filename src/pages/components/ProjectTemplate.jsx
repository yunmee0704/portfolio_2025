import VisualCard from './card/Visual-card';
import ProjectCard from './card/Project-card';
import styles from '../Project1/Project1.module.scss';

function ProjectTemplate({ children, projectCardsCount = 1, projectCards, visual }) {
  return (
    <section className={styles['section-project1']}>
      <div className={styles['section-project1__visual']}>
        <VisualCard {...visual} />
      </div>
      {children && (
        <div className={styles['section-project1__content']}>
          {children}
        </div>
      )}
      {Array.isArray(projectCards) && projectCards.length > 0
        ? projectCards.map((card, index) => <ProjectCard key={index} {...card} />)
        : Array.from({ length: projectCardsCount }).map((_, index) => (
          <ProjectCard key={index} />
        ))
      }
    </section>
  );
}

export default ProjectTemplate;


