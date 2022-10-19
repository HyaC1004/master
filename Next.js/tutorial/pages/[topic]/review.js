import { useRouter } from "next/router";

function ReviewAboutTopic() {
    const router = useRouter();
    const {topic} = router.query
    return (<>
        <h2>{topic}에 대해 의견 남기기</h2>
    </>  );
}

export default ReviewAboutTopic;