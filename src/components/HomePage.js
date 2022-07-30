import React from "react";
import InfoSection from "./InfoSection";
import NavBar from "./NavBar";

export default function HomePage(){


    return(
        <div className="home-page">
            <NavBar/>
            <InfoSection />
        </div>
    )
}