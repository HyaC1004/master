import { ToggleButton, Box, Typography } from "@mui/material";
type Props = {
  onClick: (data: string) => void;
  compare?: string;
  value: string;
  description?: string;
};
export default function PropertyButton(props: Props) {
  const onClickHandle = () => {
    props.onClick(props.value);
  };
  return (
    <ToggleButton
      sx={{ width: "90%", height: "5rem", px: 2, mb:4 }}
      value={props.value}
      onClick={onClickHandle}
      color={"primary"}
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
