import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import About from "../../src/components/About";
import Events from "../../src/components/Events";
import Mail from "../../src/components/Mail";
import Services from "../../src/components/Services";
import Main from "../../src/components/mainPage/Main";
import Error from "../../src/components/Error";
import AddToCart from "../components/AddToCart";
import Checkout from "../components/Checkout";
import ItemsFromApi from "../components/ItemsFromApi";
import LogIn from "../components/LogIn";
import Signup from "../components/SignUp";
import Products from "../components/Products";
import Search from "../Search";
import Single from "../components/Single";
import axios from "axios";

//GET CARTITEMS FROM LOCAL STORAGE
const getCartItemsFromLocalStorage = () => {
  const list = localStorage.getItem("cartItems");
  console.log(list);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
getCartItemsFromLocalStorage();

const Router = () => {
  const [cart, setCart] = useState(getCartItemsFromLocalStorage());
  const [singleItemProduct, setsingleItemProduct] = useState([]);
  const navigate = useNavigate();

  //API CALL TO GET PRODUCT LIST
  const [items, setItems] = useState([]);

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
  useEffect(() => {
    getDataList();
  }, []);

  //SINGLE ITEM: ONCLICKING ON THE PRODUCT IMAGE
  const singleItem = (singleItem) => {
    console.log("singleItem", singleItem);
    setsingleItemProduct(singleItem);
    navigate("single");
  };

  //ADDIGN ITEMS ON CART
  const addToCart = (data) => {
    console.log(data);
    let exists = cart.find((item) => {
      return item.title === data.title;
    });
    if (exists) {
      toast.error("Item already exists in the cart.");
    } else {
      toast.success("Successfully added to the cart.");
      setCart([...cart, { ...data, quantityOrdered: 1 }]);
    }
  };

  //ADDING CART DATA TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const minusHandler = (data) => {
    const updatedCart = cart.map((item) => {
      if (item.title === data.title && item.quantityOrdered !== 1) {
        return { ...item, quantityOrdered: item.quantityOrdered - 1 };
      } else if (item.title === data.title && item.quantityOrdered === 1) {
        return { ...item, quantityOrdered: 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };

  //PLUS HANDLER
  const plusHandler = (data) => {
    const updatedCart = cart.map((item) => {
      if (data.title === item.title) {
        return { ...item, quantityOrdered: item.quantityOrdered + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
    //console.log(updatedCart);
  };

  //DELETING ITEM
  const deleteItem = (data) => {
    const remainingItems = cart.filter((item) => {
      return item.title !== data.title;
    });
    if (remainingItems) {
      setCart(remainingItems);
    }
  };

  //CALCULATING TOTAL
  const total = cart.reduce((acc, val) => {
    acc += val.quantityOrdered * val.unitPrice[0].newPrice;
    return acc;
  }, 0);

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
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="mailTo" element={<Mail />} />
        <Route
          path="search"
          element={<Search addToCart={addToCart} items={items} />}
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
              cart={cart}
              plusHandler={plusHandler}
              minusHandler={minusHandler}
              deleteItem={deleteItem}
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
              total={total}
              singleItem={singleItem}
            />
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
