import { List, ListSubheader, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";


import FriendItem from "./fragment/friend-item";

function OnlineFriend({ friends }) {

    return (<>
        <Box sx={{
            p: 3,
        }}>
            <TextField fullWidth placeholder="검색하기" sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                        borderColor: 'transparent',
                    }
                }

            }}
                autoComplete={"none"}
                InputProps={{
                    sx: { background: grey[900] },
                }} />

            <List>
                <ListSubheader sx={{ color: grey["A200"], bgcolor: "inherit" }}>
                    대기중
                </ListSubheader>
                {friends.map((data) => <FriendItem key={data._id} data={data} />)}
            </List>


        </Box>
    </>);
}

export default OnlineFriend;