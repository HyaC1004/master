import { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import styles from '../styles/Home.module.css'

const Help = () => {

    return (
    <div className={styles.container}>
      <h1>HELP NEXT.JS - typescript</h1>
    </div>
    );
}

export async function getStaticProps(
    context: GetStaticPropsContext
    ): Promise<GetStaticPropsResult<{count: number}>> {
        return{
            props: {count: 1},
            revalidate: 60
        }
}
export default Help;