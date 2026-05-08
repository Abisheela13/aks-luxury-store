import { Link } from "react-router-dom"

function Navbar() {

  return (

    <nav>

      <div className="logo-wrap">

        <div className="logo-emblem">
          AK
        </div>

        <div className="logo-text">

          <div className="logo-name">
            AKS
          </div>

          <div className="logo-tagline">
            Luxury Fashion
          </div>

        </div>

      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

       <li>
  <Link to="/orders">
    Orders
  </Link>
</li>


      </ul>

    </nav>

  )
}

export default Navbar