import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '700'], // Add desired font weights
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Leanne Goldsmith | Frontend Portfolio",
  description: "Frontend portfolio showcasing my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col object-cover bg-cover bg-center bg-no-repeat bg-faint-triangles`}
      >
        <Navbar />
        <main className="flex-grow w-full h-screen flex items-center pt-[149px] pb-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
