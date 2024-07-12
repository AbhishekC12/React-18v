import axios from "axios";
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';

export function FaceHome()
{
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/categories`)
       .then(response=>{
        setCategories(response.data);
       })
    },[])
    return(     
        <div className="container-fluid">
            <h2>
                <Link to="login">Login</Link>
            </h2>
            <h3>FaceHome</h3>
                {
                    categories.map(category=>
                        <li key={category}><Link to={`products/${category}`}>{category.toUpperCase()}</Link></li>
                        )
                }
        </div>
    )
}