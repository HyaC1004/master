import { Box, Slider } from "@mui/material";

function HostingProgress(props: { value: number }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        zIndex: 2000,
        width: "90%",
      }}
    >
      <Slider value={props.value} size="small" color={"secondary"} />
    </Box>
  );
}

export default HostingProgress;
