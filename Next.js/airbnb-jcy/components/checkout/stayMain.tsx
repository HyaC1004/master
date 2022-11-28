import { HostingData } from "../../lib/models/hosting";
import { Box, Grid, Button, Typography, Avatar, Divider } from "@mui/material";
import StaySection from "./staySection";
import StayAside from "./stayAside";

function StayMain({
  hosting,
  booking,
}: {
  hosting: HostingData;
  booking: any;
}) {
  return (
    <Box id="content" sx={{ mt: 3 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <StaySection hosting={hosting} booking={booking} />
        </Grid>
        <Grid item md={5} xs={12}>
          <StayAside hosting={hosting} booking={booking} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default StayMain;
