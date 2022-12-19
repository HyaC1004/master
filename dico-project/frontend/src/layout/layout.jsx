import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Avatar, CircularProgress, Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import HomeIcon from '@mui/icons-material/Home';
import AuthContext from '../contexts/AuthContext';
import Spinner from '../components/utils/spinner';

function Layout() {

    const ctx = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    useEffect(() => {
        if (ctx.status === "unauthenticated") {
            navigate("/");
        }
    }, [ctx.status]);

    if (ctx.status === "loading") {
        console.log("!!!");
        return <Spinner />
    }

    return (
        <Box
            sx={{ bgcolor: 'background.paper', display: 'flex', height: "100vh" }}
        >
            <Box sx={{ pt: 0.5 }}>
                <MenuList dense={false} sx={{
                    "&& .Mui-selected": {
                        borderRight: "5px solid #ffffff"
                    },
                }}>
                    <MenuItem onClick={(evt) => setValue(0)} selected={value === 0}>
                        <Tooltip title={"다이렉트 메시지"} placement={"right"} arrow >
                            <Avatar>
                                <HomeIcon fontSize="large" color='action' />
                            </Avatar>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem onClick={(evt) => setValue(1)} selected={value === 1}>
                        <Avatar>
                            <HomeIcon fontSize="large" color='action' />
                        </Avatar>
                    </MenuItem>
                    <MenuItem onClick={(evt) => setValue(2)} selected={value === 2}>
                        <Avatar>
                            <HomeIcon fontSize="large" color='action' />
                        </Avatar>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={(evt) => {
                        setValue(3);
                        ctx.logout();
                    }} selected={value === 3}>
                        <Avatar>
                            <HomeIcon fontSize="large" color='action' />
                        </Avatar>
                    </MenuItem>
                </MenuList>
            </Box>
            <Outlet />
        </Box>
    );
}

export default Layout;