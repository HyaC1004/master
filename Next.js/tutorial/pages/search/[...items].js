import { useRouter } from "next/router";

function SearchResult() {
    const router = useRouter();
    console.log(router.query);
    return (<>
        <h1>SearchResult Page</h1>

    </>);
}

export default SearchResult;