import React, { useState } from "react";
import Navbarleft from "./mainPage/Navbarleft";
import { Link } from "react-router-dom";
import data from "./Data";
function Vegetables({ addToCart }) {
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
            <li>Fruits & Vegetables</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <Navbarleft />
      </div>
      <div className="w3l_banner_nav_right">
        <div className="w3l_banner_nav_right_banner5">
          <h3>
            Best Deals For New Products<span className="blink_me"></span>
          </h3>
        </div>
        <div className="w3l_banner_nav_right_banner3_btm">
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/18.jpg"
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
            <h4>Fruits & Vegetables</h4>
            <ol>
              <li>sunt in culpa qui officia</li>
              <li>commodo consequat</li>
              <li>sed do eiusmod tempor incididunt</li>
            </ol>
          </div>
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/19.jpg"
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
            <h4>Dry Fruits</h4>
            <ol>
              <li>enim ipsam voluptatem officia</li>
              <li>tempora incidunt ut labore et</li>
              <li>vel eum iure reprehenderit</li>
            </ol>
          </div>
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/20.jpg"
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
            <h4>Vegetables</h4>
            <ol>
              <li>dolorem eum fugiat voluptas</li>
              <li>ut aliquid ex ea commodi</li>
              <li>magnam aliquam quaerat</li>
            </ol>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
          <h3 className="w3l_fruit">Fruits & Vegetables</h3>
          <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            {data.map((item, index) => {
              return (
                <>
                  <div
                    className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd"
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
                                <a href="single.html">
                                  <img
                                    src={item.image}
                                    alt=" "
                                    className="img-responsive"
                                  />
                                </a>
                                <p>{item.name}</p>
                                <h4>
                                  {item.newPrice} <span>{item.oldPrice}</span>
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
                </>
              );
            })}

            {/* <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/30.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh cauliflower (2 no's)</p>
                          <h4>
                            $5.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh cauliflower"
                              />
                              <input type="hidden" name="amount" value="5.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
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
            {/* <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/31.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh brinjal bharta (1 kg)</p>
                          <h4>
                            $2.00 <span>$3.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh brinjal bharta"
                              />
                              <input type="hidden" name="amount" value="2.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
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
            {/* <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/32.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh sweet lime (500 gm)</p>
                          <h4>
                            $6.00 <span>$7.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh sweet lime"
                              />
                              <input type="hidden" name="amount" value="6.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
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
            {/* <div className="clearfix"> </div> */}
          </div>
          {/* <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/9.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh spinach (palak)</p>
                          <h4>
                            $2.00 <span>$3.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh spinach"
                              />
                              <input type="hidden" name="amount" value="2.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/10.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh mango dasheri (1 kg)</p>
                          <h4>
                            $5.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh mango dasheri"
                              />
                              <input type="hidden" name="amount" value="5.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
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
                          <a href="single.html">
                            <img
                              src="../Assets/images/11.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh apple red (1 kg)</p>
                          <h4>
                            $6.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh apple red"
                              />
                              <input type="hidden" name="amount" value="6.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/12.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh broccoli (500 gm)</p>
                          <h4>
                            $4.00 <span>$6.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh broccoli"
                              />
                              <input type="hidden" name="amount" value="4.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div> */}
          {/* <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/33.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh basket onion (1 kg)</p>
                          <h4>
                            $5.00 <span>$7.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh basket onion"
                              />
                              <input type="hidden" name="amount" value="5.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/34.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh muskmelon (1 kg)</p>
                          <h4>
                            $4.00 <span>$5.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh muskmelon"
                              />
                              <input type="hidden" name="amount" value="4.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
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
                          <a href="single.html">
                            <img
                              src="../Assets/images/35.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh mushroom (500 ml)</p>
                          <h4>
                            $11.00 <span>$15.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh mushroom"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="11.00"
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="../Assets/images/36.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh strawberry (1 pc)</p>
                          <h4>
                            $7.00 <span>$9.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh strawberry"
                              />
                              <input type="hidden" name="amount" value="7.00" />
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
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div> */}
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}

export default Vegetables;
