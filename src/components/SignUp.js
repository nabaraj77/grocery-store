import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Mail.css";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const url = "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup";
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const directToSignInPage = () => {
    navigate("/login");
  };
  const onSubmit = (data) => {
    console.log(data);
    const signUpApiCall = async () => {
      try {
        const response = await axios({
          method: "post",
          url: url,
          data: {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            mobile_number: data.mobile_number,
          },
        });
        // console.log(response);
        if (response.status === 201) {
          toast.success("Account Created Successfully");
          navigate("/login");
        }
      } catch (err) {
        console.log(err.response.data.errors[0].message);
        toast.error(`Error: ${err.response.data.errors[0].message}`);
      }
    };
    signUpApiCall();
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
    //   setResult(response.status);
    //   console.log(response);
    //   console.log(result);
    // });

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
        <div className="w3l_banner_nav_right">
          {/* {result === 201 && (
            <div class="alert alert-success alert-dismissible" role="alert">
              <strong>Account Created Successfully.</strong>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {navigate("/login")}
            </div>
          )} */}
          {/* <!-- login --> */}
          <div className="w3_login">
            <h3>Sign Up</h3>
            <div className="signIn">
              Back to Login?
              <button className="signInBtn" onClick={directToSignInPage}>
                Click here...
              </button>
            </div>
            <div className="w3_login_module">
              <div className="module form-module">
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
                        pattern: {
                          value: /^[a-zA-Z ]*$/,
                        },
                      })}
                      placeholder="First Name"
                    />
                    {errors.first_name?.type === "required" && (
                      <span>*First Name is required.</span>
                    )}
                    {errors.first_name?.type === "pattern" && (
                      <span>*Enter Alphabets only.</span>
                    )}
                    <input
                      type="text"
                      {...register("last_name", {
                        required: "Last Name is required",
                        pattern: {
                          value: /^[a-zA-Z ]*$/,
                        },
                      })}
                      placeholder="Last Name"
                    />
                    {errors.last_name?.type === "required" && (
                      <span>*Last Name is required.</span>
                    )}
                    {errors.last_name?.type === "pattern" && (
                      <span>*Enter Alphabets only.</span>
                    )}
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                        },
                      })}
                      placeholder="Password"
                    />
                    {errors.password?.type === "required" && (
                      <span>*Password is required.</span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span>*Enter a valid Password.</span>
                    )}
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      placeholder="Email Address"
                    />
                    {errors.email && <span>*Email is required.</span>}
                    <input
                      {...register("mobileNo", {
                        required: "Mobile Number is required",
                        pattern: {
                          value: /^\d+$/,
                          message: "Enter a valid Mobile Number.",
                        },
                        maxLength: {
                          value: 10,
                          message: "Enter a valid Mobile Number.",
                        },
                        minLength: {
                          value: 10,
                          message: "Enter a valid Mobile Number.",
                        },
                      })}
                      placeholder="Mobile Number"
                      defaultValue=""
                      type="text"
                    />
                    {errors.mobileNo?.type === "required" && (
                      <span>*Mobile No is required.</span>
                    )}
                    {errors.mobileNo?.type === "pattern" && (
                      <span>*Enter a valid Mobile Number. </span>
                    )}

                    {errors.mobileNo?.type === "minLength" && (
                      <span>*Enter a valid Mobile Number.</span>
                    )}
                    {errors.mobileNo?.type === "maxLength" && (
                      <span>*Enter a valid Mobile Number. </span>
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
    </>
  );
};
export default Signup;
