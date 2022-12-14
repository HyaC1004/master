import { Outlet } from "@mui/icons-material";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

function Layout() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ display:"flex",height:"100vh", bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
            </Tabs>
            <Outlet />
      </Box>
    );
}

export default Layout;