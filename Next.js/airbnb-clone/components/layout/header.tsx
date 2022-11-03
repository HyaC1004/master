import { alpha, AppBar, Avatar, Box, Button, Container, Divider, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import SignIn from "../ui/signin";
import SignUpForm from "../ui/signup-form";
import Search from "./search";
import SignUpModal from "../ui/signupModal";


export default function Header() {
    const settings = ['숙소 호스트 되기', '체험 호스팅하기', '도움!!'];
    const [signIn, setSignIn] = React.useState(false);
    const [signUp, setSignUp] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenSignIn = () => {
        setAnchorElUser(null);
        setSignIn(true);
    }
    const handleOpenSignUp = () => {
        setAnchorElUser(null);
        setSignUp(true);
    }
    const handleCloseSignIn = () => setSignIn(false);
    const handleCloseSignUp = () => setSignUp(false);
    return (
    <header>
        <AppBar position="sticky" color="inherit"  >
            <Container maxWidth="xl"  >
                <Toolbar disableGutters style={{justifyContent:"space-between"}}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'GangwonEdu',
                    fontSize: '1.5rem',
                    letterSpacing: '.3rem',
                    color: 'red',
                    textDecoration: 'none',
                    }}
                >
                    여행마렵다
                </Typography>

                <Search />

                <Box sx={{ flexGrow: 0  }}>
                    <Tooltip title="Open settings">             
                    <div style={{backgroundColor:"white",border:"1px solid #ccc", borderRadius:20, padding:"0.2rem"}}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <MenuIcon sx={{ mr:1, color:"#ccc" }}></MenuIcon>
                            <Avatar alt="" src="" />
                        </IconButton>
                    </div>       
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                    <MenuItem key="signUp" onClick={handleOpenSignUp}>
                        <Typography textAlign="center" fontWeight="bolder">회원가입</Typography>
                    </MenuItem>
                    <MenuItem key="logIn" onClick={handleOpenSignIn}>
                        <Typography textAlign="center">로그인</Typography>
                    </MenuItem>
                    <Divider />
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                </Toolbar>
                
            </Container>
        </AppBar>
        <SignUpModal open={signUp} setOpen = {handleCloseSignUp} />
    </header>
    )
}