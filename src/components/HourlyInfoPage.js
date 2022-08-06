import React from "react";
import HourlyInfoSection from "./HourlyInfoSection";
import NavBar from "./NavBar";

export default function HourlyInfoPage(props){

    return(
        <section>
            <NavBar
                dataObject={props.recievedData}
                currentZip={props.defaultZip}
                changeZip={props.setDefaultZip}
                searchZip={props.getData}
            />
            <HourlyInfoSection
                dataObject={props.recievedData}
                currentZip={props.defaultZip}
                changeZip={props.setDefaultZip}
                searchZip={props.getData}
            />
        </section>
    )
}