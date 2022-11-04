import React from 'react';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./signup.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Checkbox, Container, Divider, FormControlLabel, Grid, Link, TextField } from '@mui/material';
import { SignCotext } from '.';

type props = {defaultEmail:string}

export default function SignUpForm({defaultEmail}:props) {
    const ctx = React.useContext(SignCotext);
    const [check, setCheck] = React.useState({
        auth: false,
        marketing: false
    });
    useEffect(()=>{
        
    },[defaultEmail])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheck({
          ...check,
          [event.target.name]: event.target.checked,
        });
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);        
        const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            birth: data.get('birth'),
            email: data.get('email'),
            password: data.get('password'),
            auth :check.auth,
            marketing: check.marketing,
            marketingDate: check.marketing ? Date.now(): null,
            accountStatus: false,
        }
        if(check.auth){
            fetch("/api/account/signup", {
                method: "post",
                body: JSON.stringify(userData),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.result) {
                    ctx?.onClose();
                }
            });
        }else{
            alert("이용약관에 동의해주세요!");
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
          회원 가입 완료하기
        </Typography>
        <Divider style={{width:'100%'}}/>              
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Typography component="h3" variant="inherit" sx={{mb:1, textAlign:"center"}}>
                여행마렵다에 오신 것을 환영합니다.
            </Typography>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="이름"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="lastName"
                        required
                        fullWidth
                        id="lastName"
                        label="성"
                        autoFocus
                    />
                </Grid>
                <Typography component="h2" variant="caption" sx={{mt:1,mb:2}}>정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.</Typography>
                <Grid item xs={12}>
                    <TextField
                        name="birth"
                        required
                        fullWidth
                        id="birth"
                        label="생년월일"
                        autoFocus
                    />
                </Grid>
                <Typography component="h2" variant="caption" sx={{mt:1,mb:2}}>
                    만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 여행마렵다의 다른 회원에게 공개되지 않습니다.
                </Typography>
                <Grid item xs={12}>
                    <TextField
                        name="email"
                        required
                        fullWidth
                        id="email"
                        label="이메일"
                        value={defaultEmail}
                    />
                </Grid>
                <Typography component="h2" variant="caption" sx={{mt:1,mb:2}}>
                    예약 확인과 영수증을 이메일로 보내드립니다.
                </Typography>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                />
                </Grid>
                <Divider />
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox onChange={handleChange} name='auth' color="primary" />}
                    label="개인정보 수집 및 이용에 동의합니다.(필수)"/>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox onChange={handleChange} name="marketing" color="primary" />}
                    label="마케팅 이메일 수신을 원합니다.(선택)"/>
                </Grid>
            </Grid>
            <Divider />
            <Typography component="h2" variant="caption" sx={{mt:1}}>
                동의 및 계속하기를 선택하여 여행마렵다 서비스 약관, 결제 서비스 약관, 위치기반서비스 이용약관, 차별 금지 정책, 개인정보 처리방침에 동의합니다.
            </Typography>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={styles.submitButton}>
                동의 및 계속하기
            </Button>          
        </Box>
      </Box>
    </Container>
  );
}
