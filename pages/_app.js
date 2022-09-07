import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setsubTotal] = useState(0);
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart"))); //agar local storage me cart present hai to use cart me update krdo
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setsubTotal(subt);
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty; //agar item hai to qty badahdo
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }; //agar item nahi hai to qty 1 krdo
    }
    setCart(newCart);
    saveCart(newCart); //storing cart in local storage taki har bar refresh krne pe cart na chali jae
  };
  const clearCart = () => {
    setCart({}); //cart ko khali krdo
    saveCart({});
  };
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty; //agar item hai to qty kam krdo
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart); //storing cart in local storage taki har bar refresh krne pe cart na chali jae
  };

  return (
    <>
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar
        key={subTotal}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
