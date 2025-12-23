export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[420px] text-center px-6">

        {/* ICON ROW */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[
            { icon: "❤️", color: "text-red-500" },
            { icon: "✓", color: "text-blue-500" },
            { icon: "📄", color: "text-green-500" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-lg">
                <span className={item.color}>{item.icon}</span>
              </div>
              {i < 2 && <div className="w-6 h-[2px] bg-black" />}
            </div>
          ))}
        </div>

        {/* TITLE */}
        <h1 className="text-[32px] font-semibold leading-[38px] text-black mb-2">
          Beyond Resourcing
        </h1>

        {/* SUBTITLE */}
        <p className="text-[16px] leading-[24px] text-gray-500 mb-8">
          Everything you need at your fingertips
        </p>

        {/* EMAIL */}
        <div className="text-left mb-6">
          <label className="block text-sm text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full h-[48px] rounded-md border border-gray-300 px-4 text-sm"
          />
        </div>

        {/* PRIMARY BUTTON */}
        <button className="w-full h-[48px] rounded-md bg-blue-600 text-white text-sm font-medium mb-6">
          Continue with Email
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          Or continue with
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* SOCIAL BUTTONS */}
        <div className="space-y-3">
          <button className="w-full h-[48px] rounded-md border border-gray-300 text-sm">
            Continue with Google
          </button>
          <button className="w-full h-[48px] rounded-md border border-gray-300 text-sm">
            Continue with Apple
          </button>
        </div>

        {/* FOOTNOTE */}
        <p className="text-xs text-gray-400 mt-8">
          Invite-only access. Accounts must be approved.
        </p>

      </div>
    </main>
  );
}

