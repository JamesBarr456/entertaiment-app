import "./globals.css";
import { outfit } from "../fonts/fonts";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
