
import React from "react";
import { Zap, Shield, Tag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d]">

      {/* Shopping Benefits */}
      <section className="min-h-88.5 px-6 pt-14 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Fast Delivery */}
          <div className="flex min-h-29.25 items-center gap-6 rounded-[25px] border border-[#d1d1d1] bg-[#111111] px-8 transition-all duration-300 hover:border-[#b7f000]">
            <Zap
              size={36}
              strokeWidth={2}
              className="shrink-0 text-[#b7f000]"
            />

            <div>
              <h3 className="text-[20px] font-semibold text-[#eeeeee]">
                Fast Delivery
              </h3>

              <p className="mt-1 text-[17px] text-[#666666]">
                Same-day on select items
              </p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="flex min-h-29.25 items-center gap-6 rounded-[25px] border border-[#d1d1d1] bg-[#111111] px-8 transition-all duration-300 hover:border-blue-400">
            <Shield
              size={36}
              strokeWidth={2}
              className="shrink-0 text-blue-400"
            />

            <div>
              <h3 className="text-[20px] font-semibold text-[#eeeeee]">
                Secure Payments
              </h3>

              <p className="mt-1 text-[17px] text-[#666666]">
                100% encrypted checkout
              </p>
            </div>
          </div>

          {/* Best Prices */}
          <div className="flex min-h-29.25 items-center gap-6 rounded-[25px] border border-[#d1d1d1] bg-[#111111] px-8 transition-all duration-300 hover:border-green-400">
            <Tag
              size={36}
              strokeWidth={2}
              className="shrink-0 text-green-400"
            />

            <div>
              <h3 className="text-[20px] font-semibold text-[#eeeeee]">
                Best Prices
              </h3>

              <p className="mt-1 text-[17px] text-[#666666]">
                Price-match guarantee
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Bottom */}
      <div className="flex min-h-40.25 flex-col items-center justify-center border-t border-[#454545] px-5 text-center">

        <h2 className="text-[28px] font-medium tracking-tight text-[#b7f000]">
          SkyMart
        </h2>

        <p className="mt-2 text-[17px] text-[#666666]">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>

      </div>

    </footer>
  );
};

export default Footer;
