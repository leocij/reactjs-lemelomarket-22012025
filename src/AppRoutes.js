//yarn add react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/products/ProductList";
import Navbar from "./navbar/Navbar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/product-list" element={ <ProductList /> } />
      </Routes>
    </BrowserRouter>
  );
}
