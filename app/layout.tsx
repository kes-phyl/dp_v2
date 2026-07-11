import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/components";


export const metadata: Metadata = {
  title: "Dan Phylbert",
  description: "A peak into a beautiful mind",
  icons: {
    icon: "/logo_name.png",
  },
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