import React, { createContext, useContext, useState } from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);
function Home() {
  const productsArray = [...Array(6)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));
  // console.log(productsArray);

  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </div>
  );
}
export default Home;
