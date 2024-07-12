import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Login()
{
    const[userName,setUserName] = useState('');

    let navigate = useNavigate();

    function handleUserNameChange(e){
        setUserName(e.target.value)
    }

    function handleLoginClick(){
        if(userName==="jhon_nit"){
            navigate(`/success/${userName}`);
        }else{
            navigate("/invalid");
        }
    }
    return(
        <div className="container-fluid">
            <h3>Login</h3>
            UserName : <input type="text" onChange={handleUserNameChange}/> <button onClick={handleLoginClick}>Login</button>
        </div>
    )
}
