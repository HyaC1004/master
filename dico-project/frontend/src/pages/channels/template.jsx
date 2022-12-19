import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
function ChannelsTemplate() {

    const params = useParams();
    console.log(params);

    return (<Typography>DDD</Typography>);
}

export default ChannelsTemplate;