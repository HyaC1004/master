import { useContext } from "react"
import { Counter } from "../context/counter-context"

const DemoPage = () => {
    const ctx = useContext(Counter)!;

    return (
    <div>
        <p>현재 context.count 값: {ctx.count}</p>
        <button onClick={(evt)=>{
            ctx.increase(1);
        }}>+1</button>
    </div>)

}

export default DemoPage;