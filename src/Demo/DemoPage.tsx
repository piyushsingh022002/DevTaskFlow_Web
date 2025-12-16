import React from 'react';
import { useState } from 'react';
import { Button } from '../pages/Auth/RegisterPage.styles';
import Timer from './Timer';


const DemoPage: React.FC = () =>{
    //array of timers, for each independent timer
    const [timers, setTimers] = useState<number[]>([]);

    const addTimer = () =>{
        console.log('Adding a new timer');
        setTimers( prev => [ ...prev, Date.now()]);
    };
    const removeTimer = (id : number) =>{
        setTimers(prev => prev.filter(timerId => timerId !== id));
    };
    return(
        <div>
            <Button onClick={addTimer}>Add a timer Dynamically</Button>
            {timers.map(id => (
                <>
                <Timer key={id}/>
                <Button onClick={() =>{removeTimer(id)}}>Remove Timer</Button>
                </>
            ))}
        </div>
    );
    
}
export default DemoPage;