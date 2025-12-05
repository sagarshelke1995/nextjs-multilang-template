import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageTitle from '@/components/PageTitle';
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Hero from "@/components/Hero"


export default function Index({params}: PageProps<'/[locale]'>) {
   const {locale} = use(params);
   const t = useTranslations('Index');
   setRequestLocale(locale as Locale);
   return (
    <>
    <Hero />
    </>
   )
}

