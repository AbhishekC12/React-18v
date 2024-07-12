import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function FaceDetails()
{
    const[product,setProduct] = useState({id:0,title:'',image:''})

    let params = useParams()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })
    },[params.id])
    return(
        <div className="container-fluid">
            <h3>FaceDetails</h3>
            <img src={product.image} width="400" height="400"/>
            <dl>
               <dt>Title</dt>
               <dd>{product.title}</dd>
            </dl>
        </div>
    )
}