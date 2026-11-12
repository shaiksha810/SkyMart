
import React from "react";
import {
  Package,
  TrendingUp,
  Star,
  Tag,
  ArrowRight,
  Laptop,
  Shirt,
  Armchair,
  House,
  Dumbbell,
  Watch,
} from "lucide-react";

const Dashboard = () => {
  return (
    <section className="border-b border-[#454545] bg-[#0d0d0d] px-6 py-6 sm:px-8 lg:px-12">

      {/* Statistics Section */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {/* Cart Items */}
        <div className="flex min-h-45 items-center gap-6 rounded-[35px] border border-[#d1d1d1] bg-[#111111] px-7 py-7 transition-all duration-300 hover:border-[#b7f000]">
          <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl bg-[#252b0c] text-[#b7f000]">
            <Package size={32} strokeWidth={2} />
          </div>

          <div>
            <h3 className="text-[32px] font-bold leading-tight text-white">
              0
            </h3>
            <p className="mt-1 text-[20px] text-[#999999]">
              Cart Items
            </p>
            <p className="mt-1 text-[17px] text-[#555555]">
              In your bag
            </p>
          </div>
        </div>

        {/* Cart Value */}
        <div className="flex min-h-45 items-center gap-6 rounded-[35px] border border-[#d1d1d1] bg-[#111111] px-7 py-7 transition-all duration-300 hover:border-blue-400">
          <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl bg-[#172231] text-blue-400">
            <TrendingUp size={32} strokeWidth={2} />
          </div>

          <div>
            <h3 className="text-[32px] font-bold leading-tight text-white">
              $0.00
            </h3>
            <p className="mt-1 text-[20px] text-[#999999]">
              Cart Value
            </p>
            <p className="mt-1 text-[17px] text-[#555555]">
              Ready to checkout
            </p>
          </div>
        </div>

        {/* Top Products */}
        <div className="flex min-h-45 items-center gap-6 rounded-[35px] border border-[#d1d1d1] bg-[#111111] px-7 py-7 transition-all duration-300 hover:border-yellow-400">
          <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl bg-[#30230d] text-yellow-400">
            <Star size={32} strokeWidth={2} />
          </div>

          <div>
            <h3 className="text-[32px] font-bold leading-tight text-white">
              5
            </h3>
            <p className="mt-1 text-[20px] text-[#999999]">
              Top Products
            </p>
            <p className="mt-1 text-[17px] text-[#555555]">
              Highly rated
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex min-h-45 items-center gap-6 rounded-[35px] border border-[#d1d1d1] bg-[#111111] px-7 py-7 transition-all duration-300 hover:border-purple-400">
          <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl bg-[#291b34] text-purple-400">
            <Tag size={32} strokeWidth={2} />
          </div>

          <div>
            <h3 className="text-[32px] font-bold leading-tight text-white">
              6
            </h3>
            <p className="mt-1 text-[20px] text-[#999999]">
              Categories
            </p>
            <p className="mt-1 text-[17px] text-[#555555]">
              To explore
            </p>
          </div>
        </div>

      </div>

      {/* Shop By Category */}
      <div className="mt-16">

        {/* Category Heading */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[27px] font-bold tracking-tight text-white">
            Shop by Category
          </h2>

          <button className="flex items-center gap-2 text-[20px] font-medium text-[#b7f000] transition-all hover:gap-4">
            View All
            <ArrowRight size={22} />
          </button>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* Electronics */}
          <div className="group flex min-h-48.5 cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f4f4]">
            <Laptop size={42} className="mb-5 text-[#222222] transition-transform group-hover:scale-110" />
            <h3 className="text-[21px] font-medium text-[#171717]">
              Electronics
            </h3>
            <p className="mt-1 text-[17px] text-[#888888]">
              17 items
            </p>
          </div>

          {/* Clothing */}
          <div className="group flex min-h-48.5 cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f4f4]">
            <Shirt size={42} className="mb-5 text-[#222222] transition-transform group-hover:scale-110" />
            <h3 className="text-[21px] font-medium text-[#171717]">
              Clothing
            </h3>
            <p className="mt-1 text-[17px] text-[#888888]">
              2 items
            </p>
          </div>

          {/* Furniture */}
          <div className="group flex min-h-48.5 cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f4f4]">
            <Armchair size={42} className="mb-5 text-[#222222] transition-transform group-hover:scale-110" />
            <h3 className="text-[21px] font-medium text-[#171717]">
              Furniture
            </h3>
            <p className="mt-1 text-[17px] text-[#888888]">
              3 items
            </p>
          </div>

          {/* Home */}
          <div className="group flex min-h-48.5 cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f4f4]">
            <House size={42} className="mb-5 text-[#222222] transition-transform group-hover:scale-110" />
            <h3 className="text-[21px] font-medium text-[#171717]">
              Home
            </h3>
            <p className="mt-1 text-[17px] text-[#888888]">
              14 items
            </p>
          </div>

          {/* Sports */}
          <div className="group flex min-h-48.5 cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f4f4]">
            <Dumbbell size={42} className="mb-5 text-[#222222] transition-transform group-hover:scale-110" />
            <h3 className="text-[21px] font-medium text-[#171717]">
              Sports
            </h3>
            <p className="mt-1 text-[17px] text-[#888888]">
              8 items
            </p>
          </div>

          {/* Accessories */}
          <div className="group flex min-h-48.5 cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f4f4]">
            <Watch size={42} className="mb-5 text-[#222222] transition-transform group-hover:scale-110" />
            <h3 className="text-[21px] font-medium text-[#171717]">
              Accessories
            </h3>
            <p className="mt-1 text-[17px] text-[#888888]">
              6 items
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
