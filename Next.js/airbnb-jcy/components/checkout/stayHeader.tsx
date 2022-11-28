import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";

function StayHedaer() {
  const router = useRouter();
  return (
    <Box id="title">
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          mt: 1,
        }}
      >
        <IconButton color={"primary"} onClick={() => router.back()}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h4" fontWeight={600}>
          확인 및 결제
        </Typography>
      </Box>
    </Box>
  );
}

export default StayHedaer;
