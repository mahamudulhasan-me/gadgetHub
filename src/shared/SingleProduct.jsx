import { Rating, ThinStar } from "@smastrom/react-rating";
import React, { useState } from "react";
import { FaCarSide, FaSyncAlt } from "react-icons/fa";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useCartProducts from "../Hooks/useCartProducts";
import color1 from "../assets/color-pallet/circle.png";
import color2 from "../assets/color-pallet/circle2.png";
import color3 from "../assets/color-pallet/new-moon.png";
import color4 from "../assets/color-pallet/round-shape.png";

const SingleProduct = () => {
  const product = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [cartProducts, refetch, isLoading] = useCartProducts();

  const {
    _id,
    title,
    short_features,
    price,
    rating,
    total_rating,
    short_description,
    thumbnail,
    images,
    stock_quantity,
  } = product;
  const [displayImage, setDisplayImage] = useState(thumbnail);
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
    <div className="w-4/5 mx-auto mt-8">
      <p className="text-gray-600">
        electronics / audio / shop headphones by type /
        <span className="text-gray-700 font-medium">{title}</span>
      </p>
      <div className="md:grid grid-cols-2 mt-5 gap-14">
        <figure>
          <img
            className="h-96  w-full"
            src={displayImage ? displayImage : thumbnail}
            alt=""
          />
          <div className="grid grid-cols-4 gap-4 mt-5 items-stretch">
            {images?.map((image) => (
              <img
                className="cursor-pointer"
                src={image}
                alt=""
                onClick={() => setDisplayImage(image)}
              />
            ))}
          </div>
        </figure>
        <div className="space-y-5">
          <div>
            <h1 className="text-3xl">{title}</h1>
            <p className="text-gray-500">{short_description}</p>
            <h1>Features:</h1>
            <p className="text-sm mb-2 text-gray-500">{short_features}</p>
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
          <div>
            <h1 className="text-3xl font-semibold">${price} or $19.99/month</h1>
            <p className="text-sm text-gray-500">
              Suggested payments with 5 months special financing
            </p>
          </div>
          <div>
            <h1 className="text-xl">Choose a color</h1>
            <figure className="flex color-pallet">
              <img src={color1} alt="" />
              <img src={color2} alt="" />
              <img src={color3} alt="" />
              <img src={color4} alt="" />
            </figure>
          </div>

          <div className="flex justify-start gap-8 font-medium text-gray-600">
            <p className="flex gap-5 items-center  bg-[#F5F6F6] text-xl px-5 py-1 rounded-3xl cursor-pointer">
              <HiOutlineMinus
                onClick={() => quantity && setQuantity(quantity - 1)}
              />
              {quantity} <HiPlus onClick={() => setQuantity(quantity + 1)} />
            </p>
            <p>
              Only{" "}
              <span className="text-[#FF8C3A]">{stock_quantity} Item's</span>{" "}
              Left <br />
              Don't miss it{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6   items-center">
            <button className="border-2 border-p1 rounded-3xl py-2 font-semibold bg-p1 text-white ">
              Buy Now
            </button>
            <button
              disabled={quantity === 0}
              onClick={() => addToCart(_id)}
              className="border-2 border-p1 rounded-3xl py-2 font-semibold text-p1"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <div className="flex gap-3 items-start border p-5">
              <FaCarSide color="#FF8C3A" size={24} />
              <div>
                <h1 className="text-xl">Free Delivery</h1>
                <Link className="underline text-gray-500">
                  Enter your postal code for Delivery Availability
                </Link>
              </div>
            </div>

            {/* free/ return delivery box  */}
            <div className="flex gap-3 items-start border p-5">
              <FaSyncAlt color="#FF8C3A" size={24} />
              <div>
                <h1 lassName="text-xl">Return Delivery</h1>
                <p className=" text-gray-500">
                  Free 30 days Delivery Returns.{" "}
                  <Link className="underline">Details</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
