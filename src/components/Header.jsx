import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { CardContext } from "../ContextApi";

function Header() {
  const { cart } = useContext(CardContext);
  return (
    <div>
      <span className="header p-3 card shadow-lg">React Shop</span>

      <ul className="navbar navbar-light bg-light justify-content-around text-decoration-none">
        <li className="prod list-unstyled">
          <Link className="text-decoration-none" to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="prod1 list-unstyled">
          <Link className="text-decoration-none " to="/cart">
            <h1>Cart {cart.length == 0 ? "" : cart.length}</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
