import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header/Header";
import "./App.scss";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";
import ProductGallery from "./containers/ProductGallery/ProductGallery";
import Home from "./pages/Home/Home";
import RefreshContextProvider from "./context/RefreshContextProvider";

function App() {
  return (
    <RefreshContextProvider>
      <BrowserRouter>
        <Header />

        {/* HOME PAGE */}
        {/* Carosel */}
        {/* one op for mens and another for womens */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/best-sellers"
            element={<ProductGallery pageName={"best-sellers"} />}
          />
          <Route path="/mens" element={<ProductGallery pageName={"mens"} />} />
          <Route
            path="/womens"
            element={<ProductGallery pageName={"womens"} />}
          />
          <Route
            path="/favourites"
            element={<ProductGallery pageName={"favourites"} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </RefreshContextProvider>
  );
}

export default App;
