import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import TopDealsLi from "./TopDealsLi";

const TopDeals = () => {
  return (
    <div className="bg-white rounded-md w-full">
      <div className="border-b p-2 flex items-center justify-between">
        <p className="border-l-4 font-semibold border-violet-700 px-1">
          Top Deals
        </p>
        <p className="bg-[#F0F1F7] p-2 rounded-md">
          <HiDotsVertical />
        </p>
      </div>
      <div className="text-gray-600 mt-5 px-2">
        <ul className="space-y-2">
          <TopDealsLi
            name="Michale Jorder"
            email="michael.jorder"
            price="2000"
          />
          <TopDealsLi
            name="Emigo Kiran"
            email="emigo.kiaren@gmail.com"
            price="100"
          />
          <TopDealsLi
            name="Randy Origoan"
            email="randy.origoan@gmail.com"
            price="100"
          />
          <TopDealsLi
            name="George Pieterson"
            email="george.pieterson@gmail.com"
            price="100"
          />
          <TopDealsLi
            name="Michale Jorder"
            email="michael.jorder"
            price="2000"
          />
          <TopDealsLi
            name="Emigo Kiran"
            email="emigo.kiaren@gmail.com"
            price="100"
          />
          <TopDealsLi
            name="Randy Origoan"
            email="randy.origoan@gmail.com"
            price="100"
          />
          <TopDealsLi
            name="George Pieterson"
            email="george.pieterson@gmail.com"
            price="100"
          />
        </ul>
      </div>
    </div>
  );
};

export default TopDeals;
