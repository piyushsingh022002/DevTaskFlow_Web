import React from 'react';
import { useState, useEffect} from 'react';
import { Button } from '../pages/Auth/RegisterPage.styles';

const Timer: React.FC = () =>{
    const [count, setCount] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const handleRunning =() =>{
        if(isRunning){
            setIsRunning(false);
        } else {
            setIsRunning(true);
        }
    }

    const ClearTime = () =>{
        setCount(0);
    }

    useEffect(() => {
        if(!isRunning) return;

        const id = setInterval(() => {
            console.log('tick');
            setCount(count => (isRunning ? count + 1 : count));
        }, 1000);
     return () => clearInterval(id);
    }, [isRunning]);
    
    return (
    <>
    <h2>Timer : {count}</h2>
    <Button onClick={() => {handleRunning()}}>{isRunning ? 'Pause' : 'Start'}</Button>
    <p></p>
    <Button onClick = {ClearTime}>Reset</Button>
    { !isRunning && <p>Latest Count is : {count}</p> }
    {isRunning && <p>Timer is running...</p> }
    </>
);
}
export default Timer;