import React from "react";

export class SetState extends React.Component
{

    constructor(){
        super();
        this.state = {
            categories : [],
            products : []
        }
    }

    LoadCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(categories=>{
            this.setState({
                categories:categories
            })
        })
    }

    LoadProduct(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(products=>{
            this.setState({
                products:products
            })
        })
    }

    componentDidMount(){
        this.LoadCategories();
        this.LoadProduct();
    }


    render(){
        return(
            <React.Fragment>
               <div className="container-fluid">
               <select className="mt-2">
                    {
                        this.state.categories.map(category=>
                            <option key={category}>{category}</option>
                            )
                    }
                </select>
                <div className="mt-2">
                    {
                        this.state.products.map(product=>
                            <img key={product.id} src={product.image} width="200" height="200"/>
                            )
                    }
                </div>
               </div>
            </React.Fragment>
        )
    }
}
