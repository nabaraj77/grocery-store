import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = (data) => {
    console.log(data);
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
                      type="text"
                      placeholder="Enter Reset Code"
                      {...register("Reset Code")}
                    />
                    <input
                      type="password"
                      placeholder="Enter New Password"
                      {...register("Password")}
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      {...register("Confirm Password")}
                    />

                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- //login --> */}
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default ResetPassword;
