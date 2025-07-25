import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "./../pages/notFound";
import About from "./../pages/about";
import Checkout from './../pages/checkout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
