import { Logo } from "@/components/icons";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center gap-14 overflow-auto bg-main-blue-very-dark px-6 pt-12">
        {/* Aca hay que poner los componentes de sign In y Login */}
        <div>
          <Logo width={33} height={27} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
