import { Rating, ThinStar } from "@smastrom/react-rating";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineArrowsExpand, HiOutlineRefresh } from "react-icons/hi";
import { toast } from "react-toastify";
import useCartProducts from "../Hooks/useCartProducts";

const GameProductCard = ({ product }) => {
  const { _id, title, thumbnail, price, rating, stock_quantity, popular } =
    product;
  const [cartProducts, refetch] = useCartProducts();
  const quantity = 1;
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#003D2A",
    inactiveFillColor: "#BCEDC5",
  };

  const addToCart = (id) => {
    const cartItem = {
      productId: _id,
      title,
      thumbnail,
      price,
      quantity,
      totalPrice: quantity * price,
    };
    const isProductExistInCart = cartProducts.find(
      (product) => product.productId === id
    );
    if (isProductExistInCart) {
      toast.warning("Product already exist in cart");
    } else {
      fetch(`https://gadgethub-server.vercel.app/addCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success(`${title} add to cart`);
            refetch();
          }
        });
    }
  };
  return (
    <div
      data-aos="fade-left"
      className="relative group overflow-hidden bg-white flex flex-col justify-between"
    >
      {popular && (
        <p className="absolute bg-[#FF8C3A] text-white font-medium px-1 rounded-3xl">
          Popular
        </p>
      )}
      <div className="absolute top-3 -right-10 space-y-2 group-hover:right-3 transition-all duration-300 flex flex-col">
        <button className="bg-[#F5F6F6] p-2 rounded-md">
          <HiOutlineArrowsExpand size={20} />
        </button>
        <button className="bg-[#F5F6F6] p-2 rounded-md">
          <FaRegHeart size={20} />
        </button>
        <button className="bg-[#F5F6F6] p-2 rounded-md">
          <HiOutlineRefresh size={20} />
        </button>
      </div>
      <figure>
        <img className="w-fit mx-auto" src={thumbnail} alt="" />
      </figure>
      <div className="space-y-3 px-4">
        <Rating
          style={{ maxWidth: 100 }}
          value={rating}
          readOnly
          itemStyles={myStyles}
        />
        <p className="font-medium text-gray-700">{title.slice(0, 50)}...</p>
        <h1 className="text-2xl font-medium">
          <del>${price}</del>
          <span className="text-p1">${parseInt(price - 10)}</span>
        </h1>
      </div>
      <button
        onClick={() => addToCart(_id)}
        className="group-hover:bottom-0 transition-all duration-300 absolute -bottom-20 left-5 right-5  bg-p1 text-white py-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GameProductCard;
