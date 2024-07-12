
import {  useRef} from "react"
import { useState } from "react";

export function TimeOutDemo()
{
    const [message, setMessage] = useState('');
    let messageTrigger = useRef(null);

    function Msg1(){
        setMessage('Hello !');
    }
    function Msg2(){
        setMessage('How are you ?');
    }
    function Msg3(){
        setMessage('Welcome to React');
    }

    function StartClick(){
        setTimeout(Msg1, 3000);
        messageTrigger.current = setTimeout(Msg2, 6000);
        setTimeout(Msg3, 10000);
    }

    function CancelClick(){
        clearTimeout(messageTrigger.current);
    }

    return(
        <div className="container-fluid">
            <button onClick={StartClick}>Start</button>
            <button onClick={CancelClick}>Cancel Msg2</button>
            <h2 className="mt-4 text-center">{message}</h2>
        </div>
    )
}
