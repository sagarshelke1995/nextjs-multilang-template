'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Locale, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation.public';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const locales: { code: Locale; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' },
    { code: 'tr', label: 'Turkish' },
    { code: 'pt', label: 'Portuguese' },
    { code: 'ru', label: 'Russian' }
  ];

  // -----------------------------
  // Close dropdown when clicked outside
  // -----------------------------
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border bg-white dark:bg-neutral-900 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
      >
        <Image
          src={`/${currentLocale}.svg`}
          width={20}
          height={20}
          alt={currentLocale}
        />
        {currentLocale.toUpperCase()}
        <ChevronDown size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="
            absolute mt-2 w-44 rounded-xl border 
            bg-white dark:bg-neutral-900 
            dark:border-neutral-700 shadow-lg z-50
            animate-in fade-in slide-in-from-top-2
          "
        >
          {locales.map((item) => {
            const isActive = currentLocale === item.code;

            return (
              <Link
                key={item.code}
                href={pathname}
                locale={item.code}
                className={`
                  flex items-center gap-2 px-4 py-2 text-sm rounded-md 
                  hover:bg-neutral-100 dark:hover:bg-neutral-800 
                  transition
                  ${isActive ? 'font-bold text-blue-600' : 'text-neutral-700 dark:text-neutral-200'}
                `}
                onClick={() => setOpen(false)}
              >
                <Image
                  src={`/${item.code}.svg`}
                  width={20}
                  height={20}
                  alt={item.label}
                />
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
