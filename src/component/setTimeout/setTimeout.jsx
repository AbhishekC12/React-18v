import { useState } from "react"

export function TimeoutDemo()
{
    const [msg, setMsg] = useState('');

    function msg1(){
        setMsg('Volume Set : 1');
    }
    function msg2(){
        setMsg('Volume Set : 2');
    }
    function msg3(){
        setMsg('Volume Set : 3');
    }
    function msg4(){
        setMsg('Volume Set : 4');
    }
    function IncreaseVolume(){
       setTimeout(msg1, 2000);
       setTimeout(msg2, 4000);
       setTimeout(msg3, 6000);
       setTimeout(msg4, 8000);
    }

    return(
        <div className="container-fluid">
            <div className="mt-4">
                <button  onClick={IncreaseVolume} className="btn btn-primary me-2"> + </button>
            </div>
            <h3>{msg}</h3>
        </div>
    )
}