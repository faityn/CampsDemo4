import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated tourism lodges",
  description: "Mongolian gers, fresh air, and quiet escapes.",
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
