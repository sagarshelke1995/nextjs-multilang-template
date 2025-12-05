import Image from "next/image";
import Link from "next/link";
import { ArrowRight, StarsIcon, CornerRightDown } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div className="relative py-14 px-6 md:px-20 lg:px-32 grid">
      {/* Top Badge */}
      <div className="border mb-4 w-fit mx-auto py-1.5 px-3 rounded-full bg-background">
        <a className="hover:underline" href="/">
          <p className="text-xs flex items-center justify-center gap-1">
            <StarsIcon className="h-4 w-4" />
            {t("badge")}
            <ArrowRight className="h-4 w-4" />
          </p>
        </a>
      </div>

      {/* Title + Subtitle */}
      <div className="grid place-content-center sm:text-center gap-2">
        <h2 className="text-3xl text-center max-w-md sm:max-w-3xl md:max-w-5xl 
                       sm:text-4xl font-medium md:text-6xl text-gray-900 dark:text-gray-50">
          {t("title")}
          <span className="animate-text-gradient inline-flex bg-linear-to-r 
                           from-neutral-900 via-slate-500 to-neutral-500 
                           bg-size-[200%_auto] bg-clip-text leading-tight text-transparent 
                           dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            {t("highlight")}
          </span>
        </h2>

        <p className="md:text-xl text-base sm:text-lg text-[13.5px] 
                      max-w-sm md:max-w-2xl text-center sm:mx-auto 
                      text-foreground/70 mt-4">
          {t("description")}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-2.5 mt-10">
        <Button asChild>
          <Link href="/download" className="gap-2">
            {t("downloadBtn")}
            <CornerRightDown className="!h-4 !w-4" />
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center gap-1">
            {t("learnMore")}
            <ArrowRight className="h-4 w-4 -rotate-45" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
