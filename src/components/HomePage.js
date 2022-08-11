import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import MobileFooter from "./MobileFooter";
import NavBar from "./NavBar";

export default function HomePage(props){
    
    console.log(props)
    
    let dt = new Date();

    return(
        <div className="home-page">
            <NavBar
                dataObject={props.recievedData}
                currentZip={props.defaultZip}
                changeZip={props.setDefaultZip}
                searchZip={props.getData}
                
            />
            <InfoSection 
                dataObject={props.recievedData}
                currentHour={dt.getHours()}
            />
            <Footer />
            <MobileFooter />
        </div>
    )
}