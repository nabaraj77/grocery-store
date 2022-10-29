import React from "react";
import { useForm } from "react-hook-form";
import Navbarleft from "./mainPage/Navbarleft";
import "./Checkout.css";
import axios from "axios";

function Checkout({ cart, minusHandler, plusHandler, deleteItem, total }) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    const url =
      "https://uat.ordering-farmshop.ekbana.net/api/v4/delivery-address";
    console.log(data);
    axios({
      method: "post",
      url: url,
      data: {
        title: data.addressType,
        latitude: data.latitude,
        longitude: data.longitude,
        customer: data.fullName,
        contact: data.mobileNo,
        isDefault: true,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRlODBmY2ZiOGZiMjdhMWEwNDE1ODQzNmVlZjcwNzc1YTIyMmNmMzAwODkwNjkxODhkZGI2Nzk1MGYwMDczNGExMmYzNTdjYTAyNWE5ZGZhIn0.eyJhdWQiOiIyIiwianRpIjoiNGU4MGZjZmI4ZmIyN2ExYTA0MTU4NDM2ZWVmNzA3NzVhMjIyY2YzMDA4OTA2OTE4OGRkYjY3OTUwZjAwNzM0YTEyZjM1N2NhMDI1YTlkZmEiLCJpYXQiOjE2NjY5Nzg4OTIsIm5iZiI6MTY2Njk3ODg5MiwiZXhwIjoxNjc0OTI3NjkyLCJzdWIiOiI4MjMiLCJzY29wZXMiOltdfQ.BFNR_VSPokHzh7tOHvQ_1MKL3eMa24cuHHIALwQt6q6T4P7VUwOuAj3w2B7yQPSXyaNfBtsQm6WIlxUJ5SUY9ZKmwp-E7GnrHWwL25Vacbl03oZR0_q7mc4SJKflXTahbTtXlnhLMadn_3qyD7JoiMPatFmNJtXnLC5YWG5gAOgKCrHeXJ3Vg9KES_d0BQJktbR2sXHKKXhwkKySiIhabr-lNoHeAbkMsp1JFQffjzs7XCDExNQJX7crIimACTqLkn9bYh4fvplh-FY-8ndJfkgaBGH4YB7aMmQwTMMUsjcmCqnqtZDRTiWpPfDY3ozy9C8PZRyxXlku7RLT-aGliWU1uk2X53cyU3BGqeSBs0N4Dr1d4R3Ru8H8iTiyGhQEgaNfQFvCDrXwyIUo1nVSqStbWMF90kv0eK3L3mBY8mpVeSWQ1Al7b--zGr5OSt5zjWVdmirLrJjq_TTlAMu4r79VwdmQwul41HGdKAsrP9jxcCncgCpqpkdrLoYtSTjciEjb0b4b2f2GdIbsgaJMpRNcTHCPVVEob-Q3nmi5spMUAdp39ufDB5o4Ut-WtpSGt_qlNOyYtsmhPQPclfLEWvpHAehYSo4FdAjXJQn_6am9NzpLicdSyybJasuXL9BLoHUqi4_rO9zc0ep8Zoxa66tcQqvPvTPjEaN_CtScYBY",
        "Api-Key": process.env.REACT_APP_API_KEY,
      },
    }).then((response) => {
      console.log(response);
    });

    resetField("fullName");
    resetField("latitude");
    resetField("mobileNo");
    resetField("longitude");
    resetField("addressType");
  };
  return (
    <>
      <div class="banner">
        <Navbarleft />
        <div class="w3l_banner_nav_right">
          {/* <!-- about --> */}
          <div class="privacy about">
            <h3>
              Chec<span>kout</span>
            </h3>
            <div class="checkout-right">
              <h4>
                Your shopping cart contains: <span>{cart.length} Products</span>
              </h4>
            </div>
            {cart.map((item, index) => {
              return (
                <>
                  <div className="cartItems" key={index}>
                    <h4>{index + 1}</h4>
                    <span className="itemName">{item.name}</span>
                    <img className="cartImage" src={item.image} alt="" />
                    <div className="quantityBtn">
                      <button
                        className="cartBtn"
                        onClick={() => minusHandler(item)}
                      >
                        -
                      </button>
                      <span className="cartQuantity">
                        {item.quantityOrdered}
                      </span>
                      <button
                        className="cartBtn"
                        onClick={() => plusHandler(item)}
                      >
                        +
                      </button>
                    </div>
                    <p className="price">
                      $ {item.newPrice * item.quantityOrdered}
                    </p>
                    <button onClick={() => deleteItem(item)}>
                      {/* <i class="fa-solid fa-trash-can delBtn"></i> */}
                      <i class="fa-solid fa-trash delBtn"></i>
                    </button>
                  </div>
                  <hr />
                </>
              );
            })}
            {cart.length > 0 && (
              <div className="totalAmount">
                <strong>Total: $ {total}</strong>
              </div>
            )}
          </div>

          <div class="checkout-left">
            <div class="col-md-4 checkout-left-basket">
              <h4>Basket List</h4>
              <ul>
                {cart.map((item) => {
                  return (
                    <>
                      <li>
                        {item.name} <i>-</i>
                        <span>$ {item.newPrice * item.quantityOrdered} </span>
                      </li>
                    </>
                  );
                })}

                <li>
                  Total Service Charges <i>-</i> <span>$15.00</span>
                </li>
                <li>
                  Total <i>-</i> <span>$ {total + 15}</span>
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
                      <div class="controls">
                        <label class="control-label">Address type: </label>
                        <select
                          class="form-control  addressType"
                          {...register("addressType")}
                        >
                          <option>Office</option>
                          <option>Home</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                    </div>
                    <button class="submit check_out">
                      Delivery to this Address
                    </button>
                  </div>
                </section>
              </form>
              <div class="checkout-right-basket">
                <a href="payment.html">
                  Make a Payment
                  <span
                    class="glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
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
