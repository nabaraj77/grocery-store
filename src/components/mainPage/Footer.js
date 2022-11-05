import React from "react";
import "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Footer.css";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    mode: "onTouched",
  });
  const handleRegistration = (data) => {
    console.log(data);
    resetField("email");
  };
  return (
    <div>
      <div class="newsletter">
        <div class="container">
          <div class="w3agile_newsletter_left">
            <h3>sign up for our newsletter</h3>
          </div>
          <div class="w3agile_newsletter_right">
            <form
              action="#"
              method="post"
              onSubmit={handleSubmit(handleRegistration)}
            >
              <input
                type="email"
                {...register("email", {})}
                placeholder="Email Address"
              />
              <input type="submit" value="subscribe now" />
            </form>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="col-md-3 w3_footer_grid">
            <h3>information</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                {/* <a href="about.html">About Us</a> */}
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                {/* <a href="products.html">Best Deals</a> */}
                <Link to="/products">Best Deals</Link>
              </li>
              <li>
                {/* <a href="services.html">Services</a> */}
                <Link to="/services">Services</Link>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="col-md-3 w3_footer_grid">
            <h3>policy info</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/privacyPolicy">terms of use</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 w3_footer_grid">
            <h3>Partners</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="">NMB Bank</Link>
              </li>
              <li>
                <Link to="">Sanima Bank</Link>
              </li>
              <li>
                <Link to="">Daraz Nepal</Link>
              </li>
              <li>
                <Link to="">OnineKhabar.com</Link>
              </li>
              <li>
                <Link to="">Ratopati.com</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 w3_footer_grid">
            <h3>twitter posts</h3>
            <ul className="w3_footer_grid_list1">
              <li>
                <label className="fa fa-twitter" aria-hidden="true"></label>
                <i>01 day ago</i>
                <span>
                  Non numquam <a href="#">http://sd.ds/13jklf#</a>
                  eius modi tempora incidunt ut labore et
                  <a href="#">http://sd.ds/1389kjklf#</a>quo nulla.
                </span>
              </li>
              <li>
                <label className="fa fa-twitter" aria-hidden="true"></label>
                <i>02 day ago</i>
                <span>
                  Con numquam <a href="#">http://fd.uf/56hfg#</a>
                  eius modi tempora incidunt ut labore et
                  <a href="#">http://fd.uf/56hfg#</a>quo nulla.
                </span>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
          <div className="agile_footer_grids">
            <div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
              <div className="w3_footer_grid_bottom">
                <h4>100% secure payments</h4>
                <img
                  src="../Assets/images/card.png"
                  alt=" "
                  className="img-responsive"
                />
              </div>
            </div>
            <div class="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
              <div class="w3_footer_grid_bottom">
                <h5>connect with us</h5>
                <ul className="agileits_social_icons">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dribbble">
                      <i className="fa fa-dribbble" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="wthree_footer_copy">
            <p>
              © 2016 Grocery Store. All rights reserved | Design by{" "}
              <a href="http://w3layouts.com/">W3layouts</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
