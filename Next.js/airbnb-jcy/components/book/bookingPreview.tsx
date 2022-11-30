import { BookData } from "../../lib/models/book";
import { HostingData } from "../../lib/models/hosting";

import { Grid, Paper, Box, Divider, Typography } from "@mui/material";
import { format, formatDistance } from "date-fns";
import ko from "date-fns/locale/ko";
function BookingPreview({ data }: { data: BookData & HostingData }) {
  console.log(data);
  return (
    <Paper elevation={2} sx={{ p: 2, my: 2 }}>
      <Grid container>
        <Grid item md={7} sm={12}>
          <Box sx={{ p: 1 }}>
            <Typography variant="h5">{data.title}</Typography>
            <Typography variant="h6">
              {data.owner.split("@")[0]} 님이 호스팅하는 {data.property}
              {data.privacy}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 1 }}>
            <Typography variant="h6">
              기간 : {format(new Date(data.checkin), "yyyy년 MM월 dd일")} ~
              {format(new Date(data.checkout), "yyyy년 MM월 dd일")}
            </Typography>
            <Typography variant="h6">
              인원 : 게스트 {data.numberOfGuests} 명
            </Typography>
          </Box>
        </Grid>
        <Grid item md={5} sm={12}>
          <Box sx={{ position: "relative" }}>
            <img
              src={data.photos[0].extraUrl}
              width="100%"
              style={{ objectFit: "cover" }}
            />
            <Typography
              variant="h6"
              sx={{
                px: 1,
                bgcolor: "white",
                top: 10,
                left: 10,
                position: "absolute",
              }}
            >
              {formatDistance(new Date(data.checkin), new Date(), {
                locale: ko,
                addSuffix: true,
              })}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default BookingPreview;
