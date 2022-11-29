import { Box, Typography, Button } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import * as React from "react";
import { PhotoContext } from "../../../pages/become-a-host/[itemId]/photos";

function EmptyPhotoBox() {
    const ctx = React.useContext(PhotoContext);
    const [draging, setDraging] = React.useState(false);
    const ref = React.useRef<HTMLInputElement>(null);    
    const dropHandle: React.DragEventHandler = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        // console.log(evt.dataTransfer.files);
        const t = Array.from(evt.dataTransfer.files)
        ctx?.addFiles(t);
    };           
    const fileSelectHandle:React.ChangeEventHandler<HTMLInputElement> = (evt) =>{
        // console.log(evt.target.files);
        if(evt.target.files){
            const t2 = Array.from(evt.target.files);  
            ctx?.addFiles(t2);          
        }
    }
  return (<>
    <Typography variant="h6" sx={{paddingX:4}}>
        숙소 등록을 시작하려면 사진 5장을 제출하셔야 합니다. 나중에 추가하거나 변경하실 수 있습니다.
    </Typography>
    <Box
        onDragEnter={(evt) => {
            setDraging(true);
        }}
        onDragLeave={(evt) => {
            setDraging(false);
        }}
        onDragOver={(evt)=>{
            evt.preventDefault();
            evt.stopPropagation();  
        }}
        onDrop={dropHandle}
        sx={{
            width:"80%",
            height:"400px",
            border:"1px dotted #ccc",
            textAlign:"center",
            pt:16
        }}
    >
        <AddAPhotoIcon sx={{fontSize:"4rem"}} />
        {!draging && (
            <>
                <Typography variant="h5">여기로 사진을 끌어다 놓으세요.</Typography>    
                <Typography variant="subtitle1" sx={{mb:4}}>5장 이상의 사진을 선택하세요.</Typography>
            </>
        )}
        {draging && (
            <Typography variant="h5">
            업로드를 하려면 사진을 끌어서 놓으세요.
            </Typography>
        )}
        <Button
            variant="text"
            color="info"
            onClick={() => {
                ref.current?.click();
            }}
        >
            기기에서 업로드
        </Button>
        <input 
            type="file" 
            ref={ref} 
            style={{ display: "none"}} 
            multiple={true} 
            accept="image/*" 
            onChange={fileSelectHandle}
        />
    </Box>
    </>
  );
}

export default EmptyPhotoBox;
