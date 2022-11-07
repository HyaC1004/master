import { Tab, Tabs } from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import HotTubOutlinedIcon from '@mui/icons-material/HotTubOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import React from "react";

const sections = [
    { title: '최고의 전망', url: '#', icon: <StarBorderOutlinedIcon /> },
    { title: '한적한 시골', url: '#', icon: <GiteOutlinedIcon /> },
    { title: '국립공원', url: '#', icon: <ParkOutlinedIcon /> },
    { title: '럭셔리', url: '#', icon: <LocationCityOutlinedIcon /> },
    { title: '디자인', url: '#', icon: <ArchitectureOutlinedIcon /> },
    { title: '셰어하우스', url: '#', icon: <ShareOutlinedIcon /> },
    { title: '해변 바로 앞', url: '#', icon: <HouseboatOutlinedIcon /> },
    { title: '료칸', url: '#', icon: <HotTubOutlinedIcon /> },
    { title: '기상천외한 숙소', url: '#', icon: <TipsAndUpdatesOutlinedIcon /> },
    { title: '캠핑카', url: '#', icon: <AirportShuttleOutlinedIcon /> },
];

export default function Nav() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Tabs value={value} onChange={handleChange} 
            variant="scrollable"  className="navTabs">
            {sections.map((section)=>(
                <Tab key={section.title} icon={section.icon} label={section.title} />
            ))}
        </Tabs>
    )
}