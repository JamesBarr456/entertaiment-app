import Link from "next/link";
import { Bookmark, Home, Logo, Movies, Tv } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import profile from "../assets/image-avatar.png";
import { NavLinks } from "./NavLinks";
import { Film, LogOut, Settings, User, Users } from "lucide-react";

const iconLinks = [
  {
    id: 1,
    path: "/",
    icon: <Home />,
  },
  {
    id: 2,
    path: "/movies",
    icon: <Movies />,
  },
  {
    id: 3,
    path: "/tv-series",
    icon: <Tv />,
  },
  {
    id: 4,
    path: "/bookmarked",
    icon: <Bookmark />,
  },
];

export const Navbar = () => {
  return (
    <header className="-mx-4 md:-mx-0 md:pt-6 2xl:pt-0">
      <nav className="flex h-14 items-center justify-between bg-main-blue-dark px-4 md:h-[72px] md:rounded-xl 2xl:h-screen 2xl:max-h-[960px] 2xl:w-24 2xl:flex-col 2xl:gap-14 2xl:p-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-2 2xl:flex-col 2xl:gap-6">
          {iconLinks.map((link) => (
            <NavLinks key={link.id} {...link} />
          ))}
        </div>
        <div className="hidden 2xl:flex 2xl:flex-grow"></div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="size-6 border md:size-8">
              <AvatarImage src={profile.src} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </nav>
    </header>
  );
};
