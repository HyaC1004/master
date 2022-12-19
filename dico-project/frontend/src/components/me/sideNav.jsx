
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from 'react';
import { ListSubheader } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function SideAtMe() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box sx={{
            p: 1, maxWidth: "230px", width: "100%",
            borderRight: 1, borderColor: 'divider', background: grey[900]
        }}>
            <List component="nav" aria-label="main mailbox folders" sx={{}}>
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <EmojiPeopleIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="친구" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <SettingsIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="환경설정" />
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: grey[900] }}>
                        다이렉트 메시지
                    </ListSubheader>
                }>
            </List>
        </Box>
    );
}