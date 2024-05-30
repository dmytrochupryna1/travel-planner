export default function Destination(props) {
    return (
        <div class="destination">
            <img src={props.img}/>
            <div class="destination--description">
                <div class="destination--description--first-line">
                    <img src="pin.png"/>
                    <h1>{props.country}</h1>
                    <a href={props.link} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h3>{props.dates}</h3>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}