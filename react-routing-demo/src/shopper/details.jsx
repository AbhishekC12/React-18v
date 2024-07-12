import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export function Details()
{
    let params = useParams();

    const[products,setProducts] = useState({id:0, title:'', image:'',category:'',description:'',rating:{rate:0,count:0}});

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[params.id])
    return(
        <div className="container-fluid">
            <h3>Details</h3>
            <img src={products.image} width="300" height="300"/>
            <dl>
                <dt>Title</dt>
                <dd>
                    {products.title}
                </dd>
                <dt>Price</dt>
                <dd>
                    {products.price}
                </dd>
                <dt>Description</dt>
                <dd>
                    {products.description}
                </dd>
                <dt>Category</dt>
                <dd>
                    {products.category}
                </dd>
                <dt>Ratings</dt>
                <dd><span> Rate : {products.rating.rate} <span> Count :{products.rating.count}</span></span> </dd>  
            </dl>
             <p>
             <Link to={`/products/${products.category}`}>Back to Products</Link>
             </p>
        </div>
    )
}