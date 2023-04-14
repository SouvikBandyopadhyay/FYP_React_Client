import React, { useEffect, useRef, useState } from "react";

const Input = (props) => {

    
    
    const onSelectFile=(event)=>{
        let onselectfile=event.target.files
        const onselectfileArray=Array.from(onselectfile)

        const imageArray=onselectfileArray.map((file,i)=>{
            return {url:URL.createObjectURL(file),file:file,index:`image[${i}]`}
        })
        props.setselectedImages((previousImages)=> previousImages.concat(imageArray))
    }
    
    const ImageInput=useRef(null)
     const handleRefresh=()=>{
        ImageInput.current.value=null 
        ImageInput.current.focus()
     }  
    return ( 
        <div>
            Add Images
            <span>
                Add upto 10 photos
            </span>
            <input ref={ImageInput} type="file" name="images" multiple onChange={onSelectFile} accept="image" />
            <button onClick={props.handleSubmit}>Upload {props.selectedImages.length} Photos</button>
            {props.selectedImages && props.selectedImages.map((element,index)=>{return(<div key={element.index}>
                <img src={element.url} height={100} />
                <button onClick={()=>{
                    handleRefresh()
                    props.setselectedImages(props.selectedImages.filter((e)=>e!=element))
                    }}>Delete</button>
            </div>)})}
        </div>
     );
}
 
export default Input;

