import React from "react";

import { Link } from "react-router-dom";
import "./Product.css";
function Products({ items, addToCart, singleItem }) {
  return (
    <>
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>

              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Products</li>
          </ul>
        </div>
      </div>

      <div class="w3l_banner_nav_right">
        <div class="w3l_banner_nav_right_banner3">
          <h3>
            Best Deals For New Products<span class="blink_me"></span>
          </h3>
        </div>
        <div class="w3l_banner_nav_right_banner3_btm">
          <div class="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div class="view view-tenth">
              <img
                src="../Assets/images/13.jpg"
                alt=" "
                class="img-responsive"
              />
              <div class="mask">
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
          <div class="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div class="view view-tenth">
              <img
                src="../Assets/images/14.jpg"
                alt=" "
                class="img-responsive"
              />
              <div class="mask">
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
          <div class="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div class="view view-tenth">
              <img
                src="../Assets/images/15.jpg"
                alt=" "
                class="img-responsive"
              />
              <div class="mask">
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
          <div class="clearfix"> </div>
        </div>
        <div class="w3ls_w3l_banner_nav_right_grid">
          <h3>All Products</h3>
          <div class="w3ls_w3l_banner_nav_right_grid1">
            {items.map((item, index) => {
              return (
                <>
                  {/* <div class="col-md-3 w3ls_w3l_banner_left">
                    <div class="hover14 column">
                      <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                        <div class="agile_top_brand_left_grid_pos">
                          <img
                            src="../Assets/images/offer.png"
                            alt=" "
                            class="img-responsive"
                          />
                        </div>
                        <div class="agile_top_brand_left_grid1">
                          <figure>
                            <div class="snipcart-item block">
                              <div class="snipcart-thumb">
                                <a href="single.html">
                                  <img
                                    src="../Assets/images/5.png"
                                    alt=" "
                                    class="img-responsive"
                                  />
                                </a>
                                <p>knorr instant soup (100 gm)</p>
                                <h4>
                                  $3.00 <span>$5.00</span>
                                </h4>
                              </div>
                              <div class="snipcart-details">
                                <form action="#" method="post">
                                  <fieldset>
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="business"
                                      value=" "
                                    />
                                    <input
                                      type="hidden"
                                      name="item_name"
                                      value="knorr instant soup"
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value="3.00"
                                    />
                                    <input
                                      type="hidden"
                                      name="discount_amount"
                                      value="1.00"
                                    />
                                    <input
                                      type="hidden"
                                      name="currency_code"
                                      value="USD"
                                    />
                                    <input
                                      type="hidden"
                                      name="return"
                                      value=" "
                                    />
                                    <input
                                      type="hidden"
                                      name="cancel_return"
                                      value=" "
                                    />
                                    <input
                                      type="submit"
                                      name="submit"
                                      value="Add to cart"
                                      class="button"
                                    />
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div> */}
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
                                  <h4>
                                    Rs. {item.unitPrice[0].sellingPrice}
                                    {/* <span>{item.unitPrice[0].oldPrice}</span> */}
                                  </h4>
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
                </>
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
