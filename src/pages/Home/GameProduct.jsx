import React, { useEffect, useState } from "react";
import { HiArrowRight, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import gameSiteImg from "../../assets/section-category-1.jpg";
import GameProductCard from "../../shared/GameProductCard";

const GameProduct = () => {
  const [gameProducts, setGameProducts] = useState([]);

  // fetch all game product from db
  useEffect(() => {
    fetch("http://localhost:3000/gameProducts")
      .then((res) => res.json())
      .then((data) => {
        setGameProducts(data);
      });
  }, []);

  return (
    <section className="bg-[#F8F8F8] px-[10%] py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl my-5">Gamer World</h1>
        <Link className="bg-p1 rounded-3xl text-white px-4 py-2 font-medium hover:opacity-90 flex items-center gap-1">
          View More <HiArrowRight className="animate-pulse" />
        </Link>
      </div>
      <div className="md:flex justify-between items-center gap-8">
        <figure
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="relative"
        >
          <img className="w-full mx-auto" src={gameSiteImg} alt="" />
          <div className="absolute top-0 left-0 w-full h-full p-5">
            <h1>Mobile & Tablet</h1>
            <ul className="mobile">
              <li>Xiaomi</li>
              <li>iPhone</li>
              <li>Samsung</li>
            </ul>
            <Link className="font-semibold flex items-center text-gray-700">
              Shop Now <HiChevronRight />{" "}
            </Link>
          </div>
        </figure>
        <div className="md:grid grid-cols-3 w-full gap-8 space-y-4 md:space-y-0">
          {/* mapping all game product and pass data on GameProductCard */}
          {gameProducts.map((product) => (
            <GameProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameProduct;
