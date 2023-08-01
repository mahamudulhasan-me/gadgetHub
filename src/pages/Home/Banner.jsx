import React from "react";
import bannerImg from "../../assets/banner-img.jpg";
import BuyBtn from "../../components/BuyBtn";
const Banner = () => {
  return (
    <div className="bg-[#FBFBFB] flex justify-between items-center">
      <div className="ml-24">
        <h1 className="text-4xl text-primaryColor font-semibold mb-5">
          Grab Upto 50% Off On <br /> Selected Products
        </h1>
        <BuyBtn />
      </div>
      <img src={bannerImg} alt="" className="w-1/2" />
    </div>
  );
};

export default Banner;
