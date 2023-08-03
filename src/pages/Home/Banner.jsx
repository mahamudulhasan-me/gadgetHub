import React from "react";
import bannerImg from "../../assets/banner-img.png";
import BuyBtn from "../../components/BuyBtn";
const Banner = () => {
  return (
    <div className="bg-[#FBF0E4] w-4/5 mx-auto flex md:flex-row flex-col-reverse justify-between items-center ">
      <div className="md:ml-24 p-2 md:p-0">
        <h1 className="text-4xl text-primaryColor font-semibold mb-5">
          Grab Upto 50% Off On Selected Products
        </h1>
        <BuyBtn />
      </div>
      <img src={bannerImg} alt="" className="md:w-1/2 w-full" />
    </div>
  );
};

export default Banner;
