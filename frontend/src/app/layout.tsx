import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axis Studios - Official Store",
  description: "Shop Men's, Women's, Kid's, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
