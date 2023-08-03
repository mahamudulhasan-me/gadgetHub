import { Rating, ThinStar } from "@smastrom/react-rating";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [favorite, setFavorite] = useState(false);
  const {
    id,
    short_features,
    title,
    price,
    rating,
    total_rating,
    description,
    category,
    thumbnail,
  } = product;
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#003D2A",
    inactiveFillColor: "#BCEDC5",
  };
  return (
    <div className="relative bg-[#F5F6F6] text-gray-600 h-full flex flex-col justify-between items-start gap-3 rounded-lg">
      <div
        className="absolute top-3 right-3 bg-white p-1 rounded-full cursor-pointer"
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? (
          <FaHeart size={20} color="#FF0000" />
        ) : (
          <FaRegHeart size={20} />
        )}
      </div>
      <figure className="w-full bg-[#F5F6F6] justify-center items-center">
        <img
          src={thumbnail}
          alt=""
          className="rounded-lg
        "
        />
      </figure>

      <div>
        <h1 className="flex font-semibold justify-between gap-1">
          <span>{title}</span>{" "}
          <span className="text-primaryColor">${price}</span>
        </h1>
        <p className="text-sm">{short_features}</p>
        <p className="flex">
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
            itemStyles={myStyles}
          />
          <span>({total_rating})</span>
        </p>
      </div>

      <Link
        to={`/product/${id}`}
        className="border-2 hover:bg-primaryColor rounded-3xl ring-gray-500 px-3 py-1 text-gray-700 font-medium hover:text-white  transition-all hover:duration-300"
      >
        Add to Cart
      </Link>
    </div>
  );
};

export default ProductCard;
