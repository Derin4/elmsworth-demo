import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./_style/globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Elmsworth Properties — Elena Marsh, Realtor",
  description:
    "Homes for sale in Maple Ridge, Ashford, and Millbrook. A demo site built for the MyClickAid gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${cormorant.variable} ${manrope.variable}`}>
      <body className='font-body text-forest bg-linen min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
