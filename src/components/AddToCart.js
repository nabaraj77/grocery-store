import React from "react";
import Navbarleft from "./mainPage/Navbarleft";
import { Link } from "react-router-dom";
import "./AddToCart.css";

let addedItems = [
  {
    id: 1,
    name: "Apple",
    image: "../Assets/images/19.jpg",
    price: "$120",
    orderQuantity: 1,
  },
  {
    id: 2,
    name: "Apple Ipad",
    image: "../Assets/images/19.jpg",
    price: "$100",
    orderQuantity: 1,
  },
];

const AddToCart = ({ cart, setCart }) => {
  const minusHandler = (data) => {
    const updatedCart = cart.map((item) => {
      if (item.name === data.name && addedItems.quantityOrdered !== 0) {
        return { ...item, quantityOrdered: item.quantityOrdered - 1 };
      } else if (item.name === data.name && item.quantityOrdered === 0) {
        console.log("Naba");
        return { ...item, quantityOrdered: 0 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };

  //PLUS HANDLER
  const plusHandler = (data) => {
    const updatedCart = cart.map((item) => {
      if (data.name === item.name) {
        return { ...item, quantityOrdered: item.quantityOrdered + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
    //console.log(updatedCart);
  };
  return (
    <>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <Navbarleft />
        <div class="w3l_banner_nav_right">
          {/* <!-- about --> */}
          <div class="privacy about">
            <h3>
              Chec<span>kout</span>
            </h3>

            <div class="checkout-right">
              <h4>
                Your shopping cart contains: <span>1 Products</span>
              </h4>
            </div>

            {cart.map((item, index) => {
              return (
                <>
                  <div className="cartItems" key={index}>
                    <h4>{index + 1}</h4>
                    <span className="itemName">{item.name}</span>
                    <img className="cartImage" src={item.image} alt="" />
                    <div className="quantityBtn">
                      <button onClick={() => minusHandler(item)}>-</button>
                      <span className="cartQuantity">
                        {item.quantityOrdered}
                      </span>
                      <button onClick={() => plusHandler(item)}>+</button>
                    </div>
                    <p className="price">
                      {item.newPrice * item.quantityOrdered}
                    </p>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>

          {/* <!-- //about --> */}
        </div>
        <div class="clearfix"></div>
      </div>
      {/* <!-- //banner --> */}
    </>
  );
};

export default AddToCart;
