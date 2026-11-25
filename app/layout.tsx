import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CONTENT } from "@/src/content";

const barlowCondensed = localFont({
  src: "../public/assets/fonts/barlow-condensed-900.woff2",
  variable: "--barlow-condensed-font",
  weight: "900",
  display: "swap",
});

const outfit = localFont({
  src: "../public/assets/fonts/outfit-variable.woff2",
  variable: "--outfit-font",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: CONTENT.page.title,
  description: CONTENT.page.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${outfit.variable}`}>
      <body>
        <noscript>
          <style>{`#site-loader { display: none; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
