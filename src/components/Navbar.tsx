import Link from 'next/link';
import { Bookmark, Home, Logo, Movies, Tv } from './icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import profile from '../assets/image-avatar.png';
import { NavLinks } from './NavLinks';

const iconLinks = [
  {
    id: 1,
    path: '/',
    icon: <Home />
  },
  {
    id: 2,
    path: '/movies',
    icon: <Movies />
  },
  {
    id: 3,
    path: '/tv-series',
    icon: <Tv />
  },
  {
    id: 4,
    path: '/bookmarked',
    icon: <Bookmark />
  }
];

export const Navbar = () => {
  return (
    <header className="bg-main-blue-dark px-4">
      <nav className="flex justify-between items-center h-full">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-2">
          {iconLinks.map((link) => (
            <NavLinks key={link.id} {...link} />
          ))}
        </div>
        <Avatar className="size-6 border">
          <AvatarImage src={profile.src} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};
