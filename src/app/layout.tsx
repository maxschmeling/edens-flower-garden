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
      <header>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eden's Flower Garden" />
        <meta property="og:url" content="https://edensflowergarden.com/" />
        <meta property="og:description" content="Buy flowers. Fight cancer." />
        <meta property="og:site_name" content="Eden's Flower Garden" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Eden's Flower Garden" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:text:title" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://pbs.twimg.com/card_img/1759750663184293888/UVFHh3-h?format=jpg&name=large" />
        <meta property="article:publisher" content="https://edensflowergarden.com/" />
        <meta name="twitter:text:title" content="Eden's Flower Garden" />
        <meta name="twitter:title" content="Eden's Flower Garden" />
        <meta name="twitter:description" content="Buy flowers. Fight cancer." />
        <meta name="twitter:image:src" content="https://edensflowergarden.com/preview.jpg" />
      </header>
      <body className="font-primary">{children}</body>
    </html>
  );
}
