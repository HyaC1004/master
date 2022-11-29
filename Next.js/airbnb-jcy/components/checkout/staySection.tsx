import { HostingData } from "../../lib/models/hosting";
import { Grid, Box, Typography, Avatar, Divider, Button } from "@mui/material";
import { differenceInCalendarDays, format, subDays } from "date-fns";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";

function StaySection({
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
    const pay = ((hosting.price * diff * booking.numberOfGuests + Math.ceil(hosting.price * diff * booking.numberOfGuests * 0.14))*0.00075).toFixed(2);
    // console.log(booking)
    const bookHandle = async(payment:any) =>{
        const response = await fetch(
          "/api/book/checkout",
          {
            method: "POST",
            body: JSON.stringify({
              productId: hosting._id,
              payment:{...payment},
              publish:true,
              _id: booking.id
            }),
            headers: { "Content-type": "application/json" },
          }
        );
        const json = await response.json();
        if(json.result){
          router.push("/book/result/"+json.data._id);        
        }else{
          alert("오류")
        }
    }
    
  return (
    <Box>
      <Box sx={{}}>
        <Box sx={{ py: 1 }}>
          <Typography variant="h5">예약정보</Typography>
        </Box>
        <Box sx={{ py: 1, display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1">날짜</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2">
                {format(new Date(booking.checkin), "yyyy년 MM월 dd일")}
              </Typography>
              <Typography variant="body2" sx={{ mx: 1 }}>
                ~
              </Typography>
              <Typography variant="body2">
                {format(new Date(booking.checkout), "yyyy년 MM월 dd일")}
              </Typography>
            </Box>
          </Box>
          <Button color="primary">수정</Button>
        </Box>
        <Box sx={{ py: 1, display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1">게스트</Typography>
            <Typography variant="body2">
              게스트 {booking.numberOfGuests}명
            </Typography>
          </Box>
          <Button color="primary">수정</Button>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{}}>
        <Box sx={{ py: 1 }}>
          <Typography variant="h5">환불 정책</Typography>
        </Box>
        <Box sx={{ py: 1, display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {format(subDays(new Date(booking.checkin), 3), "MM월 dd일")} 전
              까지 무료로 취소하실수 있습니다.
            </Typography>
            <Typography variant="body2">
              체크인 날짜인 {format(new Date(booking.checkin), "MM월 dd일")}{" "}
              전에 취소하면 부분 환불을 받으실 수 있습니다. 
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
        <Box sx={{ py: 1 }}>
            <Typography variant="caption">
              아래 버튼을 선택하면 호스트가 설정한 숙소 이용규칙, 여행마렵다의
              재예약 및 환불 정책에 동의하며, 피해에 대한 책임이 본인에게 있을
              경우 여행마렵다가 결제 수단으로 청구의 조치를 취할 수 있다는
              사실에 동의하는 것입니다.
            </Typography>
            <Box sx={{ my: 3 }}>
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AaW_Q2WH3pa25XUDnq3mejRS_xUd03oakAtBWYW45GfaE8lpDYFfYApfn3VC4B4-AE1rBEhn0Z15xHQQ",
                locale:"ko_KR",
                intent:"authorize"
              }}
            >
              <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                  console.log("create Order ...", pay);                  
                  return actions.order
                    .create({
                        purchase_units: [
                        {
                            description:"숙소 예약금",
                            amount: {
                            value: pay,
                            },
                        },
                        ],
                    })
                }}
                onApprove={async (data, actions)=> {
                  // console.log(data);
                  // console.log(actions);
                  const payment = {
                    source: data.facilitatorAccessToken,
                    orderId: data.orderID,
                    payId: data.payerID,
                    paidTime: new Date()
                  }
                  actions.order?.authorize();
                  bookHandle(payment)
                }}
              />
            </PayPalScriptProvider>
          </Box>
        </Box>
    </Box>
  );
}

export default StaySection;
