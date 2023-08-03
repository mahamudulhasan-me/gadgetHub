import { useState } from "react";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  const [activeResMenu, setActiveResMenu] = useState(false);
  const navItems = (
    <>
      <li>
        <select name="category" id="" className="outline-none">
          <option>Category</option>

          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </li>
      <li>
        <Link>Deals</Link>
      </li>
      <li>
        <Link>What's New</Link>
      </li>
      <li>
        <Link>Delivery</Link>
      </li>
    </>
  );
  return (
    <header className="w-4/5 mx-auto  py-5  border-b border-[#FBF0E4]">
      <div className="flex justify-between items-center ">
        <Link to={"/"} className="md:flex hidden items-center gap-2">
          <img className="w-16 " src={logo} alt="" />{" "}
          <h1 className="text-primaryColor font-semibold text-3xl ">
            ShopCard
          </h1>
        </Link>
        {/* responsive menu  */}
        <nav className="relative md:hidden block">
          <HiMenuAlt1
            size={24}
            onClick={() => setActiveResMenu(!activeResMenu)}
          />
          {activeResMenu && (
            <ul
              onClick={() => setActiveResMenu(false)}
              className="h-fit p-2 bg-[#F5F6F6] absolute"
            >
              {navItems}
            </ul>
          )}
        </nav>
        <nav>
          <ul className="md:flex gap-5 items-center font-medium text-gray-700 hidden">
            {navItems}
          </ul>
        </nav>
        <div className="relative md:block hidden">
          <input
            type="text"
            placeholder="Search Product"
            className="bg-[#F6F7F8] rounded-md px-2 py-1 placeholder-slate-700 
            outline-none focus:outline-primaryColor focus:outline-none "
          />
          <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700" />
        </div>
        <div className="flex items-center gap-6 font-medium text-gray-700">
          <Link className="flex items-center gap-1">
            <FaUser size={20} /> Account
          </Link>
          <Link className="flex items-center gap-1">
            <FaCartPlus size={20} /> Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
