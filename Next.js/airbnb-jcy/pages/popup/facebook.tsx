import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react";
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

export default function FacebookPopup() {
    const {data, status} = useSession();
    useEffect(()=>{
        if(status === "unauthenticated") {
            signIn("facebook", { redirect: false })
                .then((response) => console.log("then", response))
                .catch((e) => console.log("error", e));
        }
        if( status === "authenticated") {
            window.close();
        }
    },[status])
    return(
    <Box sx={{ display: "flex", justifyContent:"center", alignItems: "center", height:"100vh" }}>
        <CircularProgress />
    </Box>)
}

FacebookPopup.isRaw = true;