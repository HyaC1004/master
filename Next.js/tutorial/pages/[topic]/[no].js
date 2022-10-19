/*
    react 컴포넌트 만들어서 export default 해두고
    useRouter 훅써서 query 확인해서 동적처리해둔 곳이 여러곳일때
    어떻게 확보된는지 확인
*/

import { useRouter } from "next/router";

function ArticleAboutTopic() {
    const router = useRouter();
    console.log(router.query)
    const { topic, no } = router.query;
    return (<>
        <h2>{topic}의 {no}글</h2>
    </>);
}

export default ArticleAboutTopic;