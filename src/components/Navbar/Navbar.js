import {Link} from "react-router-dom"
import React from 'react'

function Navbar(){
    return (
        <div className="Navbar">
            <ul className="flex-row">
                <li><a href={"/"}>Home</a></li>
                <li><a href={"landanalysis"}>Land Analysis</a></li>
                <li><a href={"inspection"}>Damage Inspection</a></li>
                <li><a href={"sentiment"}>Sentiment Analysis</a></li>
                <li><a href={"login"}>Login</a></li>
            </ul>
        </div>
    )
    };

export default Navbar;