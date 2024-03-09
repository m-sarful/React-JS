import { useState } from "react"
import './Timer.css'
export default function Timer(){
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () =>{
        const newSub = count - 1;
        setCount(newSub);
    }


    return(
        <div className="timer">
            <h2>Counter : {count}</h2>
            <div className="btn">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
            </div>
        </div>
    )
}