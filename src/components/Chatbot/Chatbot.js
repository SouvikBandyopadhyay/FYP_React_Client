import { useEffect, useState } from "react";
import apicaller from "../../HelperFunctions/apicaller";
import useFetch from "../../HelperFunctions/useFetch";

const Chatbot = () => {

    const [messages,setmesssages]=useState([])
    const [clientmessage,setClientmessage]=useState("");
    const [submit,setSubmit]=useState(0) 

    
    const [error,setError]=useState(null);
    const [pending,setPending]=useState(true);
    const [data,setData]= useState({message:"Hi"});

        
        
    const controller=new AbortController();
    function apicaller(){

    fetch("/chatbot",
    {signal:controller.signal,
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-type":"application/json"
        },
        body:clientmessage
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

    useEffect(()=>{
        addmessage({"sender":"server","message":data.message})
    },[data])
        

    function addmessage(message){
        setmesssages([...messages,message])
    }

    function clientaddedmessage(e){
        setSubmit(submit+1)
        e.preventDefault()
        addmessage({"sender":"client","message":clientmessage})
        apicaller()
        setClientmessage("");
    }

    return ( 
        <div className="Chatbot">
            <h1>Chatbot</h1>
            <div className="chatbox">
                <div className="headdder">
                    Username
                </div>
                <div className="messagebox flex-col">
                    <ul className="flex-col">
                        {
                            messages.map((item,index)=>{
                                return(
                                    <li key={index} className={item.sender}>{item.message}</li>
                                )
                            })
                        }
                    </ul>
                    <form className="input flex-row" onSubmit={(e)=>{clientaddedmessage(e)}}>
                        <input type="text" className="textbox" value={clientmessage} onChange={(e)=>setClientmessage(e.target.value)}/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Chatbot;