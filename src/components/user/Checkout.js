import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Checkout.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosData } from "../api/axios";
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
    resetField("title");
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
      <div className="banner">
        <div className="w3l_banner_nav_right">
          <div className="checkout-left">
            <div className="col-md-4 checkout-left-basket">
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
            <div className="col-md-8 address_form_agile">
              <h4>Add a new Details</h4>
              <form
                action="payment.html"
                method="post"
                className="creditly-card-form agileinfo_form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                  <div className="information-wrapper">
                    <div className="first-row form-group">
                      <div className="w3_agileits_card_number_grids">
                        <div className="w3_agileits_card_number_grid_right">
                          <div className="controls">
                            <label className="control-label">Latitude </label>
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
                            <label className="control-label">Longitude </label>
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
                        <div className="clear"></div>
                      </div>
                      <div className="controls">
                        <label className="control-label">Town/City: </label>
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
                    <button className="submit check_out">
                      Deliver to this Address
                    </button>
                  </div>
                </section>
              </form>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
        {/* <!-- //about --> */}
      </div>
      <div className="clearfix"></div>
    </>
  );
}

export default Checkout;
