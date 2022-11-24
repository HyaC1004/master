import * as React from 'react';
import  DateFnsUtils from '@date-io/date-fns';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';

export default function DetailDatePicker() {
  const [value, setValue] = React.useState<DateRange<DateFnsUtils>>([null, null]);

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        disablePast
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
    </>
  );
}