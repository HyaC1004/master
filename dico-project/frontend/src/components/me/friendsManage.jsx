import { Badge, Box, Button, Divider, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import { useContext, useState } from "react"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { isFocusable } from "@testing-library/user-event/dist/utils";
import AddFriend from "./friends/add-friend";
import { grey } from "@mui/material/colors";
import AuthContext from "../../contexts/AuthContext";
import PendingFriend from "./friends/pending-friend";
import OnlineFriend from "./friends/online-friend";
import AllFriend from "./friends/all-friend";


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));


function FriendsManage({ friends }) {
    const ctx = useContext(AuthContext);
    const [mode, setMode] = useState('online');
    const handleChange = (event, newMode) => {
        if (newMode)
            setMode(newMode);
    };

    const existPending = friends.filter((o) => o.type === 3 || o.type === 4).length > 0;

    return (<Box sx={{ flex: 1, background: "#323232" }}>
        <Typography>{ctx.data?.user.email}</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", p: 2, gap: 2, maxHeight: "56px" }}>
            {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmojiPeopleIcon fontSize="large" />
                <Typography variant="subtitle1" component={"span"}>친구</Typography>
            </Box>
            <Divider color="white" orientation="vertical" flexItem /> */}
            <StyledToggleButtonGroup
                color="primary"
                value={mode}
                exclusive
                onChange={handleChange}
                sx={{ gap: 3 }}
            >
                <ToggleButton value="online" >온라인</ToggleButton>
                <ToggleButton value="all">모두</ToggleButton>
                <ToggleButton value="pending">
                    {existPending && <Badge badgeContent={4} color="success" variant="dot">
                        대기중
                    </Badge>}
                    {!existPending && <>대기중</>}
                </ToggleButton>
                <ToggleButton value="add-friend" color="success" >친구 추가하기</ToggleButton>
            </StyledToggleButtonGroup>
        </Box>
        <Divider />
        {mode === "add-friend" && <AddFriend />}
        {mode === "pending" && <PendingFriend friends={friends.filter(one => one.type === 3 || one.type === 4)} />}
        {mode === "online" && <OnlineFriend friends={friends.filter(one => one.type === 1)} />}
        {mode === "all" && <AllFriend friends={friends.filter(one => one.type === 1 || one.type === 2)} />}
    </Box>);
}

export default FriendsManage;