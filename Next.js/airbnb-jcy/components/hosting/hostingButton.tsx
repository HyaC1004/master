import { ReactNode } from "react";
import { Button, Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
type Props = {
  onClick: (data: string) => void;
  value: string;
  description?: string;
  children: ReactNode;
};
export default function HostingButton(props: Props) {
  const onClickHandle = () => {
    props.onClick(props.value);
  };
  return (
    <Button
      sx={{ width: "70%", height: "5rem", px: 2 }}
      color={"secondary"}
      onClick={onClickHandle}
      variant="outlined"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          {props.children}
          <Typography variant="h6">{props.value}</Typography>
        </Box>
        <Box>
          <ArrowForwardIosIcon />
        </Box>
      </Box>
    </Button>
  );
}
