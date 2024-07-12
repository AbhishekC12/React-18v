import { useState } from "react";
import './mouse-event.css';

export function MouseEvent(){

    const [images] = useState(["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg","m5.jpg"]);
    const [preview, setPreview] = useState('m1.jpg');

    function handleMouseOver(e){
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid">
            <section className="mt-4 row">
                <nav className="col-2">
                   {
                     images.map(imagePath=>
                        <div className="mb-4 p-2" style={{width:'120px'}}>
                            <img style={{cursor:'grab'}} onMouseOver={handleMouseOver} src={imagePath} width="100" height="100" />
                        </div>
                        )
                   }
                </nav>
                <main className="col-10">
                   <div style={{height:'400px', width:'400px', overflow:'hidden'}}>
                    <img src={preview} width="400" height="400" />
                   </div>
                </main>
            </section>
        </div>
    )
}
