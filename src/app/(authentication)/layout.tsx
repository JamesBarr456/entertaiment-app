export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        {/* Aca hay que poner los componentes de sign In y Login */}

        <div>{children}</div>
      </div>
    </div>
  );
}
