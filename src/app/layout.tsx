import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "AUTO-MAX Serwis Klimatyzacji | Serwis i Mobilny Dojazd",
  description:
    "AUTO-MAX Serwis Klimatyzacji - kompleksowy serwis klimatyzacji samochodowej, serwis mobilny z dojazdem do klienta, diagnostyka i regeneracja sprezarek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
