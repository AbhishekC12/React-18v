import { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";

export function FormikRegister()
{
 
    return (
        <div className="container-fluid">
            <Formik
               initialValues={{ProductId:0, Name:'', Price:0}}
               validationSchema={yup.object({
                ProductId: yup.number().required("Product Required"),
                Name: yup.string().required("Name Required").min(4, "Name too short"),
                Price: yup.number().required("Price Required")
               })}

               onSubmit={(values)=> alert(JSON.stringify(values)) }
            >
             {
                 form =>
                 <Form>
                 <h1>Register Product</h1>
                  <dl>
                     <dt>Product Id</dt>
                     <dd> <Field type="number" name="ProductId" ></Field> </dd>
                     <dd className="text-danger"> <ErrorMessage name="ProductId" /> </dd>
                     <dt>Name</dt>
                     <dd> <Field type="text" name="Name"></Field> </dd>
                     <dd className="text-danger"> <ErrorMessage name="Name" /> </dd>
                     <dt>Price</dt>
                     <dd> <Field type="number" name="Price"></Field> </dd>
                     <dd className="text-danger"> <ErrorMessage name="Price" /> </dd>
                  </dl>
                  <button type="submit" disabled={(form.isValid)?false:true} >Submit</button>
                  <button type="submit" style={{display:(form.dirty)?'inline':'none'}} className="ms-2">Save</button>
                 </Form>
             }
           

            </Formik>
        </div>
    )
}