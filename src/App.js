import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Navbarleft />
        <Main /> */}
        <Router />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
