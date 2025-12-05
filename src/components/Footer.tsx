"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t bg-background py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid gap-10 md:grid-cols-3">

        {/* Logo + Text */}
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            {t("brand")}
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            {t("tagline")}
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold text-foreground">{t("linksTitle")}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground flex space-x-5">
            <li><Link className="hover:text-primary" href="/">{t("home")}</Link></li>
            <li><Link className="hover:text-primary" href="/about">{t("about")}</Link></li>
            <li><Link className="hover:text-primary" href="/contact">{t("contact")}</Link></li>
            <li><Link className="hover:text-primary" href="/faq">{t("faq")}</Link></li>
          </ul>
        </div>

        <div>
               {/* Social Icons */}
                  <h3 className="font-semibold text-foreground">Media</h3>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-12 pt-6 border-t text-sm text-muted-foreground">
        © {new Date().getFullYear()} {t("brand")}. {t("rights")}.
      </div>
    </footer>
  );
}
