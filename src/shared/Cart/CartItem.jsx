import axios from "axios";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { toast } from "react-toastify";
import useCartProducts from "../../Hooks/useCartProducts";

const CartItem = ({ cartItem, index }) => {
  const { _id, thumbnail, title, price, quantity, totalPrice } = cartItem;
  const [reQuantity, setReQuantity] = useState(quantity);
  const [, refetch] = useCartProducts();

  const handleDeleteCartItem = async (id) => {
    const res = await axios.delete(
      `https://gadgethub-server.vercel.app/cartItemDelete/${id}`
    );
    if (res.data.deletedCount > 0) {
      refetch();
      toast.warning(`${title} removed from cart`);
    }
  };

  return (
    <>
      <tr className="cartItem bg-[#F8E8EE]">
        <td
          className="cursor-pointer"
          onClick={() => handleDeleteCartItem(_id)}
        >
          <FaTimes className="text-rose-600" />
        </td>
        <td>{index + 1}</td>
        <td>
          <img src={thumbnail} alt="" className="w-20" />{" "}
        </td>
        <td> {title}</td>
        <td>${price}</td>
        <td>
          <div className="flex gap-5 items-center  bg-[#F5F6F6] px-2 py-1 rounded-3xl cursor-pointer border">
            <button onClick={() => reQuantity && setReQuantity(reQuantity - 1)}>
              <HiOutlineMinus />
            </button>
            <span>{reQuantity}</span>
            <button onClick={() => setReQuantity(reQuantity + 1)}>
              <HiPlus />
            </button>
          </div>
        </td>
        <td>${totalPrice}</td>
      </tr>
    </>
  );
};

export default CartItem;
