import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddToCart.css";

const AddToCart = ({
  cart,
  minusHandler,
  plusHandler,
  deleteItem,
  cartItemsFromApi,
  cartTotal,
}) => {
  const navigate = useNavigate();
  //console.log(cartItemsFromApi);

  const proceedToCheckout = () => {
    navigate("/checkout");
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
        <div class="w3l_banner_nav_right">
          {/* <!-- about --> */}
          <div class="privacy about">
            <h3>
              Chec<span>kout</span>
            </h3>
            <div class="checkout-right">
              <h4>
                Your shopping cart contains:{" "}
                <span>{cartItemsFromApi.length} Products</span>
              </h4>
            </div>
            {cartItemsFromApi.map((item, index) => {
              return (
                <>
                  <div className="cartItems" key={index}>
                    <h4>{index + 1}</h4>
                    <span className="itemName">{item.product.title}</span>
                    <img
                      className="cartImage"
                      src={item.product.images[0].imageName}
                      alt=""
                    />
                    <div className="quantityBtn">
                      <button
                        className="cartBtn cartBtnMinus"
                        onClick={() => minusHandler(item, -1)}
                      >
                        -
                      </button>
                      <span className="cartQuantity">{item.quantity}</span>
                      <button
                        className="cartBtn cartBtnPlus"
                        onClick={() => plusHandler(item, 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="price">$ {item.price * item.quantity}</p>
                    <button className="delete" onClick={() => deleteItem(item)}>
                      <i class="fa-solid fa-trash delBtn"></i>
                    </button>
                  </div>
                  <hr />
                </>
              );
            })}
            {cartItemsFromApi.length > 0 && (
              <div className="totalAmount">
                <strong>Total: $ {cartTotal}</strong>
              </div>
            )}

            <div className="checkoutBtn">
              <button onClick={proceedToCheckout} className="proceedToCheckout">
                Proceed To Checkout
              </button>
            </div>
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
