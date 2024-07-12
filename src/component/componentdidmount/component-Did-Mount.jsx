import React from "react";

export class ComponentMount extends React.Component
{
     constructor(){
        super();
        this.state = {
            categories: [],
            products : []
        }
     
     }

     LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then(res=> res.json())
        .then(categories => {
            this.setState({
                categories: categories
            })
        })
     }

     LoadProducts(){
        fetch("http://fakestoreapi.com/products")
        .then(res=> res.json())
        .then(products => {
            this.setState({
                products: products
            })
        })
     }

     componentDidMount(){
         this.LoadCategories();
         this.LoadProducts();
     }

     render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <h2>Select Category</h2>
                    <select>
                        {
                            this.state.categories.map(category=>
                                <option key={category}>{category}</option>
                                )
                        }
                    </select>
                    <div className="mt-3">
                        {
                            this.state.products.map(product=>
                                <img key={product.id} src={product.image} width="100" height="100" className="m-2" />
                                )
                        }
                    </div>
                </div>
            </React.Fragment>
        )
     }
}