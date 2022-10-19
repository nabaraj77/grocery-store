import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import Main from "./components/mainPage/Main";
import { BrowserRouter } from "react-router-dom";
import Navbarleft from "./components/mainPage/Navbarleft";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Navbarleft />
        <Main /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
