export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <h1>desde layout autenticacion</h1>
        {/* Aca hay que poner los componentes de sign In y Login */}

        <div>{children}</div>
      </div>
    </div>
  );
}
