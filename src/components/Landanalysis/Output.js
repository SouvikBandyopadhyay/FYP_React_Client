import useFetch from "../../HelperFunctions/useFetch";
import React, { useEffect } from 'react'
import BarGraph from "./BarGraph";


const Output = (props) => {
    const data=props.data

    console.log(data)
    return ( 
        <div>
            <button onClick={props.handleBack}>Back</button>
            {data && 
                <BarGraph name={data.name} mean={data.mean}></BarGraph>}
        </div>
     );
}
 
export default Output;