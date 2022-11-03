import React from 'react';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./signup.module.css";
import { Checkbox, Container, Divider, FormControlLabel, Grid, Link, TextField } from '@mui/material';

type props = {onClickNext:()=>void; defaultEmail:string}

export default function SignUpForm({onClickNext,defaultEmail}:props) {
    useEffect(()=>{
        
    },[defaultEmail])
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onClickNext();
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            birth: data.get('birth'),
            email: data.get('email'),
            password: data.get('password'),
        });
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
        <Typography component="h2" variant="inherit">
          회원 가입 완료하기
        </Typography>
        <Divider style={{width:'100%'}}/>              
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Typography component="h2" variant="inherit" sx={{mb:1}}>
                여행마렵다에 오신 것을 환영합니다.
            </Typography>
            <Grid container spacing={0}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                    만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의 다른 회원에게 공개되지 않습니다.
                </Typography>
                <Grid item xs={12}>
                    <TextField
                        name="email"
                        required
                        fullWidth
                        id="email"
                        label="이메일"
                        defaultValue={defaultEmail}
                        autoFocus
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
                    control={<Checkbox value="allowPersonalInform" color="primary" />}
                    label="개인정보 수집 및 이용에 동의합니다.(필수)"/>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="마케팅 이메일 수신을 원합니다.(선택)"/>
                </Grid>
            </Grid>
            <Divider />
            <Typography component="h2" variant="caption" sx={{mt:1}}>
                동의 및 계속하기를 선택하여 에어비앤비 서비스 약관, 결제 서비스 약관, 위치기반서비스 이용약관, 차별 금지 정책, 개인정보 처리방침에 동의합니다.
            </Typography>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={styles.submitButton}>
                동의 및 계속하기
            </Button>          
        </Box>
      </Box>
    </Container>
  );
}
