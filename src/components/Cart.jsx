import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { CardContext } from "../ContextApi";

function Cart() {
  const { cart } = useContext(CardContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);

  return (
    <div className="text-center">
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />

      <span style={{ fontSize: 30 }}>Total Price: ${total}</span>
      <div className="productContainer">
        {cart.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export default Cart;
