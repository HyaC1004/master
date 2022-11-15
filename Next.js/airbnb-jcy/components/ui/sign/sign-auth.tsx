import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useContext } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { signIn, SignInResponse } from "next-auth/react";
import { SignCotext } from ".";

export default function SignAuthForm() {
  const ctx = useContext(SignCotext);

  const passRef = useRef<HTMLInputElement | null>(null);

  const submitHandle = async (code?: string) => {
    if (code === "Enter" || code === undefined) {
      const result = (await signIn("credentials", {
        redirect: false,
        email: ctx?.currentUser,
        password: passRef.current?.value,
      })) as SignInResponse;

      console.log("signIn's result", result);
      if (result.ok) {
        ctx?.closeModal(true);
      } else {
      }
    }
  };

  return (
    <>
      <DialogTitle>
        <ArrowBackIosNewIcon
          fontSize="small"
          sx={{ position: "absolute", left: 12 }}
          onClick={() => ctx?.closeModal()}
        />
        <Typography textAlign={"center"}>로그인</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
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
          <Button variant="text">비밀번호를 잊으셨나요?</Button>
        </Box>
      </DialogContent>
    </>
  );
}
