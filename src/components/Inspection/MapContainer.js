import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const MapContainer = (props) => {
    function onMarkerClick(e){
        console.log(e)
    }
    function onInfoWindowClose(){

    }
    const {google}=props
    return ( 
        <div className="Map">
            <Map
            google={google}
            style={{width:"100%",height:"100%"}}
            zoom= {10}
            initialCenter={
                {
                    lat: 28.38,
                    lng: 77.12
                }
            }>
                <Marker onClick={(e)=>onMarkerClick(e)}
                name={'Current location'} />
 
            </Map>
        </div>
     );
}
 
export default GoogleApiWrapper({
    apiKey:"AIzaSyATchiD-1bqeXh1pAguo9qJuYnpeyk_nIE"
})(MapContainer);