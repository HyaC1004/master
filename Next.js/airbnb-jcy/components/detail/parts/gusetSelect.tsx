import { Box, Paper, Typography, TextField, Grid, Collapse, List, ListItemButton, ListItemText, Button } from "@mui/material";

import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../pages/rooms/[roomId]";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

function GusetSelect() {
  const ctx = useContext(BookContext);
  
//   console.log(ctx?.data.numberOfGuests)
  const [guests, setGuests] = React.useState<number>(ctx?.data.numberOfGuests ?? 1);
  const [adults, setAdults] = React.useState<number>(ctx?.data.numberOfAdults ?? 1);
  const [childs, setChilds] = React.useState<number>(ctx?.data.numberOfChildren ?? 0);
  const [babies, setBabies] = React.useState<number>(ctx?.data.numberOfBabies ?? 0);
  const [pets, setPets] = React.useState<number>(ctx?.data.numberOfPets ?? 0);
  
  const data = {
    numberOfGuests: guests,
    numberOfAdults: adults,
    numberOfChildren: childs,
    numberOfBabies: babies,
    numberOfPets: pets
  };

  useEffect(()=>{
    setGuests(adults+childs);
  },[adults,childs])

  useEffect(()=>{
    ctx?.updateData(data)
  },[guests,babies,pets])

  return (
    <Paper
      elevation={10}
      sx={{
        position: "absolute",
        top: "11.5rem",
        left:"32px",
        zIndex: 3,
        border:"1px solid #ccc",
        width:`calc(100% - 40px)`
      }}
      onClick={(evt) => evt.stopPropagation()}
    >
        <Box sx={{ position: "relative"  }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",     
                    gap: 4,
                    pt:5,
                    pb:5,
                    pl:2
                }}
            >
                <Box sx={{display:'flex',width:"100%", justifyContent:"space-between"}}>
                    <Box >
                        <Typography variant="h6">성인</Typography>
                        <Typography variant="subtitle2">만 13세 이상</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:"row"}}>
                        <Button sx={{pt:0}} onClick={() => setAdults((c) => c - 1)} disabled={adults <= 1} color="secondary">
                            <RemoveCircleOutlineOutlinedIcon  />
                        </Button>
                        <Typography variant="h6">{adults}</Typography>
                        <Button sx={{pt:0}} onClick={() => setAdults((c) => c + 1)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                    </Box>
                </Box>
                <Box sx={{display:'flex',width:"100%", justifyContent:"space-between"}}>
                    <Box >
                        <Typography variant="h6">어린이</Typography>
                        <Typography variant="subtitle2">만 2~12세</Typography>
                    </Box>
                    <Box sx={{display:'flex'}}>
                        <Button sx={{pt:0}} onClick={() => setChilds((c) => c - 1)} disabled={childs <= 0} color="secondary">
                            <RemoveCircleOutlineOutlinedIcon />
                        </Button>
                        <Typography variant="h6">{childs}</Typography>
                        <Button sx={{pt:0}} onClick={() => setChilds((c) => c + 1)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                    </Box>
                </Box>
                <Box sx={{display:'flex',width:"100%", justifyContent:"space-between"}}>
                    <Box >
                        <Typography variant="h6">유아</Typography>
                        <Typography variant="subtitle2">만 2세 미만</Typography>
                    </Box>
                    <Box sx={{display:'flex'}}>
                        <Button sx={{pt:0}} onClick={() => setBabies((c) => c - 1)} disabled={babies <= 0} color="secondary">
                            <RemoveCircleOutlineOutlinedIcon />
                        </Button>
                        <Typography variant="h6">{babies}</Typography>
                        <Button sx={{pt:0}} onClick={() => setBabies((c) => c + 1)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                    </Box>
                </Box>
                <Box sx={{display:'flex',width:"100%", justifyContent:"space-between"}}>
                    <Box >
                        <Typography variant="h6">반려동물</Typography>
                        <Typography variant="subtitle2">보조동물을 동반하시나요?</Typography>
                    </Box>
                    <Box sx={{display:'flex'}}>
                        <Button sx={{pt:0}} onClick={() => setPets((c) => c - 1)} disabled={pets <= 0} color="secondary">
                            <RemoveCircleOutlineOutlinedIcon />
                        </Button>
                        <Typography variant="h6">{pets}</Typography>
                        <Button sx={{pt:0}} onClick={() => setPets((c) => c + 1)}><AddCircleOutlineOutlinedIcon color="secondary" /></Button>
                    </Box>
                </Box>
                <Typography variant="subtitle2" sx={{pr:2}}>이 숙소의 최대 숙박 인원은 6명(유아 포함)입니다. 반려동물 동반은 허용되지 않습니다.</Typography>                
            </Box>
            <Button onClick={()=>ctx?.closeGuest()}>닫기</Button>
        </Box>
    </Paper>
  );
}

export default GusetSelect;
