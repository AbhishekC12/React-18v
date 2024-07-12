import axios from "axios"
import {  useEffect, useState } from "react"
import { useParams, Link, Outlet } from "react-router-dom"

export function Products()
{
    const [products,setProducts] = useState([])

    let params = useParams();
    
    useEffect(()=>{
     axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
    .then(response=>{
      setProducts(response.data);
    })
    },[]);

    return(
        <div className="container-fluid">
            <h3> {params.category.toUpperCase()} - Products</h3>
           <div style={{display:'grid', gridTemplateColumns:'6fr 6fr'}}>
           <div>
                {
                    products.map(product=>
                        <Link key={product.id} to={`details/${product.id}`}>
                            <img src={product.image} width="50" height="50" style={{margin:'20px',display:'block'}}/>
                        </Link>
                        )
                }
            </div>
            <div>
                <Outlet></Outlet>
            </div>
           </div>
            <p className="mt-3">
                <Link to="/">Back to Categories</Link>
            </p>
        </div>
    )
}