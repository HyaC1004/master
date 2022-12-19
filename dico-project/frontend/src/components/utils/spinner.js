import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

function Spinner() {
    return (<Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        height: "100vh"
    }}><CircularProgress /></Box>);
}

export default Spinner;