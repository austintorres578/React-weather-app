import React from "react";

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
                    <p className="rain-percent">7%</p>
                </div>
                <div>
                    <p className="day">Tue</p>
                    <p className="day-high">93°</p>
                    <p className="day-low">70°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">6%</p>
                </div>
                <div>
                    <p className="day">Wed</p>
                    <p className="day-high">91°</p>
                    <p className="day-low">72°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">2%</p>
                </div>
                <div>
                    <p className="day">Thur</p>
                    <p className="day-high">99°</p>
                    <p className="day-low">75°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">14%</p>
                </div>
                <div>
                    <p className="day">Fri</p>
                    <p className="day-high">93°</p>
                    <p className="day-low">73°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">51%</p>
                </div>
            </div>
            <div className="daily-forecast-button-container">
                <button>Next 10 Days</button>
            </div>
        </section>
    )
}