import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
function Navbarleft() {
  const [categories, setCategories] = useState([]);
  const getCategoriesList = () => {
    axios({
      method: "get",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/category`,
      params: {
        allProduct: 1,
      },
      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
      },
    })
      .then((response) => {
        //console.log(response.data.data);
        setCategories(response.data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  useEffect(() => {
    getCategoriesList();
  }, []);
  //console.log(categories);
  return (
    <div>
      <div className="w3l_banner_nav_left">
        <nav className="navbar nav_bottom">
          <div className="navbar-header nav_2">
            <button
              type="button"
              className="navbar-toggle collapsed navbar-toggle1"
              data-toggle="collapse"
              data-target="#bs-megadropdown-tabs"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul className="nav navbar-nav nav_1">
              {/* CATEGORIES LISTING FROM API CALL DATA */}
              {categories.map((categoryList) => {
                return (
                  <>
                    {categoryList.subcategories.length === 0 ? (
                      <li>
                        <Link to={`/${categoryList.slug}`}>
                          {categoryList.title}
                        </Link>
                      </li>
                    ) : (
                      <li className="dropdown mega-dropdown active">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          {categoryList.title}
                          <span className="caret"></span>
                        </a>
                        <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                          <div className="w3ls_vegetables">
                            <ul>
                              <li>
                                {categoryList.subcategories.map(
                                  (subItem, index) => {
                                    //console.log(subItem.title);
                                    return (
                                      <div key={index}>
                                        <Link to={`/${subItem.slug}`}>
                                          {subItem.title}
                                        </Link>
                                      </div>
                                    );
                                  }
                                )}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </nav>
      </div>
    </div>

    // <div>
    //   <div className="w3l_banner_nav_left">
    //     <nav className="navbar nav_bottom">
    //       {/* <!-- Brand and toggle get grouped for better mobile display --> */}
    //       <div className="navbar-header nav_2">
    //         <button
    //           type="button"
    //           className="navbar-toggle collapsed navbar-toggle1"
    //           data-toggle="collapse"
    //           data-target="#bs-megadropdown-tabs"
    //         >
    //           <span className="sr-only">Toggle navigation</span>
    //           <span className="icon-bar"></span>
    //           <span className="icon-bar"></span>
    //           <span className="icon-bar"></span>
    //         </button>
    //       </div>
    //       {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    //       <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
    //         <ul className="nav navbar-nav nav_1">
    //           {/* <li><a href="products.html">Branded Foods</a></li> */}
    //           <li>
    //             <Link to="/products">Branded Foods</Link>
    //           </li>
    //           {/* <li>
    //             <a href="household.html">Households</a>

    //           </li> */}
    //           <li>
    //             <Link to="/household">Households</Link>
    //           </li>
    //           <li className="dropdown mega-dropdown active">
    //             <a href="#" className="dropdown-toggle" data-toggle="dropdown">
    //               Veggies & Fruits<span className="caret"></span>
    //             </a>
    //             <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
    //               <div className="w3ls_vegetables">
    //                 <ul>
    //                   <li>
    //                     {/* <a href="vegetables.html">Vegetables</a>

    // 				 */}
    //                     <Link to="/vegetables">Vegetables</Link>
    //                   </li>

    //                   <li>
    //                     {/* <a href="vegetables.html">Fruits</a> */}
    //                     <Link to="/fruits">Fruits</Link>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             {/* <a href="kitchen.html">Kitchen</a> */}
    //             <Link to="/kitchen">Kitchen</Link>
    //           </li>
    //           <li>
    //             {/* <a href="short-codes.html">Short Codes</a> */}
    //             <Link to="/short-codes">Short Codes</Link>
    //           </li>
    //           <li className="dropdown">
    //             <a href="#" className="dropdown-toggle" data-toggle="dropdown">
    //               Beverages<span className="caret"></span>
    //             </a>
    //             <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
    //               <div className="w3ls_vegetables">
    //                 <ul>
    //                   <li>
    //                     {/* <a href="drinks.html">Soft Drinks</a> */}
    //                     <Link to="/drinks">Soft Drinks</Link>
    //                   </li>
    //                   <li>
    //                     {/* <a href="drinks.html">Juices</a> */}
    //                     <Link to="/drinks">Juices</Link>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             {/* <a href="pet.html">Pet Food</a> */}
    //             <Link to="/pet">Pet Food</Link>
    //           </li>
    //           <li className="dropdown">
    //             <a href="#" className="dropdown-toggle" data-toggle="dropdown">
    //               Frozen Foods<span className="caret"></span>
    //             </a>
    //             <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
    //               <div className="w3ls_vegetables">
    //                 <ul>
    //                   <li>
    //                     {/* <a href="frozen.html">Frozen Snacks</a> */}
    //                     <Link to="/frozen">Frozen Snacks</Link>
    //                   </li>
    //                   <li>
    //                     {/* <a href="frozen.html">Frozen Nonveg</a> */}
    //                     <Link to="/frozen">Frozen Nonveg</Link>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             {/* <a href="bread.html">Bread & Bakery</a> */}
    //             <Link to="/bread">Bread $ Bakery</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       {/* <!-- /.navbar-collapse --> */}
    //     </nav>
    //   </div>
    // </div>
  );
}

export default Navbarleft;
