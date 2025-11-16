import styles from './page-card.module.scss'

function DetailCard({ href = '#', title = 'Project DetailName', text = 'pagecard Detail' }) {
  return(
    <div className={styles['pagecard__detail']}>
      <a href={href}>
        <h2 className={styles['pagecard__detail-title']}>
          {title}
        </h2>
        <p className={styles['pagecard__detail-text']}>
          {text}
        </p>
      </a>
    </div>
  )
}

export default DetailCard;