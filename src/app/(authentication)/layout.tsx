import { Logo } from "@/components/icons";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center gap-14 bg-main-blue-very-dark px-6 pt-12">
        {/* Aca hay que poner los componentes de sign In y Login */}
        <div>
          <Logo />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
