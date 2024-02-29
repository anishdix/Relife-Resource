import Product from "./pages/Product";
import Home from "./pages/Home";
 import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NewProduct from "./pages/newProduct/NewProduct";
import Success from "./pages/Success";
import ProductAdded from "./pages/ProductAdded";
import {
  BrowserRouter as Router,
  Switch,
  Route,
   Redirect,
} from "react-router-dom";
 import { useSelector } from "react-redux";
import Order from "./pages/Order";
import Logout from "./pages/Logout";


const App = () => {
   const user=useSelector((state)=>state.user.currentUser);
  return (
    
    <Router>
      <Switch>
      <Route exact path="/">
         {user ? <Redirect to="/login"/>:<Register/>}
         </Route>
          <Route path="/login">
          {user ? <Redirect to="/home"/>:<Login/>}
          
          
         </Route>
         
         <Route path="/home">
           <Home/>
         </Route>
      
         <Route path="/products/:category">
           <ProductList/>
         </Route>
         
       <Route path="/newproduct">
            <NewProduct />
          </Route>
         <Route path="/product/:id">
           <Product/>
         </Route>
         
      
         <Route path="/cart">
           <Cart/>
         </Route>
         <Route path="/success">
          <Success/>
         </Route>
         <Route path="/logout">
          <Logout/>
         </Route>
         <Route path="/productAdded">
          <ProductAdded/>
         </Route>
         <Route path="/orderDetails">
          <Order/>
         </Route>
      
         
     
         
      </Switch>
    </Router>
  );
};

export default App;