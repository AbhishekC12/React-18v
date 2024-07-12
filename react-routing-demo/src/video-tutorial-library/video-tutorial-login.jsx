import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { date } from "yup";
import { useEffect } from "react";

export function TutorialLogin(){

    const[cookies,setCookie,removeCookie] = useCookies(["uname"])

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: (user)=> {
            axios.get('http://127.0.0.1:4040/users')
            .then(response=> {
                  var userdetails = response.data.find(item=> item.UserId===user.UserId);
                  if(userdetails.UserId===user.UserId && userdetails.Password===user.Password){
                    setCookie("uname",user.UserId,[{expires: new date('2023-12-31')}])
                      navigate("/videos");
                  } else {
                      navigate("/invalid");
                  }
            })
        }
    })

    useEffect(()=>{
        if(window.navigator.cookieEnabled){
            alert("You can login");
        } else {
            alert("Please Enable Cookies on your browser");
        }
        if(cookies.uname==null){
        } else {
            navigate("/videos");
        }
    },[]);
    
    return(
        <div>
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>User Login</h3>
                <dl>
                     <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="UserId" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password"  onChange={formik.handleChange} className="form-control" name="Password" autoComplete="on" /></dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p>
                <Link to="/register"> New User Register </Link>
            </p>
        </div>
    )
}