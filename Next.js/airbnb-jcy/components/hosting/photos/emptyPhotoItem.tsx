import {Box, Button, Typography} from '@mui/material';
import * as React from "react";
import Image from 'next/image';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {useEffect, useState} from 'react';
import { PhotoContext } from '../../../pages/become-a-host/[itemId]/photos';

function EmptyPhotoItem() {
    const ctx = React.useContext(PhotoContext);
    const [draging, setDraging] = React.useState(false);
    const ref = React.useRef<HTMLInputElement>(null);   

    const dropHandle: React.DragEventHandler = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        console.log(evt.dataTransfer.files);
        const t = Array.from(evt.dataTransfer.files)
        ctx?.addFiles(t);
    };           
    const fileSelectHandle:React.ChangeEventHandler<HTMLInputElement> = (evt) =>{
        console.log(evt.target.files);
        if(evt.target.files){
            const t2 = Array.from(evt.target.files);  
            ctx?.addFiles(t2);          
        }
    }

    return ( 
        <Box
            onDragOver={(evt)=>{
                evt.preventDefault();
                evt.stopPropagation();  
            }}
            onDrop={dropHandle}
            
            onClick={() => {
                ref.current?.click();
            }}
            sx={{
                border:"1px dotted #ccc",
                textAlign:"center",
                height:"100%",
                pt:8
            }}
        >
            <AddAPhotoIcon sx={{fontSize:"4rem"}} />                
            <input 
                type="file" 
                ref={ref} 
                style={{ display: "none"}} 
                multiple={true} 
                accept="image/*" 
                onChange={fileSelectHandle}
            />
        </Box>
    );
}

export default EmptyPhotoItem;