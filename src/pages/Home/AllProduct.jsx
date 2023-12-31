import React, { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa";
import ProductCard from "../../shared/ProductCard";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [originalProducts, setOriginalProducts] = useState([]);

  // fetch data from public
  useEffect(() => {
    fetch(`https://gadgethub-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setOriginalProducts(data); // Set the original products data here
      });
  }, []);

  // handle category
  const productByCategory = (e) => {
    const category = e.target.value;
    if (category === "n/a") {
      // If the selected category is "n/a", show all products
      setProducts(originalProducts);
    } else {
      const filterByCategory = originalProducts.filter(
        (product) => product.category === category
      );
      setProducts(filterByCategory);
    }
  };
  // handle sorting
  const handleSorting = (e) => {
    const sorting = e.target.value;
    if (sorting === "price") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setProducts(sorted);
    } else if (sorting === "rating") {
      const sorted = [...products].sort((a, b) => b.rating - a.rating);
      setProducts(sorted);
    }
  };

  return (
    <div className="mb-10 px-[10%]">
      <div className="flex justify-between items-center my-12">
        {/* filter section  */}
        <div className="flex flex-wrap items-center gap-3 font-medium text-gray-700">
          {/* category select option  */}

          <select
            name="category"
            id=""
            onChange={productByCategory}
            className="border rounded-3xl py-1 px-2 outline-p1 bg-[#EBEDED]"
          >
            <option value="n/a">Headphone Type</option>
            <option value="over-ear">Over-Ear </option>
            <option value="on-ear">On-Ear </option>
            <option value="earbuds">Earbuds</option>
            <option value="noise-canceling">Noise-Canceling </option>
            <option value="sports">Sports </option>
          </select>
          {/* price select option  */}
          <select
            name="price"
            id=""
            className="border rounded-3xl py-1 px-2 outline-p1 bg-[#EBEDED]"
          >
            <option value="n/a">Price</option>
            <option value="$10-$20">$10-$20</option>
            <option value="$21-$30">$21-$30</option>
            <option value="$31-$50">$31-$50</option>
          </select>

          {/* review select option  */}
          <select
            name="review"
            id=""
            className="border rounded-3xl py-1 px-2 outline-p1 bg-[#EBEDED]"
          >
            <option value="n/a">Review</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
          </select>

          {/* color select option  */}
          <select
            name="color"
            id=""
            className="border rounded-3xl py-1 px-2 outline-p1 bg-[#EBEDED]"
          >
            <option value="n/a">Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>

          {/* materials select option  */}
          <select
            name="materials"
            id=""
            className="border rounded-3xl py-1 px-2 outline-p1 bg-[#EBEDED]"
          >
            <option value="n/a">Materials</option>
            <option value="leather">Leather</option>
            <option value="metal">Metal</option>
            <option value="plastic">Plastic</option>
          </select>

          {/* offer select option  */}
          <select
            name="offer"
            id=""
            className="border rounded-3xl py-1 px-2 outline-p1 bg-[#EBEDED]"
          >
            <option value="n/a">Offer</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className="border rounded-3xl px-1 outline-p1 bg-[#EBEDED] flex items-center gap-1">
            Clear Filter
            <FaTasks />
          </button>
        </div>
        {/* sort by select option  */}
        <div>
          <select
            name="sort"
            id=""
            onChange={handleSorting}
            className="border rounded-3xl py-1 px-2 outline-p1 font-medium text-gray-700"
          >
            <option value="">Sort by</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* here show all products  */}
      <h1 className="text-2xl my-5">Headphones For Your</h1>

      <div className="md:grid grid-cols-4 gap-6 space-y-4 md:space-y-0">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      {/* see more button   */}
      <div className="w-40 mx-auto mt-8">
        <button className="bg-p1 text-white w-full py-3 rounded-3xl">
          See More
        </button>
      </div>
    </div>
  );
};

export default AllProduct;
