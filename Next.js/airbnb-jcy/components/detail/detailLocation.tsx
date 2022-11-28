import { HostingData } from "../../lib/models/hosting";

import { Wrapper } from "@googlemaps/react-wrapper";
import { useRef, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
function MapComponent({ hosting }: { hosting: HostingData }) {
  const ref = useRef<HTMLElement>();
  let map: google.maps.Map;
  useEffect(() => {
    const lat = hosting.location.lat;
    const lng = hosting.location.lng;
    map = new google.maps.Map(ref.current!, {
      center: { lat, lng },
      zoom: 17,
      zoomControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    });
    const image = "/icons/marker.png";
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      icon: image,
    });
  }, []);
  return (
    <>
      <Box
        ref={ref}
        sx={{ height: "480px", borderRadius: "10px", overflow: "hidden" }}
      ></Box>
    </>
  );
}

function DetailLocation({ hosting }: { hosting: HostingData }) {
  return (
    <>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ py: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            위치
          </Typography>
          <Typography variant="subtitle1">주소</Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {hosting.location.state},{hosting.location.city},{hosting.location.street},
            {hosting.location.apt}
          </Typography>
        </Box>
        <Wrapper apiKey={"AIzaSyCp6ntFLjQNdUVEIQ_FUTsyJn79NHh2xww"}>
          <MapComponent hosting={hosting} />
        </Wrapper>
      </Box>
    </>
  );
}

export default DetailLocation;
