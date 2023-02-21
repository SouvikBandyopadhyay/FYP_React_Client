import { useState,useEffect } from "react";

function useFetch(url){

    
  const [error,setError]=useState(null);
  const [pending,setPending]=useState(true);
  const [data,setData]= useState([]);

    
  useEffect(()=>{
    
  const controller=new AbortController();
    
        fetch(url,{signal:controller.signal})
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
        
  },[url])
    return {
        data,error,pending
    }
}

export default useFetch