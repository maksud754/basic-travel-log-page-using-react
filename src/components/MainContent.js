export default function MainContent(props) {
    return (
        <div className="main-content">
            <img src={props.item.img} alt="image" className="content-image" />
            <div class="content-info">
                <p><img src={props.item.locIcon} alt="icon" className="location-icon" /> <a href={props.item.gmapLink}>{props.item.location}</a></p>
                <h1>{props.item.title}</h1>
                <p><strong>Date: {props.item.startDate} / {props.item.endDate}</strong></p>
                <p>{props.item.description}</p>
            </div>

        </div>
    )
}