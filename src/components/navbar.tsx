import {useTranslations} from 'next-intl';
import NavLink from './NavLink';
import LanguageSwitcher from './languageSwitcher';

export default function Navbar() {
  const t = useTranslations('PublicNavigation');

  return (
    <>
    <div className="flex justify-between">

    <nav className="flex gap-6 py-5">
      <NavLink href="/">{t('home')}</NavLink>
      <NavLink href="/about">{t('about')}</NavLink>
      <NavLink href="/contact">{t('contact')}</NavLink>
    </nav>
    <LanguageSwitcher/>
    </div>
    </>
  );
}
