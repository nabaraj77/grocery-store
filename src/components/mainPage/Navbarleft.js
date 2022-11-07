import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosData } from "../api/axios";
function Navbarleft() {
  const [categories, setCategories] = useState([]);
  const getCategoriesList = async () => {
    try {
      let response = await axiosData.get("/api/v4/category");
      setCategories(response.data.data);
    } catch (err) {
      console.log(err);
    }
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
  );
}

export default Navbarleft;
