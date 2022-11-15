import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

export default function AuthLinking() {
  const router = useRouter();
  const passRef = useRef<HTMLInputElement | null>(null);
  const { name, email, provider, providerAccountId } = router.query;

  const submitHandle = async (code?: string) => {
    if (code === "Enter" || code === undefined) {
    }
  };

  return (
    <>
      <DialogTitle>
        <Typography textAlign={"center"}>계정이 이미 존재합니다</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Typography variant="subtitle2" textAlign={"center"}>
          회원님 소유의 계정이 존재합니다. 계정으로 로그인하시기 바랍니다.
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <AccountCircleIcon sx={{ fontSize: "240px" }} />
        </Box>
        <Box>
          <Typography variant="body1" textAlign={"center"}>
            {name}
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            {email}
          </Typography>
        </Box>
        <Box>
          <TextField
            color="info"
            autoFocus
            margin="dense"
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            fullWidth
            variant="outlined"
            inputRef={passRef}
            onKeyDown={(evt) => submitHandle(evt.code)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={() => submitHandle("Enter")}
            size="large"
            sx={{ my: 2 }}
          >
            로그인
          </Button>
          <Button variant="text">다른 계정으로 로그인하기</Button>
        </Box>
      </DialogContent>
    </>
  );
}

AuthLinking.isRaw = true;
