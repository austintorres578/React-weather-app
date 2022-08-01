import React from "react";
import highLowIcon from "../images/high-low-icon.png"
import humidityIcon from "../images/humidity-icon.png"
import pressureIcon from "../images/pressure-icon.png"
import visibilityIcon from "../images/visibility-icon.png"
import windIcon from "../images/wind-icon.png"
import dewPointIcon from "../images/dew-point-icon.png"
import uvIndex from "../images/uv-index.png"
import moonIcon from "../images/moon-icon.png"

export default function WeatherStats(){
    return(
        <section className="weather-stats-container">
            <div className="weather-stats-header">
                <p>Weather Today in Union, NJ</p>
            </div>
            <div className="weather-stats-feel-container">
                <div className="weather-stats-feel">
                    <p className="temperture-feel">87°</p>
                    <p className="feels-like-text">Feels Like</p>
                </div>
                <div className="weather-stats-image">
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png"></img>
                </div>
            </div>
            <div className="weather-stats">
                <div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={highLowIcon}></img>
                            <p>High/Low</p>
                        </div>
                        <div>
                            <p>--/67°</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={humidityIcon}></img>
                            <p>Humidity</p>
                        </div>
                        <div>
                            <p>52%</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={pressureIcon}></img>
                            <p>Pressure</p>
                        </div>
                        <div>
                            <p>30.14 in</p> 
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={visibilityIcon}></img>
                            <p>Visibility</p>
                        </div>
                        <div>
                            <p>10 mi</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={windIcon}></img>
                            <p>Wind</p>
                        </div>
                        <div>
                            <p>4 mph</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={dewPointIcon}></img>
                            <p>Dew Point</p>
                        </div>
                        <div>
                            <p>56</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={uvIndex}></img>
                            <p>UV Index</p>
                        </div>
                        <div>
                            <p>0 of 10</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={moonIcon}></img>
                            <p>Moon Phase</p>
                        </div>
                        <div>
                           <p>Waxing Crescent</p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}