import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import { getAnimalsByUpkind } from "../lib/animal-api";

// const List = (props: ListPageProps) => {
const List = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    props.items.sort();
    useEffect(() => {
        getAnimalsByUpkind().then((result) => {
            result.forEach((e) => {
                console.log(e.id);
            })
        })
    }, []);
    return <h2>HELLO</h2>
}

// export const getServerSideProps: GetServerSideProps = async (context) => {}

// export async function getServerSideProps(constext:GetServerSidePropsContext) {
// }
type ListPageProps = { items: any[] };
export const getServerSideProps: GetServerSideProps = async function (context) {
    return {
        props: {
            items: [1, 2, 3, 4]
        }
    }
}
export default List;