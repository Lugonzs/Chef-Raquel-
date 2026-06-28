import type { Metadata } from "next";
import { Fraunces, Nunito, Caveat, Black_Han_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-fraunces",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});
const blackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-blackhansans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chef Raquel Chang Kim · Cocina coreana en Costa Rica",
  description:
    "Clases de cocina coreana presenciales y en línea, kimchi artesanal y más. Del corazón de Corea a tu mesa.",
  openGraph: {
    title: "Chef Raquel Chang Kim",
    description: "Cocina coreana auténtica · clases, kimchi y mercadito.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${nunito.variable} ${caveat.variable} ${blackHanSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
