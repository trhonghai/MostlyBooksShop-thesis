import React from "react";

import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import routes from "~/config/routes";
import config from "~/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const navBarList = [
    {
      title: "Đăng nhập",
      link: config.routes.login,
    },
    {
      title: "Đăng ký",
      link: config.routes.register,
    },
    
  ];

  return (
    <div className="w-auto h-24 bg-white border-b-[1px] rounded-lg shadow   dark:bg-gray-800  sticky top-0 z-10">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <NavLink to={"/"}>
          <img
            src="https://mostly-books.co.uk/wp-content/themes/mostly-books/assets/img/logo.png"
            className="w-42 h-20 cursor-pointer"
          />
        </NavLink>
        <div className="relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[2px] border-[#327580] items-center gap-2 justify-between px-6 rounded-md">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
            // onChange={(e) => setSearchQuery(e.target.value)}
            // value={searchQuery}
          />
          {/* {searchQuery ? ( */}
          <IoCloseOutline
            // onClick={() => setSearchQuery("")}
            className="w-5 h-5 hover:text-red-500 duration-200 hover:cursor-pointer"
          />
          {/* ) : ( */}
          <FaSearch className="w-5 h-5 hover:cursor-pointer " color="#327580" />
          {/* )} */}
        </div>
        <div className="hidden md:inline-flex items-center gap-2">
          {navBarList.map((item) => (
            <NavLink
              to={item?.link}
              key={item?.link}
              className="flex font-medium text-lg w-32 h-6 justify-center items-center pl-3 pr-6 text-gray-600  underline-offset-4 decoration-[1px] hover:text-[#498374] md:border-r-[2px] border-r-gray-400 duration-200 last:border-r-0"
            >
              {item?.title}
            </NavLink>
          ))}

          <button className="flex hover:font-medium w-8 h-6 justify-center items-center  text-gray-500 ">
            <FontAwesomeIcon icon={faHeart} className=" w-12 h-5" />
          </button>
          <button className="flex hover:font-medium  justify-center items-center  text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text--600 md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0">
            <FontAwesomeIcon icon={faDolly} className="mr-2  w-12 h-6" />
          </button>
        </div>
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer" />
      </nav>
    </div>
  );
}

export default Header;
