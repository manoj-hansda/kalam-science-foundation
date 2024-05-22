import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import BasePage from "@/components/BasePage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalam Science Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>

        <BasePage>
          {children}
        </BasePage>
      </body>
    </html>
  );
}
