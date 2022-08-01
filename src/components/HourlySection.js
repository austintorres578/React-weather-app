import React from "react";

export default function HourlySection(){
    return(
        <section className="hourly-section-container">
            <div className="hourly-section-header">
                <p>Hourly Forecast</p>
            </div>
            <div className="hourly-time-blocks">
                <div>
                    <p className="hourly-header">Now</p>
                    <p className="hourly-temp">71°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">1%</p>
                </div>
                <div>
                    <p className="hourly-header">11 am</p>
                    <p className="hourly-temp">72°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">2%</p>
                </div>
                <div>
                    <p className="hourly-header">12 pm</p>
                    <p className="hourly-temp">73°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">3%</p>
                </div>
                <div>
                    <p className="hourly-header">1 pm</p>
                    <p className="hourly-temp">73°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">4%</p>
                </div>
                <div>
                    <p className="hourly-header">2 pm</p>
                    <p className="hourly-temp">74°</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></img>
                    <p className="rain-percent">5%</p>
                </div>
            </div>
            <div className="hourly-button-container">
                <button>Next 48 Hours</button>
            </div>
        </section>
    )
}