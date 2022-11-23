import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Hosting from "../../../lib/models/hosting";
import { createStaticMapURI } from "../../../lib/helper/map-api";

import HostingProgress from "../../../components/hosting/hostingProgress";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import LocationStepper from "../../../components/hosting/location/locationStepper";
import { createContext } from "react";
import mongooseInit from "../../../lib/mongooseInit";

type LoocationContextData = {
  step: number;
  uri: string;
  placeId?: string;
  address: {
    state?: string;
    city?: string;
    street?: string;
    apt?: string;
    zipCode?: string;
    lat?: number;
    lng?: number;
  };
  changeStep: (step: number) => void;
  changeURI: (lat: number, lng: number) => void;
  changeAddress: (address: LoocationContextData["address"]) => void;
  changePlaceId: (id: string) => void;
  setValue: (value:string)=>void;
};

export const LocationContext = createContext<LoocationContextData | null>(null);

const defaultUri = createStaticMapURI();

export default function Location() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  const [step, setStep] = useState(1);
  const [uri, setURI] = useState(defaultUri);
  const [placeId, setPlaceId] = useState<string>("");
  const [address, setAddress] = useState<LoocationContextData["address"]>({});
  const changeStep = (newStep: number) => {
    setStep(newStep);
  };
  const changeURI = (lat: number, lng: number) => {
    const newURI = createStaticMapURI(lat, lng);
    setURI(newURI);
  };
  const changePlaceId = async (id: string) => {
    setPlaceId(id);
    if (!id) {
      return setAddress({
        apt: "",
        city: "",
        state: "",
        street: "",
        zipCode: "",
      });
    }
    const endPoint = `/google/details?place_id=${id}&key=AIzaSyCp6ntFLjQNdUVEIQ_FUTsyJn79NHh2xww&language=ko&fields=address_component,geometry`;
    const response = await fetch(endPoint);
    const json = await response.json();
    // console.log("detail ... ", json);
    const location = json.result.geometry.location;
    const uri = createStaticMapURI(location.lat, location.lng);
    setURI(uri);
    const addressComponent: any[] = json.result.address_components;
    console.log(addressComponent);
    addressComponent.reverse();
    // 파싱 ===
    const parsed: LoocationContextData["address"] = {
      zipCode: addressComponent[0].long_name,
      lat: location.lat,
      lng: location.lng,
      state: addressComponent[2].long_name,
      city: addressComponent[3].long_name,
      street:
        addressComponent[4].long_name + " " + addressComponent[5]?.long_name,
    };
    changeAddress(parsed);
  };
  const changeAddress = (fragment: LoocationContextData["address"]) => {
    setAddress((current) => {
      return { ...current, ...fragment };
    });
  };

  const nextStepHandle = async () => {
    // console.log(address);
    const { itemId } = router.query;
    const response = await fetch(
      "/api/hosting/updateStepData?opertion=addLocation",
      {
        method: "POST",
        body: JSON.stringify({ location: address, _id: itemId }),
        headers: { "Content-type": "application/json" },
      }
    );
    const json = await response.json();
    // alert(response.status);

    if (response.status === 200) {
      router.push("/become-a-host/" + json?.data._id + "/floor-plan");
    } else {
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh"  }}>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1f385c",
          p: 7,
          width:"100%"
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
          숙소 위치는 어디인가요?
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={40} />
          <LocationContext.Provider
            value={{
              step,
              uri,
              address,
              placeId,
              changeStep,
              changeURI,
              changePlaceId,
              changeAddress,
              setValue
            }}
          >
            <LocationStepper />
          </LocationContext.Provider>
          <HostingNavigator
            disabled={value === ""}
            onNextClick={nextStepHandle}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  mongooseInit();
  const itemId = context.query.itemId as string;
  const hosting = await Hosting.findById(itemId);
  if (!hosting) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

Location.isRaw = true;
