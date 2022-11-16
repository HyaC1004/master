import { useContext, useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { LocationContext } from "../../../pages/become-a-host/[itemId]/location";
import { Button, TextField, Typography } from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { Box } from "@mui/material";
  
function MapComponent() {    
    const ref = useRef<HTMLElement>();
    const ctx = useContext(LocationContext);
    // console.log(ctx?.address.lat);
    let map: google.maps.Map;
    useEffect(() => {
        const lat = ctx?.address.lat ?? 35.1595454;
        const lng = ctx?.address.lng ?? 126.852601;
        map = new window.google.maps.Map(ref.current!, {
            center: { lat: lat, lng: lng },
            zoom: 17,
            zoomControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false
        });    
        // const image = "/icons/marker.png";
        // const marker = new google.maps.Marker({
        //     position: { lat, lng },
        //     map: map,
        //     icon: image,
            
        // });
        map.addListener("center_changed", () => {
            const center = map.getCenter();
            // console.log(center?.lat(), center?.lng());   
            ctx?.changeAddress({ lat: center?.lat(), lng: center?.lng() });
            // marker.setPosition({ lat: center?.lat()!, lng: center?.lng()! });
        });  
    }, []);
    return (<>  
    <Box sx={{position:"absolute", zIndex:4,borderRadius:"1.5rem", top:"25%", left: "20%", width:"60%", height:"6vh", backgroundColor:"white"}}>        
        <Typography sx={{fontSize:"1.5rem", lineHeight:"4rem"}}><RoomIcon sx={{marginLeft:2, marginRight:3}} /> {ctx?.address.state} {ctx?.address.city}</Typography>
    </Box>
    <Box ref={ref} sx={{ height: "95vh" }}></Box>
    <EditLocationAltIcon
        color="secondary"
        sx={{
          position: "absolute",
          top: "43.5%",
          left: "46.5%",
          fontSize: 40,
        }}
      />
    </>)
}
function LocationLastStep() {
    const API_KEY='AIzaSyCp6ntFLjQNdUVEIQ_FUTsyJn79NHh2xww'
    return (
        <Wrapper apiKey={API_KEY}>
            <MapComponent />
        </Wrapper>
    );
  }
  
  export default LocationLastStep;
  