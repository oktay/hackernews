import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import MainNav from "@/components/main-nav";
import { SEO_DEFAULTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO_DEFAULTS.TITLE,
  description: SEO_DEFAULTS.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <header>
          <MainNav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
