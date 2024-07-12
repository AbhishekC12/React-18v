import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Products } from "./products";
import { Details } from "./details";
import { Login } from "./login";
import { Success } from "./success";
import { Invalid } from "./invalid";
export function ShopperIndex()
{
    return(
        <div>
            <BrowserRouter>
            <header>
                <h1 align="center">Shopper Index</h1>
            </header>
            <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path="products/:category" element={<Products/>}>
               <Route path="details/:id" element={<Details/>}/>
               </Route>
               <Route path="login" element={<Login/>}/>
               <Route path="success/:uname" element={<Success/>}/>
               <Route path="invalid" element={<Invalid/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}