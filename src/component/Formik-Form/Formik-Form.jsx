import { useState } from "react";
import { useFormik } from "formik";

export function FormikForm()
{
    function ValidateUser(userDetails){
         var error = {UserName:'', Password:'', Mobile:'', City:'', Gender:''};

          if(userDetails.UserName==""){
              error.UserName = "User Name Required";
          } else {
              if(userDetails.UserName.length<4){
                error.UserName = "Name too short";
              } else {
                error.UserName = "";
              }
          }

          if(userDetails.Password==""){
             error.Password = "Password Required";
          }

          if(userDetails.Mobile==""){
             error.Mobile = "Mobile Required";
          } else {
              if(userDetails.Mobile.match(/\+91\d{10}/)) {
                  error.Mobile = "";
              } else {
                  error.Mobile = "Invalid Mobile";
              }
          }

          if(userDetails.City=="-1") {
             error.City = "Please Select Your City";
          }

          if(userDetails.Gender==""){
             error.Gender = "Please Choose Your Gender";
          }

         return error;
    }

    const formik = useFormik({
        initialValues : {
            UserName: '',
            Password: '',
            Mobile: '',
            City: '',
            Gender:''
        },
        validate : ValidateUser,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <div className="container-fluid">
           <form className="w-25" onSubmit={formik.handleSubmit}>
           <h3>Register User</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName"  onChange={formik.handleChange} className="form-control" /></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" onChange={formik.handleChange}  className="form-control" /></dd>
                <dd className="text-danger">{formik.errors.Password}</dd>
                <dt>Mobile</dt>
                <dd><input type="text"  name="Mobile" onChange={formik.handleChange} className="form-control" /></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange}  className="form-select">
                        <option value="-1">Select City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>
                <dt>Gender</dt>
                <dd>
                    <input type="radio" onChange={formik.handleChange} name="Gender" value="Male" /> <label>Male</label>
                    <input type="radio" onChange={formik.handleChange}  name="Gender" value="Female" /> <label>Female</label>
                </dd>
                <dd className="text-danger">{formik.errors.Gender}</dd>
            </dl>
            <button type="submit" className="btn btn-primary w-100">Register</button>
           </form>
        </div>
    )
}