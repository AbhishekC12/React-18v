import { useEffect } from "react";
import { useState } from "react"

export function ButtonDemo(){

    const [msg, setMsg] = useState('');

    useEffect(()=>{
        document.onpaste = function(){
         alert('Paste Disabled');
         return false;
        }
    },[])
    return(
        <div className="container-fluid">
            <p>Our terms and condition</p>
            <textarea onCut={()=>{setMsg('Removed and Copied to Clipboard')}} onCopy={()=>{setMsg('copy to clipboard')}} rows="4" col="40">Please Read our terms and condition</textarea>
            <p>{msg}</p>
        </div>
    )
}