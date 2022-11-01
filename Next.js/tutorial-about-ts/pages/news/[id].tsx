import { GetServerSideProps, GetStaticProps } from "next";

const NewsView = () => {
    return <></>;
};

async function getArticleById(id: string) {
    return {};
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    // console.log("params: ", context.params);
    // console.log("query: ", context.query);
    const {id} = context.params! as { id: string; favorite: string[]};

    getArticleById(id);
    
    return {
        props: {}
    }
};

export default NewsView;
