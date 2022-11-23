import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import HostingButton from "../../components/hosting/hostingButton";

export default function BecomeAHost() {
  const router = useRouter();
  const { data } = useSession();

  const nextStepHandle = () => {
    const { itemId } = router.query;
    router.push("/become-a-host/" + itemId + "/privacy-type");
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
          {data?.user?.name} 님, 환영합니다.
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 5,
            gap: 4,
            overflowY: "scroll",
            height: "100vh",
            pb: 10,
            position: "relative",
          }}
        >
          <Typography component="h6" variant="h6">
            숙소 등록 시작하기
          </Typography>
          <HostingButton
            onClick={() => router.push("/become-a-host/property-type-group")}
            value="새로운 숙소 등록하기"
          >
            <AddIcon fontSize="large" />
          </HostingButton>
        </Box>
      </Grid>
    </Grid>
  );
}

BecomeAHost.isRaw = true;
