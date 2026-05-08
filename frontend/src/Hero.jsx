import { Link } from "react-router-dom";

function Hero() {

  return (

    <div
      className="container-fluid"
      style={{
        background:
          "linear-gradient(to right, #2b000f, #4a0018, #2b000f)",
        minHeight:"100vh",
        display:"flex",
        alignItems:"center",
        padding:"40px 0",
        overflow:"hidden"
      }}
    >

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6">

            <p
              style={{
                color:"#d4af37",
                letterSpacing:"5px",
                fontSize:"18px",
                marginBottom:"25px",
                textTransform:"uppercase"
              }}
            >
              Luxury Fashion House
            </p>

            <h1
              style={{
                color:"#f8e7c2",
                fontSize:"95px",
                fontWeight:"900",
                lineHeight:"100px"
              }}
            >
              Elegance
            </h1>

            <h1
              style={{
                color:"#d4af37",
                fontSize:"105px",
                fontWeight:"900",
                fontStyle:"italic",
                marginBottom:"35px"
              }}
            >
              Redefined
            </h1>

            <p
              style={{
                color:"#f5d7b2",
                fontSize:"22px",
                lineHeight:"40px",
                width:"85%",
                marginBottom:"40px"
              }}
            >
              Curated luxury fashion crafted
              for timeless beauty, confidence
              and modern sophistication.
            </p>

            <Link to="/products">

              <button
                className="btn"
                style={{
                  background:"#d4af37",
                  color:"#2b000f",
                  padding:"16px 45px",
                  fontSize:"18px",
                  fontWeight:"bold",
                  borderRadius:"50px",
                  border:"none",
                  boxShadow:
                    "0 0 25px rgba(212,175,55,0.4)"
                }}
              >
                Discover Luxury
              </button>

            </Link>

          </div>


          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              alt=""
              className="img-fluid"
              style={{
                height:"680px",
                width:"90%",
                objectFit:"cover",
                borderRadius:"35px",
                border:"3px solid #d4af37",
                boxShadow:
                  "0 0 35px rgba(212,175,55,0.35)"
              }}
            />

          </div>

        </div>

      </div>

    </div>

  );

}

export default Hero;