import { useState } from "react";
import Piechart from "./Piechart";
import React from 'react'

const Sentiment = () => {
    const maxNoOfTweets=500
    const minNoOfTweets=10

    const [keyword,setKeyword]=useState("")
    const [noOfTweets,setNoOfTweets]=useState(100)
    const [error,setError]=useState(null);
    const [pending,setPending]=useState(false);
    const [data,setData]= useState(false);
    
        
        
    const controller=new AbortController();
    function apicaller(){
        setPending(true)
        fetch("/sentimentanalysis",
        {signal:controller.signal,
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify({"keyword":keyword,"numoftweets":noOfTweets})
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

     function analyse(e){
        e.preventDefault()
        apicaller()
     }


    return ( 
        <div>
            <div>
                <h1>Sentiment Analysis</h1>
            </div>
            <div>
                <div>
                    <input disabled={pending} type="text"  value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
                </div>
                <div>
                    <p>{minNoOfTweets}</p>
                    <input disabled={pending} type="range" max={maxNoOfTweets} min={minNoOfTweets}  value={noOfTweets} onChange={(e)=>setNoOfTweets(e.target.value)}/>
                    <p>{maxNoOfTweets}</p>
                </div>
                <div>
                    <button disabled={pending} onClick={(e)=>analyse(e)}>
                        Analyse
                    </button>
                </div>
            </div>
            {(pending===false && data!=false) && <div>
                <div>
                    <p>Posetive:{data.pos}</p>
                </div>
                <div>
                    <p>Negetive:{data.neg}</p>
                </div>
                <div>
                    <Piechart data={data}></Piechart>
                </div>
            </div>}
        </div>
     );
}
 
export default Sentiment;