import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../features/cartSlice";

const ProductCard = () => {

    const items = useSelector((state) => state.allCart.items);
    
    const dispatch = useDispatch();

  return (
    <div>

<section className="featured spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>Featured Product</h2>
                </div>
                <div className="featured__controls">
                    <ul>
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".oranges">Oranges</li>
                        <li data-filter=".fresh-meat">Fresh Meat</li>
                        <li data-filter=".vegetables">Vegetables</li>
                        <li data-filter=".fastfood">Fastfood</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row featured__filter">
        
        
        {  items.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat grid sm:grid-cols-1 mx-auto">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" >
                    <img className='mx-auto' src={item.img} alt="" />
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li onClick={() => dispatch(addToCart(item))} ><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">{item.title}</a></h6>
                        <h5>${item.price}</h5>
                    </div>
                </div>
            </div>
        ) )
            }


        </div>
    </div>
</section>

    </div>
  )
}

export default ProductCard
