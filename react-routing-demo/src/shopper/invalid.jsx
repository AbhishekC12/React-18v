import { Link } from "react-router-dom"
export function Invalid()
{
    return(
        <div className="container-fluid">
            <h3>Invalid Credentials</h3>
            <Link to="/">Try again</Link>
        </div>
    )
}