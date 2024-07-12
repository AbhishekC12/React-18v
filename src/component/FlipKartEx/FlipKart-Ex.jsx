

import { useEffect, useState } from "react"

export function FlipkartEx(){

    const [product, setProduct]= useState({title:'', price:0, image:'',rating:{rate:0, count:0, reviews:0}, features:[]});

    useEffect(()=>{

        var http = new XMLHttpRequest();
        http.open("get", "product.json",true);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState==4){
                setProduct(JSON.parse(http.responseText));
            }
        }

    },[]);

    return(
        <div className="container-fluid">
            <div className="mt-4 row">
                <div className="col-4">
                    <img key={product.image} src={product.image} width="400" height="400" />
                </div>
                <div className="col-8">
                    <h3 className="text-primary">{product.title}</h3>
                    <div>
                        <span className="badge bg-success">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="fw-bold ms-3 text-secondary">{product.rating.count} Ratings & {product.rating.reviews} Reviews</span>
                    </div>
                    <div className="mt-4">
                       <ul className="list-unstyled">
                            {
                                product.features.map(features=>
                                    <li key={features} className=" text-success bi mb-3 bi-tag-fill"> <span className="text-dark">{features}</span> </li>
                                    )
                            }
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}