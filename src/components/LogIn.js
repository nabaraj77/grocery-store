import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Mail.css";
import axios from "axios";
import toast from "react-hot-toast";

const LogIn = () => {
  const navigate = useNavigate();
  const directToSignUpPage = () => {
    navigate("/signUp");
  };
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    const postLogin = async () => {
      try {
        const response = await axios({
          method: "post",
          url: "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login",
          data: {
            username: data.username,
            password: data.password,
            client_id: 2,
            client_secret: "2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey",
            grant_type: "password",
          },
        });

        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data.access_token);
          toast.success("Login Successful");
          navigate("/");
        }
      } catch (err) {
        console.log(err.response.data.errors[0].message);
        toast.error(`Error: ${err.response.data.errors[0].message}`);
        // ,
        // {
        //   // style: {
        //   //   border: "1px solid #713200",
        //   //   padding: "16px",
        //   //   color: "Red",
        //   // },
        //   // iconTheme: {
        //   //   primary: "#713200",
        //   //   secondary: "#FFFAEE",
        //   // },
        // });
      }
    };
    postLogin();
    //console.log(data);
    // axios({
    //   method: "post",
    //   url: "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login",
    //   data: {
    //     username: data.username,
    //     password: data.password,
    //     client_id: 2,
    //     client_secret: "2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey",
    //     grant_type: "password",
    //   },
    // }).then((response) => {
    //   localStorage.setItem("accessToken", response.data.access_token);
    //   setResult(response.status);
    //   if (response.status === 200) {
    //     toast.success("Login Success.");
    //     navigate("/");
    //   }
    // });

    resetField("username");
    resetField("email");
    resetField("phoneNo");
    resetField("password");
  };
  // if (result === 200) {
  //   navigate("/");
  // }
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
            <li>Sign In</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="w3l_banner_nav_right">
          {/* <!-- login --> */}
          <div className="w3_login">
            <h3>Log In</h3>

            <div className="signUpBtn">
              <button onClick={directToSignUpPage}>
                Don't Have an Account? Click here...
              </button>
            </div>

            <div className="w3_login_module">
              <div className="module form-module">
                <div className="form">
                  <h2>Log In to your account</h2>
                </div>
                <div>
                  <form
                    action="#"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      type="text"
                      {...register("username", {
                        required: "Username is required",
                      })}
                      placeholder="Email"
                    />
                    {errors.username && <span>*Email is required.</span>}
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      placeholder="Password"
                    />
                    {errors.password && <span>*Password is required.</span>}

                    <input type="submit" value="Sign In" />
                  </form>
                  <div class="cta">
                    <Link to="/forgetPassword">Forgot your password?</Link>
                  </div>
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
    </>
  );
};

export default LogIn;
