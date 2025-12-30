import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});
export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
  // weight:
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-one.vercel.app"),

  title: {
    default: "Hero Kidz | Educational Toys & Learning Products for Kids",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz offers high-quality educational toys and learning boards designed to boost creativity, counting skills, and cognitive development in children.",

  keywords: [
    "Hero Kidz",
    "educational toys",
    "kids learning toys",
    "counting board",
    "math learning toys",
    "Bangladesh kids toys",
    "children educational products",
  ],

  authors: [{ name: "Hero Kidz Team" }],
  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  openGraph: {
    title: "Hero Kidz | Educational Toys for Smart Kids",
    description:
      "Discover safe, fun, and educational toys that help children learn numbers, counting, and basic math through play.",
    url: "https://hero-kidz-one.vercel.app",
    siteName: "Hero Kidz",
    images: [
      {
        url: "https://i.ibb.co.com/rRBHzs2t/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz – Educational Toys for Kids",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Educational Toys for Kids",
    description:
      "Fun & educational toys that help children learn through play. Safe, engaging, and parent-approved.",
    images: ["https://i.ibb.co.com/rRBHzs2t/image.png"],
    creator: "@herokidz",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "https://i.ibb.co.com/0V2RJ7t8/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100svh-302px)]">
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
