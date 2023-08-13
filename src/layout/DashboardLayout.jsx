import Aos from "aos";
import React, { useEffect } from "react";
import { FaCog, FaIndent, FaOpencart, FaRegBell } from "react-icons/fa";
import { HiOutlineMoon, HiSearch } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuBar from "../dashboard/MenuBar";
import { Helmet } from "react-helmet";

const DashboardLayout = () => {
  // aos animation initial effect
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      {/* helmet for title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>GadgetHub | Dashboard</title>
      </Helmet>
      <div className="grid grid-cols-10 relative">
        <menu className=" col-span-2  bg-[#111C43] min-h-screen ">
          <Link
            to={"/"}
            className="md:flex justify-center items-center gap-2 py-3 border-b border-slate-500"
          >
            <img className="w-10 " src={logo} alt="" />{" "}
            <h1 className="text-violet-700 font-semibold text-xl ">
              GadgetHub
            </h1>
          </Link>

          {/* dashboard menu bar  */}
          <MenuBar />
        </menu>
        <div className="col-span-8 bg-[#F0F1F7]">
          <header className="flex justify-between items-center px-5 py-3 bg-white text-xl text-gray-800">
            <FaIndent />
            <div className="flex items-center gap-5">
              <HiSearch />
              <HiOutlineMoon />
              <FaOpencart />
              <FaRegBell />
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full ring "
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                />
                <div>
                  <p className="text-sm font-semibold">Mahamudul hasan</p>
                  <p className="text-sm">React.js Developer</p>
                </div>
              </div>
              <FaCog className="animate-spin" />
            </div>
          </header>
          <main className="p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
