import { HostingData } from "../../lib/models/hosting";
import { Box, Typography, Divider, TextField } from "@mui/material";
import { Card, CardContent, Button } from "@mui/material";
import { format, differenceInCalendarDays } from "date-fns";

import { useRouter } from "next/router";

function StayAside({
  hosting,
  booking,
}: {
  hosting: HostingData;
  booking: any;
}) {
  const router = useRouter();
  const diff = differenceInCalendarDays(
    new Date(booking.checkout),
    new Date(booking.checkin)
  );
    // console.log(booking);
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
            {/* 카드 상단 - 숙소 요약 */}
            <Box sx={{ mb: 1, display: "flex", gap: 2 }}>
              <Box>
                <img
                  src={hosting.photos[0].extraUrl}
                  height="106px"
                  width="126px"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant={"subtitle1"}>
                  {hosting.property} {hosting.privacy}
                </Typography>
                <Typography color="gray" variant="body2">
                  {hosting.title}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ py: 1.5 }}>
              <Typography
                component={"span"}
                sx={{ color: "#ff385c", fontSize: "1em", fontWeight: "700" }}
              >
                에어
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: "1em", fontWeight: "700" }}
              >
                커버
              </Typography>
              <Typography component={"span"}>
                &nbsp;를 통한 예약 보호
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box>
              <Typography variant="h6">요금 세부정보</Typography>
              <Box
                sx={{
                  my: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">
                  ₩{hosting.price.toLocaleString()} X {diff}박
                </Typography>
                <Typography variant="body2">
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
                <Typography variant="body2">서비스 수수료</Typography>
                <Typography variant="body2">
                  ₩{Math.round(hosting.price * diff * 0.14).toLocaleString()}{" "}
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
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
                    hosting.price * diff * booking.numberOfGuests +
                    Math.ceil(hosting.price * diff * booking.numberOfGuests * 0.14)
                  ).toLocaleString()}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Typography color="gray" variant="body2">
              해외에서 결제가 처리되기 때문에 카드 발행사에서 추가 수수료를
              부과할 수 있습니다.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default StayAside;
