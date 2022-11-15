import * as React from "react";
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Autocomplete
} from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Hosting from "../../../lib/models/hosting";
import { createStaticMapURI } from "../../../lib/helper/map-api";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HostingProgress from "../../../components/hosting/hostingProgress";
import HostingNavigator from "../../../components/hosting/hostingNavigator";

export default function Location(props: { privacies: string[] }) {
  const router = useRouter();
  const [value, setValue] = React.useState<string>("");
  const [inputValue, setInputValue] = React.useState<string>("");  
  const [predictions, setPredictions] = React.useState<any[] | null>([]);
  const [locationModal, setLocationModal] = React.useState(false);

  React.useEffect(() => {
    const timerId = setTimeout(async() => {
      // console.log(inputValue, "!!!");
      if(inputValue.trim().length === 0 ) {
        setPredictions([]);
        return;
      }
      const endPoint =`/google/autocomplete?input=${inputValue}&key=AIzaSyCp6ntFLjQNdUVEIQ_FUTsyJn79NHh2xww&language=ko&components=country:kr`   
      const response = await fetch(endPoint);
      const json = await response.json();
      setPredictions(json.predictions);
      console.log(predictions);
    }, 500);

    return () => {
      // console.log(timerId + ".. cancled");
      clearTimeout(timerId);
    };
  }, [inputValue]);
  const handleOpenModal = () => {
    setLocationModal(true);
  };
  const nextStepHandle = async () => {
    const { itemId } = router.query;
    const response = await fetch(
      "/api/hosting/updateStepData?opertion=addPrivacy",
      {
        method: "POST",
        body: JSON.stringify({ privacy: value, _id: itemId }),
        headers: { "Content-type": "application/json" },
      }
    );
    const json = await response.json();

    if (response.status === 200) {
      router.push("/become-a-host/" + json?.data._id + "/location");
    } else {
    }
  };

  const uri = createStaticMapURI();
  return (
    <div>
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1f385c",
          p: 7,
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
          숙소 위치는 어디인가요?
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={40} />
          <Box sx={{ width: "100%", height: "100%" }}>
            <Image alt="기본위치" src={uri} fill />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 160,
              width: "100%",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              onChange={(evt) => {
                setInputValue(evt.currentTarget.value);
              }}
              value={inputValue}
              variant="outlined"
              placeholder="주소를 입력하세요."
              sx={{ bgcolor: "#ffffff", width: "80%" }}
              color={"info"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
            {predictions && (
              <List
                dense={true}
                sx={{
                  zIndex: 2,
                  bgcolor: "white",
                  width: "80%",
                  borderRadius: "5px",
                  border: "1px solid #cccccc",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" secondary="Trash items" />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </Box>
          <HostingNavigator
            disabled={value === ""}
            onNextClick={nextStepHandle}
          />
        </Box>
      </Grid>
    </Grid>
    <Location open={locationModal} setOpen = {handleOpenModal} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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
