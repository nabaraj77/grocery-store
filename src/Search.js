import React from "react";
import { useContext } from "react";
import { SearchData } from "./Context/Search";
import { Link } from "react-router-dom";

const Search = ({ addToCart, items, singleItem }) => {
  //   const [apiData, setApiData] = useState([]);

  //RECEIVING DATA :CONTEXTAPI
  const searchValue = useContext(SearchData);
  let search = searchValue.text.searchValue;
  console.log(search, "Text");
  console.log(items, "SearchPage");
  //   useEffect(()=>{

  //   },[searchValue.text.searchValue])

  //COMPARING TO FIND IF SEARCH VALUE EXISTS
  let searchArray = items.filter((items) => {
    return (
      items.title.toLowerCase().includes(search) ||
      items.categoryTitle.toLowerCase().includes(search)
    );
  });
  console.log(searchArray, "searchArray");
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
            <li>Search</li>
          </ul>
        </div>
      </div>
      <div className="w3l_banner_nav_right">
        <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
          <h3 className="w3l_fruit">{search}</h3>
          <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            {searchArray.length > 0 && search != "" ? (
              searchArray.map((item, index) => {
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
                                  <button
                                    onClick={() => {
                                      singleItem(item);
                                    }}
                                  >
                                    <img
                                      src={item.images[0].imageName}
                                      alt=" "
                                      className="img-responsive"
                                    />
                                  </button>

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
                <b>No Items Found....</b>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default Search;
