import { Divider, MenuItem, Typography } from "@mui/material";
type Props = {
  signMenuHandle: () => void;
  dummyMenuHandle: () => void;
};
export default function UnAuthMenu({ signMenuHandle, dummyMenuHandle }: Props) {
  return (
    <>
      <MenuItem onClick={signMenuHandle}>
        <Typography>회원가입</Typography>
      </MenuItem>
      <MenuItem onClick={signMenuHandle}>
        <Typography>로그인</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={dummyMenuHandle}>
        <Typography>숙소 호스트 되기</Typography>
      </MenuItem>
      <MenuItem onClick={dummyMenuHandle}>
        <Typography>도움말</Typography>
      </MenuItem>
    </>
  );
}
