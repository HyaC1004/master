import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./signup.module.css";
import { useRef, useContext, useState } from "react";
import { SignCotext } from ".";

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
    const topX = screenX + screen.width / 2 - 500 / 2;
    const topY = screenY + screen.height / 2 - 650 / 2;
    console.log(process.env.SERVER_ADDRESS);
    window.open(
      `${process.env.SERVER_ADDRESS}/popup/google`,
      "popup",
      `top=${topY},left=${topX},width=500,height=650`
    );
  };
  const facebookSignHandle =()=> {
    const topX = screenX + screen.width / 2 - 500 / 2;
    const topY = screenY + screen.height / 2 - 650 / 2;
    window.open(
      `${process.env.SERVER_ADDRESS}/popup/facebook`,
      "popup",
      `top=${topY},left=${topX},width=500,height=650`
    );
  }
  const discordSignHandle = () =>{
    const topX = screenX + screen.width / 2 - 500 / 2;
    const topY = screenY + screen.height / 2 - 650 / 2;
    window.open(
      `${process.env.SERVER_ADDRESS}/popup/discord`,
      "popup",
      `top=${topY},left=${topX},width=500,height=650`
    );
  }
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
        <Typography variant="h6">여행마렵다에 오신 것을 환영합니다.</Typography>
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
          <Divider sx={{ mb: 2 }}>
            <small>또는</small>
          </Divider>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button type="button" onClick={facebookSignHandle} fullWidth variant="contained" className={styles.snsButtonStyle}>
                페이스북으로 로그인하기
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="button" onClick={googleSignHandle} fullWidth variant="contained" className={styles.snsButtonStyle}>
                구글로 로그인하기
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="button" onClick={discordSignHandle} fullWidth variant="contained" className={styles.snsButtonStyle}>
                디스코드로 로그인하기
              </Button>
            </Grid>
            
          </Grid>
        </Box>
      </DialogContent>
    </>
  );
}
