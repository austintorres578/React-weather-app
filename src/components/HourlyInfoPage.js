import React from "react";
import Footer from "./Footer";
import HourlyInfoSection from "./HourlyInfoSection";
import MobileFooter from "./MobileFooter";
import NavBar from "./NavBar";

export default function HourlyInfoPage(props){

    let dt = props.recievedData.current.last_updated.slice(11,props.recievedData.current.last_updated.length -3);

    return(
        <section>
            <NavBar
                dataObject={props.recievedData}
                currentZip={props.defaultZip}
                changeZip={props.setDefaultZip}
                searchZip={props.getData}
                navColor={props.navColor}
                currentHour={Number(dt)}
            />
            <HourlyInfoSection
                dataObject={props.recievedData}
                currentZip={props.defaultZip}
                changeZip={props.setDefaultZip}
                searchZip={props.getData}
                navColor={props.navColor}
                recieved={props.recieved}
            />
            <Footer />
            <MobileFooter />
        </section>
    )
}