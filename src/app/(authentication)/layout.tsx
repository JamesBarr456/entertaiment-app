import { Logo } from "@/components/icons";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-main-blue-very-dark h-screen w-full flex flex-col items-center pt-12 gap-14 px-6 overflow-auto">
        {/* Aca hay que poner los componentes de sign In y Login */}
        <div>
          <Logo width={33} height={27} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
