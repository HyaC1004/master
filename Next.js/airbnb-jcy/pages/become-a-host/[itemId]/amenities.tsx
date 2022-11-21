import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Slider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Hosting from "../../../lib/models/hosting";
import PoolIcon from '@mui/icons-material/Pool';
import HotTubIcon from '@mui/icons-material/HotTub';
import DeckIcon from '@mui/icons-material/Deck';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ComputerIcon from '@mui/icons-material/Computer';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import DiningIcon from '@mui/icons-material/Dining';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import LockIcon from '@mui/icons-material/Lock';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import HostingProgress from "../../../components/hosting/hostingProgress";

type Section = { title: string; icon:any; selected: boolean };

const facilities: Section[] = [
  { title: '무선 인터넷',  icon:<WifiIcon />, selected: false  },
  { title: 'TV',  icon:<TvIcon />, selected: false  },
  { title: '주방',  icon:<DiningIcon />, selected: false  },
  { title: '세탁기',  icon:<LocalLaundryServiceIcon />, selected: false  },
  { title: '주차 공간',  icon:<DirectionsCarIcon />, selected: false  },
  { title: '전기차 충전',  icon:<ElectricCarIcon />, selected: false  },
  { title: '에어컨',  icon:<AcUnitIcon />, selected: false  },
  { title: '업무 전용 공간',  icon:<WorkIcon />, selected: false  },
  { title: '수영장',  icon:<PoolIcon />, selected: false},
  { title: '온수 욕조',  icon:<HotTubIcon />, selected: false  },
  { title: '파티오',  icon:<DeckIcon />, selected: false  },
  { title: '바비큐 그릴',  icon:<OutdoorGrillIcon />, selected: false  },
  { title: '화로',  icon:<FireplaceIcon />, selected: false  },
  { title: '테니스장',  icon:<SportsTennisIcon />, selected: false  },
  { title: 'PC방',  icon:<ComputerIcon />, selected: false  },
  { title: '야외 식사 공간',  icon:<TableRestaurantIcon />, selected: false  },
  { title: '운동 기구',  icon:<FitnessCenterIcon />, selected: false  },
];
const safeItems: Section[] = [
  { title: '화재경보기',  icon:<ReportIcon />, selected: false  },
  { title: '구급 상자',  icon:<MedicalServicesIcon />, selected: false  },
  { title: '소화기',  icon:<FireExtinguisherIcon />, selected: false  },
  { title: '침실문 잠금장치',  icon:<LockIcon />, selected: false  },
  { title: '일산화탄소 경보기',  icon:<ReportGmailerrorredIcon />, selected: false  }
]
export default function Amenities(props: { privacies: string[] }) {
  // console.log(props);
  const router = useRouter();
  const [value, setValue] = React.useState<string>("");
  const [facility, setFacility] = React.useState(() => []);
  const [safeItem, setSafeItem] = React.useState(() => []);
  const handleSafeItem = (event: React.MouseEvent<HTMLElement>,newSafeItem: any) => {
    setSafeItem(newSafeItem);
    console.log(safeItem)
  };
  const handleFacility = (event: React.MouseEvent<HTMLElement>,newFacility: any) => {
    setFacility(newFacility);
    console.log(facility)
  };
  const nextStepHandle = async () => {
    const { itemId } = router.query;
    const response = await fetch(
      "/api/hosting/updateStepData?opertion=addPrivacy",
      {
        method: "POST",
        body: JSON.stringify({ facilities: facility, safeItems:safeItem, _id: itemId }),
        headers: { "Content-type": "application/json" },
      }
    );
    const json = await response.json();

    if (response.status === 200) {
      router.push("/become-a-host/" + json?.data._id + "/photos");
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
          숙소 편의시설 정보를 추가하세요
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={60} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 5,
              gap: 4,
              height: "100vh",
              pb: 10,
            }}
          >
            <Typography variant="h5">
              특별히 내세울 만한 편의시설이 있나요?
            </Typography>
              <ToggleButtonGroup
                value={facility}
                onChange={handleFacility}
                aria-label="facility"
                sx={{width:"100%", textAlign:"center", flexWrap:"wrap", gap:2, pl:5 }}
              >
                {facilities.map((one) => (
                  <ToggleButton
                    key={one.title}
                    value={one.title}
                    aria-label={one.title}
                    sx={{flexDirection:"column", width:"30%", borderLeft:"1px solid #ccc !important"}}>                           
                      {one.icon}
                      <Typography>
                          {one.title}
                      </Typography>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            <Typography variant="h5">
              다음과 같은 안전 관련 물품이 있나요?
            </Typography>
            <ToggleButtonGroup
                value={safeItem}
                onChange={handleSafeItem}
                aria-label="safeItem"
                sx={{width:"100%", textAlign:"center", flexWrap:"wrap", gap:2, pl:5 }}
              >
                {safeItems.map((one) => (
                  <ToggleButton
                    key={one.title}
                    value={one.title}
                    aria-label={one.title}
                    sx={{flexDirection:"column", width:"30%", borderLeft:"1px solid #ccc !important"}}>                           
                      {one.icon}
                      <Typography>
                          {one.title}
                      </Typography>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            <Grid container spacing={3}>
                
            </Grid>
          </Box>
          <HostingNavigator disabled={false} onNextClick={nextStepHandle} />
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
      hosting: JSON.parse(JSON.stringify(hosting)),
    },
  };
};

Amenities.isRaw = true;
