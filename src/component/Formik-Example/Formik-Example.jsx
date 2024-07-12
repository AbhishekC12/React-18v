
import { ErrorMessage, Field, Form, Formik, } from "formik";
import * as yup from "yup";

export function FormikExample()
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

             <Form className="w-25">
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
                 <button>Submit</button>
             </Form>

            </Formik>
        </div>
    )
}