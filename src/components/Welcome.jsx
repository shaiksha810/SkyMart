import { Star, Zap } from "lucide-react";
import React from "react";

const Welcome = () => {
  return (
    <div className="h-full bg-[#0D0D0D] text-white w-[50%] flex flex-col justify-center gap-6 px-12">
      <div className="flex gap-2 items-center">
        <p className="h-12 w-12 flex justify-center items-center rounded-2xl bg-[#C8F400]">
          <Zap className="text-black" />
        </p>
        <p className="text-[24px]">
          Sky<span className="text-[#C8F400]">Mart</span>
        </p>
      </div>

      <p className="text-[16px] uppercase text-[#C8F400] tracking-[2px] font-bold">
        welcome back
      </p>

      <h3 className="text-5xl" style={{ fontFamily: "'Clash Display', 'Syne', sans-serif" }}>
        Shop the future.
      </h3>
      <h3 className="text-5xl text-[#C8F400]">Today.</h3>

      <span className="text-gray-500">
        Thousands of products, lightning-fast delivery, and <br /> prices that
        make your wallet happy.
      </span>

      <div className="flex gap-4 mt-6">
        <div className="h-20 w-40 border border-white rounded-2xl flex justify-center items-center flex-col">
          <span className="text-xl text-[#C8F400]">20K+</span>
          <span className="text-[12px]">Products</span>
        </div>

        <div className="h-20 w-40 border border-white rounded-2xl flex justify-center items-center flex-col">
          <span className="text-xl text-[#C8F400]">50K+</span>
          <span className="text-[12px]">Users</span>
        </div>

        <div className="h-20 w-40 border border-white rounded-2xl flex justify-center items-center flex-col">
          <div className="flex items-center gap-1">
            <span className="text-xl text-[#C8F400]">4.9</span>
            <Star className="w-4 h-4 fill-[#C8F400] text-[#C8F400]" />
          </div>
          <span className="text-[12px]">Rating</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
