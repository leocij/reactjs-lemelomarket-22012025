//yarn add react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/products/ProductList";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/product-list" element={ <ProductList /> } />
      </Routes>
    </BrowserRouter>
  );
}
