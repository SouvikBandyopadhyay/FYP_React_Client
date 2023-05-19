import {Link} from "react-router-dom"
import React from 'react'
import Navi from "./Navbar.module.css"

import image from "../../Images/p.png"

function Navbar(){
    return (
        <div className={Navi.nav1}>
            <a href="#">
            <img src={image} alt="Logo"/>
            </a>
            <ul >
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"landanalysis"}>Land Analysis</Link></li>
                <li><Link to={"inspection"}>Damage Inspection</Link></li>
                <li><Link to={"sentiment"}>Sentiment Analysis</Link></li>
                <li><Link to={"login"}>Login</Link></li>
            </ul>
        </div>
    )
    };

export default Navbar;