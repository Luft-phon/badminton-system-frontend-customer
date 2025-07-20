import "../css/NotFound.css"
function NotFound(){
    return(
        <div className="not-found-container">
            <div className="not-found-status"><h1>404</h1></div>
            <div className="not-found-content">Sorry, we couldn't find that page</div>
        </div>
    )
}

export default NotFound