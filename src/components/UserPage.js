import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./UserPage.css";

const UserPage = ({ accessToken, cartItemsFromApi }) => {
  const [userProfile, setUserProfile] = useState([]);

  //console.log(userProfile);
  //console.log(accessToken, "user");
  // console.log(cartItems, "UserPage");

  //USER INFO API
  const getUserInfo = async () => {
    let config = {
      method: "get",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/profile/show`,
      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
        Authorization: `Bearer ${accessToken}`,
      },
    };
    let res = await axios(config);
    console.log(res.data.data);
    setUserProfile(res.data.data);
  };
  useEffect(() => {
    getUserInfo();
  }, [accessToken]);
  const { firstName, lastName, email, mobileNumber, image } = userProfile;

  return (
    <div>
      <div className="wrapper">
        <div className="userInfo">
          <img className="userImage" src={image} alt="" />
          <div className="info">
            <h4>
              <i>{`${firstName} ${lastName}`}</i>
            </h4>
            <h4>
              <i>{mobileNumber}</i>
            </h4>

            <h4>
              <i>{email}</i>
            </h4>
          </div>
        </div>
        <div className="cartInfo">
          <h4>Cart has {cartItemsFromApi.length} items.</h4>
          {cartItemsFromApi.map((item, index) => {
            return (
              <div key={index}>
                <h5>
                  {index + 1}-- {item.product.title} --{item.quantity}
                </h5>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
