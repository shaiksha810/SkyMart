import { LogOut, ShoppingCart, Zap } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-318 h-12 flex justify-between items-center p-4 text-white ">

      <div className="flex gap-2 items-center">
        <p className="h-8 w-8 flex justify-center items-center rounded-xl bg-[#C8F400]">
          <Zap className="text-black" />
        </p>
        <p className="text-[20px] cursor-pointer">
          Sky<span className="text-[#C8F400]">Mart</span>
        </p>
      </div>

      <div className="flex gap-6 text-[15px] cursor-pointer">
        <NavLink to="/home">Home</NavLink>
        <NavLink  to="/products">Shop</NavLink>
        <NavLink  to="/about">About</NavLink>
      </div>

      <div className="flex gap-4 items-center">

        <div className="flex items-center justify-center bg-[#191919] border border-[#3f3d3d] gap-2 px-3 py-2 rounded-xl">
          <p className="h-5 w-5 border rounded"></p>
          <p>shaiksha</p>
        </div>

        <p className="cursor-pointer h-9 w-9 border border-[#3f3d3d] rounded-xl flex items-center justify-center px-2 py-3"><ShoppingCart/></p>
        <p className="cursor-pointer h-9 w-9 border border-[#3f3d3d] rounded-xl flex items-center justify-center px-2 py-3"><LogOut /></p>

      </div>

    </div>
  );
};

export default Navbar;
