import { UserLogin } from "./userlogin";

export function PropsDemo()
{
    return(
        <div className="container-fluid">
            <h1>Shopping Home</h1>
            <UserLogin ButtonType="btn btn-light w-100" Theme="w-25 bg-primary text-white p-2" Title="User Login" UserLabel="Your Email" UserType="email" Verify="Confirmation Code" VerifyType="number" />
            <hr/>
            <UserLogin ButtonType="btn btn-warning w-100" Theme="w-25 bg-dark text-white p-2" Title="Admin Login" UserLabel="Mobile" UserType="text" Verify="Your OTP" VerifyType="number" />
        </div>
    )
}