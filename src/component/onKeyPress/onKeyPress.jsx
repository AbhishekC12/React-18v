
import { useState } from "react";
export function KeyDemo()
{
    const [capsWarning, setCapsWarning] = useState({display:'none'});

    function VerifyCaps(e){
        if(e.which>=65 && e.which<=90){
            setCapsWarning({display: 'block'});
        } else {
            setCapsWarning({display:'none'});
        }
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
            <dt>Password</dt>
                <dd>
                    <input type="password" onKeyPress={VerifyCaps} />
                </dd>
                <dd className="text-warning" style={capsWarning}>
                    <div className="bi bi-exclamation-triangle"> Warning - CAPS ON</div>
                </dd>
            </dl>
         </div>
    )
}