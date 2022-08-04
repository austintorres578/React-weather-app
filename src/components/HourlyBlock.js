import React from "react";
import rainIcon from "../images/rain-icon.png"

export default function HourlyBlock(props){

    console.log(props)

    return(
        <div>
            <p className="hourly-header">{props.time}</p>
            <p className="hourly-temp">{`${props.temp}`}°</p>
            <img src={`${props.image}`}></img>
            <div className="rain-percent-container">
                <img src={rainIcon}></img>
                <p className="rain-percent">{`${props.rain}`}%</p>
            </div>
        </div>
    )
}