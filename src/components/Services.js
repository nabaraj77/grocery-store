import React from "react";

import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div className="banner">
        <div className="w3l_banner_nav_right">
          <div className="services">
            <h3>Services</h3>
            <div className="w3ls_service_grids">
              <div className="col-md-5 w3ls_service_grid_left">
                <h4>cum soluta nobis est</h4>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
              <div className="col-md-7 w3ls_service_grid_right">
                <div className="col-md-4 w3ls_service_grid_right_1">
                  <img
                    src="../Assets/images/18.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-4 w3ls_service_grid_right_1">
                  <img
                    src="../Assets/images/19.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-4 w3ls_service_grid_right_1">
                  <img
                    src="../Assets/images/20.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="w3ls_service_grids1">
              <div className="col-md-6 w3ls_service_grids1_left">
                <img
                  src="../Assets/images/4.jpg"
                  alt=" "
                  className="img-responsive"
                />
              </div>
              <div className="col-md-6 w3ls_service_grids1_right">
                <ul>
                  <li>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    et voluptates repudiandae sint et molestiae
                  </li>
                  <li>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    rerum necessitatibus saepe eveniet ut
                  </li>
                  <li>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    placeat facere possimus, omnis voluptas
                  </li>
                  <li>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    Et harum quidem rerum facilis est et expedita
                  </li>
                  <li>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    similique sunt in culpa qui officia deserunt
                  </li>
                  <li>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    odio dignissimos ducimus qui blanditiis
                  </li>
                </ul>
                <a href="single.html">Shop Now</a>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="services-bottom">
        <div className="container">
          <div className="col-md-3 about_counter_left">
            <i className="glyphicon glyphicon-user" aria-hidden="true"></i>
            <p className="counter">89,147</p>
            <h3>Followers</h3>
          </div>
          <div className="col-md-3 about_counter_left">
            <i
              className="glyphicon glyphicon-piggy-bank"
              aria-hidden="true"
            ></i>
            <p className="counter">54,598</p>
            <h3>Savings</h3>
          </div>
          <div className="col-md-3 about_counter_left">
            <i className="glyphicon glyphicon-export" aria-hidden="true"></i>
            <p className="counter">83,983</p>
            <h3>Support</h3>
          </div>
          <div className="col-md-3 about_counter_left">
            <i className="glyphicon glyphicon-bullhorn" aria-hidden="true"></i>
            <p className="counter">45,894</p>
            <h3>Popularity</h3>
          </div>
          <div className="clearfix"> </div>
          {/* <!-- Stats-Number-Scroller-Animation-JavaScript --> */}
          <script src="../Assets/js/waypoints.min.js"></script>
          <script src="../Assets/js/counterup.min.js"></script>
          {/* <script>
					jQuery(document).ready(function( $ ) {
						$('.counter').counterUp({
							delay: 10,
							time: 1000
						});
					});
				</script> */}
          {/* <!-- //Stats-Number-Scroller-Animation-JavaScript --> */}
        </div>
      </div>
      <div className="newsletter-top-serv-btm">
        <div className="container">
          <div className="col-md-4 wthree_news_top_serv_btm_grid">
            <div className="wthree_news_top_serv_btm_grid_icon">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <h3>Nam libero tempore</h3>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et.
            </p>
          </div>
          <div className="col-md-4 wthree_news_top_serv_btm_grid">
            <div className="wthree_news_top_serv_btm_grid_icon">
              <i className="fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <h3>officiis debitis aut rerum</h3>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et.
            </p>
          </div>
          <div className="col-md-4 wthree_news_top_serv_btm_grid">
            <div className="wthree_news_top_serv_btm_grid_icon">
              <i className="fa fa-truck" aria-hidden="true"></i>
            </div>
            <h3>eveniet ut et voluptates</h3>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et.
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}

export default Services;
