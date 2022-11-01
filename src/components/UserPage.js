import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const UserPage = ({ accessToken }) => {
  const [userProfile, setUserProfile] = useState([]);
  console.log(userProfile);

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

  return (
    <div>
      <div className="userInfo">
        <h6>{userProfile.email}</h6>
        <h6>{userProfile.firstName}</h6>
        <h6>{userProfile.lastName}</h6>
        <h6>{userProfile.mobileNumber}</h6>
      </div>
    </div>
  );
};

export default UserPage;
