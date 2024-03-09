import { useState } from 'react'
import './Timer.css'


export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleReduce = () =>{
        setTeam(team-1);
    }

    return(
        <div className='teamStyle'>
            <h3>Players : {team}</h3>
            <div className='btn'>
            <button onClick={handleAdd}>Players Add</button>
            <button onClick={handleReduce}>Players Reduce</button>
            </div>
        </div>
    )
}