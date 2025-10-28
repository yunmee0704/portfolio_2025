import "./Card.scss";

const careerList = [
    {id: 1, title: 'career1',period:'period1', desc :"desc1"},
    {id: 2, title: 'career2', period:'period2',desc :"desc2"},
    {id: 3, title: 'career3',period:'period3', desc :"desc3"}
]

const careerItem = careerList.map(item =>
    <div className="card card-career" key={item.id}>
    <div className="card-career__details">
        <div className="card-career__details-item">
            <div className="card-career__details-company">
            {item.title}
            </div>
            <div className="card-career__details-period">
            {item.period}
            </div>
        </div>
    </div>
    <div className="card-career__description">
     {item.desc}
    </div>
</div>
)
function CareerCard() {
    return (
        careerItem
    )
}

export default CareerCard;