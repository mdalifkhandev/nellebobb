import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nellebobb",
  description: "Service marketplace landing page inspired by the Figma design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
