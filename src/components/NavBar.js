import React from "react";
import siteBannerNight from "../images/site-banner-night.png"
import hamMenuNight from "../images/ham-menu-night.png"
import accountIconNight from "../images/account-icon-night.png"
import premiumIconNight from "../images/premium-icon-night.png"
import tempIconNight from "../images/temp-icon-night.png"

export default function NavBar(props){

    console.log(props.dataObject)

    return(
        <nav className="nav-bar-container">
            <div className="top-nav">
                <div className="logo-container">
                    <img src={siteBannerNight}></img>
                </div>
                <div className="zip-search-container">
                    <form>
                        <input id="zip-search" placeholder="Search Zip Code"></input>
                    </form>
                </div>
                <div className="nav-buttons-container">
                    <button><img src={tempIconNight}></img></button>
                    <button><img src={premiumIconNight}></img></button>
                    <button><img src={accountIconNight}></img></button>
                    <button><img src={hamMenuNight}></img></button>
                </div>
            </div>
            <div className="middle-nav">
                <div>
                    <div className="current-location-container">
                        <p>{`${props.dataObject.current.temp_f}`}° {`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`} </p>
                    </div>
                </div>
            </div>
            <div className="bottom-nav">
                <div className="time-div-containers">
                    <div>
                        <p>Today</p>
                    </div>
                    <div>
                        <p>Hourly</p>
                    </div>
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
                        <p>Floods</p>
                    </div>
                    <div>
                        <p>More Forecasts</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}