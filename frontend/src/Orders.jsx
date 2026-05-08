import Navbar from "./Navbar";

function Orders({ orders }) {

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
          My Orders 📦
        </h1>

        {orders.length === 0 && (

          <h3
            style={{
              color:"#fff"
            }}
          >
            No Orders Yet
          </h3>

        )}

        {orders.map((order, index) => (

          <div
            key={index}
            className="mb-5 p-4"
            style={{
              background:"#3b111c",
              borderRadius:"20px",
              color:"#fff"
            }}
          >

            <h4>
              Order Date :
              {" "}
              {order.date}
            </h4>

            <h3
              style={{
                color:"#d4af37"
              }}
            >
              Total :
              ₹ {order.total}
            </h3>

            <div className="row mt-4">

              {order.items.map((item, i) => (

                <div
                  className="col-md-3"
                  key={i}
                >

                  <div
                    className="card border-0"
                    style={{
                      background:"#4d1625",
                      color:"#fff"
                    }}
                  >

                    <img
                      src={item.image}
                      height="250"
                      style={{
                        objectFit:"cover"
                      }}
                    />

                    <div className="card-body">

                      <h5>{item.name}</h5>

                      <p>
                        ₹ {item.price}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}
        

      </div>

    </>

  );

}

export default Orders;