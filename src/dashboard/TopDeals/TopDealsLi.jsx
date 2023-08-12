import React from "react";

const TopDealsLi = ({ name, email, price }) => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://source.unsplash.com/100x100/?man"
          alt=""
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <p className="font-semibold">${price}</p>
    </li>
  );
};

export default TopDealsLi;
