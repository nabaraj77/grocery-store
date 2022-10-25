import React from "react";
import { Link } from "react-router-dom";
import Navbarleft from "./mainPage/Navbarleft";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./Mail.css";

const Signup = () => {
  const url = "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup";
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: url,
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        mobile_number: data.mobile_number,
      },
    }).then((response) => {
      console.log(response.data);
    });

    resetField("first_name");
    resetField("last_name");
    resetField("email");
    resetField("mobile_number");
    resetField("password");
  };
  return (
    <>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div className="banner">
        <Navbarleft />
        <div className="w3l_banner_nav_right">
          {/* <!-- login --> */}
          <div className="w3_login">
            <h3>Sign Up</h3>
            <div className="w3_login_module">
              <div className="module form-module">
                <div className="form">
                  <h2>Sign Up to your account</h2>
                </div>
                <div>
                  <h2>Create an account</h2>
                  <form
                    action="#"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      type="text"
                      {...register("first_name", {
                        required: "First Name is required",
                      })}
                      placeholder="First Name"
                    />
                    {errors.first_name && <span>*First Name is required.</span>}
                    <input
                      type="text"
                      {...register("last_name", {
                        required: "Last Name is required",
                      })}
                      placeholder="Last Name"
                    />
                    {errors.last_name && <span>*Last Name is required.</span>}
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      placeholder="Password"
                    />
                    {errors.password && <span>*Password is required.</span>}
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      placeholder="Email Address"
                    />
                    {errors.email && <span>*Email is required.</span>}
                    <input
                      type="text"
                      {...register("mobile_number", {
                        required: "Mobile No is required",
                      })}
                      placeholder="Mobile Number"
                      s
                    />
                    {errors.mobile_number && (
                      <span>*Phone No is required.</span>
                    )}
                    <input type="submit" value="Register" />
                  </form>
                </div>
              </div>
            </div>
            {/* <script>
				$('.toggle').click(function(){
				  // Switches the Icon
				  $(this).children('i').toggleclassName('fa-pencil');
				  // Switches the forms  
				  $('.form').animate({
					height: "toggle",
					'padding-top': 'toggle',
					'padding-bottom': 'toggle',
					opacity: "toggle"
				  }, "slow");
				});
			</script> */}
          </div>
          {/* <!-- //login --> */}
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- //banner -->
<!-- newsletter-top-serv-btm --> */}
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
      {/* <!-- //newsletter-top-serv-btm --> */}
      {/* <Footer/> */}
    </>
  );
};

export default Signup;
