import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import AllProductList from "./pages/AllProductList/AllProductList";

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/allproducts" element={<AllProductList/>} />
      </Routes>
    </div>
  );
}

export default App;



