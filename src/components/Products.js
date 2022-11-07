import React from "react";

import { Link } from "react-router-dom";
import "./Product.css";
function Products({ items, addToCart, singleItem }) {
  return (
    <>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>

              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Products</li>
          </ul>
        </div>
      </div>

      <div className="w3l_banner_nav_right">
        <div className="w3l_banner_nav_right_banner3">
          <h3>
            Best Deals For New Products<span className="blink_me"></span>
          </h3>
        </div>
        <div className="w3l_banner_nav_right_banner3_btm">
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/13.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Utensils</h4>
            <ol>
              <li>sunt in culpa qui officia</li>
              <li>commodo consequat</li>
              <li>sed do eiusmod tempor incididunt</li>
            </ol>
          </div>
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/14.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Hair Care</h4>
            <ol>
              <li>enim ipsam voluptatem officia</li>
              <li>tempora incidunt ut labore et</li>
              <li>vel eum iure reprehenderit</li>
            </ol>
          </div>
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/15.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Cookies</h4>
            <ol>
              <li>dolorem eum fugiat voluptas</li>
              <li>ut aliquid ex ea commodi</li>
              <li>magnam aliquam quaerat</li>
            </ol>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="w3ls_w3l_banner_nav_right_grid">
          <h3>All Products</h3>
          <div className="w3ls_w3l_banner_nav_right_grid1">
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <div key={index}>
                    <div
                      className="displayItem col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd"
                      key={index}
                    >
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                          <div className="tag">
                            <img
                              src="../Assets/images/tag.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>

                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <button onClick={() => singleItem(item)}>
                                    <img
                                      src={item.images[0].imageName}
                                      alt=" "
                                      className="img-responsive"
                                    />
                                  </button>
                                  <p>{item.title}</p>
                                  <h4>Rs. {item.unitPrice[0].sellingPrice}</h4>
                                </div>
                                <div className="snipcart-details ">
                                  <input
                                    type="button"
                                    value="Add to cart"
                                    className="button addtoCartBtn text-center"
                                    onClick={() => {
                                      addToCart(item);
                                    }}
                                  />
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </>
  );
}

export default Products;
