
import { useState,useEffect } from "react";
export function LoadFunction(){

    const [userName, setUserName] = useState('');

    useEffect(()=>{
        setUserName('John');
    },[]);

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <p>Hello ! {userName}</p>
        </div>
   
    )
}