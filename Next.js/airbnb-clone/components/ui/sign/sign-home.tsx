import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./signup.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Container, Divider, Grid, TextField } from '@mui/material';
import { SignCotext } from '.';

type props = {onSubmit:(user: string, type: boolean)=>void;}

export default function SignHome({onSubmit}:props) {
  const ctx = React.useContext(SignCotext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const defaultEmail:any = data.get('email');

    fetch("/api/account", {
        method: "post",
        body: JSON.stringify({email:defaultEmail}),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
      if(!data.result) {
        return alert("이메일 형식이 잘못됐습니다.");
      }      
      if(!data.type) {
        onSubmit(data.email, data.type);
      } else {
        onSubmit(data.email, data.type);
      }
    });
  };
  const googleLoginHandle =()=> {
    const topX = screenX + screen.width / 2 - 400 / 2;
    const topY = screenY + screen.height / 2 - 550 / 2;
    window.open(
      "http://localhost:3000/popup/google",
      "popup",
      `top=${topY},left=${topX},width=400,height=550`
    );
  }
  const facebookLoginHandle =()=> {
    const topX = screenX + screen.width / 2 - 500 / 2;
    const topY = screenY + screen.height / 2 - 650 / 2;
    window.open(
      "http://localhost:3000/popup/facebook",
      "popup",
      `top=${topY},left=${topX},width=500,height=650`
    );
  }
  const discordLoginHandle = () =>{
    const topX = screenX + screen.width / 2 - 500 / 2;
    const topY = screenY + screen.height / 2 - 650 / 2;
    window.open(
      "http://localhost:3000/popup/discord",
      "popup",
      `top=${topY},left=${topX},width=500,height=650`
    );
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CloseIcon
          fontSize="small"
          sx={{ position: "absolute", right: 24, top:24, cursor:"pointer" }}
          onClick={ctx?.onClose}
        />
        <Typography component="h2" variant="inherit">
          로그인 또는 회원가입
        </Typography>
        <Divider style={{width:'100%'}}/>              
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Typography component="h3" variant="inherit" sx={{mb:1, textAlign:"center"}}>
            여행마렵다에 오신 것을 환영합니다.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-email"
                name="email"
                required
                fullWidth
                id="email"
                label="이메일"
                autoFocus
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={styles.submitButton}>
            계속
          </Button>
          <Divider sx={{mb:1}}>또는</Divider>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button type="button" onClick={facebookLoginHandle} fullWidth variant="contained" className={styles.snsButtonStyle}>
                페이스북으로 로그인하기
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="button" onClick={googleLoginHandle} fullWidth variant="contained" className={styles.snsButtonStyle}>
                구글로 로그인하기
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="button" onClick={discordLoginHandle} fullWidth variant="contained" className={styles.snsButtonStyle}>
                디스코드로 로그인하기
              </Button>
            </Grid>
            
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
