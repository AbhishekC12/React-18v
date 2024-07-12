import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link, Outlet } from "react-router-dom";

export function FaceProducts()
{

    const[products,setProducts] = useState([]);

    let params = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    return(
        <div className="container-fluid">
            <div style={{display:"grid",gridTemplateColumns:'6fr 6fr'}}>
                <div>
                <h3>Products</h3>
                  {
                products.map(product=>
                    <Link to={`details/${product.id}`}>
                        <img src={product.image} width="50" height="50" style={{margin:'20px',display:'block'}}/>
                    </Link>
                    )
                     }
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
    )
}