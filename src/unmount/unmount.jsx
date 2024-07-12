import { useEffect, useState } from "react"

export function Register(){
    useEffect(()=>{
        console.log('Register Mounted..');
        return()=>{
            console.log(`Register Unmounted`);
        }
    })
    return(
        <div>
            <h4>Register</h4>
        </div>
    )
}

export function Home(){
    useEffect(()=>{
        console.log('Home Mounted..');
        return()=>{
            console.log(`Home Unmounted`);
        }
    })
    return(
        <div>
            <h4>Home</h4>
        </div>
    )
}

export function User()
{
    const [component, setComponent] = useState();

    function homeClick(){
        setComponent(<Home />);
    }
    function registerClick(){
        setComponent(<Register />);
    }

    return(
        <div className="container-fluid">
            <button onClick={homeClick} >Home</button> <button onClick={registerClick}>Register</button>
            <div className="mt-4">
                {component}
            </div>
        </div>
    )
}