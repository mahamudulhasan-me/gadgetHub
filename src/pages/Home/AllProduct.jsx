import React, { useEffect, useState } from "react";
import ProductCard from "../../shared/ProductCard";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`productData.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} id={product.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
