import React from "react";
const axios = require("axios");
const url =
  "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1";

const Products = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
  return <></>;
};

export default Products;
