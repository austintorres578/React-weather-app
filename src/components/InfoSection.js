import React from "react";
import DailyForecast from "./DailyForecast";
import HourlySection from "./HourlySection";
import TempertureBlock from "./TempertureBlock";
import TimeOfDay from "./TimeOfDay";
import WeatherStats from "./WeatherStats";

export default function InfoSection(){
    return(
        <section className="info-section-container">
            <TempertureBlock />
            <TimeOfDay />
            <WeatherStats/>
            <HourlySection />
            <DailyForecast />
        </section>
    )
}