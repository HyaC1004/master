import { MouseEventHandler, useState } from "react";
import styles from '../styles/Home.module.css'

const Guide = () => {
    const [alarm, setAlarm] = useState<{
        type:string, 
        message?: string} | null
    >(null);
    
    const [count, setCount] = useState<number>(0);

    const clickHandler: MouseEventHandler = (evt) => {
        console.log(evt.currentTarget.id);
        setAlarm({type: evt.currentTarget.id, message:`${evt.currentTarget.id.toUpperCase()} Alarm`})
    }
    return(
    <div className={styles.container}>
        <h1>GUIDE NEXT.JS - typescript</h1>
        <div>
            <button onClick={clickHandler} id="warning">warning</button>
            <button onClick={clickHandler} id="success">success</button>
        </div>
        {alarm && <div className={`alarm ${alarm.type}`}>{alarm.message}</div>}
    </div>)
}

export default Guide;