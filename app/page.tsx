import { Heart, CheckSquare, FileText } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[380px] text-center px-6">

        {/* ICON ROW */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Icon>
            <Heart className="w-[14px] h-[14px] text-red-500" strokeWidth={1.75} />
          </Icon>
          <Line />
          <Icon>
            <CheckSquare className="w-[14px] h-[14px] text-blue-500" strokeWidth={1.75} />
          </Icon>
          <Line />
          <Icon>
            <FileText className="w-[14px] h-[14px] text-green-500" strokeWidth={1.75} />
          </Icon>
        </div>

        {/* TITLE */}
        <h1 className="text-[30px] font-medium leading-[36px] text-[#0f172a] mb-2">
          Beyond Resourcing
        </h1>

        {/* SUBTITLE */}
        <p className="text-[15px] leading-[22px] text-[#64748b] mb-10">
          Everything you need at your fingertips
        </p>

        {/* EMAIL */}
        <div className="text-left mb-6">
          <label className="block text-sm text-[#475569] mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full h-[44px] rounded-md border border-[#cbd5e1] px-4 text-sm"
          />
        </div>

        {/* PRIMARY BUTTON */}
        <button className="w-full h-[44px] rounded-md bg-[#2f5bea] text-white text-sm font-medium mb-6">
          Continue with Email
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 text-xs text-[#94a3b8] mb-6">
          <div className="flex-1 h-px bg-[#e2e8f0]" />
          Or continue with
          <div className="flex-1 h-px bg-[#e2e8f0]" />
        </div>

        {/* SOCIAL */}
        <div className="space-y-3">
          <button className="w-full h-[44px] rounded-md border border-[#cbd5e1] text-sm font-medium">
            Continue with Google
          </button>
          <button className="w-full h-[44px] rounded-md border border-[#cbd5e1] text-sm font-medium">
            Continue with Apple
          </button>
        </div>

        {/* DEMO */}
        <p className="text-xs text-[#64748b] mt-8 underline cursor-pointer">
          Continue to demo (no login required)
        </p>

      </div>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[34px] h-[34px] rounded-full border border-black flex items-center justify-center">
      {children}
    </div>
  );
}

function Line() {
  return <div className="w-5 h-[1.5px] bg-black" />;
}

