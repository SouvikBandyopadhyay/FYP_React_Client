import useFetch from "../../HelperFunctions/useFetch";
import React, { useEffect } from 'react'

const Output = (props) => {


    return ( 
        <div>
            <button onClick={props.handleBack}>Back</button>
            {props.value}
        </div>
     );
}
 
export default Output;