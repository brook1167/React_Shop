import React, { useContext } from "react";
import { CardContext } from "../ContextApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const SingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(CardContext);
  console.log(cart);
  return (
    <div className="card m-2">
      <img src={product.image} width={"200px"} height={"200px"} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>${product.price}</span>
      </div>
      {cart.includes(product) ? (
        <button
          className="btn btn-danger"
          // className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== product.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => setCart([...cart, product])}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
