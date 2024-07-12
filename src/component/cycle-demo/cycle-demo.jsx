import React from "react";

export class Login extends React.Component
{
    constructor(){
        super();
    }

    componentDidMount(){
        alert(`Login Component Mounted Successfully..`);
    }

    componentWillUnmount(){
        alert(`Login component will unmount`);
    }


    render(){
        return(
            <div>
                <h3>Login</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="email"></input></dd>
                </dl>
                <button>Login</button>
            </div>
        )
    }
}
export class Register extends React.Component
{
    constructor(){
        super();
    }

    componentDidMount(){
        alert(`Register Component Mounted Successfully..`);
    }

    componentWillUnmount(){
        alert(`Register component will unmount`);
    }
    render(){
        return(
            <div>
                <h3>Register</h3>
            </div>
        )
    }
}

export class CycleDemo extends React.Component
{
     constructor(){
        super();
        this.state = {
             component: ""
        }
     }

     LoginClick(){
        this.setState({
            component: <Login />
        })
     }

     RegisterClick(){
        this.setState({
            component: <Register />
        })
     }


     render(){
         return(
            <div className="container-fluid">
                <div className="mt-3">
                <button  onClick={this.LoginClick.bind(this)} className="btn btn-primary me-2">Login</button> <button onClick={this.RegisterClick.bind(this)} className="btn btn-danger ms-1">Register</button>
                </div>
                <div className="mt-4">
                     {this.state.component}
                </div>
            </div>
         )
     }
}