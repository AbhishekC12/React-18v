
import React from "react";

export class Navbar extends React.Component
{
    constructor(props){
        super();
    }
    render(){
        return(
            <nav className={`p-3 d-flex justify-content-between ${this.props.theme}`}>
                <div className="h4">{this.props.BrandTitle}</div>
                <div>
                    {
                        this.props.MenuItems.map(item=>
                            <button className="btn btn-link" key={item}>{item}</button>
                            )
                    }
                </div>
                <div>
                    <span className="bi bi-person-fill me-2"></span>
                    <span className="bi bi-search me-2"></span>
                    <span className="bi bi-bell-fill"></span>
                </div>
            </nav>
        )
    }
}