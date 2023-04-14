import { useEffect, useState } from "react";
import { MapContainer } from "./MapContainer";
import Output from "./Output";
import React from 'react'

const Landanalysis = () => {

    const [inputtype,setInputtype]=useState("Map")
    const [toggle,setToggle]=useState(0)


    const [longitude,setLongitude]=useState("")
    const [latitude,setLatitude]=useState("")
    const [submit,setSubmit]=useState(false)
    const [latitudemain,setLatitudemain]=useState("")
    const [longitudemain,setLongitudemain]=useState("")
    const [date,setdate]=useState()
    const [area,setarea]=useState(5)

    function submitinput(e){
        e.preventDefault();
        setSubmit(true);
        setLatitudemain(latitude);
        setLongitudemain(longitude);
        apicaller();
        setToggle(1)
    }

    const handleBack=()=>{
        setToggle(0)
    }

    const [error,setError]=useState(null);
    const [pending,setPending]=useState(false);
    const [data,setData]= useState(false);
    
        
        
    const controller=new AbortController();
    function apicaller(){
        setPending(true)
        fetch("/landanalysis",
        {signal:controller.signal,
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify({"area":area,"date":date,"lat":latitudemain,"long":longitudemain})
        })
            .then(response => {
                if(!response.ok){
                    throw Error("Could not get data")
                }
            return response.json()
            })
            .then(json => {
            setData(json.response)
            setPending(false)
            setError(null)
            console.log(json)
            })
            .catch((err)=>{
                if(err.name==="AbortError"){
                    console.log("fetch aborted")
                }
                else{
                    setError(err.message)
                    setPending(false)
                }
            }
            )
     }

    useEffect(()=>{
        console.log(latitude,longitude)
    },[latitude,longitude])

    return ( 
        <div className="Landanalysis">
            <h1>Land Analysis</h1>
            <div className="Landanalysis-body">
            {toggle==0 && <div className="Landanalysis-input">
            <div>
                <p>Date: </p>
                <input required="true" type="date" onChange={(e)=>{setdate(e.target.value)}} value={date}/>
            </div>
            <div>
                <p>Sqr. Km. Area: </p>
                <input required="true" type="number" onChange={(e)=>{setarea(e.target.value)}} value={area}/>
            </div>
                
                
                    
                <div>
                    Cordinates
                </div>
                <div className="ispection-input">
                    <input required="true" type="number" name="longitude" className="longitude" placeholder="Longitude" 
                    onChange={(e)=>{setLongitude(e.target.value)}} value={longitude}/>
                    <input required="true" type="number"  name="latitude" className="latitude" placeholder="Latitude"
                    onChange={(e)=>{setLatitude(e.target.value)}} value={latitude}/>
                    <input onClick={(e)=>submitinput(e)} type="submit"/>
                </div>
                <div>
                    <MapContainer latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude}></MapContainer>
                </div>
                </div>}
                {toggle==1 && <div className="Landanalysis-output">
                    <Output value={latitude} handleBack={handleBack}></Output>
                </div>}
            </div>
        </div>
     );
}
 
export default Landanalysis;