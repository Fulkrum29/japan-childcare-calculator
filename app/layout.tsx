import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Japan Childcare Cost Calculator | Daycare & Kindergarten Fee Estimator",

  description:
    "Estimate daycare and kindergarten childcare fees across Japan based on household income, child age, care hours, and municipality averages.",

  keywords: [
    "Japan childcare calculator",
    "Japan daycare cost",
    "Tokyo daycare fees",
    "Japan kindergarten cost",
    "Hoikuen calculator",
    "Yochien calculator",
    "Japan childcare fees",
    "Tokyo childcare cost",
    "Japan parenting tools",
  ],

  authors: [{ name: "Japan Childcare Calculator" }],

  openGraph: {
    title:
      "Japan Childcare Cost Calculator | Daycare & Kindergarten Fee Estimator",

    description:
      "Estimate childcare and kindergarten costs across Japan instantly.",

    url: "https://japan-childcare-calculator.vercel.app/",

    siteName: "Japan Childcare Calculator",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

  {children}

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-R8WCPGZGCQ"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-R8WCPGZGCQ');
    `}
  </Script>

</body>
    </html>
  );
}