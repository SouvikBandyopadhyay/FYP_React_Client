import { useEffect, useState } from "react";
import useFetch from "../../HelperFunctions/useFetch";
import Output from "./Output";
import L from "leaflet"

const Inspection = () => {



    const [longitude,setLongitude]=useState("")
    const [latitude,setLatitude]=useState("")
    const [submit,setSubmit]=useState(false)
    const [latitudemain,setLatitudemain]=useState("")
    const [longitudemain,setLongitudemain]=useState("")

    function submitinput(e){
        e.preventDefault();
        setSubmit(true);
        setLatitudemain(latitude)
        setLongitudemain(longitude)
    }

    return ( 
        <div className="Inspection">
            <h1>Inspection</h1>
            <div className="inspection-body">
                <div className="ispection-input">
                    <form onSubmit={(e)=>{submitinput(e)}}>
                        <input type="number" className="longitude" placeholder="Longitude" 
                        onChange={(e)=>{setLongitude(e.target.value)}} value={longitude}/>
                        <input type="number" className="latitude" placeholder="Latitude"
                        onChange={(e)=>{setLatitude(e.target.value)}} value={latitude}/>
                        <input type="submit"/>
                    </form>
                </div>
                <div id="map"></div>
                <div className="inspection-output">
                    {submit && <Output latitude={latitudemain} longitude={longitudemain}></Output>}
                </div>
            </div>
        </div>
     );
}
 
export default Inspection;