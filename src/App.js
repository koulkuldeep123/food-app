import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CardProvider from "./store/CartProvider";

function App() {
const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = ()=> {
  setCartIsShown(true);
};
const hideCartHandler = ()=> {
  setCartIsShown(false);
};

  return (
    <CardProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
