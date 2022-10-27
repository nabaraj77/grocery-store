import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
