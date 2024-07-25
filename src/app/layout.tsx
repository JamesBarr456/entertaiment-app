import "./globals.css";
import { outfit } from "../fonts/fonts";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={cn(outfit.className, "bg-main-blue-very-dark")}>
      <body className="container bg-inherit">{children}</body>
    </html>
  );
}
