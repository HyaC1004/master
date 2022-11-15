import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Slider, TextField } from "@mui/material";
import PropertyButton from "../../../components/hosting/propertyButton";
import Image from "next/image";

export function createStaticMapURI(lat = 35.34214321, lng = 126.9421321) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&key=${process.env.GOOGLE_MAP_API}&size=1200x1200`;
}

export default function Location(props: {
  groupItems:any;
}) {
    const [uri,setUri] = React.useState("");
    React.useEffect(()=>{
        const uri = createStaticMapURI();
        setUri(uri);
    },[])
    const router = useRouter();
    const [value, setValue] = React.useState<string>(""); 
    // console.log("props", props.groupItems.types);
    // console.log("쿼리",router.query);
    const nextStepHandle = () => {
      const { itemId } = router.query;
      fetch("/api/hosting", {
        method: "post",
        body: JSON.stringify({location: value, _id: itemId}),
        headers: {
            "Content-type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === 200) {
          router.push("/become-a-host/" + data?.data._id + "/privacy-type");
        } else {
        }
      });
    };

  return (
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
        <Typography component="h1" variant="h4" color={"white"}>
          숙소 위치는 어디인가요?
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              zIndex: 2000,
              width: "90%",
            }}
          >
            <Slider disabled value={40} size="small" color="primary" />
          </Box>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Image alt="기본위치" src={uri} fill />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 160,
              left: 0,
              width: "100%",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              variant="standard"
              label="　　　주소를 입력하세요"
              sx={{ bgcolor: "#eeeeee", width: "80%", px:2, height:"4rem", }}
              style={{ borderRadius: "20px", overflow: "hidden" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              zIndex: 2000,
              bgcolor: "white",
              display: "flex",
              justifyContent: "space-between",
              width: "100% ",
              p: 1.5,
              borderTop: "1px solid #dedede",
            }}
          >
            <Button variant="text" onClick={() => router.back()}>
              뒤로
            </Button>
            <Button
              variant="contained"
              disabled={value === ""}
              onClick={nextStepHandle}
            >
              다음
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

