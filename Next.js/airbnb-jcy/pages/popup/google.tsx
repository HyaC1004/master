import { signIn, SignInResponse, useSession } from "next-auth/react";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { Box } from "@mui/material";

export default function GooglePopup() {
  const { data, status } = useSession();

  useEffect(() => {
    console.log("useEffect");
    if (status === "unauthenticated") {
      signIn("google", { redirect: false })
        .then((response) => console.log("then", response))
        .catch((e) => console.log("error", e));
    }
    if (status === "authenticated") {
      window.close();
    }
  }, [status]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

GooglePopup.isRaw = true;
