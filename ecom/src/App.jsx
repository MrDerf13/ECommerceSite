import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./containers/Header/Header";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      {/* ALL PAGES */}
      {/* Header 
        - Logo and Name
        - Search Bar
        - Log In
        - Cart Link
      */}
      <Header />

      {/* HOME PAGE */}
      {/* Carosel */}
      {/* Gallery of best selling items */}

      {/* These will all just filter the total database to display */}
      {/* BEST SELLERS */}
      {/* MENS */}
      {/* WOMENS */}

      {/* PRODUCT PAGES */}
      {/* Dynamically create with useParams and :id */}
      {/* Needs  qty, variant, price, name, image, favourited (boolean, log in to see your favourites), add to cart*/}

      {/* CART PAGE */}

      <Routes>
        <Route path="/" element="Landing/Login" />
        <Route path="/home" element="Home" />
        <Route path="/best-sellers" element="BestSellers" />
        <Route path="/mens" element="Mens" />
        <Route path="/womens" element="Womens" />
        <Route path="/cart" element="Cart" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
