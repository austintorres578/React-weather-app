import React from "react";

export default function TempertureBlock(props){

    let hour

    if(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length).length===5){
        hour = Number(props.dataObject.current.last_updated.slice(11,13))
    }
    if(hour===0){
        hour="12:00 AM"
    }
    else if(hour===12){
        hour="12:00 PM"
    }
    else if(hour>12){
        hour=`${hour-12}:00 PM`
    }else{
        hour=`${hour}:00 AM`
    }

    return(
        <section className="temperture-block-container">
            <div className="temperture-location">
                <p>{`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`} As of {hour}</p>
            </div>
            <div className="temperture">
                <div>
                    <p className="big-weather">{`${props.dataObject.current.temp_f}`}°</p>
                    <p className="weather-type">{`${props.dataObject.current.condition.text}`}</p>
                    <p className="day-night">Day: {`${props.dataObject.forecast.forecastday[0].day.maxtemp_f}`}° / Night: {`${props.dataObject.forecast.forecastday[0].day.mintemp_f}`}°</p>
                </div>
                <div className="weather-image">
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png"></img>
                </div>
            </div>
        </section>
    )
}