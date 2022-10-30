import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ItemsFromApi.css";

const ItemsFromApi = ({ addToCart }) => {
  const { categorySlug } = useParams();
  const [items, setItems] = useState([]);

  const getCategoriesList = () => {
    axios({
      method: "get",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1`,
      // params: {
      //   allProduct: 1,
      // },
      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
      },
    })
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  useEffect(() => {
    getCategoriesList();
  }, []);
  //   console.log("Items", items);
  //   console.log(categorySlug);
  const filteredItems = items.filter((item) => {
    let itemList = item.categorySlug === categorySlug;
    return itemList;
  });

  console.log("Filtered Data", filteredItems);
  return (
    <>
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Products</li>
          </ul>
        </div>
      </div>
      <div className="w3l_banner_nav_right">
        <div className="w3l_banner_nav_right_banner5">
          <h3>
            Best Deals For New Products<span className="blink_me"></span>
          </h3>
        </div>
        {/* <div className="w3l_banner_nav_right_banner3_btm">
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
        </div> */}
        <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
          <h3 className="w3l_fruit">{categorySlug}</h3>
          <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => {
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
                                      src={item.images[0].imageName}
                                      alt=" "
                                      className="img-responsive"
                                    />
                                  </a>
                                  <p>{item.title}</p>
                                  <h4>
                                    {item.unitPrice[0].newPrice}
                                    <span>{item.unitPrice[0].oldPrice}</span>
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
              })
            ) : (
              <div className="notAvailableProducts">
                <b>Items Will be Available Soon...</b>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      {/* <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
        {filteredItems.map((item, index) => {
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
                              <img src="" alt=" " className="img-responsive" />
                            </a>
                            <p>Name</p>
                            <h4>
                              4 <span>5</span>
                            </h4>
                          </div>
                          <div className="snipcart-details ">
                            <input
                              type="button"
                              value="Add to cart"
                              className="button addtoCartBtn text-center"
                              //   onClick={() => {
                              //     addToCart(item);
                              //   }}
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
      </div> */}
    </>
  );
};

export default ItemsFromApi;
