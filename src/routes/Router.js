import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import toast from "react-hot-toast";

import About from "../../src/components/About";
import Events from "../../src/components/Events";
import Mail from "../../src/components/Mail";
import Products from "../../src/components/Products";
import Services from "../../src/components/Services";
import Main from "../../src/components/mainPage/Main";
import Household from "../../src/components/Household";
import Vegetables from "../../src/components/Vegetables";
import Kitchen from "../../src/components/Kitchen";
import ShortCodes from "../../src/components/ShortCodes";
import Drinks from "../../src/components/Drinks";
import Pet from "../../src/components/Pet";
import Frozen from "../../src/components/Frozen";
import Bread from "../../src/components/Bread";
import Error from "../../src/components/Error";
import Signup from "../components/SignUp";
import LogIn from "../components/LogIn";
import Forget from "../components/Forget";
import ForgetPasswordFinal from "../components/ResetPasswordFinal";
import AddToCart from "../components/AddToCart";

//GET CARTITEMS FROM LOCAL STORAGE

const getCartItemsFromLocalStorage = () => {
  const list = localStorage.getItem("cartItems");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("cartItems"));
  }
};
getCartItemsFromLocalStorage();

const Router = () => {
  const [cart, setCart] = useState(getCartItemsFromLocalStorage());
  const addToCart = (data) => {
    //CHECKS THAT ITEMS EXISTS OR NOT
    //setCart([...cart, { ...data, quantityOrdered: 1 }]);
    let exists = cart.find((item) => {
      return item.name === data.name;
    });
    if (exists) {
      //console.log("Data already exists");
      toast.error("Item already exists in the cart.");
    } else {
      //console.log("Data can be added");
      toast.success("Successfully added to the cart.");
      setCart([...cart, { ...data, quantityOrdered: 1 }]);
    }
  };

  //ADDING CART DATA TO LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="events" element={<Events />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="mailTo" element={<Mail />} />
        <Route path="household" element={<Household />} />
        <Route
          path="vegetables"
          element={<Vegetables addToCart={addToCart} />}
        />
        <Route path="fruits" element={<Vegetables />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="short-codes" element={<ShortCodes />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="pet" element={<Pet />} />
        <Route path="frozen" element={<Frozen />} />
        <Route path="bread" element={<Bread />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="login" element={<LogIn />} />
        <Route path="forgetPassword" element={<Forget />} />
        <Route path="forgetPasswordFinal" element={<ForgetPasswordFinal />} />
        <Route
          path="cart"
          element={<AddToCart cart={cart} setCart={setCart} />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
