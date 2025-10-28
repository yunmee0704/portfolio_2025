import "./Card.scss";

const snsList = [
    {id : 1, link:"link1", src:"/src/assets/img/skills_icon_1.png",alt:"블로그"},
    {id : 2, link:"link2", src:"/src/assets/img/skills_icon_1.png",alt:"깃헙"},
    {id : 3, link:"link3", src:"/src/assets/img/skills_icon_1.png",alt:"포트폴리오"},
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
        <ul className="card-sns">
            {snsItem}
        </ul>
    )
}

export default SnsCard;