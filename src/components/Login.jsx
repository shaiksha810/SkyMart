import { Mail, Lock, Eye, ArrowRight } from "lucide-react";

const Login = ({setToggle}) => {
  return (
    <div className="h-full w-[50%] bg-[#0b0b0b] flex items-center justify-center px-8">
      <div className="w-full rounded-[34px] border border-[#292929] bg-[#111111] px-12 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[24px] font-bold leading-none tracking-[-1.2px] text-white">
            Sign in
          </h1>

          <p className="mt-4 text-[16px] font-medium tracking-[-0.4px] text-[#707070]">
            Enter your credentials to continue
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <Mail
              size={22}
              strokeWidth={1.8}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-100 py-4 px-12 rounded-[25px] border border-[#353535] bg-[#1e1e1e] text-[14px] font-medium text-white outline-none placeholder:text-[#666666] focus:border-[#c8ff00]"
            />
          </div>

          <div className="relative ">
            <Lock
              size={22}
              strokeWidth={1.8}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-100 py-4 px-12 rounded-[25px] border border-[#353535] bg-[#1e1e1e] text-[14px] font-medium text-white outline-none placeholder:text-[#666666] focus:border-[#c8ff00]"
            />
            <Eye
              size={22}
              strokeWidth={1.8}
              className="absolute right-22 top-1/2 -translate-y-1/2 text-[#666666]"
            />
          </div>

          <button
            type="button"
            className="flex h-14 w-100 items-center justify-center gap-4 rounded-[25px] bg-[#c8ff00] text-[25px] font-semibold tracking-[-0.5px] text-black"
          >
            <span className="text-[20px]">Sign in</span>

            <ArrowRight size={25} strokeWidth={2} />
          </button>
        </div>

        <p className="mt-10 text-center text-[16px] font-medium tracking-[-0.3px] text-[#686868]">
          Don't have an account?
          <span 
           onClick={() => setToggle(true) }
          className="font-bold text-[#c8ff00] px-2 cursor-pointer">
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}


export default Login