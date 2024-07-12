
export function Login()
{
    return(
        <div className="container-fluid">
            <h3>Login</h3>
            <dl>
                <dt>UserName</dt>
                <dd>
                    <input type="text" placeholder="UserName"></input>
                </dd>
                <dt>Email</dt>
                <dd>
                    <input type="email" placeholder="Enter Mail"/>
                </dd>
            </dl>
            <button>Submit</button>
        </div>
    )
}