interface Props {
  children: React.ReactNode;
}

export const GridCards = ({ children }: Props) => {
  return (
    <>
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 2xl:grid-cols-4">
        {children}
      </section>
    </>
  );
};
