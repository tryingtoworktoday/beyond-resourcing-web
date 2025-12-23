export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <div style={{ width: "360px", textAlign: "center" }}>
        {/* ICON STRIP — INLINE, JOINED */}
        <svg
          width="180"
          height="40"
          viewBox="0 0 180 40"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", margin: "0 auto 24px auto" }}
        >
          {/* LEFT */}
          <circle cx="20" cy="20" r="16" stroke="#0f172a" strokeWidth="2" fill="white" />
          <path
            d="M20 26s-6-4.2-6-8.4a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5C28 21.8 20 26 20 26z"
            fill="#ef4444"
          />

          <line x1="36" y1="20" x2="76" y2="20" stroke="#0f172a" strokeWidth="2" />

          {/* MIDDLE */}
          <circle cx="90" cy="20" r="16" stroke="#0f172a" strokeWidth="2" fill="white" />
          <path
            d="M84 20l4 4 8-8"
            stroke="#2563eb"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <line x1="106" y1="20" x2="146" y2="20" stroke="#0f172a" strokeWidth="2" />

          {/* RIGHT */}
          <circle cx="160" cy="20" r="16" stroke="#0f172a" strokeWidth="2" fill="white" />
          <path
            d="M154 14h8l4 4v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* TITLE */}
        <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "8px" }}>
          Beyond Resourcing
        </h1>

        <p style={{ color: "#6b7280", marginBottom: "24px" }}>
          Everything you need at your fingertips
        </p>

        {/* EMAIL */}
        <div style={{ textAlign: "left", marginBottom: "12px" }}>
          <label style={{ fontSize: "14px", color: "#374151" }}>
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "6px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          />
        </div>

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            fontWeight: 600,
            border: "none",
            marginBottom: "16px",
            cursor: "pointer",
          }}
        >
          Continue with Email
        </button>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
          <span style={{ margin: "0 12px", fontSize: "12px", color: "#6b7280" }}>
            Or continue with
          </span>
          <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
        </div>

        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            background: "white",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          Continue with Google
        </button>

        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            background: "white",
            cursor: "pointer",
          }}
        >
          Continue with Apple
        </button>

        <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "20px" }}>
          Invite-only access. Accounts must be approved.
        </p>
      </div>
    </main>
  );
}
