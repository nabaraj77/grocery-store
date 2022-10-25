import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Navbarleft />
        <Main /> */}
        <Router />
        <Products />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
