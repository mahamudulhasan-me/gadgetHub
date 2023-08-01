import React from "react";
import { Link } from "react-router-dom";

const BuyBtn = () => {
  return (
    <Link className="bg-primaryColor rounded-3xl text-white px-6 py-3 font-medium hover:opacity-90">
      Buy Now
    </Link>
  );
};

export default BuyBtn;
