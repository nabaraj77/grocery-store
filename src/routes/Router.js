import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import About from "../components/Static Pages/About";
import Events from "../components/Static Pages/Events";
import Mail from "../../src/components/Mail";
import Services from "../components/Static Pages/Services";
import Main from "../../src/components/mainPage/Main";
import Error from "../components/Static Pages/Error";
import AddToCart from "../components/AddToCart";
import Checkout from "../components/Checkout";
import ItemsFromApi from "../components/ItemsFromApi";
import LogIn from "../components/LogIn";
import Signup from "../components/SignUp";
import Products from "../components/Products";
import Search from "../Search";
import Single from "../components/Single";
import axios from "axios";
import UserPage from "../components/UserPage";
import ResetPassword from "../components/ResetPassword";
import ResetPasswordEmail from "../components/ResetPasswordEmail";
import Faq from "../components/Static Pages/Faq";
import PrivacyPolicy from "../components/Static Pages/PrivacyPolicy";

//GET CARTITEMS FROM LOCAL STORAGE
const getCartItemsFromLocalStorage = () => {
  const list = localStorage.getItem("cartItems");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Router = () => {
  const [cart, setCart] = useState(getCartItemsFromLocalStorage());
  const [singleItemProduct, setsingleItemProduct] = useState([]);
  const [addToCartStatus, setAddToCartStatus] = useState();
  const [cartItemsFromApi, setCartItemsFromAPi] = useState([]);

  const navigate = useNavigate();

  //DELETING ITEMS FROM CART API
  const deleteCartDataFromApi = async (data) => {
    let config = {
      method: "delete",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${data.id}`,

      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };
    let res = await axios(config);
    console.log(res, "Delete");
  };

  //GET CART DATA
  const getCartDataFromApi = async () => {
    let config = {
      method: "get",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart`,

      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };
    let res = await axios(config);
    //console.log(res, "CARTDATA");
    setCartItemsFromAPi(res.data.data.cartProducts);
  };

  //API CALL TO GET PRODUCT LIST
  const [items, setItems] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const getDataList = () => {
    axios({
      method: "get",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1`,
      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
      },
    })
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  //POST SINGLE ITEM TO API
  const postSingleItemToCart = async (data) => {
    let config = {
      method: "post",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product`,
      data: {
        productId: data.id,
        priceId: data.unitPrice[0].id,
        quantity: data.quantity,
        note: "testing",
      },

      headers: {
        "Api-key": process.env.REACT_APP_API_KEY,
        "Warehouse-Id": 1,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };
    let res = await axios(config);
    console.log("SingleItem", res);
    setAddToCartStatus(res.status);
  };

  //UPDATING THE ORDERED QUANTITY
  const patchItemToCartApi = async (data, quanPlusMinus) => {
    let config = {
      method: "patch",
      url: `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${data.id}`,
      data: {
        quantity: data.quantity + quanPlusMinus,
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

  //SINGLE ITEM: ONCLICKING ON THE PRODUCT IMAGE
  const singleItem = (singleItem) => {
    console.log("singleItem", singleItem);
    setsingleItemProduct(singleItem);
    navigate("/single");
  };

  //GETTING ACCESS TOKEN
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  });

  //ADDING ITEMS ON CART
  const addToCart = (data) => {
    //console.log(data);
    //console.log(cartItemsFromApi);
    let exists = cartItemsFromApi.find((item) => {
      return item.product.id === data.id;
    });
    if (accessToken) {
      if (exists) {
        toast.error("Item already exists in the cart.");
      } else {
        toast.success("Successfully added to the cart.");
        const dataToAddToApi = { ...data, quantity: 1 };
        console.log(dataToAddToApi);
        setCart([...cart, dataToAddToApi]);
        postSingleItemToCart(dataToAddToApi);

        getCartDataFromApi();
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    getCartDataFromApi();
  }, [accessToken, cartItemsFromApi]);

  //ADDING CART DATA TO LOCAL STORAGE
  useEffect(() => {
    // localStorage.setItem("cartItems", JSON.stringify(cart));
    getDataList();
  }, []);

  // useEffect(() => {
  //   getCartItemsFromLocalStorage();
  // }, []);
  const minusHandler = (data, quanPlusMinus) => {
    //console.log(data);
    cartItemsFromApi.map((item) => {
      if (item.id === data.id && item.quantity !== 1) {
        patchItemToCartApi(item, quanPlusMinus);
        // return { ...item, quantityOrdered: item.quantityOrdered - 1 };
        // } else if (item.id === data.id && item.quantityOrdered === 1) {
        //   return { ...item, quantityOrdered: 1 };
        // } else {
        //   return item;
        // }
      }
    });
  };

  //PLUS HANDLER
  const plusHandler = (data, quanPlusMinus) => {
    console.log(data);
    cartItemsFromApi.map((item) => {
      if (data.id === item.id) {
        console.log("Found");
        patchItemToCartApi(item, quanPlusMinus);
        return item;
        //API CALLING TO UPDATE QUANTITY//PATCH
      }
    });
    // setCart(updatedCart);
    //console.log(updatedCart);
  };

  //DELETING ITEM
  const deleteItem = (data) => {
    deleteCartDataFromApi(data);
  };
  // CALCULATING TOTAL
  const total = cartItemsFromApi.reduce((acc, val) => {
    acc += val.quantity * val.product.unitPrice[0].sellingPrice;
    return acc;
  }, 0);
  // console.log(total, "Tot");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main addToCart={addToCart} items={items} singleItem={singleItem} />
          }
        />
        <Route path="events" element={<Events />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="resetPasswordEmail" element={<ResetPasswordEmail />} />
        <Route path="faq" element={<Faq />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />

        <Route
          path="products"
          element={
            <Products
              items={items}
              addToCart={addToCart}
              singleItem={singleItem}
            />
          }
        />
        <Route path="services" element={<Services />} />
        <Route path="mailTo" element={<Mail />} />
        <Route
          path="user"
          element={
            <UserPage
              accessToken={accessToken}
              cartItemsFromApi={cartItemsFromApi}
            />
          }
        />

        <Route
          path="search"
          element={
            <Search
              addToCart={addToCart}
              items={items}
              singleItem={singleItem}
              accessToken={accessToken}
            />
          }
        />
        <Route
          path="/:categorySlug"
          element={
            <ItemsFromApi
              addToCart={addToCart}
              singleItem={singleItem}
              items={items}
            />
          }
        />
        <Route path="signUp" element={<Signup />} />
        <Route path="login" element={<LogIn />} />
        <Route
          path="single"
          element={
            <Single
              singleItemProduct={singleItemProduct}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="checkOut"
          element={
            <Checkout
              plusHandler={plusHandler}
              minusHandler={minusHandler}
              deleteItem={deleteItem}
              cartItemsFromApi={cartItemsFromApi}
              total={total}
            />
          }
        />
        <Route
          path="cart"
          element={
            <AddToCart
              cart={cart}
              plusHandler={plusHandler}
              minusHandler={minusHandler}
              deleteItem={deleteItem}
              singleItem={singleItem}
              accessToken={accessToken}
              cartItemsFromApi={cartItemsFromApi}
              total={total}
            />
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
