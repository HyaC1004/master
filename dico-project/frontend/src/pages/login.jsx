import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/utils/spinner";
import AuthContext from "../contexts/AuthContext";
function LoginPage() {
    const ctx = useContext(AuthContext);

    const navaigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pending, setPending] = useState(false);

    const loginHandle = async (evt) => {
        evt.preventDefault();
        setPending(true);
        const result = await ctx.login(email, password);
        if (result) {
            setTimeout(() => {
                setPending(false);
                navaigate("/channels/@me");
            }, 500)
        }
    }

    if (pending) {
        return <Spinner />
    }
    return (<Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            height: "100vh"
        }}
    >
        <Box sx={{ p: 5, minWidth: "640px", borderRadius: "7px", background: grey[800] }}>
            <Box sx={{ py: 1 }}>
                <Typography component="h1" variant="h5">
                    돌아오신 것을 환영해요!
                </Typography>
                <Typography component="h5" variant="subtitle1">
                    다시 만나다니 너무 반가워요!
                </Typography>
            </Box>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Typography variant="body2">이메일 *</Typography>
                <TextField
                    autoComplete="none"
                    size="small"
                    required
                    fullWidth
                    InputProps={{ sx: { background: "#171717", color: "white" } }}
                    margin={"dense"}
                    value={email}
                    onChange={evt => setEmail(evt.target.value)}
                />
                <Typography variant="body2" sx={{ mt: 2 }}>비밀번호 *</Typography>
                <TextField
                    type={"password"}
                    autoComplete="none"
                    size="small"
                    required
                    fullWidth
                    InputProps={{ sx: { background: "#171717", color: "white" } }}
                    margin={"dense"}
                    value={password}
                    onChange={evt => setPassword(evt.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    size="large"
                    onClick={loginHandle}
                >
                    로그인
                </Button>
                <Box>
                    <Typography component={"span"} variant={"body2"}>계정이 필요한가요?</Typography>
                    <Typography component={"span"} variant={"body2"} sx={{ px: 1 }} >가입하기</Typography>
                </Box>
            </Box>
        </Box>
    </Box>);
}

export default LoginPage;