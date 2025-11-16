import styles from './page-card.module.scss'

function TextCard({ title = 'Project Name', description = 'Project Description' }) {
  return(
    <div className={styles['pagecard__content']}>
      <h2 className={styles['pagecard__content-title']}>{title}</h2>
      <p className={styles['pagecard__content-description']}>{description}</p>
    </div>
  )
}

export default TextCard;