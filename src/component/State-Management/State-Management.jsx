
import { useState } from "react";

export function StateBinding()
{
    const [title] = useState('Product Details');
    const [product] = useState({Name:'Samsung TV', Price:456000.44});
    const [categories] = useState(["All", "Electronics", "Footwear", "Fashion"]);
   
    return(
        <>
           <h1>{title}</h1>
           <dl>
            <dt>Name</dt>
            <dd>{product.Name}</dd>
            <dt>Price</dt>
            <dd>{product.Price}</dd>
            <dt>Select Category</dt>
            <dd>
                <select>
                    {
                        categories.map(category=>
                            <option key={category}>{category}</option>
                            )
                    }
                </select>
            </dd>
           </dl>
        </>
    )
}