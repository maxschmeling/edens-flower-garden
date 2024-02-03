import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eden's Flower Garden",
  description: "Buy flowers. Fight cancer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary">{children}</body>
    </html>
  );
}
