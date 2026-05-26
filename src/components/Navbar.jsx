import { Link } from "react-router-dom";
import "../styles/navbar.css"; 
import logo from "../assets/neurozy-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
     
      <div className="nav-logo">
        <img src={logo} alt="Neurozy Logo" className="logo-image" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
