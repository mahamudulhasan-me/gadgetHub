import { useState } from "react";
import {
  FaCartPlus,
  FaChartBar,
  FaSearch,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import useCartProducts from "../Hooks/useCartProducts";
import logo from "../assets/logo.png";
import Cart from "./Cart/Cart";

const Header = () => {
  const [activeResMenu, setActiveResMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [cartProducts] = useCartProducts();
  const navItems = (
    <>
      <li className="md:hidden">
        <Link to={"/"}>Home</Link>
      </li>
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
    <header className="w-4/5 mx-auto  py-2  border-b border-[#FBF0E4]">
      <div className="flex justify-between items-center ">
        <Link to={"/"} className="md:flex hidden items-center gap-2">
          <img className="w-16 " src={logo} alt="" />{" "}
          <h1 className="text-p1 font-semibold text-3xl ">GadgetHub</h1>
        </Link>
        {/* responsive menu  */}
        <nav className="relative md:hidden block z-50">
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
            outline-none focus:outline-p1 focus:outline-none "
          />
          <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700" />
        </div>
        <div className="flex items-center gap-6 font-medium text-gray-700">
          <div className="relative  group">
            <button className="flex items-center gap-1 ">
              <FaUser size={20} /> Account
            </button>
            <div className="absolute z-50 flex flex-col gap-2  -translate-y-48   pt-3 pb-8 group-hover:translate-y-0">
              <Link
                to={"/dashboard"}
                className="flex items-center gap-1 text-p1 font-semibold"
              >
                <FaChartBar /> Dashboard
              </Link>
              <Link
                to={"/signIn"}
                className="flex items-center gap-1 text-p1 font-semibold"
              >
                <FaSignInAlt /> SignIn
              </Link>
            </div>
          </div>
          <button
            onClick={() => setOpenCart(!openCart)}
            className="flex items-center gap-1 relative"
          >
            <div className="absolute -top-4 -right-4  text-white font-semibold rounded-t-xl rounded-r-xl bg-p1 w-6 h-6 ">
              {cartProducts?.length}
            </div>
            <FaCartPlus size={20} /> Cart
          </button>
        </div>
      </div>
      <aside
        className={`absolute right-0  ${
          openCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 bg-[#F9F5F6] mt-2 z-40 max-h-[calc(100vh-4rem)] overflow-y-scroll`}
      >
        {openCart && <Cart />}
      </aside>
    </header>
  );
};

export default Header;
