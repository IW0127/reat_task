import React, { useState } from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";

faker.seed(123);

function Home() {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    img: faker.random.image(),
  }));

  const [products] = useState(productsArray);

  return (
    <div className="row justify-content-between" id="Product">
      {products.map((productsData) => (
        <SingleProduct key={productsData.id} productsData={productsData} />
      ))}
    </div>
  );
}

export default Home;
