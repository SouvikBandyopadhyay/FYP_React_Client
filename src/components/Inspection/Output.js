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
                    {(data[element.index]==1) && <p>
                        Damaged
                        </p>}
                    {(data[element.index]==0) && <p>
                        Not Damaged
                        </p>}
                </div>)})}
        </div>
     );
}
 
export default Output;