import React from "react";
import {
  FaAngleRight,
  FaCogs,
  FaHome,
  FaList,
  FaOpencart,
  FaSignOutAlt,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <nav className="px-5 mt-5">
      <ul className="space-y-2 border-b border-slate-600 pb-3">
        <li className="hover:bg-[#1D284D] text-white py-2 px-4 rounded-lg">
          <Link className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <FaHome />
              Dashboard
            </span>
            <FaAngleRight />
          </Link>
        </li>
        <li className="hover:bg-[#1D284D] text-white py-2 px-4 rounded-lg">
          <Link
            to={"/dashboard/customers"}
            className="flex justify-between items-center"
          >
            <span className="flex items-center gap-2">
              <FaUserTie />
              Customers
            </span>
            <FaAngleRight />
          </Link>
        </li>
        <li className="hover:bg-[#1D284D] text-white py-2 px-4 rounded-lg">
          <Link className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <FaList />
              Product List
            </span>
            <FaAngleRight />
          </Link>
        </li>
        <li className="hover:bg-[#1D284D] text-white py-2 px-4 rounded-lg">
          <Link className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <FaOpencart />
              Order List
            </span>
            <FaAngleRight />
          </Link>
        </li>
      </ul>
      <ul className="mt-5 space-y-2">
        <li className="hover:bg-[#1D284D] text-white py-2 px-4 rounded-lg">
          <Link className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <FaHome />
              Home
            </span>
            <FaAngleRight />
          </Link>
        </li>
        <li className="hover:bg-[#1D284D] text-white py-2 px-4 rounded-lg">
          <Link className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <FaCogs />
              Settings
            </span>
            <FaAngleRight />
          </Link>
        </li>
        <li className="hover:bg-[#1D284D] text-white py-2 px-4 rounded-lg">
          <Link className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <FaSignOutAlt />
              Log Out
            </span>
            <FaAngleRight />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
