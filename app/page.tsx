export default function IconStrip() {
  return (
    <svg
      width="180"
      height="40"
      viewBox="0 0 180 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left circle */}
      <circle cx="20" cy="20" r="16" stroke="#0f172a" strokeWidth="2" fill="white" />
      <path
        d="M20 26s-6-4.2-6-8.4a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5C28 21.8 20 26 20 26z"
        fill="#ef4444"
      />

      {/* Line */}
      <line x1="36" y1="20" x2="76" y2="20" stroke="#0f172a" strokeWidth="2" />

      {/* Middle circle */}
      <circle cx="90" cy="20" r="16" stroke="#0f172a" strokeWidth="2" fill="white" />
      <path
        d="M84 20l4 4 8-8"
        stroke="#2563eb"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Line */}
      <line x1="106" y1="20" x2="146" y2="20" stroke="#0f172a" strokeWidth="2" />

      {/* Right circle */}
      <circle cx="160" cy="20" r="16" stroke="#0f172a" strokeWidth="2" fill="white" />
      <path
        d="M154 14h8l4 4v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
