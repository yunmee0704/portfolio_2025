import "./Card.scss";

const workList = [
    {id: 1, src:'src1', title: 'work1', desc :"desc1"},
    {id: 2, src:'src2', title: 'work2',desc :"desc2"},
    {id: 3, src:'src3', title: 'work3', desc :"desc3"},
    {id: 4, src:'src4', title: 'work4', desc :"desc4"},
    {id: 5, src:'src5', title: 'work5',desc :"desc5"},
    {id: 6, src:'src6', title: 'work6', desc :"desc6"}

];

const workItem = workList.map(item => 
    <div className="card card-work" key={item.id}>
    <a href={item.src} className="card-work__link" >
      <div className="card-work__img">
        <img src="/src/assets/img/work_card_1.png" alt="work img" />
      </div>
      <div className="card-work__title">{item.title}</div>
      <div className="card-work__description">
      {item.desc}
      </div>
    </a>
  </div>
)



function WorkCard() {
  return (
    workItem
  );
}

export default WorkCard;
