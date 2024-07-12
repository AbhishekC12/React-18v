import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import { Login } from '../src/component/login';
import { Mobile } from './component/mobile/mobile';
import {Details} from './component/mobile/details';

function App() {
  return (
    <div className="App">
       
        <BrowserRouter>
            <header>
              <h1>Shopper.</h1>
              <nav>
                 <Link to='/'>Home</Link> <span></span>
                 <Link to='kids'>Kids</Link> <span></span>
                 <Link to='men'>Men's Fashion</Link> <span>  </span>
                 <Link to='login'> Login </Link> <span></span>
                 <Link to='mobile/iphone'> Iphone </Link> <span></span>
                 <Link to='mobile/realme'> Realme </Link>
              </nav>
            </header>
            <hr />
            <Routes>
                <Route path='/' element={<><h2>Home</h2><p>Year end sale 40% OFF</p></>}></Route>
                <Route path='kids' element={<><h2>Kids Fashion</h2><p>30% OFF on kidswear</p></>} ></Route>
                <Route path='men' element={<><h2>Men's Fashion</h2><p>Winter wear, Shoes, Jeans..</p></>} ></Route>
                <Route path='login' element={<Login />} />
                <Route path='mobile/:category' element={<Mobile/>} />
                <Route path='details/:id/:name/:price/:stock' element={<Details/>}/>
                <Route path='*' element={<><code>Not Found: Path you requested not found</code></>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
