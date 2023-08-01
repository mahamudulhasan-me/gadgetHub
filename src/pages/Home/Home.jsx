import React from "react";
import AllProduct from "./AllProduct";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Banner />
      <AllProduct />
    </div>
  );
};

export default Home;
