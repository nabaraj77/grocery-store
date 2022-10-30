import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products({ addToCart }) {
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
  console.log(items);

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

  console.log("Vegetable", vegetableItems);
  console.log("Rice", riceItems);
  console.log("dairyItems", dairyItems);

  const hotofferItems = [...vegetableItems, ...riceItems, ...dairyItems];

  return (
    <div>
      <div className="w3l_banner_nav_right">
        <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
          <h3 className="w3l_fruit">Hot Offers</h3>
          <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            {hotofferItems.length > 0 ? (
              hotofferItems.map((item, index) => {
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
    </div>
  );
}

export default Products;
