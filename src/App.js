import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Pages from './components/Pages';
import Blog from './components/Blog';
import Shop from './components/Shop';
import Contact from './components/Contact';
import CartPage from './components/cartPage';
import About from './components/About';
import Billing from './components/Billing';
import Payment from './components/Payment';
import { ToastContainer } from "react-toastify";
import NotFund from './components/NotFund';

function App() {
  return (
    
    <div>
    
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
     <Routes>
     <Route path='/'  exact element={<Home/>} />
     <Route path='/pages'  exact element={<Pages/>} />
     <Route path='/blog'  exact element={<Blog/>} />
     <Route path='/about'  exact element={<About/>} />
     <Route path='/contact'  exact element={<Contact/>} />
     <Route path='/cartpage'  exact element={<CartPage/>} />
     <Route path='/billing'  exact element={<Billing/>} />
     <Route path='/payment'  exact element={<Payment/>} />
     <Route path ='*' element={<Home />} />
     </Routes>
    
    
    </BrowserRouter>
    
    <Footer/>
    
    </div>
  );
}

export default App;
