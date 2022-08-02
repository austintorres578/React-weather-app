import React from "react";
import rainIcon from "../images/rain-icon.png"

export default function DailyForecast(){
    return(
        <section className="daily-forecast-container">
            <div className="daily-forecast-header">
                <p>Daily Forecast</p>
            </div>
            <div className="daily-blocks">
                <div>
                    <p className="day">Today</p>
                    <p className="day-high">82°</p>
                    <p className="day-low">71°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">14%</p>
                    </div>
                </div>
                <div>
                    <p className="day">Tue</p>
                    <p className="day-high">93°</p>
                    <p className="day-low">70°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">14%</p>
                    </div>
                </div>
                <div>
                    <p className="day">Wed</p>
                    <p className="day-high">91°</p>
                    <p className="day-low">72°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">14%</p>
                    </div>
                </div>
                <div>
                    <p className="day">Thur</p>
                    <p className="day-high">99°</p>
                    <p className="day-low">75°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">14%</p>
                    </div>
                </div>
                <div>
                    <p className="day">Fri</p>
                    <p className="day-high">93°</p>
                    <p className="day-low">73°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">14%</p>
                    </div>
                </div>
            </div>
            <div className="daily-forecast-button-container">
                <button>Next 10 Days</button>
            </div>
        </section>
    )
}