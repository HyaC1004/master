import { Avatar, Button, CircularProgress, Divider, InputAdornment, TextField, Typography } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import Spinner from "../../utils/spinner";
import MessageItem from "./fragment/message-item";

import { io } from "socket.io-client";
function DirectMessage({ channelId, socket }) {
    // console.log(channelId);
    const [loaded, setLoaded] = useState(false);
    const [txt, setTxt] = useState("");
    const ctx = useContext(AuthContext);
    const [relationship, setRelationship] = useState({});
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        (async function () {
            const jwt = localStorage.getItem("jwt");
            const response = await fetch("http://localhost:8080/channels/" + channelId + "/message", {
                method: "GET",
                headers: {
                    "authorization": "Bearer " + jwt,
                    "Content-type": "application/json"
                }
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                setRelationship(data.relationship);
                setMessages(data.messages);
            }
            setTimeout(() => {
                setLoaded(true);
            }, 500)
        })();

    }, []);
    if (!loaded) {
        return <Spinner />
    }


    const changeHandle = (evt) => {
        setTxt(evt.target.value);
    }
    const keyDownHandle = async (evt) => {
        if (evt.key === "Enter") {

            const response = await fetch("http://localhost:8080/channels/" + channelId + "/message", {
                method: "POST",
                body: JSON.stringify({ author: ctx.data.user.email, content: txt }),
                headers: {
                    "Content-type": "application/json"
                }
            });
            setTxt("");
            const result = await response.json();
            console.log(result)
            setMessages((c) => [...c, result.item]);

        }
    }

    const target = ctx.data.user.email === relationship.owner.email ? relationship.opponentDetail :
        relationship.ownerDetail;
    return (<Box sx={{ background: grey[800], height: "100vh", display: "flex", flexDirection: "column", flex: 1 }}>
        <Box sx={{ p: 2, width: "100%", display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: deepOrange[500], width: 64, height: 64, fontSize: "2em" }} >{target.name.substring(0, 1)}</Avatar>
            <Box>
                <Typography variant="h4">{target.name} - ({target.sid === null ? "오프라인" : "온라인"})</Typography>
                <Typography>({target.email})</Typography>
            </Box>
        </Box>
        <Box sx={{ p: 2, width: "100%", mb: 0.5 }}>
            <Typography color={"silver"} marginBottom={1} variant={"h6"}>
                @ {target.name} 님 과 나눈 다이렉트 메시지의 첫 부분이에요.
            </Typography>
            <Button variant="contained" size="small" color="inherit" sx={{ color: "black" }}>친구 삭제하기</Button>
        </Box>
        <Divider />
        <Box sx={{ background: grey[800], p: 1.5, width: "100%", flex: 1, position: "relative" }}>
            {messages.map((o) => <MessageItem data={o} key={o._id} />)}
        </Box>
        <Box sx={{ p: 2 }}>
            <TextField sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                        borderColor: 'transparent',
                    }
                }
            }}
                onKeyDown={keyDownHandle}
                value={txt}
                onChange={changeHandle}
                placeholder={target.name + " 에게 메시지 보내기"}
                margin="dense" fullWidth
                InputProps={{
                    sx: { background: grey[900] },
                }} />
        </Box>
    </Box >);
}

export default DirectMessage;