import { useEffect, useState } from "react"


export function InmemoryCRUD()
{
    const [products, setProducts] = useState([{Id:1, Name: 'TV'}, {Id:2, Name: 'Mobile'}]);
    const [newProduct, setNewProduct] = useState({Id:0, Name: ''});
   
    function handleIdChange(e){
        setNewProduct({
            Id: parseInt(e.target.value),
            Name: newProduct.Name
        })
    }
    function handleNameChange(e){
        setNewProduct({
            Id: newProduct.Id,
            Name: e.target.value
        })
    }

    function handleAddClick(){
        products.push(newProduct);
        setProducts(products.filter(product => product.Id !==0));
        alert(`Product Successfully Added..`);
    }

    function handleDeleteClick(id){
            setProducts(products.filter(product => product.Id !== id));
            alert('Record Deleted');
    }

    return(
        <div className="container-fluid">
            <h2>Testing CRUD</h2>
            <div>
                <label className="fw-bold">Add New Product</label>
                <div>
                    <dl>
                        <dt>Product Id</dt>
                        <dd><input type="number" onChange={handleIdChange} /></dd>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleNameChange} /></dd>
                    </dl>
                    <button onClick={handleAddClick}>Add Product</button>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.Id}>
                              <td>{product.Name}</td>
                              <td>
                                <button className="bi bi-pen-fill me-2 btn btn-warning"></button>
                                <button onClick={ ()=> { handleDeleteClick(product.Id) }} className="bi bi-trash btn btn-danger"></button>
                              </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}