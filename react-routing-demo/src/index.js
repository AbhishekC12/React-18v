import React from 'react';
import ReactDOM from 'react-dom/client';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShopperIndex } from './shopper/shopper-index';
import {FaceShopper} from './shopper/face-shopper';
import "../node_modules/bootstrap/dist/css//bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import {TutorialIndex} from "./video-tutorial-library/video-tutorial-index.jsx";
import {  CookiesProvider } from 'react-cookie';


const root = ReactDOM.createRoot(document.getElementById('root'));   
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <TutorialIndex />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
