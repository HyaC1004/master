import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { useContext } from "react";

import ApartmentIcon from "@mui/icons-material/Apartment";
import { LocationContext } from "../../../pages/become-a-host/[itemId]/location";

function LocationItem({ data }: { data: any }) {
  const ctx = useContext(LocationContext);
  const clickHandle = () => {
    ctx?.changePlaceId(data.place_id);
    setTimeout(() => {
      ctx?.changeStep(2);
    }, 500);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={clickHandle}>
        <ListItemIcon>
          <ApartmentIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          sx={{ ml: "-25px" }}
          primary={data.structured_formatting.main_text}
          secondary={data.structured_formatting.secondary_text}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default LocationItem;
