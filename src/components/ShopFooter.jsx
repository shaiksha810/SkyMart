
import React from "react";

function ShopFooter() {
  return (
    <footer className="w-full border-t border-[#d4d4d4] bg-[#0b0b0b] py-12 px-4">

      <div className="flex flex-col items-center justify-center gap-2">

        <h2 className="text-2xl font-semibold text-[#c4ff00]">
          SkyMart
        </h2>

        <p className="text-sm sm:text-base text-[#666666] text-center">
          © 2025 SkyMart · Built with React + Redux + TanStack Query
        </p>

      </div>

    </footer>
  );
}

export default ShopFooter;
