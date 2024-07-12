

import { useState } from "react";

export function StateExample()
{
    const [product, setProduct] = useState({Name:'TV', Price:0, City:'Select City', Stock:false});

    function NameChange(e){
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    function PriceChange(e){
        setProduct({
            Price: e.target.value,
            Name: product.Name,
            City: product.City,
            Stock: product.Stock
        })
    }
    function CityChange(e){
        setProduct({
            City: e.target.value,
            Name: product.Name,
            Price: product.Price,
            Stock: product.Stock
        })
    }
    function StockChange(e){
        setProduct({
            Stock: e.target.checked,
            Name: product.Name,
            Price: product.Price,
            City: product.City
        })
    }


    return(
        <>
          <div className="container-fluid">
          <h2>Product Details</h2>
           <section className="row">
              <nav className="col-3">
                <dl>
                <dt>Name</dt>
                <dd><input type="text" onChange={NameChange} value={product.Name} className="form-control" /></dd>
                <dt>Price</dt>
                <dd><input type="number" onChange={PriceChange} value={product.Price} className="form-control" /></dd>
                <dt>City</dt>
                <dd>
                    <select onChange={CityChange} value={product.City} className="form-select">
                        <option>Select City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Stock</dt>
                <dd className="form-switch">
                    <input type="checkbox" onChange={StockChange} checked={product.Stock} className="form-check-input" /> <label className="form-check-lable">Available</label>
                </dd>
                </dl>
              </nav>
              <main className="col-9 text-dark">
                 <dl>
                    <dt>Name</dt>
                    <dd>{product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{product.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
                    <dt>Shipped To</dt>
                    <dd>{product.City}</dd>
                 </dl>
              </main>
           </section>
          </div>
        </>
    )
}
