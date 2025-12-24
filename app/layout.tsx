// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Beyond Resourcing",
  description: "Everything you need at your fingertips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
