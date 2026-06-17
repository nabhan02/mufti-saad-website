import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/footer/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mufti Saad Haque | Scholar, Imam & Mufti",
  description:
    "Mufti Saad Haque — Hafiz of the Qur'an, graduate of the Alimiyyah program, and specialist in Islamic jurisprudence (Iftaa). Director and Head Imam of Zakaria Islamic Academy in Northern Virginia. Religious guidance, classes, counseling, and Hajj & Umrah.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
