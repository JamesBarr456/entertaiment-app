import { Logo } from "@/components/icons";
import Link from "next/link";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="flex h-screen w-full flex-col items-center gap-14 overflow-auto bg-main-blue-very-dark px-6 pt-12 transition-all duration-300 ease-in-out md:pt-20">
    <div className="flex flex-col items-center">
      {/* Aca hay que poner los componentes de sign In y Login */}
      <div className="mb-16 mt-12">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>

      <main>{children}</main>
    </div>
  );
}
