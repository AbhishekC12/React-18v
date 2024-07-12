
import { useState } from "react"

export function VerifyDrop(){

    const [codeError, setCodeError] = useState('');
    const [cityError, setCityError] = useState('');

    function VerifyCode(e){
        if(e.target.value=="") {
            setCodeError("IFSC Code is required");
        } else {
            setCodeError("");
        }
    }

    function CityChange(e){
        if(e.target.value=="-1"){
            setCityError("Pleas select your city");
        } else {
            setCityError("");
        }
    }
 
    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <dl className="w-25">
                <dt>IFSC Code</dt>
                <dd><input type="text" onBlur={VerifyCode} className="form-control" placeholder="Block Letters"/></dd>
                <dd className="text-danger">{codeError}</dd>
                <dt>Select City</dt>
                <dd>
                    <select onChange={CityChange} className="form-select">
                        <option value="-1">Choose City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger"> {cityError} </dd>
            </dl>
        </div>
    )
}