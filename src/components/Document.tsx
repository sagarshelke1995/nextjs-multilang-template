import {Inter} from 'next/font/google';
import {ReactNode} from 'react';
import "../globals.css"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

type Props = {
  children: ReactNode;
  locale: string;
};

export default function Document({children, locale}: Props) {
  return (
      <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
