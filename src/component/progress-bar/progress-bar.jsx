import { useState } from "react"

export function ProgressFunction(){

    const [errorMsg, setErrorMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [progress, setProgress] = useState({width:''});
   

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setErrorMsg('Strong Password');
            setErrorClass('bg-success');
            setProgress({width: '100%'});

        } else {
            if(e.target.value.length<4){
                setErrorMsg('Poor Password');
                setErrorClass('bg-danger');
                setProgress({width: '30%'});
               
            } else {
                setErrorMsg('Weak Password');
                setErrorClass('bg-warning');
                setProgress({width:'70%'});
            }
        }
    }
 
    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <dl className="w-25">
                <dt>Password</dt>
                <dd>
                    <input className="form-control" type="password" onKeyUp={VerifyPassword} />
                    <div className="progress mt-1">
                        <div className={`progress-bar progress-bar-animated progress-bar-striped mt-1 ${errorClass}`} style={progress}>
                            {errorMsg}
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    )
}
