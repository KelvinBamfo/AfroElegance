import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./HomeSection/Header";
import Footer from "./HomeSection/Footer";
import Body from "./HomeSection/BodyPage";
import Featured from "./HomeSection/FeaturedPage";
import ProductCategories from "./ShopSection/Categories";
import Products from "./ShopSection/Products";
import Contact from "./ContactSection/Contact";
import Cart from "./CartSection/Cart";
import CategoryPage from "./ShopSection/CategoryPage";
import Help from "./ContactSection/HelpSection";
import CartProvider from "./CartSection/CartContext";

function HomePage() {
  return (
    <>
      <Body />
      <Featured />
      <ProductCategories />
      <Help />
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/shop"
            element={
              <>
                <Products />
                <ProductCategories />
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productCategories/:slug" element={<CategoryPage />} />
        </Routes>

        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
