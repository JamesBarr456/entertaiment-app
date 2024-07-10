'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

interface Props {
  id: number;
  path: string;
  icon: JSX.Element;
}

export const NavLinks = ({ icon, path }: Props) => {
  const currentPath = usePathname();

  return (
    <Button asChild variant="ghost" size="icon">
      <Link href={path}>{icon}</Link>
    </Button>
  );
};
