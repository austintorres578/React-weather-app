import React, { useState, useEffect } from "react";
import InfoSection from "./InfoSection";
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
        </div>
    )
}