import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import { useRef, useContext, useState } from "react";
import { SignCotext } from ".";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SingInForm() {
  const ctx = useContext(SignCotext);

  const [email, setEmail] = useState<string>("");
  const submitHandle = async (code?: string) => {
    if (code === "Enter" || code === undefined) {
      ctx?.setUserStatus({ currentUser: email });

      const response = await fetch("/api/account/flow", {
        method: "POST",
        body: JSON.stringify({ loginIdentifier: email }),
        headers: { "Content-type": "application/json" },
      });
      if (response.status === 200) {
        const json = await response.json();
        ctx?.setUserStatus({ mode: "SIGNAUTH" });
      } else if (response.status === 302) {
        ctx?.setUserStatus({ mode: "SIGNUP" });
      } else {
      }
    }
  };

  const closeIconHandle = () => {
    ctx?.closeModal();
  };

  const googleSignHandle = () => {
    console.log(screen.width, screen.height);
    console.log(screenX, screenY);
    const topX = screenX + screen.width / 2 - 400 / 2;
    const topY = screenY + screen.height / 2 - 550 / 2;
    window.open(
      "http://localhost:3000/popup/google",
      "popup",
      `top=${topY},left=${topX},width=400,height=550`
    );
  };

  return (
    <>
      <DialogTitle>
        <CloseIcon
          fontSize="small"
          sx={{ position: "absolute", left: 12 }}
          onClick={closeIconHandle}
        />
        <Typography textAlign={"center"}>로그인 또는 회원가입</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Typography variant="h6">에어비앤비에 오신 것을 환영합니다.</Typography>
        <Box>
          <TextField
            color="info"
            autoFocus
            margin="dense"
            label="이메일"
            type="email"
            placeholder="이메일"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            onKeyDown={(evt) => submitHandle(evt.code)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={() => submitHandle("Enter")}
            size="large"
            sx={{ my: 2 }}
          >
            계속
          </Button>
          <Divider sx={{ mt: 1 }}>
            <small>또는</small>
          </Divider>
          <Button
            variant="outlined"
            fullWidth
            onClick={googleSignHandle}
            size="large"
            sx={{ my: 2 }}
            color={"info"}
          >
            <Image
              alt="google"
              src="/icons/google.png"
              width={18}
              height={18}
              style={{ position: "absolute", left: 20 }}
            />
            구글로 로그인하기
          </Button>
        </Box>
      </DialogContent>
    </>
  );
}
