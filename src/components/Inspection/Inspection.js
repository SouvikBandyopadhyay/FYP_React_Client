import { useEffect, useState } from "react";
import useFetch from "../../HelperFunctions/useFetch";
import Output from "./Output";
import {MapContainer} from "./MapContainer";

const Inspection = () => {



    const [longitude,setLongitude]=useState("")
    const [latitude,setLatitude]=useState("")
    const [submit,setSubmit]=useState(false)
    const [latitudemain,setLatitudemain]=useState("")
    const [longitudemain,setLongitudemain]=useState("")

    
    const [error,setError]=useState(null);
    const [pending,setPending]=useState(true);
    const [data,setData]= useState({message:"Hi"});

        
        
    const controller=new AbortController();
    function apicaller(){

    fetch("/chatbot",
    {signal:controller.signal
    })
        .then(response => {
            if(!response.ok){
                throw Error("Could not get data")
            }
          return response.json()
        })
        .then(json => {
          setData(json)
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



    function submitinput(e){
        e.preventDefault();
        setSubmit(true);
        apicaller();
        console.log("hii")
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
                {/* <div id="map">
                    <MapContainer latitude={latitude} setLatitude={setLatitude} longitude={longitude} setLongitude={setLongitude} latitudemain={latitudemain} longitudemain={longitudemain}></MapContainer>
                </div> */}
                <div className="inspection-output">
                    {submit && <Output latitude={latitudemain} longitude={longitudemain}></Output>}
                </div>
            </div>
        </div>
     );
}
 
export default Inspection;