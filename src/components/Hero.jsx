import React from "react";

const Hero = () => {
  return (
    <div>
      <main className="min-h-screen bg-[#101010] p-4 text-white">
        <section className="hero relative min-h-100 overflow-hidden rounded-[36px] border border-[#d1d1d1] px-8 py-16 sm:px-12 lg:px-18">
          {/* Hero Content */}
          <div className="relative z-10 flex min-h-100 flex-col justify-center">
            {/* Greeting */}
            <p className="mb-5 text-[20px] font-medium uppercase tracking-[2px] text-[#b7f000]">
              GOOD MORNING <span className="ml-1">👋</span>
            </p>

            {/* Heading */}
            <h1 className="max-w-187.5 text-5xl font-bold leading-[1.08] tracking-[-2px] sm:text-6xl lg:text-[68px]">
              Welcome back,
              <br />
              <span className="text-[#b7f000]">shaiksha!</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-162.5 text-lg leading-[1.6] text-[#858585] sm:text-[23px]">
              Discover today's picks — hand-curated products across
              <br className="hidden sm:block" />
              electronics, fashion, and more.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4.5">
              <button
                type="button"
                className="flex items-center gap-4 rounded-3xl bg-[#b7f000] px-9 py-4.75 text-[20px] font-semibold text-black transition-all duration-300 hover:bg-[#caff00] hover:shadow-[0_0_25px_rgba(183,240,0,0.2)]"
              >
                Shop Now
                <span className="text-2xl">→</span>
              </button>

              <button
                type="button"
                className="rounded-3xl border border-[#383838] px-9 py-4.5 text-[20px] font-medium text-[#c7c7c7] transition-all duration-300 hover:border-[#b7f000] hover:text-[#b7f000]"
              >
                View All Products
              </button>
            </div>
          </div>

          {/* Right Statistics */}
          <div className="absolute right-[4%] top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4.5 md:flex">
            {/* Products */}
            <div className="flex h-35 w-57 flex-col items-center justify-center rounded-[25px] border border-[#465400] bg-[#20250c]">
              <h2 className="text-[40px] font-bold leading-none text-[#b7f000]">
                20+
              </h2>
              <p className="mt-3 text-[18px] text-[#858585]">
                Products Available
              </p>
            </div>

            {/* Delivery */}
            <div className="flex h-32 w-57 flex-col items-center justify-center rounded-[25px] border border-[#d1d1d1] bg-[#111111]">
              <h2 className="text-[34px] font-semibold leading-none">Free</h2>
              <p className="mt-3 text-[18px] text-[#858585]">
                Delivery on ₹999+
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
