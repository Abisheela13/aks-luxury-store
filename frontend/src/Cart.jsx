import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Cart({ cart, setCart }) {

  // Remove Product
  const removeItem = (index) => {

    const updatedCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(updatedCart);

  };

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (

    <>
    
      <Navbar />

      <div className="container mt-5">

        <h1
          className="mb-5"
          style={{
            color:"#d4af37"
          }}
        >
          Your Cart ({cart.length})
        </h1>

        {/* Empty Cart */}
        {cart.length === 0 && (

          <div
            className="text-center"
            style={{
              color:"#fff",
              marginTop:"100px"
            }}
          >
            <h2>Cart is Empty</h2>
          </div>

        )}

        <div className="row">

          {cart.map((item, index) => (

            <div
              className="col-md-4 mb-4"
              key={index}
            >

              <div
                className="card border-0 h-100"
                style={{
                  background:"#3b111c",
                  color:"#f5e6c8",
                  borderRadius:"20px",
                  overflow:"hidden",
                  boxShadow:"0 0 20px rgba(212,175,55,0.2)"
                }}
              >

                <img
                  src={item.image}
                  height="350"
                  style={{
                    objectFit:"cover"
                  }}
                />

                <div className="card-body">

                  <h3>{item.name}</h3>

                  <h4
                    style={{
                      color:"#d4af37"
                    }}
                  >
                    ₹ {item.price}
                  </h4>

                  <button
                    className="btn btn-danger w-100 mt-3"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Total */}
        {cart.length > 0 && (

          <div
            className="text-end mt-5"
            style={{
              color:"#d4af37"
            }}
          >

            <h2>
              Total : ₹ {totalPrice}
            </h2>
                

                <Link to="/checkout">

  <button
    className="btn mt-3"
    style={{
      background:"#d4af37",
      color:"#3b0713",
      fontWeight:"bold"
    }}
  >
    Proceed To Checkout
  </button>

</Link>



          </div>

        )}

      </div>

    </>

  );

}

export default Cart;