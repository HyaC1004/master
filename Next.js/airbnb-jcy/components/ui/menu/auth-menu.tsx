import { Divider, MenuItem, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
type Props = {
  dummyMenuHandle: () => void;
};
export default function AuthMenu({ dummyMenuHandle }: Props) {
  const router = useRouter();
  return (
    <>
      <MenuItem onClick={dummyMenuHandle}>
        <Typography>메시지</Typography>
      </MenuItem>
      <MenuItem onClick={dummyMenuHandle}>
        <Typography>여행</Typography>
      </MenuItem>
      <MenuItem onClick={dummyMenuHandle}>
        <Typography>위시리스트</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={() => router.push("/become-a-host")}>
        <Typography>숙소 호스트 되기</Typography>
      </MenuItem>
      <MenuItem onClick={dummyMenuHandle}>
        <Typography>계정</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={dummyMenuHandle}>
        <Typography>도움말</Typography>
      </MenuItem>
      <MenuItem onClick={() => signOut()}>
        <Typography>로그아웃</Typography>
      </MenuItem>
    </>
  );
}
