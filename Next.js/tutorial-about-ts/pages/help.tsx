import { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import { FormEvent, FormEventHandler, useRef } from 'react';
import styles from '../styles/Home.module.css'

const Help = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler : FormEventHandler = (evt) => {
        evt.preventDefault();
        console.log(inputRef.current!.value);
        // if(inputRef.current !== null){
        //     console.log(inputRef.current.value);
        // }
    }

    return (
    <div className={styles.container}>
      <h1>HELP NEXT.JS - typescript</h1>
      <p>
        뉴스레터/알람을 받을 이메일 주소를 등록해주세요.
      </p>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
      </form>
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