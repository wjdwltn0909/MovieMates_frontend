import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>MovieMates</title>
      </head>
      <body className={inter.className}>
        <div> 룰루랄라</div>
        {children}
      </body>
    </html>
  );
}
