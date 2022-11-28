import { Box, TextField, Button } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ko from "date-fns/locale/ko";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useContext, useEffect } from "react";
import { BookContext } from "../../../pages/rooms/[roomId]";

function CalendarFragment() {
  const ctx = useContext(BookContext);

  const value: DateRange<Date> = [
    ctx?.data.checkin ?? null,
    ctx?.data.checkout ?? null,
  ];

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
        <StaticDateRangePicker
          disablePast
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => {
            ctx?.updateData({ checkin: newValue[0], checkout: newValue[1] });
          }}
          renderInput={() => <></>}
        />
      </LocalizationProvider>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="text"
          onClick={() => {
            ctx?.updateData({ checkin: null, checkout: null });
          }}
        >
          날짜지우기
        </Button>
      </Box>
    </Box>
  );
}

export default CalendarFragment;
