import { AppBar, Avatar, Box, Container, Divider, IconButton,Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import Search from "./search";
import Sign from "../ui/sign";
import { signOut, useSession } from "next-auth/react";


export default function Header() {
    const { data, status } = useSession();
    const settings = ['숙소 호스트 되기', '체험 호스팅하기', '도움!!'];
    const [signUp, setSignUp] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    // console.log(data);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenSignUp = () => {
        setAnchorElUser(null);
        setSignUp(true);
    };

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
                    <Tooltip title="Open Menu">             
                    <div style={{backgroundColor:"white",border:"1px solid #ccc", borderRadius:20, padding:"0.2rem"}}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <MenuIcon sx={{ mr:1, color:"#ccc" }}></MenuIcon>
                            <Avatar alt="" src={data?.user?.image ?? ""} />
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
                    {
                        status==="authenticated" ? 
                        (<div>
                            <MenuItem key="profile" onClick={() => setAnchorElUser(null)}>
                                <Typography textAlign="center" fontWeight="bolder">프로필</Typography>
                            </MenuItem>
                            <MenuItem key="logOut" onClick={() => signOut()}>
                                <Typography textAlign="center">로그아웃</Typography>
                            </MenuItem>
                        </div>):
                        (<div>
                            <MenuItem key="signUp" onClick={handleOpenSignUp}>
                                <Typography textAlign="center" fontWeight="bolder">회원가입</Typography>
                            </MenuItem>
                            <MenuItem key="logIn" onClick={handleOpenSignUp}>
                                <Typography textAlign="center">로그인</Typography>
                            </MenuItem>
                        </div>)
                    }
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
        <Sign open={signUp} setOpen = {handleCloseSignUp} />
    </header>
    )
}
