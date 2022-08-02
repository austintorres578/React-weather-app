import React from "react";
import rainIcon from "../images/rain-icon.png"

export default function DailyForecast(props){

    let day = new Date();
    console.log(day.getDay()); 

    function dayChecker(date){
        if(date===0){
            return "Sun"
        }
        if(date===1){
            return "Mon"
        }
        if(date===2){
            return "Tues"
        }
        if(date===3){
            return "Wed"
        }
        if(date===4){
            return "Thur"
        }
        if(date===5){
            return "Fri"
        }
        if(date===6){
            return "Sat"
        }
        
    }

    return(
        <section className="daily-forecast-container">
            <div className="daily-forecast-header">
                <p>Daily Forecast</p>
            </div>
            <div className="daily-blocks">
                <div>
                    <p className="day">Today</p>
                    <p className="day-high">{`${props.dataObject.forecast.forecastday[0].day.maxtemp_f}`}°</p>
                    <p className="day-low">{`${props.dataObject.forecast.forecastday[0].day.mintemp_f}`}°</p>
                    <img src={props.dataObject.forecast.forecastday[0].day.condition.icon}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[0].day.daily_chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="day">{dayChecker(day.getDate()+1)}</p>
                    <p className="day-high">{`${props.dataObject.forecast.forecastday[1].day.maxtemp_f}`}°</p>
                    <p className="day-low">{`${props.dataObject.forecast.forecastday[1].day.mintemp_f}`}°</p>
                    <img src={props.dataObject.forecast.forecastday[1].day.condition.icon}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[1].day.daily_chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="day">{dayChecker(day.getDate()+2)}</p>
                    <p className="day-high">{`${props.dataObject.forecast.forecastday[2].day.maxtemp_f}`}°</p>
                    <p className="day-low">{`${props.dataObject.forecast.forecastday[2].day.mintemp_f}`}°</p>
                    <img src={props.dataObject.forecast.forecastday[2].day.condition.icon}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[2].day.daily_chance_of_rain}`}%</p>
                    </div>
                </div>
            </div>
            <div className="daily-forecast-button-container">
                <button>Next 10 Days</button>
            </div>
        </section>
    )
}