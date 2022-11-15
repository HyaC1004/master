import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

function HostingNavigator(props: {
  disabled: boolean;
  onNextClick: () => void;
}) {
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        zIndex: 20,
        display: "flex",
        justifyContent: "space-between",
        width: "100% ",
        bgcolor: "#ffffff",
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
        disabled={props.disabled}
        onClick={props.onNextClick}
      >
        다음
      </Button>
    </Box>
  );
}

export default HostingNavigator;
