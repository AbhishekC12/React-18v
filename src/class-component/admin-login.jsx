import React from "react";

export class AdminLogin extends React.Component
{
     constructor(){
        super();
     }

     render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                <h2>Admin Login</h2>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text"/></dd>
                </dl>
                <button>Login</button>
                </div>
            </React.Fragment>
        )
     }
}
