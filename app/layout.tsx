import type { Metadata } from "next";
import { satoshi } from "@/lib/fonts";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CBSE 100 Most-Asked Questions | Boost Board Exam Scores",
  description: "Master the 100 most-repeated CBSE questions in 2 hours.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBNF4R85');
          `}
        </Script>
      </head>

      <body className={`${satoshi.variable} font-sans antialiased`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBNF4R85"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Razorpay */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
