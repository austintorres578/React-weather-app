import {NavLink, Link, Router} from "react-router-dom";
import React from "react";

export default function NavBar(props){


    console.log(props.dataObject)

    function search(event){
        event.preventDefault()
        props.searchZip(document.getElementById("zip-search").value)

    }

    return(
        <nav className="nav-bar-container">
            <div className="top-nav">
                <div className="zip-search-container">
                    <form onSubmit={search}>
                        <input id="zip-search" placeholder="Search Zip Code"></input>
                    </form>
                </div>
                <button onClick={search} className="search-button">Search</button>
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
                        <p>Home</p>
                    </div>
                    <div>
                        <p>Hourly</p>
                    </div>
                    <div>
                        <p>3 Day</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}