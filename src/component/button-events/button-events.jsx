
import { useEffect } from "react";
import { useState } from "react"

export function ButtonEventEx(){

    function OpenImage(){
        window.open("m1.jpg","Mobile","width=300 height=400");
    }

    useEffect(()=> {
        document.oncontextmenu = function(){
            alert("Right Click Disabled");
            return false;
        }
    },[]);
 
    return(
        <div className="container-fluid">
            <h2>Button Events</h2>
            <img src="m1.jpg" onDoubleClick={OpenImage} width="100" height="100" />
            <p>Double Click to View large</p>  
            <h2>Our Terms and Conditions</h2>          
            <textarea rows="4" cols="40">Read our terms of service.</textarea>
        </div>
    )
}