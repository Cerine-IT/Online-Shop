import React from "react";
import Logo from "../../assets/logo.png";
import {IoMdSearch} from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({handleOrderPopup}) =>  {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper Navbar */}
        <div className="bg-primary/40 py-2">
            <div className="container flex justify-between items-center">
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="Logo" className="w-10" />
                        Shopsy
                    </a>
                </div>

                {/* search bar */}
                <div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-[200px] mr-2 sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                        />
                        <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 right-4  -translate-y-1/2" />
                    </div>

                    {/* order button */}
                    <button
                        onClick={() => {handleOrderPopup()}}
                        className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full flex items-center gap-3 group"
                    >
                        <span className="group-hover:block hidden transition-all duration-200">
                            Order
                        </span>
                        <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                    </button>

                    {/* Darkmode Switch */}
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>

        {/* lower Navbar */}
        <div>
            <div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
