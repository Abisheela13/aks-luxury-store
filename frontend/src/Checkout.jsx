import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";

function Checkout({
  cart,
  setCart,
  orders,
  setOrders
}) {

  const navigate = useNavigate();

  const totalPrice = cart.reduce(

    (total, item) => total + item.price,

    0

  );


  const handlePayment = async () => {

    const paymentMethod = document.querySelector(
      "select"
    ).value;


    // CASH ON DELIVERY
    if(paymentMethod === "Cash On Delivery"){

      const newOrder = {

        items:cart,

        total:totalPrice,

        paymentMethod:"Cash On Delivery",

        date:new Date().toLocaleString()

      };

      setOrders([...orders, newOrder]);

      alert("Order Placed - Cash On Delivery");

      setCart([]);

      localStorage.removeItem("cart");

      navigate("/orders");

      return;

    }


    // SELECT VALIDATION
    if(paymentMethod === "Select Payment Method"){

      alert("Please Select Payment Method");

      return;

    }


    // ONLINE PAYMENT
    try{

      // Create Razorpay Order
      const response = await fetch(

        "https://aks-backend-x4ic.onrender.com/create-order",

        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({

            amount:totalPrice

          })

        }

      );

      const order = await response.json();

      // Razorpay options
      const options = {

        key:"rzp_test_Smo3bLpR91JdPv",

        amount:order.amount,

        currency:"INR",

        name:"AKS Luxury",

        description:"Luxury Fashion Payment",

        order_id:order.id,

        handler:function(response){

          const newOrder = {

            items:cart,

            total:totalPrice,

            paymentMethod:"Online Payment",

            paymentId:response.razorpay_payment_id,

            date:new Date().toLocaleString()

          };

          setOrders([...orders, newOrder]);

          alert("Payment Successful");

          setCart([]);

          localStorage.removeItem("cart");

          navigate("/orders");

        },

        theme:{

          color:"#d4af37"

        }

      };

      const razor = new window.Razorpay(
        options
      );

      razor.open();

    }

    catch(error){

      console.log(error);

      alert("Payment Failed");

    }

  };


  return (

    <>
    
      <Navbar />

      <div className="container mt-5">

        <h1
          style={{
            color:"#d4af37"
          }}
          className="mb-5"
        >
          Checkout
        </h1>

        <div
          className="p-5"
          style={{
            background:"#3b111c",
            borderRadius:"20px",
            color:"#fff"
          }}
        >

          <h3 className="mb-4">
            Order Summary
          </h3>

          {cart.map((item, index) => (

            <div
              key={index}
              className="d-flex justify-content-between mb-3"
            >

              <h5>{item.name}</h5>

              <h5>₹ {item.price}</h5>

            </div>

          ))}

          <hr />

          <h2
            style={{
              color:"#d4af37"
            }}
          >
            Total : ₹ {totalPrice}
          </h2>


          {/* Customer Details */}

          <input
            type="text"
            placeholder="Enter Full Name"
            className="form-control mt-4"
            style={{
              height:"55px"
            }}
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="form-control mt-4"
            style={{
              height:"55px"
            }}
          />

          <input
            type="text"
            placeholder="Enter Phone Number"
            className="form-control mt-4"
            style={{
              height:"55px"
            }}
          />

          <textarea
            placeholder="Enter Delivery Address"
            className="form-control mt-4"
            rows="4"
          ></textarea>


          {/* PAYMENT METHOD */}

          <select
            className="form-select mt-4"
            style={{
              height:"55px"
            }}
          >

            <option>
              Select Payment Method
            </option>

            <option>
              Online Payment
            </option>

            <option>
              Cash On Delivery
            </option>

          </select>


          <button
            className="btn w-100 mt-4"
            style={{
              background:"#d4af37",
              color:"#3b0713",
              fontWeight:"bold",
              height:"55px"
            }}
            onClick={handlePayment}
          >
            Pay Now
          </button>

        </div>

      </div>

    </>

  );

}

export default Checkout;