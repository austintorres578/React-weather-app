import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import MobileFooter from "./MobileFooter";
import NavBar from "./NavBar";

export default function HomePage(props){
    
    let dt = props.recievedData.current.last_updated.slice(11,props.recievedData.current.last_updated.length -3);

    return(
        <div className="home-page">
            <NavBar
                dataObject={props.recievedData}
                currentZip={props.defaultZip}
                changeZip={props.setDefaultZip}
                searchZip={props.getData}
                navColor={props.navColor}
                currentHour={Number(dt)}
                
            />
            <InfoSection 
                dataObject={props.recievedData}
                currentHour={Number(dt)}
                navColor={props.navColor}
                recieved={props.recieved}
            />
            <Footer />
            <MobileFooter />
        </div>
    )
}