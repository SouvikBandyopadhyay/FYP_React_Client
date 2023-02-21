import useFetch from "../../HelperFunctions/useFetch";

const Output = ({latitude,longitude}) => {
    const url1="/predict/"+longitude+"/"+latitude;
    const res=useFetch(url1);
    const data=res.data;
    const error=res.error;
    const pending=res.pending;

    return ( 
        <div className="Output">
            {
                error ||
                pending ||
                console.log(data.value)
            }
        </div>
     );
}
 
export default Output;