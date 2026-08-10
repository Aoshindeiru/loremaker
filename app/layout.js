import "./globals.css";

export const metadata = {
  title: "Loreify",
  description: "Dağınık fikirlerini saniyeler içinde Fandom wikisine dönüştür.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
