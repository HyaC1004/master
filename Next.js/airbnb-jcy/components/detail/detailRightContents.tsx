import { HostingData } from "../../lib/models/hosting";
import { Box, Typography, Divider } from "@mui/material";
import { Card, CardContent, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function DetailRightContents({ data }: { data: HostingData }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: "0px",
          mt:4
        }}
      >
        <Card sx={{ minWidth: "320px", margin: "auto" }}>
          <CardContent>
            <Box>
              <Typography component={"span"} variant={"h6"}>
                ₩{data.price.toLocaleString()}
              </Typography>
              <Typography component={"span"}>/박</Typography>
            </Box>
            <Box>
              <Typography component={"span"} variant={"h6"}>
                ₩{data.price.toLocaleString()}
              </Typography>
              <Typography component={"span"}>/박</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default DetailRightContents;
