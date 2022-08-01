import React from "react";

export default function TimeOfDay(){
    return(
        <section className="time-of-day-container">
            <div className="time-of-day-header">
                <p>Today's Forecast for Union, NJ</p>
            </div>
            <div className="time-blocks">
                <div className="time-block">
                    <p className="time-header">Morning</p>
                    <p className="time-temp">80°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png"></img>
                    <p className="time-percent">0%</p>
                </div>
                <div className="time-block">
                    <p className="time-header">Afternoon</p>
                    <p className="time-temp">88°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="time-percent">0%</p>
                </div>
                <div className="time-block">
                    <p className="time-header">Evening</p>
                    <p className="time-temp">78°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/176.png"></img>
                    <p className="time-percent">0%</p>
                </div>
                <div className="time-block">
                    <p className="time-header">Overnight</p>
                    <p className="time-temp">69°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/night/113.png"></img>
                    <p className="time-percent">0%</p>
                </div>
            </div>
            <div className="next-hours-button-container">
                <button>Next Hours</button>
            </div>
        </section>
    )
}