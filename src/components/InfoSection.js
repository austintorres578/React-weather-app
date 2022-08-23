import React from "react";
import DailyForecast from "./DailyForecast";
import HourlySection from "./HourlySection";
import MobileWeatherCombo from "./MobileWeatherCombo";
import TempertureBlock from "./TempertureBlock";
import TimeOfDay from "./TimeOfDay";
import WeatherStats from "./WeatherStats";

export default function InfoSection(props){

    return(
        <section style={{backgroundColor:`${props.navColor.page.backgroundColor}`}} className="info-section-container">
            <TempertureBlock 
                dataObject={props.dataObject}
            />
            <TimeOfDay 
                dataObject={props.dataObject}
                recieved={props.recieved}
            />
            <MobileWeatherCombo 
                dataObject={props.dataObject}
            />
            <WeatherStats
                dataObject={props.dataObject}
            />
            <HourlySection 
                dataObject={props.dataObject}
            />
            <DailyForecast 
                dataObject={props.dataObject}
            />
        </section>
    )
}