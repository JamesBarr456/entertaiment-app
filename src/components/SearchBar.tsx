"use client";
import { useForm } from "react-hook-form";
import { Search } from "./icons";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

interface NameFormSearch {
  name: string;
}
export const SearchBar = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NameFormSearch>();

  const onSubmit = handleSubmit((data) => {
    if (data.name.length === 0) return; //Me aseguro que si se da submit no me mande a la pagina con el objeto vacio
    reset();
    router.push(`/search/${data.name}`);
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center gap-3 2xl:pt-8">
        <Search />
        <Input
          {...register("name")}
          type="search"
          className="bg-transparent pb-0 text-base font-light text-white placeholder:text-white/40 md:text-2xl md:placeholder:text-2xl"
          placeholder="Search for movies or TV series"
          autoComplete="off"
        />
      </div>
    </form>
  );
};
