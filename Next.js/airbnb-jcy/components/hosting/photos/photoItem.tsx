import {Box, Button, Typography} from '@mui/material';
import * as React from "react";
import Image from 'next/image';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useEffect, useState} from 'react';
import { PhotoContext } from '../../../pages/become-a-host/[itemId]/photos';

function PhotoItem(props: {target:File}) {
    const ctx = React.useContext(PhotoContext);
    const [imageUri, setImageUri] = useState<string | null>("");
    const deleteHandle = () => {
        // console.log(props.target)
        ctx?.removeFiles(props.target)
    }
    
    useEffect(()=>{
        const fileReader = new FileReader()
        fileReader.onload = (rst) => {
            // console.log("rst::::",rst.target!.result)
            setImageUri(rst.target!.result as string)
        }
        fileReader.readAsDataURL(props.target);
    },[])
    return ( 
        <Box sx={{
            width:"100%", 
            height:"100%",  
            border: "1px solid black",
            backgroundImage: `url(${imageUri})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            display:"flex",
            justifyContent:"flex-end"
        }}>
            <Box sx={{
                mt:1, mr:1, cursor:"pointer",
                width:"30px",
                height:"30px",
                backgroundColor:"white",
                borderRadius:"15px",
                textAlign:"center",
                pt:0.3,
                border:"0.5px dotted #ccc"
            }}
            onClick={deleteHandle}>
                <DeleteForeverIcon sx={{fontSize:'1.5rem'}}  />
            </Box>
        </Box>
    );
}

export default PhotoItem;