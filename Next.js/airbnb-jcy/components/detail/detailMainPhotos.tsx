import { HostingData } from "../../lib/models/hosting";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
function DetailMainPhotos({ data }: { data: HostingData }) {
  return (
    <Box sx={{ pt: 2.5 }}>
      <Grid
        container
        spacing={0.5}
        sx={{ borderRadius: "24px", overflow: "hidden" }}
      >
        <Grid item sm={6} xs={12} >
          <img
            src={data.photos[0]?.extraUrl}
            alt={"커버사진"}
            loading="lazy"
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item sm={6} xs={12} container spacing={0.5}>
          <Grid item xs={6} sx={{}}>
            <img
              src={data.photos[0]?.extraUrl}
              alt={"커버사진"}
              loading="lazy"
              style={{ objectFit: "cover" }}
              width="100%"
              height={"100%"}
            />
          </Grid>
          <Grid item xs={6} sx={{}}>
            <img
              src={data.photos[0]?.extraUrl}
              alt={"커버사진"}
              loading="lazy"
              style={{ objectFit: "cover" }}
              width="100%"
              height={"100%"}
            />
          </Grid>
          <Grid item xs={6} sx={{}}>
            <img
              src={data.photos[0]?.extraUrl}
              alt={"커버사진"}
              loading="lazy"
              style={{ objectFit: "cover" }}
              width="100%"
              height={"100%"}
            />
          </Grid>
          <Grid item xs={6} sx={{}}>
            <img
              src={data.photos[0]?.extraUrl}
              alt={"커버사진"}
              loading="lazy"
              style={{ objectFit: "cover" }}
              width="100%"
              height={"100%"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailMainPhotos;
