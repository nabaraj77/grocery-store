import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import Router from "./routes/Router";
import Navbarleft from "./components/mainPage/Navbarleft";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbarleft />
        <Router />
        <Footer />
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
