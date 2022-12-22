import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function MessageItem({ data }) {
    return (<Box>
        <Typography>{data.content}</Typography>
    </Box>);
}

export default MessageItem;