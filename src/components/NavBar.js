import {NavLink, Link} from "react-router-dom";
import React, { useState } from "react";

import siteBannerDayDesk from "../images/site-banner-day.png"
import siteBannerEveningDesk from "../images/site-banner-evening.png"
import siteBannerNightDesk from "../images/site-banner-night.png"
import siteBannerNightMobile from "../images/site-banner-night-mobile.png"
import tempIconNight from "../images/temp-icon-night.png"
import premiumIcon from "../images/premium-icon-night.png"
import accountIcon from "../images/account-icon-night.png"
import hamMenu from "../images/ham-menu-night.png"

import DayNav from "./DayNav";
import NightNav from "./NightNav";
import EveningNav from "./EveningNav";



export default function NavBar(props){

    function navChanger(){
        let topNav

        if(props.currentHour>6&&props.currentHour<17){
             topNav=
            <DayNav 
                searchZip={props.searchZip}
                navColor={props.navColor}
            />
        }else if(props.currentHour>17&&props.currentHour<23){
             topNav=
            <EveningNav
                searchZip={props.searchZip}
                navColor={props.navColor}
            />
        }else{
            topNav=<NightNav
                searchZip={props.searchZip}
                navColor={props.navColor}
            />
        }
        return topNav
    }

    return(
            <nav id="nav" className="nav-bar-container">
                {navChanger()}
                <div style={{backgroundColor:`${props.navColor.middleNav.backgroundColor}`}} className="middle-nav">
                    <div>
                        <div className="current-location-container">
                            <img src={`${props.dataObject.current.condition.icon}`}></img>
                            <p>{`${props.dataObject.current.temp_f}`}° {`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`} </p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:`${props.navColor.bottomNav.backgroundColor}`}} className="bottom-nav">
                    <div className="time-div-containers">
                            <NavLink to="/" className={({isActive})=>(isActive ? "active-link":"")}>
                                <div>
                                    <p>Today</p>
                                </div>
                            </NavLink>
                            <NavLink to="/details" className={({isActive})=>(isActive ? "active-link":"")}>
                                <div>
                                    <p>Hourly</p>
                                </div>
                            </NavLink>
                            <div>
                                <p>10 Day</p>
                            </div>
                            <div>
                                <p>Weekend</p>
                            </div>
                            <div>
                                <p>Monthly</p>
                            </div>
                            <div>
                                <p>Radar</p>
                            </div>
                            <div>
                                <p>Video</p>
                            </div>
                            <div>
                                <p>More Forecasts</p>
                            </div>
                    </div>
                </div>
            </nav>
    )
}

