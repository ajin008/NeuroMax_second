import type { Metadata } from "next";
import { satoshi } from "@/lib/fonts";
import "./globals.css";
// 1. Import the Script component
import Script from "next/script";

export const metadata: Metadata = {
  title: "CBSE 100 Most-Asked Questions | Boost Board Exam Scores",
  description: "Master the 100 most-repeated CBSE questions in 2 hours.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased`}>
        {children}

        {/* 2. Load the Razorpay Checkout script */}
        {/* 'beforeInteractive' or 'lazyOnload' are best for SaaS performance */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
