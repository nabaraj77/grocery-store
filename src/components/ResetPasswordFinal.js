import React from "react";
import { Link } from "react-router-dom";
import Navbarleft from "./mainPage/Navbarleft";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Mail.css";

const ResetPasswordFinal = () => {
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
      url: "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/forgot-password",
      data: {
        email: data.email,
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

    resetField("password");
    resetField("confirmPassword");
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
            <li>Forget Password</li>
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
                  <h2>Password Reset</h2>
                </div>
                <div>
                  <form
                    action="#"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      type="text"
                      {...register("code", {
                        required: "Enter Code",
                      })}
                      placeholder="Enter Code"
                    />
                    {errors.code && <span>*Code is required.</span>}

                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required.",
                      })}
                      placeholder="Password"
                    />
                    {errors.password && <span>*Email is required.</span>}

                    <input
                      type="password"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required.",
                      })}
                      placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && (
                      <span>*Confirm Password is required.</span>
                    )}
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

export default ResetPasswordFinal;
