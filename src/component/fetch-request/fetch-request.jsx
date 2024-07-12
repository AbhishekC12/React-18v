import { useEffect, useState } from "react"

export function FetchRequest(){

    const [products, setProducts] = useState([{title:'', price:0, rating:{rate:0, count:0, reviews:0}, image:'', features:[]}]);
   
    useEffect(()=>{

        var http = new XMLHttpRequest();
        http.open("GET", "products.json", true);
        http.send();

        http.onreadystatechange = function(){
             if(http.readyState==4) {
                 setProducts(JSON.parse(http.responseText));
             }
        }

    },[]);


    return(
        <div className="container-fluid">
            {
                products.map(product=>
                    <div className="row mt-3 mb-3 p-2 border border-2 border-dark">
                        <div className="col-2" >
                            <div>
                                <a href={product.image} download className="btn mb-3"><span className="bi bi-download"></span></a>
                            </div>
                        <img src={product.image} width="100%" />
                        </div>
                        <div className="col-8">
                            <div className="h5 text-primary">{product.title}</div>
                            <div>
                                <span className="badge bg-success text-white">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                                 <b className="text-secondary ms-3">{product.rating.count} Ratings & {product.rating.reviews} Reviews</b>
                            </div>
                            <div className="mt-2">
                               <ul className="list-unstyled">
                                  {
                                    product.features.map(feature=>
                                        <li className="mb-2"> <span className="bi bi-tag-fill text-success"></span> <span> {feature} </span> </li>
                                        )
                                  }
                               </ul>
                            </div>
                        </div>
                        <div className="col-2">
                                <div className="h3"> {product.price.toLocaleString('en-in',{style: 'currency', currency:'INR'})} </div>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}                        