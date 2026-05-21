import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menu Profit Analyzer — Real-Time Margin Tracking for Restaurants",
  description: "Connect your POS and supplier APIs to track real-time profit margins per menu item. Get cost alerts and menu optimization recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e4df3229-a8d0-4dc1-8356-6b24985e6ba2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
