import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import About from "../components/Static Pages/About";
import Events from "../components/Static Pages/Events";
import Mail from "../../src/components/user/Mail";
import Services from "../components/Static Pages/Services";
import Main from "../../src/components/mainPage/Main";
import Error from "../components/Static Pages/Error";
import AddToCart from "../components/AddToCart";
import Checkout from "../components/user/Checkout";
import ItemsFromApi from "../components/ItemsFromApi";
import LogIn from "../components/user/LogIn";
import Signup from "../components/user/SignUp";
import Products from "../components/Products";
import Search from "../Search";
import Single from "../components/Single";
import UserPage from "../components/user/UserPage";
import ResetPassword from "../components/user/ResetPassword";
import ResetPasswordEmail from "../components/user/ResetPasswordEmail";
import Faq from "../components/Static Pages/Faq";
import PrivacyPolicy from "../components/Static Pages/PrivacyPolicy";
import { axiosData } from "../components/api/axios";

const Router = () => {
  const [singleItemProduct, setsingleItemProduct] = useState([]);
  const [cartItemsFromApi, setCartItemsFromAPi] = useState([]);
  const [boolean, setBoolean] = useState(false);

  const navigate = useNavigate();
  //GETTING ACCESS TOKEN
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  });
  //DELETING ITEMS FROM CART API
  const deleteCartDataFromApi = async (data) => {
    try {
      const res = await axiosData.delete(`api/v4/cart-product/${data.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setBoolean(!boolean);
  };

  //GET CART DATA
  const getCartDataFromApi = async () => {
    try {
      const response = await axiosData.get("api/v4/cart", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      //console.log("cart", response);
      setCartItemsFromAPi(response.data.data.cartProducts);
    } catch (error) {
      // console.log(error);
    }
  };

  //API CALL TO GET PRODUCT LIST
  const [items, setItems] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const getDataList = async () => {
    try {
      let res = await axiosData.get("/api/v4/product?allProduct=1");
      //console.log(res, "Response");
      setItems(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  //POST SINGLE ITEM TO API
  const postSingleItemToCart = async (data) => {
    //console.log(data);
    const itemToAdd = {
      productId: data.id,
      priceId: data.unitPrice[0].id,
      quantity: data.quantity,
      note: "testing",
    };
    try {
      const res = await axiosData.post("api/v4/cart-product", itemToAdd, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log(res);
      toast.success("Successfully Added to the cart");
    } catch (err) {
      console.log(err);
    }
    setBoolean(!boolean);
  };

  //UPDATING THE ORDERED QUANTITY
  const patchItemToCartApi = async (data, quanPlusMinus) => {
    let itemToAdd = {
      quantity: data.quantity + quanPlusMinus,
      note: "hello",
    };
    try {
      const res = await axiosData.patch(
        `api/v4/cart-product/${data.id}`,
        itemToAdd,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setBoolean(!boolean);
  };

  //SINGLE ITEM: ONCLICKING ON THE PRODUCT IMAGE
  const singleItem = (singleItem) => {
    console.log("singleItem", singleItem);
    setsingleItemProduct(singleItem);
    navigate("/single");
  };

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
        const dataToAddToApi = { ...data, quantity: 1 };
        console.log(dataToAddToApi);

        postSingleItemToCart(dataToAddToApi);
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    getCartDataFromApi();
  }, [accessToken, boolean]);

  useEffect(() => {
    getDataList();
  }, [accessToken]);

  const minusHandler = (data, quanPlusMinus) => {
    //console.log(data);
    cartItemsFromApi.map((item) => {
      if (item.id === data.id && item.quantity !== 1) {
        patchItemToCartApi(item, quanPlusMinus);
        return item;
      } else {
        return item;
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
      } else {
        return item;
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

        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
