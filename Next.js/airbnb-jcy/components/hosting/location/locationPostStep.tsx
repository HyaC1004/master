import { Box, TextField, Typography, Divider, Button } from "@mui/material";
import { useContext, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { LocationContext } from "../../../pages/become-a-host/[itemId]/location";
function LocationPostStep() {
  const ctx = useContext(LocationContext);

  return (
    <>
      <Box
        sx={{
          mb: 1.5,
          width: "80%",
          bgcolor: "white",
          p: 2,
          position: "relative",
        }}
      >
        <Box>
          <ArrowBackIosNewIcon
            fontSize="small"
            sx={{ position: "absolute", left: 12, top: 20 }}
            onClick={() => {
              ctx?.changeStep(1);
            }}
          />
          <Typography variant="h6" textAlign={"center"}>
            주소 확인
          </Typography>
        </Box>
        <Box>
          <TextField
            margin="dense"
            color="info"
            label="주/도"
            type="text"
            fullWidth
            variant="outlined"
            id="state"
            value={ctx?.address.state}
          />
          <TextField
            id="city"
            color="info"
            label="도시"
            type="text"
            fullWidth
            variant="outlined"
            margin="dense"
            value={ctx?.address.city}
          />
          <TextField
            id="street"
            color="info"
            label="도로명"
            type="text"
            fullWidth
            variant="outlined"
            margin="dense"
            value={ctx?.address.street}
            onChange={(evt) => {
              ctx?.changeAddress({ street: evt.currentTarget.value });
            }}
          />
          <TextField
            color="info"
            label="아파트 이름, 동호수 등(선택사항)"
            type="text"
            id="apt"
            fullWidth
            variant="outlined"
            margin="dense"
            value={ctx?.address.apt??" "}
            onChange={(evt) => {
              ctx?.changeAddress({ apt: evt.currentTarget.value });
            }}
          />
          <TextField
            color="info"
            label="우편번호"
            type="text"
            fullWidth
            variant="outlined"
            margin="dense"
            id="zipCode"
            value={ctx?.address.zipCode}
          />
        </Box>
        <Divider sx={{ my: 1.5 }} />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {ctx?.changeStep(3); ctx?.setValue("rr")}}
        >
          확인
        </Button>
      </Box>
    </>
  );
}

export default LocationPostStep;
