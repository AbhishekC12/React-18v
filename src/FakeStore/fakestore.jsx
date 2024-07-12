import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./cart-slicer";

export function FakeStore() {
    const [categories, setCategories] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartCountUpdate,setCartCount] = useState([])
    const [ToggleTable, setToggleTable] = useState(false); // ToggleTable as boolean

    const dispatch = useDispatch();
    const cartCount = useSelector(state => state.store.cartCount); // Get cartCount from Redux state

    useEffect(() => {
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    }, []);

    function LoadProducts(url) {
        axios.get(url)
        .then(res => {
            setProducts(res.data);
        })
        .catch(error => {
            console.log("Error loading products:", error.message);
        });
    }

    function LoadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
        .then(res => {
            const categories = res.data;
            categories.unshift("all");
            setCategories(categories);
        })
        .catch(error => {
            console.log("Error loading categories:", error.message);
        });
    }

    function handleCategoryChange(e) {
        const url = e.target.value === "all" ?
            "https://fakestoreapi.com/products" :
            `https://fakestoreapi.com/products/category/${e.target.value}`;
        LoadProducts(url);
    }

    function handleCartCount(product) {
        // Add the selected product to the cart
        dispatch(addToCart(product));
        // Optionally, update cart count locally
        // setCartCount(cartItem.length + 1); 

        // Alert and update cart item list
        axios.get(`https://fakestoreapi.com/products/${product.id}`)
        .then(res => {
            setCartItem([...cartItem, res.data]); // Add to cartItem array
            setCartCount(cartItem.length + 1); // Update cart count
            alert(`${res.data.title} added to Cart`);
        })
        .catch(error => {
            console.log("Error adding item to cart:", error.message);
        });
    }

    function handleCartDisplay() {
        setToggleTable(!ToggleTable); // Toggle the boolean value
    }

    function handleDeleteClick(item) {
        dispatch(removeFromCart(item)); // Remove from Redux store
        const updatedCart = cartItem.filter(cart => cart.id !== item.id);
        setCartItem(updatedCart); // Update local cartItem state
        setCartCount(updatedCart.length); // Update cart count
    }

    return (
        <div className="container-fluid">
            <div>
                <header className="d-flex justify-content-between bg-dark text-white p-2">
                    <div>
                        <span className="h3">.Shopper</span>
                    </div>
                    <div className="fs-4">
                        <span className="me-4">Home</span>
                        <span className="me-4">Jewelry</span>
                        <span className="me-4">Electronics</span>
                    </div>
                    <div>
                        <button className="btn bi bi-cart4 text-white position-relative" onClick={handleCartDisplay}>
                            <span className="badge bg-danger position-absolute rounded-circle">{cartCount}</span>
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
                        <select className="form-control" style={{ width: '250px' }} onChange={handleCategoryChange}>
                            {categories.map(category =>
                                <option value={category} key={category}>{category.toUpperCase()}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <table className="table table-hover caption-top" style={{ display: ToggleTable ? 'block' : 'none' }}>
                            <caption align="center">Cart Items</caption>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Preview</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItem.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td><img src={item.image} alt={item.title} width="50" height="50" /></td>
                                        <td>{item.price}</td>
                                        <td><button className="btn btn-danger bi bi-trash-fill" onClick={() => handleDeleteClick(item)}></button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </nav>
                <main className="d-flex flex-wrap overflow-auto col-9" style={{ height: '500px' }}>
                    {products.map(product =>
                        <div className="card p-2 m-2" style={{ width: '200px' }} key={product.id}>
                            <img src={product.image} className="card-image-top" height="120" alt={product.title} />
                            <div className="card-header">
                                <h6>{product.title}</h6>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span></dd>
                                </dl>
                            </div>
                            <button className="bi bi-cart4 btn btn-dark text-white" onClick={() => handleCartCount(product)}>Add to Cart</button>
                        </div>
                    )}
                </main>
            </section>
        </div>
    );
}
