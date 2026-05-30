import "./globals.css";
import "./fx.css";
import WistiaScripts from "@/components/WistiaScripts";

export const metadata = {
  title: "Outside Notes - Joab",
  description:
    "Masterclass Outside Sem Segredos — técnicas testadas para improvisar fora da escala sem medo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WistiaScripts />
      </body>
    </html>
  );
}
