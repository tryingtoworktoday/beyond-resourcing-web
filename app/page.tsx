export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "48px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* ICON STRIP — EXACT FIGMA SVG */}
      {/* PASTE THE SVG YOU COPIED FROM FIGMA BELOW */}
      {/* DO NOT ADD OR REMOVE ANYTHING INSIDE THE SVG */}

      <svg
        width="180"
        height="40"
        viewBox="0 0 180 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- ⬇️ REPLACE THIS COMMENT WITH YOUR COPIED SVG CONTENT ⬇️ -->
      </svg>

      {/* TITLE */}
      <h1
        style={{
          marginTop: "24px",
          fontSize: "32px",
          fontWeight: 600,
          color: "#0f172a",
        }}
      >
        Beyond Resourcing
      </h1>

      {/* SUBTITLE */}
      <p
        style={{
          marginTop: "8px",
          fontSize: "16px",
          color: "#64748b",
        }}
      >
        Everything you need at your fingertips
      </p>
    </main>
  );
}
