import { Logo } from "@/components/icons";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-main-blue-very-dark h-screen w-full flex flex-col items-center pb-40 pt-12 gap-14 px-6">
        {/* Aca hay que poner los componentes de sign In y Login */}
        <Logo />
        <div>{children}</div>
      </div>
    </div>
  );
}
