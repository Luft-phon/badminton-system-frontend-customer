import "../../../css/LessonCard.css";
function LessonCard({info}){
    return(
        <div className="card">
            <div className="card-image">
                <img src="/photos/event.jpg" alt="" />
            </div>
            <div className="card-content">
                <h3>{info.title}</h3>
                <p>{info.content}</p>
                <p>{info.peopleIcon}{info.people}</p>
                <p>{info.timeIcon}{info.time}</p>
                <p>{info.price}</p>
                <button className="card-btn">Reserve now</button>
            </div>
        </div>
    )
}

export default LessonCard;  