import { BrowserRouter, Routes, Route } from "react-router-dom";
import {FaceHome} from './face-home';
import {FaceProducts} from './face-products';
import {FaceDetails} from './face-details';
import { Login } from "./login";
import { Success } from "./success";
import { Invalid } from "./invalid";
export function FaceShopper()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header>
                    <h3 align="center">IndexShopper</h3>
                </header>
                <Routes>
                    <Route path="/" element={<FaceHome/>}></Route>
                    <Route path="products/:category" element={<FaceProducts/>}>
                    <Route path="details/:id" element={<FaceDetails/>}/>
                    </Route>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="success/:uname" element={<Success/>}/>
                    <Route path="invalid" element={<Invalid/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}