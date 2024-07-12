

import { useState } from "react";
export function EventBinding(){

    const [msg, setMsg] = useState('');

    function Database(e){
       switch(e.target.name){
          case "Insert":
          setMsg('Record Inserted');
          break;
          case "Update":
          setMsg('Record Updated');
          break;
          case "Delete":
          setMsg('Record Deleted');
          break;
       }
    }

    return(
        <div className="container-fluid">
            <h2>Event Binding</h2>
            <button name="Insert" onClick={Database}>Insert</button>
            <button name="Update" onClick={Database} >Update</button>
            <button name="Delete" onClick={Database} >Delete</button>
            <p>{msg}</p>
        </div>
    )
}