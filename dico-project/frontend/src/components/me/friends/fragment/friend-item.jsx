import { Avatar, Box, IconButton, ListItem, ListItemButton, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
function FriendItem({ data }) {
    const navigate = useNavigate();
    let typeStr = "";
    switch (data.type) {
        case 1:
            typeStr = "온라인"; break;
        case 2:
            typeStr = "오프라인"; break;
        case 3:
            typeStr = "보낸 친구 요청"; break;
        case 4:
            typeStr = "받은 친구 요청"; break;
    }
    const clickHandle = (evt) => {
        console.log(data)
        if (data.type === 1 || data.type === 2) {
            navigate("/channels/@me/" + data._id);
        }
    }
    const checkHandle = (evt) => {
        evt.stopPropagation();
    }

    return (<ListItem disablePadding>
        <ListItemButton sx={{ justifyContent: "space-between" }} onClick={clickHandle}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar />
                <Box>
                    <Typography variant="h6">{data.user.name} <Typography variant="caption" color={"silver"}>({data.user.email})</Typography></Typography>
                    <Typography color={grey[500]}>{typeStr}</Typography>
                </Box>
            </Box>
            <Box>
                {data.type === 4 && <>
                    <IconButton onClick={checkHandle} color={"success"}>
                        <CheckIcon />
                    </IconButton>
                </>
                }
                {data.type >= 3 && <>
                    <IconButton >
                        <ClearIcon />
                    </IconButton>
                </>
                }
            </Box>
        </ListItemButton>
    </ListItem>);
}

export default FriendItem;