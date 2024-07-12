import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export function FormikValidation()
{
   
    const formik = useFormik({
        initialValues : {
            UserName: '',
            Password: '',
            Mobile: '',
            City: '',
            Gender:''
        },
        validationSchema : yup.object({
            UserName: yup.string().required("User Name Required").min(4, "Name too Short.."),
            Password: yup.string().required("Password Required"),
            Mobile: yup.string().required("Mobile Required").matches(/\+91\d{10}/,"Invalid Mobile")
        }),
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
                <dd><input type="text" name="UserName" {...formik.getFieldProps("UserName")} className="form-control" /></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" {...formik.getFieldProps("Password")} className="form-control" /></dd>
                <dd className="text-danger">{formik.errors.Password}</dd>
                <dt>Mobile</dt>
                <dd><input type="text"  name="Mobile" {...formik.getFieldProps("Mobile")} className="form-control" /></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
                <dt>City</dt>
                <dd>
                    <select name="City" {...formik.getFieldProps("City")}  className="form-select">
                        <option value="-1">Select City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>
                <dt>Gender</dt>
                <dd>
                    <input type="radio" {...formik.getFieldProps("Gender")} name="Gender" value="Male" /> <label>Male</label>
                    <input type="radio" {...formik.getFieldProps("Gender")}  name="Gender" value="Female" /> <label>Female</label>
                </dd>
                <dd className="text-danger">{formik.errors.Gender}</dd>
            </dl>
            <button type="submit" className="btn btn-primary w-100">Register</button>
           </form>
        </div>
    )
}
