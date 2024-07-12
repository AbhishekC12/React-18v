import React from "react";
import {Navbar} from './navbar'
export class Shop extends React.Component
{
     constructor(){
        super();
     }
     render(){
        return(
            <div className="container-fluid">
                <Navbar theme={'bg-warning'} BrandTitle="Shopper." MenuItems={["Home", "Shop", "Kids", "Men"]} />
                <Navbar BrandTitle="Training Online" MenuItems={["Home", "Faculty", "Courses"]}  />
            </div>
        )
     }
}