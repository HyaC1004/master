import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { SignCotext } from "../../components/ui/sign";

export default function AuthNew() {
  const router = useRouter();
  const ctx = useContext(SignCotext);
  const { name, email, provider, providerAccountId } = router.query;

  const firstnameRef = useRef<HTMLInputElement | null>();
  const lastnameRef = useRef<HTMLInputElement | null>();
  const dobRef = useRef<HTMLInputElement | null>();
  const emailRef = useRef<HTMLInputElement | null>();
  const passwordRef = useRef<HTMLInputElement | null>();


  useEffect(() => {
    emailRef.current!.value = email as string;
    lastnameRef.current!.value = (name as string)?.split(" ")[1] ?? "";
    firstnameRef.current!.value = (name as string)?.split(" ")[0];
  }, [name, email]);

  const signupHandle = async () => {
    const datas = {
      firstname: firstnameRef!.current?.value,
      lastname: lastnameRef!.current?.value,
      dob: dobRef!.current?.value,
      email: emailRef!.current?.value,
      password: passwordRef!.current?.value
    };
    const response = await fetch("/api/account/signup", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response);
    if (response.status === 201) {
      const result: any = await signIn("credentials", {
        redirect: false,
        email: datas.email
      });
      if (result.ok) {
        ctx?.closeModal(true);
      } else {
      }
    }
  };

  return (
    <>
      <DialogTitle>
        <Typography textAlign={"center"}>회원 가입 완료하기</Typography>
        <Typography textAlign={"center"} variant="body2">
          회원 가입을 완료하기 위해 누락된 정보들을 입력해주세요.
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ mb: 1.5 }}>
          <TextField
            color="info"
            margin="none"
            label="이름(예: 길동)"
            type="text"
            placeholder="이름(예: 길동)"
            fullWidth
            variant="outlined"
            inputRef={firstnameRef}
          />
          <TextField
            color="info"
            margin="dense"
            label="성(예: 홍)"
            type="text"
            placeholder="이름(예: 길동)"
            fullWidth
            variant="outlined"
            inputRef={lastnameRef}
          />
          <Typography variant="caption" gutterBottom={true}>
            정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요
          </Typography>
        </Box>
        <Box sx={{ mb: 1.5 }}>
          <TextField
            color="info"
            margin="dense"
            label="생년월일"
            type="date"
            fullWidth
            variant="outlined"
            inputRef={dobRef}
            InputLabelProps={{ shrink: true }}
          />
          <Typography variant="caption" gutterBottom={true}>
            만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은
            여행마렵다의 다른 회원에게 공개되지 않습니다.
          </Typography>
        </Box>
        <Box sx={{ mb: 1.5 }}>
          <TextField
            color="info"
            margin="dense"
            label="이메일"
            type="email"
            placeholder="이메일"
            fullWidth
            variant="outlined"
            inputRef={emailRef}
            disabled
          />
        </Box>
        <Box>
          <TextField
            color="info"
            margin="dense"
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            fullWidth
            variant="outlined"
            inputRef={passwordRef}
          />
        </Box>
        <Divider sx={{ mt: 1 }} />
        <Box sx={{ paddingY: 1.4 }}>
          <Typography variant="subtitle1">
            개인정보 수집 및 이용에 동의합니다.
          </Typography>
          <Typography variant="caption">
            1. 여행마렵다가 수집하는 개인 정보 여행마렵다 플랫폼을 이용하는 데
            필요한 정보 당사는 회원님이 여행마렵다 플랫폼을 이용할 때 회원님의
            개인 정보를 수집합니다. 그렇지 않은 경우, 여행마렵다는 요청하신
            서비스를 회원님께 제공하지 못할 수 있습니다. 이러한 정보에는 다음이
            포함됩니다.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ paddingY: 1.4 }}>
          <Typography variant="caption" gutterBottom sx={{}}>
            동의 및 계속하기를 선택하여 여행마렵다 서비스 약관, 결제 서비스
            약관, 위치기반서비스 이용약관, 차별 금지 정책, 개인정보 처리방침에
            동의합니다.
          </Typography>
          <Button variant="contained" fullWidth sx={{ mt: 2 }} size="large" onClick={signupHandle}>
            동의 및 계속하기
          </Button>
        </Box>
      </DialogContent>
    </>
  );
}

AuthNew.isRaw = true;
