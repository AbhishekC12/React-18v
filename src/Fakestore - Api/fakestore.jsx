import axios from "axios";
import { useEffect, useState } from "react";
import { useReducer } from "react";

let initialState = {count: 0};         

function reducer(state, action){
    switch(action.type){
        case "join":
        return {count: state.count + 1};
        case "exit":
        return {count: state.count - 1};
    }
}

export function FakeStoreApi(){

    const [state, dispatch] = useReducer(reducer, initialState);

    const[categories,setCategories] = useState([])
    const[products,setProducts] = useState([{id:0,title:'',price:'',description:'',image:'',rating:{rate:0,count:0}}])
    const[cartItem,setCartItems] = useState([])
    const[cartCount,setCartCount] = useState(0);
    const[ToggleTable,setToggleTable] = useState({display:'none'})
    function LoadProducts(url)
    {
        axios.get(url)
        .then(res=>{
            setProducts(res.data)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    function LoadCategories()
    {
        axios.get("https://fakestoreapi.com/products/categories")
        .then(res=>{
            res.data.unshift("all")
            setCategories(res.data)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    useEffect(()=>{
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    },[])
    function handleCategoryChange(e)
    {
        if(e.target.value=="all"){
            LoadProducts(`https://fakestoreapi.com/products`);
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
    function handleCartCount(e)
    {
        dispatch({type: "join"});
        axios.get(`https://fakestoreapi.com/products/${e.target.name}`)
        .then(res=>{
            cartItem.push(res.data)
           setCartCount(cartItem.length)
           alert(`${res.data.title} \n Added to Cart`)
        })
    }
    function hnadleCartDisplay()
    {
      setToggleTable({display : (ToggleTable.display=='none'?'block':'none')})
}
function handleDeleteClick(index)
{
    dispatch({type: "exit"});
    cartItem.splice(index,1)
    setCartItems([...cartItem])
    console.log(setCartItems)
}
    return(
        <div className="container-fluid">
            <div>
                <header className="d-flex justify-content-between bg-dark text-white p-2">
                    <div>
                        <span className="h3">.Shopper</span>
                    </div>
                    <div className="fs-4">
                        <span className="me-4">Home</span>
                        <span className="me-4">Jewelery</span>
                        <span className="me-4">Electronics</span>
                    </div>
                    <div>
                        <button className="btn bi bi-cart4 text-white position-relative" onClick={hnadleCartDisplay}>
                            <span className="badge bg-danger position-absolute rounded rounded-circle">{state.count}</span>
                        </button>
                    </div>
                </header>
            </div>
            <section className="row">
                <nav className="mt-3 col-3">
                    <div>
                        <label className="fw-bold">Select Category</label>
                    </div>
                    <div className="mb-1 mt-1">
                        <select className="form-control" style={{width:'250px'}} onChange={handleCategoryChange}>
                            {
                                categories.map(category=>
                                <option value={category} key={category}>{category.toUpperCase()}</option>
                                )
                            }
                        </select>
                    </div>
                    <div>
                        <table className="table table-hover caption-top" style={ToggleTable}>
                            <caption align="center">Cart Items</caption>
                            <thead>
                                <tr>
                                    <th>title</th>
                                    <th>Preview</th>
                                    <th>Price</th>
                                </tr>
                           </thead>
                            <tbody>
                                {
                                    cartItem.map((item,index)=>
                                    <tr key={item}>
                                        <td>{item.title}</td>
                                        <td>
                                            <img src={item.image} width="50" height="50"/>
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            <button className="btn btn-danger bi bi-trash-fill" onClick={()=>{handleDeleteClick(index)}}></button>
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </nav>
                <main className="d-flex flex-wrap overflow-auto col-9" style={{height:'500px'}}>
                        {
                            products.map(product=>
                                <div className="card p-2 m-2" style={{width:'200px'}}>
                                    <img src={product.image} className="card-image-top" height="120"/>
                                    <div className="card-header">
                                        <h6>{product.title}</h6>
                                    </div>
                                    <div className="card-body">
                                    <dl>
                                            <dt>Price</dt>
                                             <dd>
                                                {product.price} 
                                             </dd>
                                            <dt>rating</dt>
                                             <dd>
                                              {product.rating.rate}  <span className="bi bi-star-fill text-success"></span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <button className="bi bi-cart4 btn btn-dark text-white" name={product.id} onClick={handleCartCount}>Add New Product</button>
                                </div>
                            )
                        }
                </main>
            </section>
        </div>
    )
}                        
