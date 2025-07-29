import '../../../css/AboutCard.css'
function AboutCard({card}){
   return (
    <div className="about-card">
      <div className="icon-wrapper">
        {card.icon}
      </div>
      <h3>{card.title}</h3>
      <p>{card.content}</p>
    </div>
  );
}

export default AboutCard