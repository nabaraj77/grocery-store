import React from "react";
import Navbarleft from "./mainPage/Navbarleft";
import { Link } from "react-router-dom";
import "./AddToCart.css";

const AddToCart = ({ cart, minusHandler, plusHandler, deleteItem, total }) => {
  console.log(cart);
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
                Your shopping cart contains: <span>{cart.length} Products</span>
              </h4>
            </div>
            {cart.map((item, index) => {
              return (
                <>
                  <div className="cartItems" key={index}>
                    <h4>{index + 1}</h4>
                    <span className="itemName">{item.title}</span>
                    <img
                      className="cartImage"
                      src={item.images[0].imageName}
                      alt=""
                    />
                    <div className="quantityBtn">
                      <button
                        className="cartBtn"
                        onClick={() => minusHandler(item)}
                      >
                        -
                      </button>
                      <span className="cartQuantity">
                        {item.quantityOrdered}
                      </span>
                      <button
                        className="cartBtn"
                        onClick={() => plusHandler(item)}
                      >
                        +
                      </button>
                    </div>
                    <p className="price">
                      $ {item.unitPrice[0].newPrice * item.quantityOrdered}
                    </p>
                    <button onClick={() => deleteItem(item)}>
                      {/* <i class="fa-solid fa-trash-can delBtn"></i> */}
                      <i class="fa-solid fa-trash delBtn"></i>
                    </button>
                  </div>
                  <hr />
                </>
              );
            })}
            {cart.length > 0 && (
              <div className="totalAmount">
                <strong>Total: $ {total}</strong>
              </div>
            )}
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
