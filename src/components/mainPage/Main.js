import React from "react";
import Navbarleft from "./Navbarleft";

function Main() {
  return (
    <div>
      <div className="banner">
        <Navbarleft />
        <div className="w3l_banner_nav_right">
          <section className="slider">
            <div className="flexslider">
              <ul className="slides">
                <li>
                  <div className="w3l_banner_nav_right_banner">
                    <h3>
                      Make your <span>food</span> with Spicy.
                    </h3>
                    <div className="more">
                      <a
                        href="products.html"
                        className="button--saqui button--round-l button--text-thick"
                        data-text="Shop now"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w3l_banner_nav_right_banner1">
                    <h3>
                      Make your <span>food</span> with Spicy.
                    </h3>
                    <div className="more">
                      <a
                        href="products.html"
                        className="button--saqui button--round-l button--text-thick"
                        data-text="Shop now"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w3l_banner_nav_right_banner2">
                    <h3>
                      upto <i>50%</i> off.
                    </h3>
                    <div className="more">
                      <a
                        href="products.html"
                        className="button--saqui button--round-l button--text-thick"
                        data-text="Shop now"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* <!-- flexSlider --> */}
          {/* <link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" property="" />
				<script defer src="js/jquery.flexslider.js"></script>
				<script type="text/javascript">
				$(window).load(function(){
				  $('.flexslider').flexslider({
					animation: "slide",
					start: function(slider){
					  $('body').removeClass('loading');
					}
				  });
				});
			  </script> */}
          {/* <!-- //flexSlider --> */}
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- banner --> */}
      <div className="banner_bottom">
        <div className="wthree_banner_bottom_left_grid_sub"></div>
        <div className="wthree_banner_bottom_left_grid_sub1">
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img
                src="../Assets/images/4.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="wthree_banner_bottom_left_grid_pos">
                <h4>
                  Discount Offer <span>25%</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img
                src="../Assets/images/5.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="wthree_banner_btm_pos">
                <h3>
                  introducing <span>best store</span> for <i>groceries</i>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img
                src="../Assets/images/6.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="wthree_banner_btm_pos1">
                <h3>
                  Save <span>Upto</span> $10
                </h3>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      {/* <!-- top-brands --> */}
      <div className="top-brands">
        <div className="container">
          <h3>Hot Offers</h3>
          <div className="agile_top_brands_grids">
            <div className="col-md-3 top_brand_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
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
                              title=" "
                              alt=" "
                              src="../Assets/images/1.png"
                            />
                          </a>
                          <p>fortune sunflower oil</p>
                          <h4>
                            $7.99 <span>$10.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="checkout.html" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="Fortune Sunflower Oil"
                              />
                              <input type="hidden" name="amount" value="7.99" />
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
            <div className="col-md-3 top_brand_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              title=" "
                              alt=" "
                              src="../Assets/images/3.png"
                            />
                          </a>
                          <p>basmati rise (5 Kg)</p>
                          <h4>
                            $11.99 <span>$15.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="basmati rise"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="11.99"
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
            <div className="col-md-3 top_brand_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
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
                              src="../Assets/images/2.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>Pepsi soft drink (2 Ltr)</p>
                          <h4>
                            $8.00 <span>$10.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="Pepsi soft drink"
                              />
                              <input type="hidden" name="amount" value="8.00" />
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
            <div className="col-md-3 top_brand_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
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
                              src="../Assets/images/4.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>dogs food (4 Kg)</p>
                          <h4>
                            $9.00 <span>$11.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="dogs food"
                              />
                              <input type="hidden" name="amount" value="9.00" />
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
          </div>
        </div>
      </div>
      {/* <!-- //top-brands -->
<!-- fresh-vegetables --> */}
      <div className="fresh-vegetables">
        <div className="container">
          <h3>Top Products</h3>
          <div className="w3l_fresh_vegetables_grids">
            <div className="col-md-3 w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left">
              <div className="w3l_fresh_vegetables_grid2">
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="products.html">All Brands</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="vegetables.html">Vegetables</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="vegetables.html">Fruits</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="drinks.html">Juices</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="pet.html">Pet Food</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="bread.html">Bread & Bakery</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="household.html">Cleaning</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="products.html">Spices</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="products.html">Dry Fruits</a>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a href="products.html">Dairy Products</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 w3l_fresh_vegetables_grid_right">
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <img
                    src="../Assets/images/8.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <div className="w3l_fresh_vegetables_grid1_rel">
                    <img
                      src="../Assets/images/7.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="w3l_fresh_vegetables_grid1_rel_pos">
                      <div className="more m1">
                        <a
                          href="products.html"
                          className="button--saqui button--round-l button--text-thick"
                          data-text="Shop now"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w3l_fresh_vegetables_grid1_bottom">
                  <img
                    src="../Assets/images/10.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                  <div className="w3l_fresh_vegetables_grid1_bottom_pos">
                    <h5>Special Offers</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <img
                    src="../Assets/images/9.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
                <div className="w3l_fresh_vegetables_grid1_bottom">
                  <img
                    src="../Assets/images/11.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="clearfix"> </div>
              <div className="agileinfo_move_text">
                <div className="agileinfo_marquee">
                  <h4>
                    get <span className="blink_me">25% off</span> on first order
                    and also get gift voucher
                  </h4>
                </div>
                <div className="agileinfo_breaking_news">
                  <span> </span>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* <!-- //fresh-vegetables --> */}
    </div>
  );
}

export default Main;
