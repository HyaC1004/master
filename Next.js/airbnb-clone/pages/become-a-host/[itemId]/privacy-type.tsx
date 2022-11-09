import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function PrivacyTypePage() {
  const router = useRouter();
  const { itemId } = router.query;

  const nextStepHandle = () => {
    // 데이터 생성 fetch...===>  생성된 데이터의 ID를 얻어와야 함
    const itemId = Date.now();
    router.push("/become-a-host/" + itemId + "/privacy-type");
  };
  return (
    <Box>
      [{itemId}] 게스트가 머무르게 될 숙소의 종류가 무엇인가요?
      <Button onClick={nextStepHandle}>다음</Button>
    </Box>
  );
}
