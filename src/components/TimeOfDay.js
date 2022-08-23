import {React, useEffect, useState} from "react";
import { BrowserRouter, Route, Routes , Link} from "react-router-dom";
import rainIcon from "../images/rain-icon.png"

export default function TimeOfDay(props){

    console.log(props)

    let currentHour = props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length -3);    

    // function timeHighlighter(){
    //     if(props.recieved===true){
    //         if(currentHour>6&&currentHour<12){
    //             document.querySelector(".overnight-header").style.fontWeight="400"
    //             document.querySelector(".morning-header").style.fontWeight="bold"
    //             document.querySelector(".evening-header").style.fontWeight="400"
    //             document.querySelector(".afternoon-header").style.fontWeight="400"
    //         }else if(currentHour>12&&currentHour<17){
    //             document.querySelector(".overnight-header").style.fontWeight="400"
    //             document.querySelector(".morning-header").style.fontWeight="400"
    //             document.querySelector(".evening-header").style.fontWeight="400"
    //             document.querySelector(".afternoon-header").style.fontWeight="bold"
    //         }else if(currentHour>17&&currentHour<22){
    //             document.querySelector(".overnight-header").style.fontWeight="400"
    //             document.querySelector(".morning-header").style.fontWeight="400"
    //             document.querySelector(".evening-header").style.fontWeight="bold"
    //             document.querySelector(".afternoon-header").style.fontWeight="400"
    //         }else{
    //             document.querySelector(".overnight-header").style.fontWeight="bold"
    //             document.querySelector(".morning-header").style.fontWeight="400"
    //             document.querySelector(".evening-header").style.fontWeight="400"
    //             document.querySelector(".afternoon-header").style.fontWeight="400"
    //         }
    //     }else{
    //         console.log("ne")
    //     }
    // }

    // timeHighlighter()

    return(
        <section id="today-forecast" className="time-of-day-container">
            <div className="time-of-day-header">
                <p>Today's Forecast for {`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`}</p>
            </div>
            <div className="time-blocks">
                <div className="time-block">
                    <p className="time-header morning-header">Morning</p>
                    <p className="time-temp">{`${props.dataObject.forecast.forecastday[0].hour[7].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[7].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="time-percent">{`${props.dataObject.forecast.forecastday[0].hour[7].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div className="time-block">
                    <p className="time-header afternoon-header">Afternoon</p>
                    <p className="time-temp">{`${props.dataObject.forecast.forecastday[0].hour[14].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[14].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="time-percent">{`${props.dataObject.forecast.forecastday[0].hour[14].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div className="time-block">
                    <p className="time-header evening-header">Evening</p>
                    <p className="time-temp">{`${props.dataObject.forecast.forecastday[0].hour[18].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[18].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="time-percent">{`${props.dataObject.forecast.forecastday[0].hour[18].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div className="time-block">
                    <p className="time-header overnight-header">Overnight</p>
                    <p className="time-temp">{`${props.dataObject.forecast.forecastday[0].hour[22].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[22].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="time-percent">{`${props.dataObject.forecast.forecastday[0].hour[22].chance_of_rain}`}%</p>
                    </div>
                </div>
            </div>
            <div className="next-hours-button-container">
                    <Link to="/details">
                    <button>Next Hours</button>
                    </Link>
            </div>
        </section>
    )

    }

