import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/components";


export const metadata: Metadata = {
  title: "v2_dan",
  description: "A peak into a beautiful mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className='relative antialiased overflow-x-hidden'>
        <Providers>
          <Header/>
          {children}</Providers>
        </body>
    </html>
  );
}