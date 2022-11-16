import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState, useEffect, useContext } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationItem from "./locationItem";
import { LocationContext } from "../../../pages/become-a-host/[itemId]/location";

function LocationPreStep() {
  const ctx = useContext(LocationContext);

  const [inputValue, setInputValue] = useState<string>("");
  const [predictions, setPredictions] = useState<any[]>([]);
  const [focused, setFocused] = useState<boolean>(false);
  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (inputValue.trim().length === 0) {
        setPredictions([]);
        return;
      }
      const endPoint = `/google/autocomplete?input=${inputValue}&key=AIzaSyCp6ntFLjQNdUVEIQ_FUTsyJn79NHh2xww&language=ko&components=country:kr&types=address`;
      // console.log(endPoint);
      const response = await fetch(endPoint);
      const json = await response.json();
      console.log(json);
      setPredictions(json.predictions);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  return (
    <>
      <TextField
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 200)}
        onChange={(evt) => {
          setInputValue(evt.currentTarget.value);
        }}
        value={inputValue}
        variant="outlined"
        placeholder="주소를 입력하세요."
        sx={{ bgcolor: "#ffffff", width: "80%" }}
        color={"info"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
      />
      {focused && (
        <>
          <List
            dense={true}
            sx={{
              zIndex: 2,
              bgcolor: "white",
              width: "80%",
              borderRadius: "5px",
              border: "1px solid #cccccc",
            }}
          >
            {predictions &&
              predictions.map((one) => (
                <LocationItem data={one} key={one.place_id} />
              ))}
            {!predictions && <></>}
            <Button
              variant="text"
              color="info"
              sx={{ pl: 2 }}
              onClick={() => ctx?.changeStep(2)}
            >
              <Typography variant="caption"> 주소를 직접 입력하세요</Typography>
            </Button>
          </List>
        </>
      )}
    </>
  );
}

export default LocationPreStep;
