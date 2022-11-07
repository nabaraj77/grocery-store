import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { axiosData } from "../api/axios";

const ResetPasswordEmail = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = (data) => {
    // console.log(data);
    const resetCodeApi = async () => {
      const emailToSend = {
        email: data.email,
      };
      try {
        await axiosData.post("api/v4/auth/forgot-password", emailToSend);
        toast.success("Code Sent Successfully to registered Email.");
        navigate("/resetPassword");
      } catch (err) {
        toast.error(err?.response?.data?.errors[0]?.message);
        // console.log(err);
      }
    };
    resetCodeApi();
  };
  return (
    <div>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Reset Password</li>
          </ul>
        </div>
      </div>

      <div className="banner">
        <div className="w3l_banner_nav_right">
          <div className="w3_login">
            <h3>Reset Password</h3>
            <div className="w3_login_module">
              <div className="module form-module">
                <div>
                  <h2 className="text-center mt-2">Reset Password</h2>
                  <form
                    onSubmit={handleSubmit(handleRegistration)}
                    action="#"
                    method="post"
                  >
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      placeholder="Email Address"
                    />
                    {errors.email && <span>*Email is required.</span>}

                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default ResetPasswordEmail;
