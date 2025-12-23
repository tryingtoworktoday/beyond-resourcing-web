export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>Beyond Resourcing</span>
          <span className="text-sm font-normal text-blue-600">
            A Productive You
          </span>
        </div>
        <div className="h-6 w-6 rounded-full border border-zinc-300" />
      </header>

      {/* Main */}
      <main className="flex flex-col items-center justify-center px-6 pt-24 text-center">
        {/* Icons */}
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black text-red-500">
            ♥
          </div>
          <div className="h-[2px] w-6 bg-black" />
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black text-blue-500">
            ✓
          </div>
          <div className="h-[2px] w-6 bg-black" />
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black text-green-500">
            📄
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-2 text-4xl font-semibold">
          Beyond Resourcing
        </h1>
        <p className="mb-10 text-zinc-500">
          Everything you need at your fingertips
        </p>

        {/* Invite-only Auth */}
        <div className="w-full max-w-md">
          <label className="mb-2 block text-left text-sm text-zinc-600">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mb-4 w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
          >
            Continue with Email
          </button>

          <div className="mb-6 flex items-center gap-4 text-sm text-zinc-400">
            <div className="h-px flex-1 bg-zinc-200" />
            Or continue with
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <div className="flex flex-col gap-3">
            <button
              disabled
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-400"
            >
              Continue with Google (coming soon)
            </button>

            <button
              disabled
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-400"
            >
              Continue with Apple (coming soon)
            </button>
          </div>

          <p className="mt-8 text-sm text-zinc-400">
            Invite-only access. Accounts must be approved.
          </p>
        </div>
      </main>
    </div>
  );
}
