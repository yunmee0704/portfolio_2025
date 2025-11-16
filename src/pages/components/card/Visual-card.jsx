import styles from './page-card.module.scss'
import frame1 from '../../../assets/img/frame1.png'

function VisualCard({ imageSrc = frame1, text = 'TEXT' }) {
  return(
    <div className={styles['pagecard__visual']}>
      <div className={styles['pagecard__visual-img']}>
        <img src={imageSrc} alt="" />
      </div>
      <div className={styles['pagecard__visual-text']}>
        {text}
      </div>
    </div>
  )
}

export default VisualCard;