import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {locales} from '@/config';
import  Header  from "@/components/Header"
import  Footer  from "@/components/Footer"
import { ThemeProvider } from "@/components/utils/theme-provider";

import {Inter} from 'next/font/google';
import {ReactNode} from 'react';
import "../../globals.css"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

type Props = {
  children: ReactNode;
  locale: string;
};
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'next-intl-mixed-routing (public)'
};



export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  // Ensure that the incoming locale is valid
  const {locale} = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (

      <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body>
          <NextIntlClientProvider>
             <ThemeProvider attribute="class" defaultTheme="light"> 
              <main className="relative overflow-hidden">    
              <Header/>
                {children}
              </main>      
              </ThemeProvider>
          </NextIntlClientProvider>
        </body>
    </html>  
  );
}
