import {Locale} from 'next-intl';

export const locales = ['en', 'de', 'fr' , 'tr' , 'pt' , 'ru'] as const;

export const defaultLocale: Locale = 'en';

export const localePrefix = 'as-needed';

export const COOKIE_NAME = 'NEXT_LOCALE';
