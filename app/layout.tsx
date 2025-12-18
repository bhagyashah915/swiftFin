import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SmoothScroll from "./components/smooth-scroll";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SwiftFin - Smart Finance Management for Everyone",
  description: "Track expenses, manage EMIs, monitor investments, and get personalized finance tips - all in one powerful app. Free forever.",
  icons: {
    icon: '/images/swiftfin-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-['Montserrat']`}
      >
        {/* <SmoothScroll /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
