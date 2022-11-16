import Image from "next/image";

import { Box } from "@mui/material";
import { useState, useContext, useEffect } from "react";

import LocationPreStep from "./locationPreStep";
import LocationPostStep from "./locationPostStep";
import { LocationContext } from "../../../pages/become-a-host/[itemId]/location";
import LocationLastStep from "./locationLastStep";

function LocationStepper() {
  const ctx = useContext(LocationContext);
  
  return (
    <>
      {(ctx?.step === 1 || ctx?.step === 2) && (
        <>
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <Image alt="기본위치" src={ctx?.uri!} fill sizes="100vw" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 160,
              width: "100%",
              zIndex: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {ctx?.step === 1 && <LocationPreStep />}
            {ctx?.step === 2 && <LocationPostStep />}
          </Box>
        </>
      )}
      {ctx?.step === 3 && <LocationLastStep />}
    </>
  );
}

export default LocationStepper;
