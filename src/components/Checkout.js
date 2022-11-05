import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Checkout.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Checkout({ total, cartItemsFromApi }) {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  });
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    //DELIVERY ADDRESS API
    const setDeliveryAddress = async () => {
      let config = {
        method: "get",
        url: `https://uat.ordering-farmshop.ekbana.net/api/v4/profile/show`,
        data: {
          title: data.cityTown,
          latitude: data.latitude,
          longitude: data.longitude,
          customer: data.fullName,
          contact: data.mobileNo,
          isDefault: true,
        },
        headers: {
          "Api-key": process.env.REACT_APP_API_KEY,
          "Warehouse-Id": 1,
          Authorization: `Bearer ${accessToken}`,
        },
      };
      let res = await axios(config);

      console.log(res, "Address");
      if (res.status === 200) {
        toast.success("Ordered Confirmed.");
      }
    };

    setDeliveryAddress();

    resetField("fullName");
    resetField("latitude");
    resetField("mobileNo");
    resetField("longitude");
    resetField("addressType");
    resetField("cityTown");
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
            <li>Checkout</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <div class="w3l_banner_nav_right">
          {/* <!-- about --> */}
          {/* <div class="privacy about">
            <h3>
              Chec<span>kout</span>
            </h3>
            <div class="checkout-right">
              <h4>
                Your shopping Basket contains:
                <span>{cart.length} Products</span>
              </h4>
            </div>
          </div> */}

          <div class="checkout-left">
            <div class="col-md-4 checkout-left-basket">
              <h4>Basket List</h4>
              <ul>
                {cartItemsFromApi.map((item, index) => {
                  return (
                    <>
                      <li>
                        {`${index + 1}. `}
                        {item.product.title} <i>-</i>
                        {item.quantity}
                        <span>{item.price * item.quantity}</span>
                      </li>
                    </>
                  );
                })}

                <li>
                  <strong>
                    <b>
                      Total <i>-</i> <span>$ {total}</span>
                    </b>
                  </strong>
                </li>
              </ul>
            </div>
            <div class="col-md-8 address_form_agile">
              <h4>Add a new Details</h4>
              <form
                action="payment.html"
                method="post"
                class="creditly-card-form agileinfo_form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <section class="creditly-wrapper wthree, w3_agileits_wrapper">
                  <div class="information-wrapper">
                    <div class="first-row form-group">
                      <div class="controls">
                        <label class="control-label">Full name: </label>
                        <input
                          {...register("fullName", {
                            required: "Full Name is required",
                          })}
                          placeholder="Full Name"
                          type="text"
                        />
                        {errors.fullName && (
                          <span>*Full Name is required.</span>
                        )}
                      </div>
                      <div class="w3_agileits_card_number_grids">
                        <div class="w3_agileits_card_number_grid_left">
                          <div class="controls">
                            <label class="control-label">Mobile number:</label>
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
                          </div>
                        </div>
                        <div class="w3_agileits_card_number_grid_right">
                          <div class="controls">
                            <label class="control-label">Latitude </label>
                            <input
                              {...register("latitude", {})}
                              placeholder="Latitude"
                              type="text"
                            />
                            <label class="control-label">Longitude </label>
                            <input
                              {...register("longitude", {})}
                              placeholder="Longitude"
                              type="text"
                            />
                          </div>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <div class="controls">
                        <label class="control-label">Town/City: </label>
                        <input
                          {...register("cityTown", {
                            required: "Town/City is required",
                          })}
                          placeholder="Town/City"
                          type="text"
                        />
                        {errors.cityTown && (
                          <span>*Town / City is required.</span>
                        )}
                      </div>
                    </div>
                    <button class="submit check_out">
                      Deliver to this Address
                    </button>
                  </div>
                </section>
              </form>
            </div>

            <div class="clearfix"></div>
          </div>
        </div>
        {/* <!-- //about --> */}
      </div>
      <div class="clearfix"></div>
    </>
  );
}

export default Checkout;
