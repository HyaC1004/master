import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Slider, ToggleButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Hosting from "../../../lib/models/hosting";
import HostingAmenity from "../../../components/hosting/hostingAmenity";
import PoolIcon from '@mui/icons-material/Pool';
import HotTubIcon from '@mui/icons-material/HotTub';
import DeckIcon from '@mui/icons-material/Deck';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ComputerIcon from '@mui/icons-material/Computer';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

type Section = { title: string; icon:any; selected: boolean };

const facilities: Section[] = [
    { title: '수영장',  icon:<PoolIcon />, selected: false},
    { title: '온수 욕조',  icon:<HotTubIcon />, selected: false  },
    { title: '파티오',  icon:<DeckIcon />, selected: false  },
    { title: '바비큐 그릴',  icon:<OutdoorGrillIcon />, selected: false  },
    { title: '화로',  icon:<FireplaceIcon />, selected: false  },
    { title: '테니스장',  icon:<SportsTennisIcon />, selected: false  },
    { title: 'PC방',  icon:<ComputerIcon />, selected: false  },
    { title: '야외 식사 공간',  icon:<TableRestaurantIcon />, selected: false  },
    { title: '운동 기구',  icon:<FitnessCenterIcon />, selected: false  }
];
export default function Amenities(props: { privacies: string[] }) {
  console.log(props);
  const router = useRouter();
  const [value, setValue] = React.useState<string>("");
  const [selected, setSelected] = React.useState(false);
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
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
            숙소에서 맞이할 최대 인원수를 알려주세요.
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              zIndex: 2000,
              width: "100%",
              bgcolor: "white",
            }}
          >
            <Slider value={30} size="small" color={"secondary"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 10,
              gap: 4,
              overflowY: "scroll",
              height: "100vh",
              pb: 10,
            }}
          >
            <Typography variant="h5">
                특별히 내세울 만한 편의시설이 있나요?
            </Typography>
            <Grid container spacing={3}>
                {facilities.map((one) => (
                    <Grid item key={one.title} xs={12} sm={6} md={4}>
                    <Card
                        sx={{width:"80%",ml:2, height: '100%', display: 'flex', textAlign:"center", flexDirection: 'column' }}
                    >   
                        <ToggleButton
                            value={one.title}
                            selected={one.selected}
                            onClick={() => {
                                one.selected = !one.selected;
                        }}
                        sx={{flexDirection:"column"}}>                           
                            {one.icon}
                            <Typography>
                                {one.title}
                            </Typography>
                        </ToggleButton>
                    </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h5">
                다음 인기 편의시설이 있나요?
            </Typography>
            <Grid container spacing={3}>
                
            </Grid>
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
            <Button variant="text" color="info" onClick={() => router.back()}>
              뒤로
            </Button>
            <Button
              variant="contained"
              color="info"
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const itemId = context.query.itemId as string;
  const hosting = await Hosting.findById(itemId);
  if (!hosting) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      privacies: ["게스트", "침대", "침실", "욕실"],
    },
  };
};

Amenities.isRaw = true;
