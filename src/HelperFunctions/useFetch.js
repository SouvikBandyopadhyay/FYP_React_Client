import { useState,useEffect } from "react";

function useFetch(url,body){

    
  const [error,setError]=useState(null);
  const [pending,setPending]=useState(true);
  const [data,setData]= useState([]);

    
  useEffect(()=>{
    
  const controller=new AbortController();
    
  fetch("/damageinspection",
  {signal:controller.signal,
      method:"POST",
      body:body
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
        
  },[url])
    return {
        data,error,pending
    }
}

export default useFetch