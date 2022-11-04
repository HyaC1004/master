import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./signup.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Container, Divider, Grid, TextField } from '@mui/material';
import { signIn, SignInResponse } from "next-auth/react";
import { SignCotext } from '.';
import { useSession } from "next-auth/react";
type props = {loginEmail:string;}

export default function SignIn({loginEmail}: props) {
  const ctx = React.useContext(SignCotext);
  const { data, status } = useSession();    
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const pw = data.get('password');
    if(pw){
      const result = (await signIn("credentials", {
        redirect: false,
        email: loginEmail,
        password: pw,
      })) as SignInResponse;
      console.log("결과: ", result);
      if (result) {
        console.log("data: ", data);
        console.log("status: ", status);
      } else {
        console.log("로그인 실패")
      }
    }else{
        alert("비밀번호를 입력해주세요!");
    }   
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ArrowBackIosNewIcon
          fontSize="small"
          sx={{ position: "absolute", right: 24, top:24, cursor:"pointer" }}
          onClick={ctx?.onClick}
        />
        <Typography component="h2" variant="inherit">
          로그인
        </Typography>
        <Divider style={{width:'100%'}}/>              
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Typography component="h3" variant="inherit" sx={{mb:1, textAlign:"center"}}>
            여행마렵다에 오신 것을 환영합니다.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="password"
                required
                fullWidth
                id="password"
                label="비밀번호"
                autoFocus
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={styles.submitButton}>
            로그인
          </Button>
          <Typography>
            비밀번호를 잊으셨나요?
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
