import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useForm } from "react-hook-form";
import { SearchData } from "../../Context/Search";
import toast from "react-hot-toast";
function Header() {
  const [accessToken, setAccessToken] = useState([]);
  const searchValue = useContext(SearchData);
  const navigate = useNavigate();

  // console.log(searchValue);
  const viewYourCart = () => {
    if (accessToken) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  const signoutButton = () => {
    localStorage.clear("accessToken");
    toast.success("Signed out Successfully.");
    navigate("/");
  };

  //ACCESS TOKEN FETCHING
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  });

  const { register, handleSubmit, resetField } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    searchValue.setValues(data);
    resetField("searchValue");
    navigate("/search");
  };
  return (
    <div>
      <div className="agileits_header header">
        <div className="w3l_offers">
          <Link to="products">Today's special Offers ! </Link>
        </div>
        <div className="w3l_search">
          <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("searchValue", {})}
              placeholder="Search..."
            />

            <input type="submit" value="" />
          </form>
        </div>
        <div className="product_list_header">
          <form action="#" method="post" className="last">
            <fieldset>
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <Link to="/cart">
                <input
                  type="submit"
                  onClick={viewYourCart}
                  name="submit"
                  value="View your cart"
                  className="button"
                />
              </Link>
            </fieldset>
          </form>
        </div>

        <div className="w3l_header_right">
          <ul>
            <li className="dropdown profile_details_drop">
              {!accessToken && (
                <div>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-user" aria-hidden="true">
                      <h6>
                        <span>Guest</span>
                      </h6>
                    </i>
                    <span className="caret"></span>
                  </a>
                  <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div className="w3ls_vegetables">
                      <ul>
                        <div>
                          <li>
                            <Link to="/login">Log In</Link>
                          </li>
                          <li>
                            <Link to="/signUp">Sign Up</Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {accessToken && (
                <div>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-user" aria-hidden="true">
                      <h6>
                        <span>User</span>
                      </h6>
                    </i>
                    <span className="caret"></span>
                  </a>
                  <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div className="w3ls_vegetables">
                      <ul>
                        <div>
                          <li>
                            <Link to="/user">Profile</Link>
                          </li>
                          <li>
                            <button
                              onClick={signoutButton}
                              className="signoutBtn"
                            >
                              Sign Out
                            </button>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="w3l_header_right1">
          <h2>
            <Link to="mailTo">Contact Us</Link>
          </h2>
        </div>
        <div className="clearfix"> </div>
      </div>

      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left">
            <h1>
              <Link to="/">
                <span>Grocery</span> Store
              </Link>
            </h1>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="special_items">
              <li>
                {/* <a href="events.html">Events</a> */}
                <Link to="events">Events</Link>
                <i>/</i>
              </li>
              <li>
                {/* <a href="about.html">About Us</a> */}
                <Link to="aboutUs">About Us</Link>
                <i>/</i>
              </li>
              <li>
                {/* <a href="products.html">Best Deals</a> */}
                <Link to="products">Best Deals</Link>
                <i>/</i>
              </li>
              <li>
                {/* <a href="services.html">Services</a> */}
                <Link to="services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>(+977)
                014780000
              </li>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:store@grocery.com">store@grocery.com</a>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
