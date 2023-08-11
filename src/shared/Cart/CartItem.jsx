import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";

const CartItem = ({ cartItem, index }) => {
  const { thumbnail, title, price, quantity, totalPrice } = cartItem;
  const [reQuantity, setReQuantity] = useState(quantity);
  return (
    <>
      <tr className="cartItem">
        <td>
          <FaTimes className="text-rose-600" />
        </td>
        <td>{index + 1}</td>
        <td>
          <img src={thumbnail} alt="" className="w-20" />{" "}
        </td>
        <td> {title}</td>
        <td>${price}</td>
        <td>
          <div className="flex gap-5 items-center  bg-[#F5F6F6] text-xl px-5 py-1 rounded-3xl cursor-pointer border">
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
