import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <App />
      <Footer></Footer>
       <ScrollToTop />
    </BrowserRouter>
    <Toaster/>
  </StrictMode>
);
