import { HostingData } from "../../lib/models/hosting";
import { Box, Typography, Divider, TextField, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Card, CardContent, Button } from "@mui/material";
import { useContext, useState } from "react";
import { BookContext } from "../../pages/rooms/[roomId]";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

function DetailRightContents({ data }: { data: HostingData }) {
  const ctx = useContext(BookContext);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [value, setValue] = useState<DateRange<Date>>([
    new Date(ctx?.data.checkin!),
    new Date(ctx?.data.checkout!),
  ]);
  console.log(value);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: "0px",
          pl: 1,
        }}
      >
        <Card sx={{ minWidth: "320px", margin: "auto", width: "100%", p: 1 }}>
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography component={"span"} variant={"h6"}>
                ₩{data.price.toLocaleString()}
              </Typography>
              <Typography component={"span"}>/박</Typography>
            </Box>
            <Box
              sx={{
                mb: 2,
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #000000",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{
                    flex: 1,
                    borderRadius: "0px",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                  variant="outlined"
                  color="inherit"
                  size="large"
                >
                  <Typography variant="caption">체크인</Typography>
                  <Typography variant="body2">
                    {ctx?.data.checkin ?? "날짜추가"}
                  </Typography>
                </Button>
                <Button
                  sx={{
                    flex: 1,
                    borderRadius: "0px",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                  variant="outlined"
                  color="inherit"
                  size="large"
                >
                  <Typography variant="caption">체크아웃</Typography>
                  <Typography variant="body2">
                    {ctx?.data.checkout ?? "날짜추가"}
                  </Typography>
                </Button>
              </Box>
              <Box sx={{ display: "flex", flexDirection:"column", position:"relative" }}>
                <Button
                  sx={{
                    flex: 1,
                    borderRadius: "0px",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={handleClick}
                >
                  <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Typography variant="caption">인원</Typography>
                    <Typography variant="body2">
                      게스트 {ctx?.data.numberOfGuests}명
                    </Typography>
                    {open ? <ExpandMore /> : <ExpandLess />}
                  </Box>
                </Button>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{position:"absolute", top:0}}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </Box>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Button variant="contained" fullWidth size="large">
                예약하기
              </Button>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography textAlign={"center"} variant="body2">
                예약 확정 전에는 요금이 청구되지 않습니다.
              </Typography>
            </Box>
            <Box
              sx={{ mb: 1, display: "flex", justifyContent: "space-between" }}
            >
              <Typography>₩{data.price.toLocaleString()} X 1박</Typography>
              <Typography>₩{(data.price * 1).toLocaleString()} </Typography>
            </Box>
            <Box
              sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Typography>서비스 수수료</Typography>
              <Typography>
                ₩{Math.round(data.price * 1 * 0.14).toLocaleString()}{" "}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: "space-between",
                pt: 2,
              }}
            >
              <Typography>총합계</Typography>
              <Typography>
                ₩
                {(
                  data.price * 1 +
                  Math.ceil(data.price * 1 * 0.14)
                ).toLocaleString()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default DetailRightContents;
