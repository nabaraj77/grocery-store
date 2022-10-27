import React from "react";
import { Link } from "react-router-dom";
import Navbarleft from "./mainPage/Navbarleft";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Mail.css";

const Forget = () => {
  //const url = "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup";
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "https://uat.ordering-farmshop.ekbana.net/reset-password",
      data: {
        code: data.code,
        password: data.password,
        confirm_password: data.confirmPassword,
        email: "nabaraj.dhl7@gmail.com",
      },
    }).then((response) => {
      console.log(response.data);
    });
    // axios({
    //   method: "post",
    //   url: url,
    //   data: {
    //     first_name: data.first_name,
    //     last_name: data.last_name,
    //     email: data.email,
    //     password: data.password,
    //     mobile_number: data.mobile_number,
    //   },
    // }).then((response) => {
    //   console.log(response.data);
    // });

    resetField("email");
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
            <li>Forgrt Password</li>
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
            <h3>Forgot Password</h3>
            <div className="w3_login_module">
              <div className="module form-module">
                <div className="form">
                  <h2>Sign Up to your account</h2>
                </div>
                <div>
                  <form
                    action="#"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      type="text"
                      {...register("email", {
                        required: "Email is required.",
                      })}
                      placeholder="Email"
                    />
                    {errors.email && <span>*Email is required.</span>}

                    <input type="submit" value="Register" />
                  </form>
                </div>
              </div>
            </div>
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

export default Forget;
