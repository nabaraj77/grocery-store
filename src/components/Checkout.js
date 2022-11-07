import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Checkout.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosData } from "./api/axios";

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
    console.log(data);
    //DELIVERY ADDRESS API
    const setDeliveryAddress = async () => {
      try {
        const res = await axiosData.post("api/v4/delivery-address", data, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        toast.success("Ordered Confirmed.");
        console.log(res);
      } catch (error) {
        // console.log(error);
        toast.error(error?.response?.data?.errors[0]?.message);
      }
    };

    setDeliveryAddress();
    resetField("latitude");
    resetField("longitude");
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
          <div class="checkout-left">
            <div class="col-md-4 checkout-left-basket">
              <h4>Basket List</h4>
              <ul>
                {cartItemsFromApi.map((item, index) => {
                  return (
                    <div key={index}>
                      <li>
                        {`${index + 1}. `}
                        {item.product.title} <i>-</i>
                        {item.quantity}
                        <span>{item.price * item.quantity}</span>
                      </li>
                    </div>
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
                      <div class="w3_agileits_card_number_grids">
                        <div class="w3_agileits_card_number_grid_right">
                          <div class="controls">
                            <label class="control-label">Latitude </label>
                            <input
                              {...register("latitude", {
                                required: "Latitude is required",
                              })}
                              placeholder="Latitude"
                              type="text"
                            />
                            {errors.latitude && (
                              <span>*Latitude is required.</span>
                            )}
                            <br />
                            <label class="control-label">Longitude </label>
                            <input
                              {...register("longitude", {
                                required: "Longitude is required",
                              })}
                              placeholder="Longitude"
                              type="text"
                            />
                            {errors.longitude && (
                              <span>*Longitude is required.</span>
                            )}
                          </div>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <div class="controls">
                        <label class="control-label">Town/City: </label>
                        <input
                          {...register("title", {
                            required: "Town/City is required",
                          })}
                          placeholder="Town/City"
                          type="text"
                        />
                        {errors.title && <span>*Town / City is required.</span>}
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
