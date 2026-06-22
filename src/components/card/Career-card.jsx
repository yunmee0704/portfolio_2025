const careerList = [
  {
    id: 1,
    title: "삼도리",
    projectHeadline: "새마을금고 통합솔루션 재구축 프로젝트",
    period: "2026.01 — 2026.05",
    desc: [
      "Vue.js 기반 서비스에서 기존 컴포넌트 구조를 분석하고 재사용하여 UI 개발 수행",
      "디자인 시안을 기반으로 페이지 퍼블리싱 및 인터랙션 구현, 반응형 대응",
      "요구사항에 맞는 신규 컴포넌트 추가 및 구조 확장을 통해 유지보수성과 확장성 개선",
    ],
    leaveReason: "퇴직 사유: 경영악화로 인한 퇴직",
  },
  {
    id: 2,
    title: "포유소프트",
    period: "2024.07 — 2025.12",
    desc: [
      "SCSS 기반 구조화, 컴포넌트 표준화, 퍼블리싱 가이드 구축을 통해 대규모 페이지 효율화",
      "웹/모바일 신규 구축 및 유지보수 전반을 맡으며 실제 서비스 운영 품질을 개선",
      "React 기반 앱 UI 스타일 유지보수로 프론트엔드 협업 & 컴포넌트 구조 이해",
    ],
    leaveReason: "퇴직 사유: 경영악화로 인한 퇴직",
  },
  {
    id: 3,
    title: "에듀윌",
    period: "2022.05 — 2023.08",
    desc: [
      "공무원·자격증 서비스의 이벤트 페이지 및 상품 상세 페이지 퍼블리싱 담당",
      "대표 과목 사이트 운영 및 신규 수험정보 페이지 구축 경험 보유",
      "구조화된 마크업, 반응형 적용, 시안 정확도 높은 정밀 퍼블리싱 수행",
    ],
    leaveReason: "퇴직 사유: 경영악화로 인한 퇴직",
  },
];

function CareerCard() {
  return (
    <ul className="lineage-timeline">
      {careerList.map((item) => (
        <li className="lineage-item" key={item.id}>
          <div className="lineage-item__meta">
            <span className="lineage-item__period">{item.period}</span>
          </div>
          <h3 className="lineage-item__company">{item.title}</h3>
          <div className="lineage-item__body">
            {item.projectHeadline && (
              <p className="lineage-item__project">{item.projectHeadline}</p>
            )}
            <ul>
              {item.desc.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            {item.leaveReason && (
              <p className="lineage-item__leave">{item.leaveReason}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CareerCard;
