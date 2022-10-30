import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Mail() {
  const [result, setResult] = useState(0);
  const url = "https://uat.ordering-farmshop.ekbana.net/api/v4/contact-us";
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
      url: url,
      data: {
        message: data.message,
        subject: data.subject,
        email: data.email,
        name: data.fullName,
        contact: data.mobileNo,
      },
      headers: {
        "Content-Type": "application/json",
        "Warehouse-Id": 1,
        "Api-Key": process.env.REACT_APP_API_KEY,
      },
    }).then((response) => {
      console.log(response);
      setResult(response.status);
    });

    resetField("fullName");
    resetField("email");
    resetField("mobileNo");
    resetField("subject");
    resetField("message");
  };
  return (
    <>
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Mail Us</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        {result === 200 && (
          <div class="alert alert-success alert-dismissible" role="alert">
            <strong>Query Sent Successfully.</strong>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <div class="w3l_banner_nav_right">
          {/* <!-- mail --> */}
          <div class="mail">
            <h3>Mail Us</h3>
            <div class="agileinfo_mail_grids">
              <div class="col-md-4 agileinfo_mail_grid_left">
                <ul>
                  <li>
                    <i class="fa fa-home" aria-hidden="true"></i>
                  </li>
                  <li>
                    address<span>Kathmandu, Nepal.</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </li>
                  <li>
                    email
                    <span>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </li>
                  <li>
                    call to us<span>(+977) 9840000000</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-8 agileinfo_mail_grid_right">
                <form
                  action="#"
                  method="post"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="col-md-6 wthree_contact_left_grid">
                    {/* <input
                      type="text"
                      name="Name"
                      value="Name*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Name*';}"
                      required=""
                    /> */}
                    <input
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      placeholder="Full Name"
                      type="text"
                    />
                    {errors.fullName && <span>*Full Name is required.</span>}
                    <input
                      className="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /[^@\s]+@[^@\s]+\.[^@\s]{3}/,
                          message: "Enter a valid Email.",
                        },
                      })}
                      placeholder="Email"
                      type="email"
                      defaultValue=""
                    />
                    {errors.email?.type === "required" && (
                      <span>*Email is required.</span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span>*Enter a valid email.</span>
                    )}
                  </div>
                  <div class="col-md-6 wthree_contact_left_grid">
                    <input
                      {...register("mobileNo", {
                        required: "Mobile Number is required",
                        maxLength: {
                          value: 10,
                          message:
                            "Mobile number must not be greater than 10 digits.",
                        },
                        minLength: {
                          value: 10,
                          message:
                            "Mobile Number must not be less than 10 digits",
                        },
                      })}
                      placeholder="Mobile Number"
                      defaultValue=""
                      type="text"
                    />
                    {errors.mobileNo?.type === "required" && (
                      <span>*Mobile No is required.</span>
                    )}

                    {errors.mobileNo?.type === "minLength" && (
                      <span>*Mobile No less than 10 digits.</span>
                    )}
                    {errors.mobileNo?.type === "maxLength" && (
                      <span>*Mobile No greater than 10 digits. </span>
                    )}
                    <input
                      className="subject"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      type="text"
                      placeholder="Subject"
                    />

                    {errors.subject && <span>*Subject is required.</span>}
                  </div>
                  <div class="clearfix"> </div>
                  {errors.message && (
                    <span>
                      *Message Length Should be greater than 20 characters.
                    </span>
                  )}
                  <textarea
                    {...register("message", {
                      required: "Message is required.",
                      minLength: {
                        value: 10,
                        message:
                          "Message Length Should be greater than 20 characters.",
                      },
                    })}
                    placeholder="Message"
                    defaultValue=""
                  />

                  <input type="submit" value="Submit" />
                  <input type="reset" value="Clear" />
                </form>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          {/* <!-- //mail --> */}
        </div>
        <div class="clearfix"></div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.036667732067!2d85.32395955!3d27.69383745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b163529399%3A0x522e7f4734ac0fb9!2sNorvic%20International%20Hospital!5e0!3m2!1sen!2snp!4v1666173307148!5m2!1sen!2snp"></iframe>
        </div>
      </div>
    </>
  );
}

export default Mail;
