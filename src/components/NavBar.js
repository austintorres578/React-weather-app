import {NavLink, Link} from "react-router-dom";
import siteBannerNightDesk from "../images/site-banner-night.png"
import siteBannerNightMobile from "../images/site-banner-night-mobile.png"
import tempIconNight from "../images/temp-icon-night.png"
import premiumIcon from "../images/premium-icon-night.png"
import accountIcon from "../images/account-icon-night.png"
import hamMenu from "../images/ham-menu-night.png"
import React, { useState } from "react";
import HamSubMenu from "./HamSubMenu";


export default function NavBar(props){

    const [toggleHam, setToggleHam] = useState(false)


    function search(event){
        event.preventDefault()
        props.searchZip(document.getElementById("zip-search").value)

    }

    function test(){
        toggleHam ? setToggleHam(false) : setToggleHam(true);
        console.log(toggleHam)
    }

    return(
            <nav id="nav" className="nav-bar-container">
                <div className="page-selector">
                    <p>API Data Only supported on Hourly and 3 Day pages</p>
                    <div>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/details"><li>3 Day</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="top-nav">
                    <div className="site-banner">
                        <Link to="/"><img className="desk-site-logo" src={siteBannerNightDesk}></img></Link>
                        <Link to="/"><img className="mobile-site-logo" src={siteBannerNightMobile}></img></Link>
                    </div>
                    <div className="zip-search-container">
                        <form onSubmit={search}>
                            <input id="zip-search" placeholder="Search Zip Code"></input>
                        </form>
                        <button onClick={search} className="search-button">Search</button>
                    </div>
                    <div className="top-nav-buttons">
                        <img src={tempIconNight}></img>
                        <img src={premiumIcon}></img>
                        <img src={accountIcon}></img>
                        <img className="ham-button" onClick={test} src={hamMenu}></img>
                    </div>
                </div>
                {toggleHam ? <HamSubMenu /> : <div></div>}
                <div className="middle-nav">
                    <div>
                        <div className="current-location-container">
                            <p>{`${props.dataObject.current.temp_f}`}° {`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`} </p>
                        </div>
                    </div>
                </div>
                <div className="bottom-nav">
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

