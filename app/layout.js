import "./globals.css";
import { Inter } from "next/font/google";

// Modern ve temiz yazı tipi
const inter = Inter({ subsets: ["latin"] });

// Tarayıcı sekmesinde ve Google'da görünecek SEO ayarları
export const metadata = {
  title: "expLORE | Evrenini Yarat",
  description: "Aklındaki karmaşık fikirleri saniyeler içinde Fandom veritabanına dönüştür.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
