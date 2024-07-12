import { useState } from "react"

export function VerifyUser()
{
   const [users] = useState([{UserId:'jhon'},{UserId:'jhon12'},{UserId:'jhon_nit'}])
   const [userError,setUserError] = useState('')
   const [isUserValid,setUserValid] = useState(false)

    function VerifyUserId(e)
    {
       for(var user of users){
        if(user.UserId===e.target.value){
            setUserError('User Id Taken - Try Another')
            setUserValid(false);
            break;
        }else{
            setUserError('User Id Available')
            setUserValid(true);
        }
       }
    }
   return(
    <div className="container-fluid">
        <h2>Register User</h2>
        <dl>
            <dt>UserId</dt>
            <dd>
                <input type="text" onKeyUp={VerifyUserId}/>
            </dd>
            <dd className={(isUserValid==true)?"text-success":"text-danger"}>{userError}</dd>
        </dl>
    </div>
   )
}