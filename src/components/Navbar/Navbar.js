import {Link} from "react-router-dom"
import React from 'react'

function Navbar(){
    return (
        <div className="Navbar">
            <ul className="flex-row">
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