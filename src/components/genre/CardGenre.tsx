import Link from "next/link";

export const CardGenre = ({ id, name }) => {
  return (
    <>
      <Link
        href={``}
        // onClick={() => console.log(`Pronto te enviare a un genero ${name}`)}
        className="m-2 h-44 w-44 bg-emerald-500 text-center text-lg"
      >
        {name}
      </Link>
    </>
  );
};
