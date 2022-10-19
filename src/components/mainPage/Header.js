import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "../About";
import Events from "../Events";
import Mail from "../Mail";
import Products from "../Products";
import Services from "../Services";
import Main from "./Main";

function Header() {
  return (
    <div>
      <div className="agileits_header">
        <div className="w3l_offers">
          {/* <a href="products.html">Today's special Offers !</a> */}
          <Link to="products">Today's special Offers ! </Link>
        </div>
        <div className="w3l_search">
          <form action="#" method="post">
            <input
              type="text"
              name="Product"
              value="Search a product..."
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Search a product...';}"
              required=""
            />
            <input type="submit" value=" " />
          </form>
        </div>
        <div className="product_list_header">
          <form action="#" method="post" className="last">
            <fieldset>
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <input
                type="submit"
                name="submit"
                value="View your cart"
                className="button"
              />
            </fieldset>
          </form>
        </div>
        <div className="w3l_header_right">
          <ul>
            <li className="dropdown profile_details_drop">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span className="caret"></span>
              </a>
              <div className="mega-dropdown-menu">
                <div className="w3ls_vegetables">
                  <ul className="dropdown-menu drp-mnu">
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="login.html">Sign Up</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w3l_header_right1">
          <h2>
            {/* <a href="mail.html">Contact Us</a> */}
            <Link to="mailTo">Contact Us</Link>
          </h2>
        </div>
        <div className="clearfix"> </div>
      </div>
      {/* <script>
	      $(document).ready(function() {
		    var navoffeset=$(".agileits_header").offset().top;
		    $(window).scroll(function(){
			  var scrollpos=$(window).scrollTop(); 
			    if(scrollpos >=navoffeset){
				    $(".agileits_header").addclassName("fixed");
			    }else{
				$(".agileits_header").removeclassName("fixed");
			}
		  });
		  });
      </script> */}

      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left">
            <h1>
              {/* <a href="index.html">
                <span>Grocery</span> Store
              </a> */}
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
                <i className="fa fa-phone" aria-hidden="true"></i>(+0123) 234
                567
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
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="events" element={<Events />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />

        <Route path="mailTo" element={<Mail />} />
      </Routes>
    </div>
  );
}

export default Header;
