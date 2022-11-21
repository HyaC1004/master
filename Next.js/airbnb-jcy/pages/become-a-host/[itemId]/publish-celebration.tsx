import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import HostingProgress from "../../../components/hosting/hostingProgress";
import { GetServerSideProps } from "next";
import Hosting from "../../../lib/models/hosting";

export default function PublishCelebration() {
    const router = useRouter();
    const nextStepHandle = async () => {
      const { itemId } = router.query;
      const response = await fetch(
        "/api/hosting/updateStepData?opertion=publish",
        {
          method: "POST",
          body: JSON.stringify({
            publish: true,
            _id: itemId,
          }),
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.status === 200) {
        router.push("/");
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
            고생하셧습니다.
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={100} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 15,
              gap: 4,
              height: "100vh",
              pb: 10,
            }}
          >
            <Typography variant="h6" sx={{paddingX:4}}>
              숙소 등록 완료
            </Typography>
            <Box
                sx={{
                    width:"80%",
                    height:"400px",
                    textAlign:"center",
                }}
            >
                <Typography>끝</Typography>
            </Box>  
            
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

PublishCelebration.isRaw = true;
