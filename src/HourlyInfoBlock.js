import React from "react";
import rainIcon from "./images/rain-icon.png"
import windIcon from "./images/wind-icon.png"

export default function HourlyInfoBlock(props){

    console.log(props)

    let hour = Number(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length-3))

    function timeChecker (num,x){
        let combinedHour = num + x;
        if(combinedHour===24){
            combinedHour="12:00 AM"
        }
        else if(combinedHour>23){
            combinedHour=`${combinedHour-24}:00 AM`
            
        }
        else if(combinedHour>12){
            combinedHour=`${combinedHour-12}:00 PM`
        }else if(combinedHour===12){
            combinedHour=`${combinedHour}:00 PM`
        }else if(combinedHour===0){
            combinedHour="12:00 AM"
        }else{
            combinedHour=`${combinedHour}:00 AM`
        }
        
        return combinedHour
    }


        function createBlocks(num){

            let result = []

            for (let index = num; index < props.dataObject.forecast.forecastday[0].hour.length; index++) {
                result.push(
                <div className="hourly-weather-info-buttons">
                    <div>
                        <p>{timeChecker(Number(props.dataObject.forecast.forecastday[0].hour[index].time.slice(11,props.dataObject.forecast.forecastday[0].hour[hour].time.length-3)),0)}</p>
                    </div>
                    <div>
                        <p className="hourly-block-temp">{props.dataObject.forecast.forecastday[0].hour[index].temp_f}°</p>
                    </div>
                    <div>
                        <img className="weather-icon" src={props.dataObject.forecast.forecastday[0].hour[index].condition.icon}></img>
                        <p>{props.dataObject.forecast.forecastday[0].hour[index].condition.text}</p>
                    </div>
                    <div>
                        <img className="rain-icon" src={rainIcon}></img>
                        <p>{props.dataObject.forecast.forecastday[0].hour[index].chance_of_rain}%</p>
                    </div>
                    <div>
                        <img className="wind-icon" src={windIcon}></img>
                        <p className="wind-text">{props.dataObject.forecast.forecastday[0].hour[index].wind_dir} {props.dataObject.forecast.forecastday[0].hour[hour].gust_mph} mph</p>
                    </div>
                </div>
                )
                
                
            }

            return result
        }

        function monthCheck(num){
            if(num===1){
                return "January"
            }
            else if(num===2){
                return "February"
            }
            else if(num===3){
                return "March"
            }
            else if(num===4){
                return "April"
            }
            else if(num===5){
                return "May"
            }
            else if(num===6){
                return "June"
            }
            else if(num===7){
                return "July"
            }
            else if(num===8){
                return "August"
            }
            else if(num===9){
                return "September"
            }
            else if(num===10){
                return "October"
            }
            else if(num===11){
                return "November"
            }
            else if(num===12){
                return "December"
            }
        }

        console.log()

    return(
        <div>
                <div>
                    <p className="hourly-info-block-date">{monthCheck(Number(props.dataObject.forecast.forecastday[0].date.slice(5,props.dataObject.forecast.forecastday[0].date.length-3)))} {Number(props.dataObject.forecast.forecastday[0].date.slice(8,props.dataObject.forecast.forecastday[0].date.length))}</p>
                </div>
                {createBlocks(hour)}
                <div>
                <p className="hourly-info-block-date">{monthCheck(Number(props.dataObject.forecast.forecastday[0].date.slice(5,props.dataObject.forecast.forecastday[0].date.length-3)))} {Number(props.dataObject.forecast.forecastday[1].date.slice(8,props.dataObject.forecast.forecastday[1].date.length))}</p>
                </div>
                {createBlocks(0)}
                <div>
                <p className="hourly-info-block-date">{monthCheck(Number(props.dataObject.forecast.forecastday[0].date.slice(5,props.dataObject.forecast.forecastday[0].date.length-3)))} {Number(props.dataObject.forecast.forecastday[2].date.slice(8,props.dataObject.forecast.forecastday[2].date.length))}</p>
                </div>
                {createBlocks(0)}
        </div>
    )
}