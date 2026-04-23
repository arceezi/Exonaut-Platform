import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exoasia Exonaut Portal",
  description: "Frontend prototype for the Exonaut platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
