import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/router";

export default function AuthNew() {
  const router = useRouter();
  const { name, email, provider, providerAccountId } = router.query;

  const firstnameRef = useRef<HTMLInputElement | null>();
  const lastnameRef = useRef<HTMLInputElement | null>();
  const emailRef = useRef<HTMLInputElement | null>();
  useEffect(() => {
    emailRef.current!.value = email as string;
    lastnameRef.current!.value = (name as string)?.split(" ")[1] ?? "";
    firstnameRef.current!.value = (name as string)?.split(" ")[0];
  }, [name, email]);

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
            InputLabelProps={{ shrink: true }}
          />
          <Typography variant="caption" gutterBottom={true}>
            만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은
            에어비앤비의 다른 회원에게 공개되지 않습니다.
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
        <Divider sx={{ mt: 1 }} />
        <Box sx={{ paddingY: 1.4 }}>
          <Typography variant="subtitle1">
            개인정보 수집 및 이용에 동의합니다.
          </Typography>
          <Typography variant="caption">
            1. 에어비앤비가 수집하는 개인 정보 에어비앤비 플랫폼을 이용하는 데
            필요한 정보 당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의
            개인 정보를 수집합니다. 그렇지 않은 경우, 에어비앤비는 요청하신
            서비스를 회원님께 제공하지 못할 수 있습니다. 이러한 정보에는 다음이
            포함됩니다.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ paddingY: 1.4 }}>
          <Typography variant="caption" gutterBottom sx={{}}>
            동의 및 계속하기를 선택하여 에어비앤비 서비스 약관, 결제 서비스
            약관, 위치기반서비스 이용약관, 차별 금지 정책, 개인정보 처리방침에
            동의합니다.
          </Typography>
          <Button variant="contained" fullWidth sx={{ mt: 2 }} size="large">
            동의 및 계속하기
          </Button>
        </Box>
      </DialogContent>
    </>
  );
}

AuthNew.isRaw = true;
