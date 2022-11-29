import { GetServerSideProps } from "next";
import Book, { BookData } from "../../../lib/models/book";
import Hosting, { HostingData } from "../../../lib/models/hosting";
import mongooseInit from "../../../lib/mongooseInit";
import {Box, Typography, Button} from "@mui/material";
import HostingItem from "../../../components/home/hostingItem";
import { format } from "date-fns";
import DetailMainPhotos from "../../../components/detail/detailMainPhotos";
import DetailMainHeader from "../../../components/detail/detailMainHeader";

function BookResult(
    {hosting, bookData} : {hosting:HostingData; bookData:BookData}
) {
    console.log(hosting)
    return (
    <Box>
        <h2>예약완료</h2>  
        <Box sx={{width:"50%"}}>
        <Box sx={{ py: 1 }}>
          <Typography variant="h5">예약정보</Typography>
        </Box>
        <DetailMainHeader hosting={hosting} />
        <DetailMainPhotos hosting={hosting} />
        <Box sx={{ py: 1, display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4">날짜</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6">
                {format(new Date(bookData.checkin), "yyyy년 MM월 dd일")}
              </Typography>
              <Typography variant="h6" sx={{ mx: 1 }}>
                ~
              </Typography>
              <Typography variant="h6">
                {format(new Date(bookData.checkout), "yyyy년 MM월 dd일")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ py: 1, display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4">게스트</Typography>
            <Typography variant="h6">
              게스트 {bookData.numberOfGuests}명
            </Typography>
          </Box>
        </Box>
      </Box> 
    </Box>  );
}

export default BookResult;
export const getServerSideProps: GetServerSideProps = async (context) => {
    mongooseInit();
    const { id }= context.query;
    console.log(context.query)    
    const data = await Book.findById(id);
    const hostingData = await Hosting.findById({_id:data?.productId})
    if (!data || !hostingData) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        hosting: JSON.parse(JSON.stringify(hostingData)),
        bookData: JSON.parse(JSON.stringify(data)),
      },
    };
};

BookResult.isDetail = true;
BookResult.isRaw = true;