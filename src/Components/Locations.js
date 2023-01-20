import {IoLocationSharp} from "react-icons/io5"

export default function Locations(props) {
    return (
        <div className="location-section">
            <img src={props.imageUrl} className="location-img"></img>
            <div className="location-info-section">
                <div className="location-top-section">
                    <IoLocationSharp className="location-icon"/>
                    <h3 className="location-country">{props.location}</h3>
                    <a href={props.googleMapsUrl} className="google-maps" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h1 className="location-title">{props.title}</h1>
                <h4 className="location-dates">{props.startDate} - {props.endDate}</h4>
                <p className="location-description">{props.description}</p>
            </div>
        </div>
    )
}