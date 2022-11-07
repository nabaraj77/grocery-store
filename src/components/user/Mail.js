import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { axiosData } from "../api/axios";

function Mail() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    //console.log(data);

    const contactUsApiCall = async () => {
      const datas = {
        message: data.message,
        subject: data.subject,
        email: data.email,
        name: data.fullName,
        contact: data.mobileNo,
      };
      try {
        await axiosData.post("/api/v4/contact-us", datas);
        toast.success("Query Sent Successfully.");
      } catch (err) {
        toast.error(`Error: ${err.response.data.errors[0].message}`);
      }
    };
    contactUsApiCall();

    resetField("fullName");
    resetField("email");
    resetField("mobileNo");
    resetField("subject");
    resetField("message");
  };
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
            <li>Mail Us</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        {/* {result === 200 && (
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
        )} */}
        <div className="w3l_banner_nav_right">
          {/* <!-- mail --> */}
          <div className="mail">
            <h3>Mail Us</h3>
            <div className="agileinfo_mail_grids">
              <div className="col-md-4 agileinfo_mail_grid_left">
                <ul>
                  <li>
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </li>
                  <li>
                    address<span>Kathmandu, Nepal.</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
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
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </li>
                  <li>
                    call to us<span>(+977) 9840000000</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 agileinfo_mail_grid_right">
                <form
                  action="#"
                  method="post"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="col-md-6 wthree_contact_left_grid">
                    <input
                      {...register("fullName", {
                        required: "Full Name is required",
                        pattern: {
                          value: /^[a-zA-Z ]*$/,
                        },
                        message: "Enter alphabets only.",
                      })}
                      placeholder="Full Name"
                      type="text"
                    />
                    {errors.fullName?.type === "required" && (
                      <span>*Full Name is required.</span>
                    )}
                    {errors.fullName?.type === "pattern" && (
                      <span>*Enter alphabets only.</span>
                    )}

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
                  <div className="col-md-6 wthree_contact_left_grid">
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
                  <div className="clearfix"> </div>
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
              <div className="clearfix"> </div>
            </div>
          </div>
          {/* <!-- //mail --> */}
        </div>
        <div className="clearfix"></div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.036667732067!2d85.32395955!3d27.69383745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b163529399%3A0x522e7f4734ac0fb9!2sNorvic%20International%20Hospital!5e0!3m2!1sen!2snp!4v1666173307148!5m2!1sen!2snp"></iframe>
        </div>
      </div>
    </>
  );
}

export default Mail;
