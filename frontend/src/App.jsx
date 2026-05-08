import './App.css'

import {
  Routes,
  Route
} from "react-router-dom"

import {
  useState,
  useEffect
} from "react"

import Home from "./Home"
import Products from "./Products"
import Cart from "./Cart"
import Login from "./Login"
import Register from "./Register"
import Checkout from "./Checkout";
import Wishlist from "./Wishlist";
import Orders from "./Orders";
function App() {

  // Load cart from localStorage initially
  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart")

    return savedCart
      ? JSON.parse(savedCart)
      : []

  })


  const [orders, setOrders] = useState(() => {

  const savedOrders =
    localStorage.getItem("orders");

  return savedOrders
    ? JSON.parse(savedOrders)
    : [];

});

const [wishlist, setWishlist] = useState(() => {

  const savedWishlist =
    localStorage.getItem("wishlist");

  return savedWishlist
    ? JSON.parse(savedWishlist)
    : [];

});


useEffect(() => {

  localStorage.setItem(
    "orders",
    JSON.stringify(orders)
  );

}, [orders]);


useEffect(() => {

  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );

}, [wishlist]);



  // Save cart whenever cart changes
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )

  }, [cart])





  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
  path="/products"
  element={
    <Products
      cart={cart}
      setCart={setCart}
      wishlist={wishlist}
      setWishlist={setWishlist}
    />
  }
/>

      <Route
        path="/cart"
        element={
          <Cart
            cart={cart} setCart={setCart}
          />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
  path="/register"
  element={<Register />}
/>
           
         <Route
  path="/checkout"
  element={
    <Checkout
      cart={cart}
      setCart={setCart}
      orders={orders}
      setOrders={setOrders}
    />
  }
/> 

<Route
  path="/wishlist"
  element={
    <Wishlist
      wishlist={wishlist}
      setWishlist={setWishlist}
    />
  }
/>



<Route
  path="/orders"
  element={
    <Orders
      orders={orders}
    />
  }
/>




    </Routes>

   

    
  )

}

export default App