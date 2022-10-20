import React from "react";
import { Route, Routes } from "react-router-dom";

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

const Router = () => {
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
        <Route path="vegetables" element={<Vegetables />} />
        <Route path="fruits" element={<Vegetables />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="short-codes" element={<ShortCodes />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="pet" element={<Pet />} />
        <Route path="frozen" element={<Frozen />} />
        <Route path="bread" element={<Bread />} />
      </Routes>
    </>
  );
};

export default Router;
