import { Button, Divider, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors"
import { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
function AddFriend() {
    const ctx = useContext(AuthContext);
    const [value, setValue] = useState("");
    const [result, setResult] = useState();
    const addFriendHandle = async () => {
        const jwt = localStorage.getItem("jwt");
        const response = await fetch("http://localhost:8080/@me/relationship", {
            method: "POST",
            body: JSON.stringify({ opponent: value }),
            headers: {
                "authorization": "Bearer " + jwt,
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
        setResult({ status: response.status, message: data.message });
        if (response.status === 201) {
            setValue("");
        }
    }
    return (
        <>
            <Box sx={{
                p: 3,
            }}>

                <Typography variant="h6">친구 추가하기</Typography>
                <Typography variant="body1" color={grey[400]}>사용자 이메일 주소를 사용하여 친구를 추가할 수 있어요.</Typography>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'transparent',
                            },
                            '&:hover fieldset': {
                                borderColor: 'transparent',
                            }
                        }
                    }}
                    margin="dense"
                    id="input-with-icon-textfield"
                    fullWidth
                    value={value}
                    onChange={(evt) => setValue(evt.target.value)}
                    InputProps={{
                        sx: { background: grey[900] },
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button onClick={addFriendHandle}
                                    color="success" variant="contained">친구 요청 보내기</Button>
                            </InputAdornment>
                        ),
                    }}
                    placeholder="email@address.com"
                    variant="outlined"
                />
                {result &&
                    <Typography
                        color={result.status === 201 ? "lightgreen" : "lightpink"} >{result.message}</Typography>
                }
            </Box>
            <Divider />
        </>);
}

export default AddFriend;
