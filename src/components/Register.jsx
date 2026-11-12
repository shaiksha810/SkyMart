import {
  Mail,
  Lock,
  Eye,
  ArrowRight,
  User,
  Zap,
} from "lucide-react";

const Register = ( {setToggle} ) => {
  return (
    <div className="min-h-screen w-full overflow-y-auto bg-[#0b0b0b] px-5 py-10 text-white">
      <div className="flex min-h-full flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8F400]">
            <Zap
              size={24}
              strokeWidth={2.5}
              className="text-black"
            />
          </div>

          <p className="text-[24px] font-semibold tracking-tight text-white">
            Sky<span className="text-[#C8F400]">Mart</span>
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-130 rounded-4xl border border-[#292929] bg-[#111111] px-6 py-8 sm:px-10 sm:py-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[28px] font-bold leading-tight tracking-[-0.8px] text-white">
              Create account
            </h1>

            <p className="mt-3 text-[16px] font-medium text-[#707070]">
              Join SkyMart and start shopping
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Full Name */}
            <div className="relative">
              <User
                size={21}
                strokeWidth={1.8}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
              />

              <input
                type="text"
                placeholder="Full name"
                className="h-15.5 w-full rounded-[20px] border border-[#353535] bg-[#1e1e1e] pl-14.5 pr-5 text-[15px] font-medium text-white outline-none transition-colors placeholder:text-[#666666] focus:border-[#c8ff00]"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail
                size={21}
                strokeWidth={1.8}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
              />

              <input
                type="email"
                placeholder="Email address"
                className="h-15.5 w-full rounded-[20px] border border-[#353535] bg-[#1e1e1e] pl-14.5 pr-5 text-[15px] font-medium text-white outline-none transition-colors placeholder:text-[#666666] focus:border-[#c8ff00]"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={21}
                strokeWidth={1.8}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
              />

              <input
                type="password"
                placeholder="Password (min 6 chars)"
                className="h-15.5 w-full rounded-[20px] border border-[#353535] bg-[#1e1e1e] pl-14.5 pr-14.5 text-[15px] font-medium text-white outline-none transition-colors placeholder:text-[#666666] focus:border-[#c8ff00]"
              />

              <Eye
                size={21}
                strokeWidth={1.8}
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#666666]"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock
                size={21}
                strokeWidth={1.8}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
              />

              <input
                type="password"
                placeholder="Confirm password"
                className="h-15.5 w-full rounded-[20px] border border-[#353535] bg-[#1e1e1e] pl-14.5 pr-5 text-[15px] font-medium text-white outline-none transition-colors placeholder:text-[#666666] focus:border-[#c8ff00]"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              className="group flex h-15.5 w-full items-center justify-center gap-3 rounded-[20px] bg-[#c8ff00] text-[18px] font-semibold text-black transition-colors hover:bg-[#d5ff33]"
            >
              <span>Create account</span>

              <ArrowRight
                size={22}
                strokeWidth={2.2}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-[15px] font-medium text-[#686868]">
            Already have an account?
            <span 
            onClick={() => setToggle(false) }
            className="cursor-pointer font-bold text-[#c8ff00] hover:text-[#d5ff33] px-2">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
