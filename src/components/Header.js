import React, { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";

const Header = () => {

    const { cart, totalQuantity ,totalPrice } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
    <header className="header">
    <div className="header__top">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="header__top__left">
                        <ul>
                            <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                            <li>Free Shipping for all Order of $99</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="header__top__right">
                        <div className="header__top__right__social">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>     
                        </div>
                        <div className="header__top__right__language">
                            <img src="img/language.png" alt="" />
                            <div>English</div>
                            <span className="arrow_carrot-down"></span>
                            <ul>
                                <li><a href="#">Spanis</a></li>
                                <li><a href="#">English</a></li>
                            </ul>
                        </div>
                        <div className="header__top__right__auth">
                            <a href="#"><i className="fa fa-user"></i> Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row ">
            <div className="col-lg-3">
                <div className="header__logo">
                    <NavLink to="/"><img src="img/logo.png" alt="" /></NavLink>
                </div>
            </div>
            <div className="col-lg-6 flex justify-center ">
                <nav className="header__menu">
                    <ul >
                         <li className="active"><NavLink to="/">Home</NavLink></li> 
                        <li><NavLink to="./blog">Blog</NavLink></li>
                        <li><NavLink to="./contact">Contact</NavLink></li>
                        <li><NavLink to="./about">About Us</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-3">
                <div className="header__cart">
                    <ul>
                        <li><NavLink to="/cartpage"><i className="fa fa-heart"></i> <span>0</span></NavLink></li>
                        <li><NavLink to="/cartpage"><i className="fa fa-shopping-bag"></i> <span>{totalQuantity}</span></NavLink></li>
                        
                    </ul>
                    <div className="header__cart__price">item: <span>$ {totalPrice}</span></div>
                </div>
            </div>
        </div>
        <div className="humberger__open">
            <i className="fa fa-bars"></i>
        </div>
    </div>
</header>
    </div>
  )
}

export default Header
