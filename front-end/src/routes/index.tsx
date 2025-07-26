import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "./../pages/notFound";
import About from "./../pages/about";
import Checkout from './../pages/checkout';
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
