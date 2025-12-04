import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'fr' , 'tr' , 'pt', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' // 👈 IMPORTANT
});
