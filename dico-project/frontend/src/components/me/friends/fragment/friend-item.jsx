import { Avatar, Box, IconButton, ListItem, ListItemButton, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { grey } from "@mui/material/colors";
function FriendItem({ data }) {
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


    return (<ListItem disablePadding>
        <ListItemButton sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar />
                <Typography variant="h6">{data.user}</Typography>
                <Typography color={grey[500]}>{typeStr}</Typography>
            </Box>
            <Box>
                {data.type === 4 && <>
                    <IconButton >
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