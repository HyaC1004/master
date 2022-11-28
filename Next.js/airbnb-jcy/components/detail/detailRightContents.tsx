import { HostingData } from "../../lib/models/hosting";
import { Box, Typography, Divider, TextField, Collapse, ListItemButton, ListItemText, List } from "@mui/material";
import { Card, CardContent, Button } from "@mui/material";
import { useContext, useState } from "react";
import { BookContext } from "../../pages/rooms/[roomId]";
import { format, differenceInCalendarDays } from "date-fns";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import AvailabilityCalendar from "./calendar/availability-calendar";
import GusetSelect from "./parts/gusetSelect";
import { useRouter } from "next/router";

function DetailRightContents({ hosting }: { hosting: HostingData }) {
  const ctx = useContext(BookContext);
  const router = useRouter();
  
  let diff:any;
  if (ctx?.data.checkin && ctx?.data.checkout) {
    diff = differenceInCalendarDays(ctx?.data.checkout, ctx?.data.checkin);
  }
  
  
  
  const reserveHandle: React.MouseEventHandler = async(evt) => {
    evt.stopPropagation();
    if (ctx && ctx.data.checkin && ctx.data.checkout && ctx.data.productId) {
      const params = new URLSearchParams();
      params.append("numberOfGuests", ctx?.data.numberOfGuests!.toString());
      params.append("numberOfAdults", ctx?.data.numberOfAdults!.toString());
      params.append(
        "numberOfChildren",
        ctx?.data.numberOfChildren!.toString()!
        );
      params.append("checkin", format(ctx?.data.checkin, "yyyy-MM-dd"));
      params.append("checkout", format(ctx?.data.checkout, "yyyy-MM-dd"));
      params.append("productId", ctx.data.productId);
      const totalfee = ((hosting.price * diff * (ctx?.data.numberOfGuests ?? 1) + Math.ceil(hosting.price * diff * (ctx?.data.numberOfGuests ?? 1) * 0.14))*0.00075).toFixed(2);
      const response = await fetch(
        "/api/book/checkout",
        {
          method: "POST",
          body: JSON.stringify({...ctx.data, totalFee:totalfee}),
          headers: { "Content-type": "application/json" },
        }
      );
      const json = await response.json();
      console.log(json);
      // console.log(params.toString());
      // router.push(
      //   "/book/check/" + ctx.data.productId + "?" + params.toString()
      // );
    } else {
      ctx?.openDialog();
    }
  };
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
                ₩{hosting.price.toLocaleString()}
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
              onClick={(evt) => evt.stopPropagation()}
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
                  onClick={() => ctx?.openDialog()}
                >
                  <Typography variant="caption">체크인</Typography>
                  <Typography variant="body2">
                    {ctx?.data.checkin
                      ? format(ctx?.data.checkin, "yyyy-MM-dd")
                      : "날짜추가"}
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
                  onClick={() => ctx?.openDialog()}
                >
                  <Typography variant="caption">체크아웃</Typography>
                  <Typography variant="body2">
                    {ctx?.data.checkout
                      ? format(ctx?.data.checkout, "yyyy-MM-dd")
                      : "날짜추가"}
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
                    height:"400px"
                  }}
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={() => { ctx?.open ? ctx?.closeGuest() : ctx?.openGuest()}}
                >
                  <Box sx={{display:"flex",width:'100%', justifyContent:"space-between"}}>
                    <Box sx={{textAlign:"left"}}>
                      <Typography variant="caption">인원</Typography>
                      <Typography variant="body2">
                        게스트 {ctx?.data.numberOfGuests}명
                      </Typography>
                    </Box>
                    <Box sx={{pt:2}}>
                      {ctx?.open ? <ExpandMore /> : <ExpandLess />}
                    </Box>
                  </Box>
                </Button>
                
              </Box>
              {ctx?.open && <GusetSelect />}
            </Box>
            <Box sx={{ mb: 1 }}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={reserveHandle}
              >
                {ctx?.data.checkin && ctx?.data.checkout
                  ? "예약하기"
                  : "예약 가능 여부 보기"}
              </Button>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography textAlign={"center"} variant="body2">
                예약 확정 전에는 요금이 청구되지 않습니다.
              </Typography>
            </Box>
            {diff && (
              <>
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>
                    ₩{hosting.price.toLocaleString()} X {diff}박
                  </Typography>
                  <Typography>
                    ₩{(hosting.price * diff).toLocaleString()}{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>서비스 수수료</Typography>
                  <Typography>
                    ₩{Math.round(hosting.price * diff * 0.14).toLocaleString()}{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>총 인원 수</Typography>
                  <Typography>
                    {ctx?.data.numberOfGuests} 명
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
                      hosting.price * diff * (ctx?.data.numberOfGuests ?? 1) +
                      Math.ceil(hosting.price * diff * (ctx?.data.numberOfGuests ?? 1) * 0.14)
                    ).toLocaleString()}
                  </Typography>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
        {ctx?.isOpened && <AvailabilityCalendar />}
      </Box>
    </>
  );
}

export default DetailRightContents;
