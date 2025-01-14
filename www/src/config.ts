export const SITE = {
  title: "Create T3 App",
  description: "The best way to start a full-stack, typesafe Next.js app.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "images/og-image.png",
    alt: "Create T3 App: The best way to start a full-stack, typesafe Next.js app.",
  },
  twitter: "t3dotgg",
};

// This is the type of the frontmatter you put in the docs markdown files.
export interface Frontmatter {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: KnownLanguageCode;
  isMdx?: boolean;
}

export const KNOWN_LANGUAGES = {
  // Add more languages here
  // sv: "Svenska",
  ar: "العربية",
  en: "English",
  es: "Español",
  fr: "Français",
  ja: "日本語",
  pt: "Português",
  ru: "Русский",
  nl: "Nederlands",
  no: "Norsk",
  pl: "Polski",
  uk: "Українська",
  "zh-hans": "简体中文",
} as const;
export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;

export const GITHUB_EDIT_URL = `https://github.com/t3-oss/create-t3-app/tree/main/www`;

export const COMMUNITY_INVITE_URL = `https://t3.gg/discord`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "create-t3-app",
  appId: "0LE5592BV4",
  apiKey: "892c4647b96fe1b3d0b7d8de1c5b5e40",
};

export type OuterHeaders = "Create T3 App" | "Deployment" | "Usage";

export interface SidebarItem<
  TCode extends KnownLanguageCode = KnownLanguageCode,
> {
  text: string;
  link: `${TCode}/${string}`;
}

export type SidebarItemLink = SidebarItem["link"];

export type Sidebar = {
  [TCode in KnownLanguageCode]: {
    [THeader in OuterHeaders]?: SidebarItem<TCode>[];
  };
};
export const SIDEBAR: Sidebar = {
  // For Translations:
  // Keep the "outer headers" in English so we can match them.
  // Translate the "inner headers" to the language you're translating to.
  // Omit any files you haven't translated, they'll fallback to English.
  // Example:
  // sv: {
  //   "Create T3 App": [
  //     { text: "Introduktion", link: "sv/introduction" },
  //     { text: "Installation", link: "sv/installation" },
  //   ],
  //   Usage: [{ text: "Miljövariabler", link: "sv/usage/env-variables" }],
  // },
  ar: {
    "Create T3 App": [
      { text: "مُقدمة", link: "ar/introduction" },
      { text: "لماذا CT3A؟", link: "ar/why" },
      { text: "التثبيت", link: "ar/installation" },
      { text: "(Pages)بِنية المجلد", link: "ar/folder-structure-pages" },
      { text: "أسئلة شائعة", link: "ar/faq" },
      { text: "اعمال بواسطة T3", link: "ar/t3-collection" },
      { text: "ترشيحات أُخري", link: "ar/other-recs" },
    ],
    Usage: [
      { text: "الخُطوات الأُولي", link: "ar/usage/first-steps" },
      { text: "Next.js", link: "ar/usage/next-js" },
      { text: "TypeScript", link: "ar/usage/typescript" },
      { text: "tRPC", link: "ar/usage/trpc" },
      { text: "Prisma", link: "ar/usage/prisma" },
      { text: "NextAuth.js", link: "ar/usage/next-auth" },
      {
        text: "Environment Variables",
        link: "ar/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "ar/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "ar/deployment/vercel" },
      { text: "Docker", link: "ar/deployment/docker" },
    ],
  },
  en: {
    "Create T3 App": [
      { text: "Introduction", link: "en/introduction" },
      { text: "Why CT3A?", link: "en/why" },
      { text: "Installation", link: "en/installation" },
      { text: "Folder Structure (Pages)", link: "en/folder-structure-pages" },
      { text: "Folder Structure (App)", link: "en/folder-structure-app" },
      { text: "FAQ", link: "en/faq" },
      { text: "T3 Collection", link: "en/t3-collection" },
      { text: "Examples", link: "en/examples" },
      { text: "Other Recommendations", link: "en/other-recs" },
    ],
    Usage: [
      { text: "First Steps", link: "en/usage/first-steps" },
      { text: "Next.js", link: "en/usage/next-js" },
      { text: "TypeScript", link: "en/usage/typescript" },
      { text: "tRPC", link: "en/usage/trpc" },
      { text: "Drizzle", link: "en/usage/drizzle" },
      { text: "Prisma", link: "en/usage/prisma" },
      { text: "NextAuth.js", link: "en/usage/next-auth" },
      {
        text: "Environment Variables",
        link: "en/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "en/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "en/deployment/vercel" },
      { text: "Netlify", link: "en/deployment/netlify" },
      { text: "Docker", link: "en/deployment/docker" },
    ],
  },
  es: {
    "Create T3 App": [
      { text: "Introducción", link: "es/introduction" },
      { text: "¿Por qué CT3A?", link: "es/why" },
      { text: "Instalación", link: "es/installation" },
      {
        text: "Estructura de Carpetas (Pages)",
        link: "es/folder-structure-pages",
      },
      { text: "Preguntas Frecuentes", link: "es/faq" },
      { text: "Colección T3", link: "es/t3-collection" },
      { text: "Otras Recomendaciones", link: "es/other-recs" },
    ],
    Usage: [
      { text: "Primeros Pasos", link: "es/usage/first-steps" },
      { text: "Next.js", link: "es/usage/next-js" },
      { text: "TypeScript", link: "es/usage/typescript" },
      { text: "tRPC", link: "es/usage/trpc" },
      { text: "Prisma", link: "es/usage/prisma" },
      { text: "NextAuth.js", link: "es/usage/next-auth" },
      { text: "Variables de Entorno", link: "es/usage/env-variables" },
      { text: "Tailwind CSS", link: "es/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "es/deployment/vercel" },
      { text: "Netlify", link: "es/deployment/netlify" },
      { text: "Docker", link: "es/deployment/docker" },
    ],
  },
  ja: {
    "Create T3 App": [
      { text: "イントロダクション", link: "ja/introduction" },
      { text: "CT3A を選ぶ理由", link: "ja/why" },
      { text: "インストール", link: "ja/installation" },
      { text: "ファルダ構成 (Pages)", link: "ja/folder-structure-pages" },
      { text: "FAQ", link: "ja/faq" },
      { text: "T3 コレクション", link: "ja/t3-collection" },
      { text: "その他のオススメ", link: "ja/other-recs" },
    ],
    Usage: [
      { text: "はじめの一歩", link: "ja/usage/first-steps" },
      { text: "Next.js", link: "ja/usage/next-js" },
      { text: "TypeScript", link: "ja/usage/typescript" },
      { text: "tRPC", link: "ja/usage/trpc" },
      { text: "Prisma", link: "ja/usage/prisma" },
      { text: "NextAuth.js", link: "ja/usage/next-auth" },
      {
        text: "環境変数",
        link: "ja/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "ja/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "ja/deployment/vercel" },
      { text: "Netlify", link: "ja/deployment/netlify" },
      { text: "Docker", link: "ja/deployment/docker" },
    ],
  },
  pl: {
    "Create T3 App": [
      { text: "Wstęp", link: "pl/introduction" },
      { text: "Dlaczego CT3A?", link: "pl/why" },
      { text: "Instalacja", link: "pl/installation" },
      { text: "Struktura Projektu (Pages)", link: "pl/folder-structure-pages" },
      { text: "FAQ", link: "pl/faq" },
      { text: "Kolekcja T3", link: "pl/t3-collection" },
      { text: "Przykłady", link: "pl/examples" },
      { text: "Inne Rekomendacje", link: "pl/other-recs" },
    ],
    Usage: [
      { text: "Pierwsze Kroki", link: "pl/usage/first-steps" },
      { text: "Next.js", link: "pl/usage/next-js" },
      { text: "TypeScript", link: "pl/usage/typescript" },
      { text: "tRPC", link: "pl/usage/trpc" },
      { text: "Prisma", link: "pl/usage/prisma" },
      { text: "NextAuth.js", link: "pl/usage/next-auth" },
      {
        text: "Zmienne Środowiskowe",
        link: "pl/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "pl/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "pl/deployment/vercel" },
      { text: "Netlify", link: "pl/deployment/netlify" },
      { text: "Docker", link: "pl/deployment/docker" },
    ],
  },
  uk: {
    "Create T3 App": [
      { text: "Вступ", link: "uk/introduction" },
      { text: "Чому CT3A?", link: "uk/why" },
      { text: "Встановлення", link: "uk/installation" },
      { text: "Структура папок (Pages)", link: "uk/folder-structure-pages" },
      { text: "FAQ", link: "uk/faq" },
      { text: "T3 Колекція", link: "uk/t3-collection" },
      { text: "Приклади", link: "uk/examples" },
      { text: "Інші рекомендації", link: "uk/other-recs" },
    ],
    Usage: [
      { text: "Перші кроки", link: "uk/usage/first-steps" },
      { text: "Next.js", link: "uk/usage/next-js" },
      { text: "TypeScript", link: "uk/usage/typescript" },
      { text: "tRPC", link: "uk/usage/trpc" },
      { text: "Drizzle", link: "uk/usage/drizzle" },
      { text: "Prisma", link: "uk/usage/prisma" },
      { text: "NextAuth.js", link: "uk/usage/next-auth" },
      {
        text: "Змінні середовища",
        link: "uk/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "uk/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "uk/deployment/vercel" },
      { text: "Netlify", link: "uk/deployment/netlify" },
      { text: "Docker", link: "uk/deployment/docker" },
    ],
  },
  fr: {
    "Create T3 App": [
      { text: "Introduction", link: "fr/introduction" },
      { text: "Pourquoi CT3A?", link: "fr/why" },
      { text: "Installation", link: "fr/installation" },
      {
        text: "Structure des dossiers (Pages)",
        link: "fr/folder-structure-pages",
      },
      { text: "FAQ", link: "fr/faq" },
      { text: "Collection T3", link: "fr/t3-collection" },
      { text: "Exemples", link: "fr/examples" },
      { text: "Autres recommandations", link: "fr/other-recs" },
    ],
    Usage: [
      { text: "Premiers pas", link: "fr/usage/first-steps" },
      { text: "Next.js", link: "fr/usage/next-js" },
      { text: "TypeScript", link: "fr/usage/typescript" },
      { text: "tRPC", link: "fr/usage/trpc" },
      { text: "Prisma", link: "fr/usage/prisma" },
      { text: "NextAuth.js", link: "fr/usage/next-auth" },
      {
        text: "Variables d'environnement",
        link: "fr/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "fr/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "fr/deployment/vercel" },
      { text: "Netlify", link: "fr/deployment/netlify" },
      { text: "Docker", link: "fr/deployment/docker" },
    ],
  },
  pt: {
    "Create T3 App": [
      { text: "Introdução", link: "pt/introduction" },
      { text: "Por que o CT3A?", link: "pt/why" },
      { text: "Instalação", link: "pt/installation" },
      {
        text: "Estrutura de Pastas (Pages)",
        link: "pt/folder-structure-pages",
      },
      { text: "Perguntas Frequentes", link: "pt/faq" },
      { text: "Coleção T3", link: "pt/t3-collection" },
      { text: "Outras Recomendações", link: "pt/other-recs" },
    ],
    Usage: [
      { text: "Primeiros Passos", link: "pt/usage/first-steps" },
      { text: "Next.js", link: "pt/usage/next-js" },
      { text: "TypeScript", link: "pt/usage/typescript" },
      { text: "tRPC", link: "pt/usage/trpc" },
      { text: "Prisma", link: "pt/usage/prisma" },
      { text: "NextAuth.js", link: "pt/usage/next-auth" },
      {
        text: "Variáveis de Ambiente",
        link: "pt/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "pt/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "pt/deployment/vercel" },
      { text: "Netlify", link: "pt/deployment/netlify" },
      { text: "Docker", link: "pt/deployment/docker" },
    ],
  },
  ru: {
    "Create T3 App": [
      { text: "Введение", link: "ru/introduction" },
      { text: "Почему CT3A?", link: "ru/why" },
      { text: "Установка", link: "ru/installation" },
      { text: "Файловая структура (Pages)", link: "ru/folder-structure-pages" },
      { text: "FAQ", link: "ru/faq" },
      { text: "T3 коллекция", link: "ru/t3-collection" },
      { text: "Дополнительные рекомендации", link: "ru/other-recs" },
    ],
    Usage: [
      { text: "Первые шаги", link: "ru/usage/first-steps" },
      { text: "Next.js", link: "ru/usage/next-js" },
      { text: "TypeScript", link: "ru/usage/typescript" },
      { text: "tRPC", link: "ru/usage/trpc" },
      { text: "Prisma", link: "ru/usage/prisma" },
      { text: "NextAuth.js", link: "ru/usage/next-auth" },
      {
        text: "Переменные среды",
        link: "ru/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "ru/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "ru/deployment/vercel" },
      { text: "Docker", link: "ru/deployment/docker" },
      { text: "Netlify", link: "ru/deployment/netlify" },
    ],
  },
  nl: {
    "Create T3 App": [
      { text: "Introduction", link: "nl/introduction" },
      { text: "Waarom CT3A?", link: "nl/why" },
      { text: "Installatie", link: "nl/installation" },
      { text: "Mappen-structuur", link: "nl/folder-structure" },
      { text: "FAQ", link: "nl/faq" },
      { text: "T3 Collectie", link: "nl/t3-collection" },
      { text: "Voorbeelden", link: "nl/examples" },
      { text: "Andere Aanbevelingen", link: "nl/other-recs" },
    ],
    Usage: [
      { text: "Eerste Stappen", link: "nl/usage/first-steps" },
      { text: "Next.js", link: "nl/usage/next-js" },
      { text: "TypeScript", link: "nl/usage/typescript" },
      { text: "tRPC", link: "nl/usage/trpc" },
      { text: "Drizzle", link: "nl/usage/drizzle" },
      { text: "Prisma", link: "nl/usage/prisma" },
      { text: "NextAuth.js", link: "nl/usage/next-auth" },
      {
        text: "Omgevingsvariabelen",
        link: "nl/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "nl/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "nl/deployment/vercel" },
      { text: "Netlify", link: "nl/deployment/netlify" },
      { text: "Docker", link: "nl/deployment/docker" },
    ],
  },
  no: {
    "Create T3 App": [
      { text: "Introduksjon", link: "no/introduction" },
      { text: "Hvorfor CT3A?", link: "no/why" },
      { text: "Installasjon", link: "no/installation" },
      { text: "Mappestruktur (Pages)", link: "no/folder-structure-pages" },
      { text: "FAQ", link: "no/faq" },
      { text: "T3-Kolleksjonen", link: "no/t3-collection" },
      { text: "Andre Anbefalinger", link: "no/other-recs" },
    ],
    Usage: [
      { text: "Første Steg", link: "no/usage/first-steps" },
      { text: "Next.js", link: "no/usage/next-js" },
      { text: "TypeScript", link: "no/usage/typescript" },
      { text: "tRPC", link: "no/usage/trpc" },
      { text: "Prisma", link: "no/usage/prisma" },
      { text: "NextAuth.js", link: "no/usage/next-auth" },
      {
        text: "Miljøvariabler",
        link: "no/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "no/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "no/deployment/vercel" },
      { text: "Netlify", link: "no/deployment/netlify" },
      { text: "Docker", link: "no/deployment/docker" },
    ],
  },
  "zh-hans": {
    "Create T3 App": [
      { text: "简介", link: "zh-hans/introduction" },
      { text: "为什么选择 CT3A?", link: "zh-hans/why" },
      { text: "安装", link: "zh-hans/installation" },
      { text: "文件夹结构 (Pages)", link: "zh-hans/folder-structure-pages" },
      { text: "常见疑问", link: "zh-hans/faq" },
      { text: "T3 合集", link: "zh-hans/t3-collection" },
      { text: "其他推荐", link: "zh-hans/other-recs" },
    ],
    Usage: [
      { text: "第一步", link: "zh-hans/usage/first-steps" },
      { text: "Next.js", link: "zh-hans/usage/next-js" },
      { text: "TypeScript", link: "zh-hans/usage/typescript" },
      { text: "tRPC", link: "zh-hans/usage/trpc" },
      { text: "Prisma", link: "zh-hans/usage/prisma" },
      { text: "NextAuth.js", link: "zh-hans/usage/next-auth" },
      {
        text: "环境变量",
        link: "zh-hans/usage/env-variables",
      },
      { text: "Tailwind CSS", link: "zh-hans/usage/tailwind" },
    ],
    Deployment: [
      { text: "Vercel", link: "zh-hans/deployment/vercel" },
      { text: "Netlify", link: "zh-hans/deployment/netlify" },
      { text: "Docker", link: "zh-hans/deployment/docker" },
    ],
  },
};

export const SIDEBAR_HEADER_MAP: Record<
  Exclude<KnownLanguageCode, "en">,
  Record<OuterHeaders, string>
> = {
  es: {
    "Create T3 App": "Create T3 App",
    Usage: "Uso",
    Deployment: "Despliegue",
  },
  // Translate the sidebar's "outer headers" here
  // sv: {
  //   "Create T3 App": "Create T3 App",
  //   Usage: "Användarguide",
  //   Deployment: "Deployment",
  // },
  ja: {
    "Create T3 App": "Create T3 App",
    Usage: "使用法",
    Deployment: "デプロイ",
  },
  pl: {
    "Create T3 App": "Create T3 App",
    Usage: "Korzystanie Z Narzędzia",
    Deployment: "Deployment",
  },
  uk: {
    "Create T3 App": "Create T3 App",
    Usage: "Використання",
    Deployment: "Деплоймент",
  },
  ar: {
    "Create T3 App": "Create T3 App",
    Usage: "كيفية الإستخدام؟",
    Deployment: "نَشر تطبيقك",
  },
  fr: {
    "Create T3 App": "Create T3 App",
    Usage: "Utilisation",
    Deployment: "Déploiement",
  },
  pt: {
    "Create T3 App": "Create T3 App",
    Usage: "Uso",
    Deployment: "Deploy",
  },
  ru: {
    "Create T3 App": "Create T3 App",
    Usage: "Использование",
    Deployment: "Развертывание",
  },
  nl: {
    "Create T3 App": "Create T3 App",
    Usage: "Gebruiken",
    Deployment: "Uitrollen",
  },
  no: {
    "Create T3 App": "Create T3 App",
    Usage: "Bruk",
    Deployment: "Utrulling",
  },
  "zh-hans": {
    "Create T3 App": "Create T3 App",
    Usage: "用法",
    Deployment: "部署",
  },
};
