import { useState } from "react"

export function VerifyPassword(){
    const [errorMsg, setErrorMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [grade, setGrade] = useState(1);

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setErrorMsg('Strong Password');
            setErrorClass('text-success');
            setGrade(100);
        } else {
            if(e.target.value.length<4){
                setErrorMsg('Poor Password');
                setErrorClass('text-danger');
                setGrade(30);
            } else {
                setErrorMsg('Weak Password');
                setErrorClass('text-warning');
                setGrade(70);
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
                    <div>
                    <meter min="1" max="100" value={grade} className="w-100"></meter>
                    </div>
                </dd>
                <dd className={errorClass}>
                    {errorMsg}
                </dd>
            </dl>
        </div>
    )
}
