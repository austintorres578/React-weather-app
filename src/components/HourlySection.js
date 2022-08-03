import React from "react";
import rainIcon from "../images/rain-icon.png"

export default function HourlySection(props){

    let hour


    if(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length).length===5){
        hour = props.dataObject.current.last_updated.slice(11,13)
    }
    

    function timeChecker (num,x){
        let combinedHour = num + x;
        if(combinedHour>24){
            combinedHour=`${combinedHour-24}:00 AM`
        }
        else if(combinedHour>12){
            combinedHour=`${combinedHour-12}:00 PM`
        }else if(combinedHour===12){
            combinedHour=`${combinedHour}:00 PM`
        }else if(combinedHour=="00"){
            combinedHour="12:00 AM"
        }else{
            combinedHour=`${combinedHour}:00 AM`
        }
        return combinedHour
    }

    return(
        <section id="hourly-forecast" className="hourly-section-container">
            <div className="hourly-section-header">
                <p>Hourly Forecast</p>
            </div>
            <div className="hourly-time-blocks">
                <div>
                    <p className="hourly-header">Now</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[0].hour[Number(hour)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[Number(hour)].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[0].hour[hour].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="hourly-header">{timeChecker(Number(hour),1)}</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[0].hour[Number(hour)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[Number(hour)+1].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[0].hour[hour].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="hourly-header">{timeChecker(Number(hour),2)}</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[0].hour[Number(hour)+1].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[Number(hour)+2].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[0].hour[hour].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="hourly-header">{timeChecker(Number(hour),3)}</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[0].hour[Number(hour)+2].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[Number(hour)+4].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[0].hour[hour].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="hourly-header">{timeChecker(Number(hour),4)}</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[0].hour[Number(hour)+3].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[Number(hour)+4].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[0].hour[hour].chance_of_rain}`}%</p>
                    </div>
                </div>
            </div>
            <div className="hourly-button-container">
                <button>Next 48 Hours</button>
            </div>
        </section>
    )
}