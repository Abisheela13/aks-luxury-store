import Navbar from "./Navbar";

function Wishlist({
  wishlist,
  setWishlist
}) {

  const removeWishlist = (index) => {

    const updatedWishlist =
      wishlist.filter((_, i) => i !== index);

    setWishlist(updatedWishlist);

  };

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
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 && (

          <h3
            style={{
              color:"#fff"
            }}
          >
            Wishlist is Empty
          </h3>

        )}

        <div className="row">

          {wishlist.map((item, index) => (

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
                  overflow:"hidden"
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
                    onClick={() =>
                      removeWishlist(index)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </>

  );

}

export default Wishlist;