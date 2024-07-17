import Product from "./pages/Product";
import Home from "./pages/Home";
 import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NewProduct from "./pages/newProduct/NewProduct";
import Success from "./pages/Success";
import ProductAdded from "./pages/ProductAdded";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//  import { useSelector } from "react-redux";
import Order from "./pages/Order";
import Logout from "./pages/Logout";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  //  const user=useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/newproduct" element={<NewProduct />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/productAdded" element={<ProductAdded />} />
      <Route path="/orderDetails" element={<Order />} />
    </Routes>
  </Router>
  );
};

export default App;