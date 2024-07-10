import { Outfit } from 'next/font/google';

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '500'],
  variable: '--font-outfit'
});
