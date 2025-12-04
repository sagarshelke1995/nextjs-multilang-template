# Next.js 16 Multilanguage (next-intl)

Default Locale Without Prefix (English) + 5 Languages

**🌍 Next.js 16 + next-intl Multilanguage Setup**

This repository demonstrates a multilanguage Next.js 16 project using next-intl, where:
English (en) is default and has no prefix
   1. /about
Other languages use prefix
    1. /de/about
    2. /fr/about
    3. /tr/about
    4. /pt/about
    5. /ru/about
✔ Works seamlessly with server components, middleware, and locale-based routing.
✔ Supports cookie-based locale detection using NEXT_LOCALE.

## 🚀 Features

    🌐 6 languages: en, de, fr, tr, pt, ru
    🏷 No /en prefix — uses localePrefix: "as-needed"
    🔄 Automatic redirect by locale
    🍪 Locale stored in NEXT_LOCALE cookie
    ⚙️ App Router based setup: /app/[locale]/...
    🧩 Dynamic locale switching

## 📦 Installation

git clone https://github.com/sagarshelke1995/nextjs-multilang-template.git
npm i
npm run dev
