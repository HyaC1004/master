import { Button, Icon,Typography, IconButton, Menu, Toolbar } from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEventHandler, useState } from "react";
import SignIndex from "../ui/sign";
import { signOut, useSession } from "next-auth/react";
import UnAuthMenu from "../ui/menu/unauth-menu";
import AuthMenu from "../ui/menu/auth-menu";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CloneHeader() {
  const { data, status } = useSession();
  // console.log("header - data", data);

  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [showSignup, setShowSignup] = useState<boolean>(false);

  const router = useRouter();
  const openMenuHandle: MouseEventHandler = (evt) => {
    setAnchorEl(evt.currentTarget);
  };
  const closeMenuHandle = () => {
    setAnchorEl(null);
  };
  //=================================================
  const signMenuHandle = () => {
    setAnchorEl(null);
    setShowSignup(true);
  };

  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
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
            color: '#CF3A3A',
            textDecoration: 'none',
            }}
        >
          여행마렵다
        </Typography>
        <Button
          variant="outlined"
          color={status === "authenticated" ? "primary" : "info"}
          sx={{
            gap: "0.8rem",
            border: "1px solid",
            borderRadius: "50px",
          }}
          onClick={openMenuHandle}
        >
          <MenuIcon />
          {status === "authenticated" ? (
            <AccountCircleIcon color="primary" />
          ) : (
            <AccountCircleIcon />
          )}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={() => setAnchorEl(null)}
          sx={{
            mt: "0.5rem",
          }}
        >
          {(status === "unauthenticated" || status === "loading") && (
            <UnAuthMenu
              signMenuHandle={signMenuHandle}
              dummyMenuHandle={() => setAnchorEl(null)}
            />
          )}
          {status === "authenticated" && (
            <AuthMenu dummyMenuHandle={() => setAnchorEl(null)} />
          )}
        </Menu>
      </Toolbar>
      {showSignup && (
        <SignIndex
          onClose={() => {
            setShowSignup(false);
          }}
        />
      )}
    </>
  );
}
