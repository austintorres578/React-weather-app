import React from "react";

export default function TempertureBlock(){
    return(
        <section className="temperture-block-container">
            <div className="temperture-location">
                <p>Union, NJ As of 2:00 pm EDT</p>
            </div>
            <div className="temperture">
                <div>
                    <p className="big-weather">99°</p>
                    <p className="weather-type">Sunny</p>
                    <p className="day-night">Day: 99° / Night: 01°</p>
                </div>
                <div className="weather-image">
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png"></img>
                </div>
            </div>
        </section>
    )
}