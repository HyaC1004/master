import { HostingData } from "../../../lib/models/hosting";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { BookContext } from "../../../pages/rooms/[roomId]";
import { differenceInCalendarDays, format } from "date-fns";
import { ko } from "date-fns/locale";
function BookingSummary({ hosting }: { hosting: HostingData }) {
  const ctx = useContext(BookContext);

  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      {ctx?.data.checkin && ctx?.data.checkout && (
        <>
          <Typography variant="h6">
            {hosting.location.city}, {hosting.location.state}에서{" "}
            {differenceInCalendarDays(ctx.data.checkout, ctx.data.checkin)}박
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {format(ctx.data.checkin, "yyyy년 MM월 dd일")} ~
            {format(ctx.data.checkout, "yyyy년 MM월 dd일")}
          </Typography>
        </>
      )}
      {!ctx?.data.checkin && !ctx?.data.checkout && (
        <>
          <Typography variant="h6">체크인 날짜를 선택해주세요.</Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            여행 날짜를 입력하여 정확한 요금을 확인하세요.
          </Typography>
        </>
      )}
      {ctx?.data.checkin && !ctx?.data.checkout && (
        <>
          <Typography variant="h6">체크아웃 날짜를 선택해주세요.</Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            여행 날짜를 입력하여 정확한 요금을 확인하세요.
          </Typography>
        </>
      )}
    </Box>
  );
}

export default BookingSummary;
