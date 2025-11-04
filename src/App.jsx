import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import SinglePage from "./pages/SinglePage.jsx";
import Basket from "./pages/Basket.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Scroll from "./components/Scroll.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<SinglePage />} />
          <Route path="/purchasebasket" element={<Basket />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Outlet />
      <Scroll />
      <Footer />
    </div>
  );
}
