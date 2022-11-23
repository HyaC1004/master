import { HostingData } from "../../lib/models/hosting";
import { Box, Typography, Button } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function DetailMainHeader({ data }: { data: HostingData }) {
  return (
    <Box id="title">
      <Box>
          <Typography variant="h3">{data.title}</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
          <Box sx={{display:"flex", flexDirection:"row"}}>
            <Typography variant="subtitle1">★ 5.0 ·</Typography>
            <Typography variant="subtitle1" sx={{textDecorationLine:"underline", ml:1, cursor:"pointer"}}>후기 10개 </Typography>
            <Typography variant="subtitle1" sx={{ml:1}}>· 슈퍼호스트 ·</Typography>
            <Typography variant="subtitle1" sx={{textDecorationLine:"underline", ml:1}}>{data.location.state}, {data.location.city}</Typography>
          </Box>
          <Box sx={{display:"flex", flexDirection:"row"}}>
            <Typography variant="subtitle1" sx={{textDecorationLine:"underline", ml:1}}>공유하기 </Typography>
            <Typography variant="subtitle1" sx={{textDecorationLine:"underline", ml:1}}>♡ 저장 </Typography>
          </Box>
        </Box>
    </Box>
  );
}

export default DetailMainHeader;
