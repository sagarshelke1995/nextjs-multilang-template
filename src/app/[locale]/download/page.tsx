import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageTitle from '@/components/PageTitle';

export default function page({params}: PageProps<'/[locale]/faq'>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('faq');
  return (
       <div className="max-w-6xl p-5 mx-auto">
        <div className="py-20 mx-auto w-max text-xl">
         Download or clone from github
        </div>
       </div>
  )
}
