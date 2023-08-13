import React, { useState } from "react";

import useCartProducts from "../../Hooks/useCartProducts";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartProducts] = useCartProducts();
  const [quantity, setQuantity] = useState();

  const subTotal = cartProducts?.map((item) => item.totalPrice.toFixed(2));
  const shippingCharge = 0;
  return (
    <div className="md:flex justify-between items-start">
      <>
        {cartProducts?.length === 0 ? (
          <div className="flex items-center  justify-center h-52 md:w-[30rem] font-semibold text-rose-600">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <table className="pr-4 md:min-w-[30rem]">
            <thead className="border-b w-fit h-10 ">
              <tr>
                <td></td>
                <td>#</td>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody className="divide-y ">
              {cartProducts?.map((cartItem, index) => (
                <CartItem
                  cartItem={cartItem}
                  key={cartItem._id}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        )}
      </>
      <div className="bg-[#FBF0E4] sticky top-0">
        <div className="bg-rose-100 py-1.5 px-20  ">
          <h1 className="font-semibold text-xl">Order Summary</h1>
        </div>
        <div className="p-5 space-y-3 divide-y">
          <p className="flex justify-between items-center font-semibold">
            <span>Total Product</span> <span>{cartProducts?.length}</span>
          </p>
          <p className="flex justify-between items-center font-semibold">
            <span>Subtotal</span> <span>${parseFloat(subTotal) || 0}</span>
          </p>
          <p className="flex justify-between items-center font-semibold">
            <span>Shipping</span> <span>{shippingCharge || "Free"}</span>
          </p>
        </div>
        <div className="bg-[#AAC8A7] p-2">
          <p className="flex justify-between items-center font-semibold">
            <span>Total Payable Amount</span>{" "}
            <span>
              ${parseFloat(subTotal + shippingCharge || 0).toFixed(2)}
            </span>
          </p>
        </div>
        <button className="bg-p1 w-full text-white py-2 uppercase font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
