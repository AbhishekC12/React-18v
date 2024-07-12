
export function BindingObject(){
    var product = {
        Name : "Samsung TV",
        Price : 35000,
        Stock : true,
        Cities : ["Pune","Nagpur"],
        Ratings : {Rate:3.6,Count:3600}
    }

    return(
        <>
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock===true)?"Available":"Out Of Stock"}</dd>
                <dt>Cities</dt>
                <dd>
                    <ol>
                    {
                        product.Cities.map(city=>
                            <li key={city}>{city}</li>)
                    }
                    </ol>
                </dd>
                <dt>Ratings</dt>
                <dd>
                    {product.Ratings.Rate}<span className="bi bi-star-fill text-success"></span> [{product.Ratings.Count}]
                </dd>
            </dl>
         </>
    )
}