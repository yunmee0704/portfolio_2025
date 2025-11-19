import styles from "./Card.module.scss";

const snsList = [
    {id : 1, link:"link1", src:"/src/assets/img/contact_1.png",alt:"블로그"},
    {id : 2, link:"link2", src:"/src/assets/img/contact_2.png",alt:"깃헙"}
]

const snsItem = snsList.map(item =>
    <li key={item.id}>
        <a href={item.link}>
            <img src={item.src} alt={item.alt} />
        </a>
    </li>
)

function SnsCard(){
    return (
        <ul className={styles['card-sns']}>
            {snsItem}
        </ul>
    )
}

export default SnsCard;