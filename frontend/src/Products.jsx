import { useEffect, useState } from "react";

import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";

function Products({
  cart,
  setCart,
  wishlist,
  setWishlist
}) {

  const navigate = useNavigate();

  // Store backend products
  const [products, setProducts] = useState([]);

  // Search state
  const [search, setSearch] = useState("");

  // Category state
  const [category, setCategory] = useState("All");
     

  const [reviewText, setReviewText] = useState("");

const [rating, setRating] = useState(5);

  // Fetch products
  useEffect(() => {

    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

  }, []);


  // Add To Cart
  const addToCart = (item) => {

    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {

      alert("Please Login First");

      navigate("/login");

      return;

    }

    setCart([...cart, item]);

    alert("Added To Cart");

  };


  // ADD THIS HERE 👇
  // Wishlist Function
  const addToWishlist = (item) => {

    const alreadyExists = wishlist.find(
      (product) => product._id === item._id
    );

    if(alreadyExists){

      alert("Already in Wishlist");

      return;

    }

    setWishlist([...wishlist, item]);

    alert("Added To Wishlist");

  };

const addReview = (item) => {

  if(!reviewText){

    alert("Write Review");

    return;

  }

  const updatedProducts = products.map((product) => {

    if(product._id === item._id){

      return {

        ...product,

        reviews: [

          ...(product.reviews || []),

          {
            user: "AK User",
            comment: reviewText,
            rating: rating
          }

        ]

      };

    }

    return product;

  });

  setProducts(updatedProducts);

  setReviewText("");

  alert("Review Added");

};



  // Filter Logic
  const filteredProducts = products.filter((item) => {

    // Search filter
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    // Category filter
    const matchesCategory =
      category === "All" ||
      item.category === category;

    return matchesSearch && matchesCategory;

  });


  return (

    <>
    
      <Navbar />

      <div className="container mt-5">

        {/* Heading */}
        <h1
          className="text-center mb-5"
          style={{
            color:"#d4af37"
          }}
        >
          Luxury Collection
        </h1>


        {/* Search + Filter */}
        <div className="row mb-5">

          <div className="col-md-8">

            <input
              type="text"
              placeholder="Search luxury products..."
              className="form-control"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              style={{
                height:"55px",
                border:"1px solid #d4af37"
              }}
            />

          </div>

          <div className="col-md-4">

            <select
              className="form-select"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              style={{
                height:"55px",
                border:"1px solid #d4af37"
              }}
            >

              <option>All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Accessories</option>
              <option>Footwear</option>

            </select>

          </div>

        </div>


        {/* Product Cards */}
        <div className="row">

          {filteredProducts.map((item) => (

            <div
              className="col-md-4 mb-5"
              key={item._id}
            >

              <div
                className="card h-100 border-0"
                style={{
                  background:"#3b111c",
                  color:"#f5e6c8",
                  borderRadius:"20px",
                  overflow:"hidden",
                  boxShadow:"0 0 20px rgba(212,175,55,0.3)"
                }}
              >

                {/* Image */}
                <img
                  src={item.image}
                  className="card-img-top"
                  height="400"
                  style={{
                    objectFit:"cover"
                  }}
                />

                {/* Body */}
                <div className="card-body">

                  <h3>{item.name}</h3>

                  <h4
                    style={{
                      color:"#d4af37"
                    }}
                  >
                    ₹ {item.price}
                  </h4>

                  <p>{item.category}</p>

                     
                  {/* Rating */}
<select
  className="form-select mb-2"
  value={rating}
  onChange={(e) =>
    setRating(e.target.value)
  }
>

  <option value="5">⭐⭐⭐⭐⭐</option>
  <option value="4">⭐⭐⭐⭐</option>
  <option value="3">⭐⭐⭐</option>
  <option value="2">⭐⭐</option>
  <option value="1">⭐</option>

</select>


{/* Review */}
<textarea
  className="form-control mb-2"
  placeholder="Write Review..."
  value={reviewText}
  onChange={(e) =>
    setReviewText(e.target.value)
  }
/>


<button
  className="btn btn-light w-100"
  onClick={() => addReview(item)}
>
  Submit Review
</button>


                  {/* ADD THIS BUTTON HERE 👇 */}
                  <button
                    className="btn w-100 mb-2"
                    style={{
                      background:"#fff",
                      color:"#d4af37",
                      fontWeight:"bold",
                      border:"1px solid #d4af37"
                    }}
                    onClick={() => addToWishlist(item)}
                  >
                    ❤️ Wishlist
                  </button>


                  <button
                    className="btn w-100 mt-3"
                    style={{
                      background:"#d4af37",
                      color:"#3b0713",
                      fontWeight:"bold"
                    }}
                    onClick={() => addToCart(item)}
                  >
                    Add To Cart
                  </button>
                 <div className="mt-3">

  {
    item.reviews?.map((review, index) => (

      <div
        key={index}
        style={{
          background:"#5a1526",
          padding:"10px",
          borderRadius:"10px",
          marginTop:"10px"
        }}
      >

        <h6>
          {review.user}
        </h6>

        <p>
          {"⭐".repeat(review.rating)}
        </p>

        <p>
          {review.comment}
        </p>

      </div>

    ))
  }

</div>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </>

  );

}

export default Products;