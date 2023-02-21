// import { useState } from "react";

// function apicaller(url){

    
//   const [error,setError]=useState(null);
//   const [pending,setPending]=useState(true);
//   const [data,setData]= useState([]);

    
    
//   const controller=new AbortController();
    
//         fetch(url,{signal:controller.signal})
//         .then(response => {
//             if(!response.ok){
//                 throw Error("Could not get data")
//             }
//           return response.json()
//         })
//         .then(json => {
//           setData(json)
//           setPending(false)
//           setError(null)
//         })
//         .catch((err)=>{
//             if(err.name==="AbortError"){
//                 console.log("fetch aborted")
//             }
//             else{
//                 setError(err.message)
//                 setPending(false)
//             }
//         }
//         )
        
//     return {
//         data,error,pending
//     }
// }

// export default apicaller