import { useEffect } from "react";
import { useState } from "react"

export function TouchDetails(){

    const [msg, setMsg] = useState('');

    function GetDetails(e){
        setMsg(e.target.title);
    }
 
    return(
        <div className="container-fluid">
            <h2>Touch Events</h2>
            <img src="m1.jpg" title="I Phone 14 - 30% OFF" onTouchStart={GetDetails} width="200" height="300" />
            <img src="m2.jpg" title="IPhone 14 With Ceramic Back"  onTouchStart={GetDetails} width="200" height="300" />
            <p className="h2">{msg}</p>
        </div>
    )
}