import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Hosting from "../../../lib/models/hosting";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import HostingProgress from "../../../components/hosting/hostingProgress";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import mongooseInit from "../../../lib/mongooseInit";



export default function FloorPlan() {
    const router = useRouter();
    const [guests, setGuests] = React.useState<number>(4);
    const [beds, setBeds] = React.useState<number>(1);
    const [bedrooms, setBedrooms] = React.useState<number>(1);
    const [bathrooms, setBathrooms] = React.useState<number>(1);
    
    const nextStepHandle = async () => {
        const { itemId } = router.query;
        const floorPlan = {guests, beds, bedrooms, bathrooms}
        console.log(floorPlan);
        const response = await fetch(
        "/api/hosting/updateStepData?opertion=addPrivacy",
        {
            method: "POST",
            body: JSON.stringify({ floorPlan:floorPlan, _id: itemId }),
            headers: { "Content-type": "application/json" },
        }
        );
        const json = await response.json();

        if (response.status === 200) {
        router.push("/become-a-host/" + json?.data._id + "/amenities");
        } else {
        }
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
          width:'100%'
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
            숙소에서 맞이할 최대 인원수를 알려주세요.
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative"  }}>
            <HostingProgress value={50} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",                    
                    pt: 50,
                    gap: 4,
                }}
            >
                <Box sx={{display:'flex', flexDirection:"row", width:"80%", justifyContent:"space-between"}}>
                    <Typography variant="h4">게스트</Typography>

                    <Box sx={{display:'flex', flexDirection:"row"}}>
                        <Button onClick={() => setGuests((c) => c - 1)} disabled={guests <= 1} color="secondary">
                            <RemoveCircleOutlineOutlinedIcon  />
                        </Button>
                        <Typography variant="h4">{guests}</Typography>
                        <Button onClick={() => setGuests((c) => c + 1)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:"row", width:"80%", justifyContent:"space-between"}}>
                    <Typography variant="h4">침대</Typography>

                    <Box sx={{display:'flex', flexDirection:"row"}}>
                        <Button onClick={() => setBeds((c) => c - 1)} disabled={beds <= 1} color="secondary">
                            <RemoveCircleOutlineOutlinedIcon />
                        </Button>
                        <Typography variant="h4">{beds}</Typography>
                        <Button onClick={() => setBeds((c) => c + 1)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                    </Box>
                </Box><Box sx={{display:'flex', flexDirection:"row", width:"80%", justifyContent:"space-between"}}>
                    <Typography variant="h4">침실</Typography>

                    <Box sx={{display:'flex', flexDirection:"row"}}>
                        <Button onClick={() => setBedrooms((c) => c - 1)} disabled={bedrooms <= 0} color="secondary">
                            <RemoveCircleOutlineOutlinedIcon />
                        </Button>
                        <Typography variant="h4">{bedrooms}</Typography>
                        <Button onClick={() => setBedrooms((c) => c + 1)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                    </Box>
                </Box><Box sx={{display:'flex', flexDirection:"row", width:"80%", justifyContent:"space-between"}}>
                    <Typography variant="h4">욕실</Typography>

                    <Box sx={{display:'flex', flexDirection:"row"}}>
                        <Button onClick={() => setBathrooms((c) => c - 0.5)} disabled={bathrooms <= 0.5} color="secondary">
                            <RemoveCircleOutlineOutlinedIcon />
                        </Button>
                        <Typography variant="h4">{bathrooms}</Typography>
                        <Button onClick={() => setBathrooms((c) => c + 0.5)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                    </Box>
                </Box>
            </Box>
            <HostingNavigator disabled={false} onNextClick={nextStepHandle} />
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
      props: {
        hosting: JSON.parse(JSON.stringify(hosting)),
      },
    };
  };


FloorPlan.isRaw = true;
