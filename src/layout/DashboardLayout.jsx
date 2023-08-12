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
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-10">
      <menu className="col-span-2 bg-[#111C43] min-h-screen ">
        <Link
          to={"/"}
          className="md:flex justify-center items-center gap-2 py-4 border-b border-slate-500"
        >
          <img className="w-10 " src={logo} alt="" />{" "}
          <h1 className="text-violet-700 font-semibold text-xl ">GadgetHub</h1>
        </Link>
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
              <Link className="flex justify-between items-center">
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
      </menu>
      <div className="col-span-8">{Outlet}</div>
    </div>
  );
};

export default DashboardLayout;
