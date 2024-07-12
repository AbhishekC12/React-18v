import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export function TutorialRegister(){

    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState('');
    const [validClass, setValidClass] = useState('');

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            "UserId": '',
            "UserName": '',
            "Password": '',
            "Mobile": ''
        },
        onSubmit : (user)=> {
            axios.post('http://127.0.0.1:4040/registeruser', user);
            alert('Registered Successfully..');
            navigate("/login");
        }
    })

    useEffect(()=>{
          axios.get('http://127.0.0.1:4040/users')
          .then(response=> {
              setUsers(response.data);
          })
    },[]);

    function VerifyUserId(e){
        for(var user of users)
        {
            if(user.UserId===e.target.value){
                setUserError('User Id Taken - Try Another');
                setValidClass('text-danger');
                break;
            } else {
                setUserError('User Id Available');
                setValidClass('text-success');
            }
        }
    }

    return(
        <div>
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Id</dt>
                    <dd><input className="form-control" type="text" name="UserId" onKeyUp={VerifyUserId} onChange={formik.handleChange} /></dd>
                    <dd className={validClass} >{userError}</dd>
                    <dt>User Name</dt>
                    <dd><input className="form-control" type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input className="form-control" type="password" name="Password" onChange={formik.handleChange} autoComplete="on" /></dd>
                    <dt>Mobile</dt>
                    <dd><input className="form-control" type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-primary w-100" type="submit">Register</button>
            </form>
            <p>
                <Link to='/login'>Existing User ? Login</Link>
            </p>
        </div>
    )
}