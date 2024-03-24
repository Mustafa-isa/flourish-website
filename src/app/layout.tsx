import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_component/Footer";
import Header from "./_component/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ecommerce App",
  description: "Flourish",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" bg-slate-100 min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
