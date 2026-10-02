import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdFusion AI | Advertising Intelligence",
  description:
    "AI-powered multimodal advertising intelligence, campaign orchestration and optimization platform.",
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