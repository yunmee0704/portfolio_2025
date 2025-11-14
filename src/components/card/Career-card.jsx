import "./Card.scss";

const careerList = [
    {
        id: 1, title: '포유소프트', 
        period: '2024.07 - 2025.12', 
        desc: [
            {id: 1, content: "SCSS 기반 구조화, 컴포넌트 표준화, 퍼블리싱 가이드 구축을 통해 대규모 페이지 효율화"},
            {id: 2, content: "웹/모바일 신규 구축 및 유지보수 전반을 맡으며 실제 서비스 운영 품질을 개선"},
            {id: 3, content: "React 기반 앱 UI 스타일 유지보수로 프론트엔드 협업 & 컴포넌트 구조 이해"},
        ]
    },
    {
        id: 2, title: '포컴퍼니', 
        period: '2024.02 - 2024.06', 
        desc: [
            {id: 1, content: "NAMING. 브랜드몰 전체 리뉴얼 단독 퍼블리싱하여 UI/UX 구조를 개선"},
            {id: 2, content: "시즌·프로모션 페이지 퍼블리싱을 담당하며 마케팅 일정에 맞춘 빠르고 정확한 작업 수행"},
            {id: 3, content: "Cafe24 테마 커스터마이징 및 디자인·마케팅팀과 협업 경험 보유"},
        ]
    },
    {
        id: 3, title: '에듀윌', 
        period: '2022.05 - 2023.08', 
        desc: [
            {id: 1, content: "공무원·자격증 서비스의 이벤트 페이지 및 상품 상세 페이지 퍼블리싱 담당"},
            {id: 2, content: "대표 과목 사이트 운영 및 신규 수험정보 페이지 구축 경험 보유"},
            {id: 3, content: "구조화된 마크업, 반응형 적용, 시안 정확도 높은 정밀 퍼블리싱 수행"},
        ]
    },
  
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
            <ul>
                {item.desc.map((descItem) => (
                    <li key={descItem.id}>- {descItem.content}</li>
                ))}
            </ul>
        </div>
    </div>
)
function CareerCard() {
    return (
        careerItem
    )
}

export default CareerCard;