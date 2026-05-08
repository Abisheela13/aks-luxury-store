import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async(e) => {

  e.preventDefault();

  const response = await fetch(
    "https://aks-backend-x4ic.onrender.com/register",
    {

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        name,
        email,
        password

      })

    }
  );

  const data = await response.json();

  alert(data.message);

  navigate("/login");

};

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#3b0713",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >

      <div
        style={{
          width: "450px",
          background: "#fff",
          borderRadius: "25px",
          padding: "45px",
          boxShadow: "0 0 35px rgba(212,175,55,0.3)"
        }}
      >

        {/* Logo */}
        <div className="text-center mb-4">

          <div
            style={{
              width: "90px",
              height: "90px",
              border: "3px solid #d4af37",
              borderRadius: "50%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#d4af37",
              fontWeight: "bold",
              fontSize: "35px"
            }}
          >
            AK
          </div>

          <h1
            style={{
              color: "#d4af37",
              fontWeight: "bold",
              marginTop: "15px",
              fontSize: "45px",
              letterSpacing: "4px"
            }}
          >
            AKS
          </h1>

          <p
            style={{
              color: "#3b0713"
            }}
          >
            Luxury Fashion
          </p>

        </div>

        {/* Title */}
        <div className="text-center mb-4">

          <h2
            style={{
              color: "#3b0713",
              fontWeight: "700"
            }}
          >
            Create AKS Account
          </h2>

          <p
            style={{
              color: "#777",
              marginTop: "10px"
            }}
          >
            Join AKS and explore premium luxury collections.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Enter your name"
            className="form-control mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              height: "58px",
              borderRadius: "14px",
              border: "1px solid #d4af37",
              paddingLeft: "18px"
            }}
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              height: "58px",
              borderRadius: "14px",
              border: "1px solid #d4af37",
              paddingLeft: "18px"
            }}
          />

          <input
            type="password"
            placeholder="Create password"
            className="form-control mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              height: "58px",
              borderRadius: "14px",
              border: "1px solid #d4af37",
              paddingLeft: "18px"
            }}
          />

          <button
            className="btn w-100"
            style={{
              background: "#d4af37",
              color: "#3b0713",
              height: "58px",
              borderRadius: "14px",
              fontWeight: "bold",
              fontSize: "18px",
              border: "none"
            }}
          >
            Create Account
          </button>

        </form>

        {/* Bottom */}
        <div className="text-center mt-4">

          <p style={{ color:"#666" }}>
            Already have an account?
          </p>

          <Link
            to="/login"
            style={{
              color: "#d4af37",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Login to AKS
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Register;