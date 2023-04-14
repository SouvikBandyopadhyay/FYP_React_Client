import React from "react";

const Output = (props) => {
    const data=props.data
    console.log(data)
    
    
    return ( 
        <div>
            <button onClick={props.handleBack}>Clear</button>
            {data && props.selectedImages.map((element,index)=>{return(
                <div key={element.index}>
                    <img src={element.url} height={100} />
                    <p>{data[element.index]}</p>
                </div>)})}
        </div>
     );
}
 
export default Output;