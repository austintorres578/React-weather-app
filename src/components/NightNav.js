import {React,useState} from "react";
import {Link} from "react-router-dom";

import siteBannerDayDesk from "../images/site-banner-night.png"
import siteBannerDayMobile from "../images/site-banner-night-mobile.png"
import tempIconNight from "../images/temp-icon-night.png"
import premiumIcon from "../images/premium-icon-night.png"
import accountIcon from "../images/account-icon-night.png"
import hamMenu from "../images/ham-menu-night.png"

import HamSubMenu from "./HamSubMenu";

export default function NightNav(props){

    const [toggleHam, setToggleHam] = useState(false)


    function search(event){
        event.preventDefault()
        props.searchZip(document.getElementById("zip-search").value)

    }

    function ham(){
        toggleHam ? setToggleHam(false) : setToggleHam(true);
    }
    
    return(
        <div>
            <div className="page-selector">
                        <p>API Data only support Home and 3 Day pages</p>
                        <div>
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/details"><li>3 Day</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div style={{backgroundColor:`${props.navColor.topNav.backgroundColor}`}}className="top-nav">
                        <div className="site-banner">
                            <Link to="/"><img className="desk-site-logo" src={siteBannerDayDesk}></img></Link>
                            <Link to="/"><img className="mobile-site-logo" src={siteBannerDayMobile}></img></Link>
                        </div>
                        <div className="zip-search-container">
                            <form onSubmit={search}>
                                <input style={{backgroundColor:`${props.navColor.topNav.inputBackgroundColor}`}} id="zip-search" placeholder="Search Zip Code"></input>
                            </form>
                            <button onClick={search} className="search-button">Search</button>
                        </div>
                        <div className="top-nav-buttons">
                            <img src={tempIconNight}></img>
                            <img src={premiumIcon}></img>
                            <img src={accountIcon}></img>
                            <img className="ham-button" onClick={ham} src={hamMenu}></img>
                        </div>
                    </div>
            {toggleHam ? <HamSubMenu /> : <div></div>}
        </div>
    )
}