import { useState } from "react"


export function MouseMove(){


    const [styleObject, setStyleObject] = useState({position:'', top:'', left:''});

    function handleMousemove(e){
        setStyleObject({
            position: 'fixed',
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        })
    }

     return(
        <div onMouseMove={handleMousemove}>
            <div style={{height:'1000px'}}>
            <h1>Mouse mouse pointer to test</h1>
            </div>
            <img src="india-flag.gif" style={styleObject}  width="50" height="50"/>
        </div>
     )
}

