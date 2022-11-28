import { HostingData } from "../../lib/models/hosting";
import { Box, Grid, Button, Typography, Avatar, Divider } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DetailLeftContents from "./detailLeftContents";
import DetailRightContents from "./detailRightContents";

function DetailMainContents({ hosting }: { hosting: HostingData }) {
  return (
    <Box id="content" sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <DetailLeftContents hosting={hosting} />
        </Grid>
        <Grid item md={4} xs={12}>
          <DetailRightContents hosting={hosting} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailMainContents;
