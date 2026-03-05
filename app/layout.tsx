import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CBC Advocacia Especializada | Castro Barros Cavalcante",
  icons: {
    icon: "/images/logo-cbc-icon.ico",
  },
  description:
    "Escritório de advocacia especializada em Arapiraca/AL. Assessoria jurídica para empresas com mais de 10 anos de experiência, equipe multidisciplinar e presença regional.",
  keywords: [
    "advocacia",
    "escritório de advocacia",
    "assessoria jurídica",
    "Arapiraca",
    "Alagoas",
    "direito empresarial",
    "CBC Advocacia",
  ],
  openGraph: {
    title: "CBC Advocacia Especializada",
    description:
      "Escritório reconhecido em Arapiraca/AL pela qualidade, eficiência e excelência na prestação de serviços jurídicos.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
