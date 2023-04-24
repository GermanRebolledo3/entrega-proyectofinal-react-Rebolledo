import { createContext, useState } from "react";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;


function CartProvider(props) {
  const [cart, setCart] = useState([]);
 

  function addItem(product, count) {
    

    const newCart = [...cart]; 
    newCart.push({ ...product, count });
    setCart(newCart);
  }

  function getPriceInCart() {
   
    return 1099;
  }

  function getCountInCart() {
    
    let total = 0;
    cart.forEach();
    return 5;
  }

  return (
    <Provider value={{ cart, addItem, getPriceInCart }}>
      {props.children}
    </Provider>
  );
}

export { cartContext, CartProvider };