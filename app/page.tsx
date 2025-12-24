// app/page.tsx
import IconStrip from "./IconStrip";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-md px-6 text-center">
        {/* ICON STRIP — EXACT FIGMA SVG */}
        <div className="flex justify-center mb-6">
          <IconStrip />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">
          Beyond Resourcing
        </h1>

        {/* SUBTITLE */}
        <p className="text-slate-500 mb-8">
          Everything you need at your fingertips
        </p>

        {/* EMAIL */}
        <div className="text-left mb-4">
          <label className="block text-sm text-slate-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* PRIMARY BUTTON */}
        <button className="w-full rounded-md bg-blue-600 text-white py-2 mb-6 flex items-center justify-center gap-2 hover:bg-blue-700">
          Continue with Email
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-sm text-slate-400">Or continue with</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* SOCIAL BUTTONS */}
        <button className="w-full rounded-md border border-slate-300 py-2 mb-3">
          Continue with Google
        </button>

        <button className="w-full rounded-md border border-slate-300 py-2 mb-6">
          Continue with Apple
        </button>

        {/* FOOTER */}
        <p className="text-sm text-slate-400">
          Continue to demo (no login required)
        </p>
      </div>
    </main>
  );
}
