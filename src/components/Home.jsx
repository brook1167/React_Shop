import React, { createContext, useContext, useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

faker.seed(100);
function Home() {
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [products] = useState(data);

  return (
    <div className="productContainer">
      {data.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </div>
  );
}
export default Home;
