export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[380px] text-center px-6">

        {/* ICON STRIP — SINGLE SVG */}
        <div className="flex justify-center mb-8">
          <svg
            width="184"
            height="40"
            viewBox="0 0 184 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left circle */}
            <circle cx="20" cy="20" r="16" stroke="#000" strokeWidth="2" />
            <path
              d="M20 26s-6-4.3-6-8.5a4 4 0 0 1 7-2.5A4 4 0 0 1 28 17.5C28 21.7 22 26 22 26z"
              fill="#EF4444"
            />

            {/* Connecting line */}
            <line x1="36" y1="20" x2="76" y2="20" stroke="#000" strokeWidth="2" />

            {/* Middle circle */}
            <circle cx="92" cy="20" r="16" stroke="#000" strokeWidth="2" />
            <path
              d="M86 20l4 4 8-8"
              stroke="#2563EB"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Connecting line */}
            <line x1="108" y1="20" x2="148" y2="20" stroke="#000" strokeWidth="2" />

            {/* Right circle */}
            <circle cx="164" cy="20" r="16" stroke="#000" strokeWidth="2" />
            <path
              d="M158 14h8l4 4v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z"
              stroke="#9CA3AF"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <h1 className="text-[30px] font-medium leading-[36px] text-black mb-2">
          Beyond Resourcing
        </h1>

        <p className="text-[15px] leading-[22px] text-[#64748b] mb-8">
          Everything you need at your fingertips
        </p>

        <div className="text-left mb-5">
          <label className="block text-sm text-[#475569] mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full h-[44px] rounded-md border border-[#cbd5e1] px-4 text-sm"
          />
        </div>

        <button className="w-full h-[44px] rounded-md bg-[#2f5bea] text-white text-sm font-medium mb-6">
          Continue with Email
        </button>

        <div className="flex items-center gap-4 text-xs text-[#94a3b8] mb-6">
          <div className="flex-1 h-px bg-[#e2e8f0]" />
          Or continue with
          <div className="flex-1 h-px bg-[#e2e8f0]" />
        </div>

        <div className="space-y-3">
          <button className="w-full h-[44px] rounded-md border border-[#cbd5e1] text-sm font-medium">
            Continue with Google
          </button>
          <button className="w-full h-[44px] rounded-md border border-[#cbd5e1] text-sm font-medium">
            Continue with Apple
          </button>
        </div>

        <p className="text-xs text-[#94a3b8] mt-8">
          Invite-only access. Accounts must be approved.
        </p>

      </div>
    </main>
  );
}
