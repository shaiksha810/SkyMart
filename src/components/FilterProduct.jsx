
import React from "react";
import { Search, ChevronDown } from "lucide-react";

function FilterProduct() {
  return (
    <section className="w-full bg-[#0b0b0b] px-5 sm:px-7 py-10">

      {/* Heading */}
      <div className="mb-12">

        <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f5f5]">
          All Products
        </h1>

        <p className="mt-3 text-lg text-[#666666]">
          50 products found
        </p>

      </div>

      {/* Search & Filters */}
      <div className="flex flex-col lg:flex-row items-center gap-4 rounded-3xl border border-[#d4d4d4] p-5">

        {/* Search Input */}
        <div className="flex w-full flex-1 items-center gap-4 rounded-[22px] border border-[#353535] bg-[#1c1c1c] px-5 py-4">

          <Search
            size={22}
            className="shrink-0 text-[#666666]"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-base text-white outline-none placeholder:text-[#666666]"
          />

        </div>

        {/* Category Filter */}
        <div className="relative w-full lg:w-60">

          <select
          onChange={(e) => console.log(e.target.value)
          }
            defaultValue=""
            className="w-full appearance-none rounded-[22px] border border-[#353535] bg-[#1c1c1c] px-6 py-4 pr-12 text-base text-white outline-none cursor-pointer"
          >
            <option value="All Categories" >
              All Categories
            </option>
            <option value=" Mens Clothing" >
              Mens Clothing
            </option>
            <option value="Jewellery" >
              Jewellery
            </option>
            <option value=" Electronics" >
              Electronics
            </option>
            <option value="Womens Clothing" >
              Womens Clothing
            </option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#666666]"
          />

        </div>

        {/* Sort Filter */}
        <div className="relative w-full lg:w-67.5">

          <select
            defaultValue="featured"
            className="w-full appearance-none rounded-[22px] border border-[#353535] bg-[#1c1c1c] px-6 py-4 pr-12 text-base text-white outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#666666]"
          />

        </div>

      </div>

    </section>
  );
}

export default FilterProduct;
