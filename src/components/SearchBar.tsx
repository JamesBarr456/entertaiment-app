import { Search } from "./icons";
import { Input } from "./ui/input";

export const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 2xl:pt-8">
      <Search />
      <Input
        type="search"
        className="bg-transparent pb-0 text-base font-light text-white placeholder:text-white/40 md:text-2xl md:placeholder:text-2xl"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};
