import React from "react";
import DailyForecast from "./DailyForecast";
import HourlySection from "./HourlySection";
import TempertureBlock from "./TempertureBlock";
import TimeOfDay from "./TimeOfDay";
import WeatherStats from "./WeatherStats";

export default function InfoSection(props){

    return(
        <section className="info-section-container">
            <TempertureBlock 
                dataObject={props.dataObject}
            />
            <TimeOfDay 
                dataObject={props.dataObject}
            />
            <WeatherStats
                dataObject={props.dataObject}
            />
            <HourlySection 
                dataObject={props.dataObject}
            />
            <DailyForecast />
        </section>
    )
}