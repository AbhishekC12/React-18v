
export function DataBindingKeys()
{
    var product = {
        Name: "Samsung TV",
        Price: 45000.33,
        Stock: "true"
    };


    return(
        <>
           <h2>Product Details</h2>
           {
              Object.keys(product).map(key =>
                 <p>{key} : {product[key]} </p>
                )
           }
        </>
    )
}