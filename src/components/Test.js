// const postSingleItemToCart = async (data) => {
//   let config = {
//     method: "post",
//     url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product`,
//     data: {
//       productId: data.id,
//       priceId: data.unitPrice.newPrice,
//       quantity: data.quantityOrdered,
//       note: "testing",
//     },

//     headers: {
//       "Api-key": process.env.REACT_APP_API_KEY,
//       "Warehouse-Id": 1,
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };
//   let res = await axios(config);
//   console.log("SingleItem", res);
// };

//PATCH OR UPDATE
// const updateItemToCartApi = async (data) => {
//   let config = {
//     method: "patch",
//     url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${data.id}`,
//     data: {
//       quantity: 2,
//       note: "hello",
//     },

//     headers: {
//       "Api-key": process.env.REACT_APP_API_KEY,
//       "Warehouse-Id": 1,
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };
//   let res = await axios(config);
//   console.log("Data Patched", res);
// };

const patchItemToCartApi = async (data) => {
  let config = {
    method: "patch",
    url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${data.id}`,
    data: {
      quantity: 2,
      note: "hello",
    },

    headers: {
      "Api-key": process.env.REACT_APP_API_KEY,
      "Warehouse-Id": 1,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  let res = await axios(config);
  console.log("Data Patched", res);
};
