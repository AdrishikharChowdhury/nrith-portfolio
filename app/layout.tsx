import type { Metadata } from "next";
import { Space_Grotesk,Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CONTENT } from "@/src/content";

const spaceGrotesk = Space_Grotesk({
  variable: "--space-grotesk-font",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--jakarta-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: CONTENT.page.title,
  description: CONTENT.page.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
