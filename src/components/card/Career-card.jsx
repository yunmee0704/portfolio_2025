import "./Card.scss";

function CareerCard() {
    return (
        <div className="card card-career">
            <div className="card-career__details">
                <div className="card-career__details-item">
                    <div className="card-career__details-company">
                        Company Name
                    </div>
                    <div className="card-career__details-period">
                        Period
                    </div>
                </div>
            </div>
            <div className="card-career__description">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </div>
        </div>
    )
}

export default CareerCard;