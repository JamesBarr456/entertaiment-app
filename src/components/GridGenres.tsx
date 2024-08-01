interface Props {
  children: React.ReactNode;
}

export const GridCards = ({ children }: Props) => {
  return (
    <>
      <section className="my-4 flex flex-wrap justify-between gap-2">
        {children}
      </section>
    </>
  );
};
