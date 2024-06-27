import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import MainHeader from "@/components/main-header";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainHeader />
          <main className="pt-4 pb-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
