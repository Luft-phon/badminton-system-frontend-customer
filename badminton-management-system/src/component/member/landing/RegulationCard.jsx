import "../../../css/RegulationCard.css";
function RegulationCard({ regulation }) {
    return (
        <div className="regulation-card">
            <h3>{regulation.title}</h3>
            <p>{regulation.description}</p>
        </div>
    );
}

export default RegulationCard;