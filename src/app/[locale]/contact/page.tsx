import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageTitle from '@/components/PageTitle';

export default function Contact({params}: PageProps<'/[locale]/contact'>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('contact');
  return <PageTitle>{t('title')}</PageTitle>;
}
