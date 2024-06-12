
const AppCard = (props) => {
    return(
        <div className="card">
            <img src={props.image}/>
            <h4>{props.company}</h4>
            <h4>{props.location}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default AppCard;