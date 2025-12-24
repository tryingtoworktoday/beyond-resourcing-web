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
      <body className="min-h-screen w-full bg-white">
        {/* SHARED ICON STRIP — APPEARS ON PAGE 1 & PAGE 2 */}

        {/* PAGE CONTENT */}
        <main className="w-full flex justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
