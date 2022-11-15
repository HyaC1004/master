import { ToggleButton, Box, Typography } from "@mui/material";
import Image from "next/image";
type Props = {
  onClick: (data: string) => void;
  compare?: string;
  value: string;
  description?: string;
  image?: string;
};
export default function HostingDefaultButton(props: Props) {
  const onClickHandle = () => {
    props.onClick(props.value);
  };
  return (
    <ToggleButton
      sx={{ width: "70%", height: "5rem", px: 2 }}
      value={props.value}
      onClick={onClickHandle}
      selected={props.compare === props.value}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{props.value}</Typography>
          {props.image && (
            <Image
              alt={props.value}
              src={props.image}
              width={46}
              height={46}
              style={{ borderRadius: "5px" }}
            />
          )}
        </Box>
        {props.description && (
          <Box>
            <Typography variant="body2">{props.description}</Typography>
          </Box>
        )}
      </Box>
    </ToggleButton>
  );
}
