import React from "react";

import ImageSlider from "../ImageSlider";
import "./Main.css";

function Main({ addToCart, items, singleItem }) {
  //FILTERING DATA ON THE BASIS OF CATEGORY
  const dairyItems = items.filter((item) => {
    let itemList =
      item.categorySlug === "dairy-products" && item.title === "Paneer - Theki";
    return itemList;
  });

  const vegetableItems = items.filter((item) => {
    let itemList =
      item.categorySlug === "fresh-vegetabless" && item.title === "Beetroot";
    return itemList;
  });

  const riceItems = items.filter((item) => {
    let itemList =
      item.categorySlug === "rice" &&
      (item.title === "Anadi (Sticky) Rice Ashram" || item.title === "Test01");
    return itemList;
  });

  // console.log("Vegetable", vegetableItems);
  // console.log("Rice", riceItems);
  // console.log("dairyItems", dairyItems);

  const hotofferItems = [...vegetableItems, ...riceItems, ...dairyItems];
  return (
    <div>
      <div className="banner">
        <div className="w3l_banner_nav_right">
          <section className="slider">
            <div className="flexslider">
              <ul className="slides">
                <li>
                  <ImageSlider />
                </li>
              </ul>
            </div>
          </section>
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
          <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            {hotofferItems.length > 0 ? (
              hotofferItems.map((item, index) => {
                return (
                  <div key={index}>
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
                );
              })
            ) : (
              <div className="notAvailableProducts">
                <b>Items Will be Available Soon...</b>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="fresh-vegetables">
        <div className="container">
          <h3>Top Products</h3>
          <div className="w3l_fresh_vegetables_grids">
            <div className="col-md-3 w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left">
              <p className="infoAboutSite">
                Grocery Store is an online delivery business that connects local
                farmers and producers with consumers by building meaningful and
                sustainable relationships. We aim to provide healthy food
                options and encourage healthy living by building a community of
                conscious and passionate stakeholders.
              </p>
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
