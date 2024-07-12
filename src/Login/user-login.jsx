import { useCaptcha } from "../hooks/captcha";
import { useApi } from "../hooks/getApi";

export function UserLogin()
{
    const captcha = useCaptcha();

    const products = useApi('http://fakestoreapi.com/products');

    return(
        <div className="container-fluid">
            <ol>
                {
                    products?.map(product=><li key={product.id}> {product.title} </li>)
                }
            </ol>
            <h3>User Login</h3>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text"/></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
                <dt>Verify Code</dt>
                <dd>{captcha}</dd>
            </dl>
            <button>Login</button>
        </div>
    )
}
