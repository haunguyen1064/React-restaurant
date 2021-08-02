import { Switch, Route, Redirect } from "react-router-dom";

import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import OrderTracking from "./components/Orders/Order-tracking";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [OrDerid, setOrderID] = useState("");

  
  const getOrderID = (newOrderID) => {
    setOrderID(newOrderID);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const getInputID = (inputID) => {
    setOrderID(inputID);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} OrderID={getOrderID} />}
      <Header onShowCart={showCartHandler} inputID={getInputID} />
      <main>
        <Switch>
          <Route path="/order">
            <OrderTracking id={OrDerid} />
          </Route>
          <Route path="/" exact >
            <Meals />
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </main>
      <footer>Developed by Hau Nguyen &copy; 2021</footer>
    </CartProvider>
  );
}

export default App;
