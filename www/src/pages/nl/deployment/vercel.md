---
title: Vercel
description: Uitrollen met Vercel
layout: ../../../layouts/docs.astro
lang: nl
---

We raden aan om je app uit te rollen met [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss). Het maakt het supereenvoudig om je Next.js apps uit te rollen.

## Projectconfiguratie

Vercel zal waarschijnlijk je buildcommando en publish-folder automatisch configureren. Je kan deze informatie echter ook samen met andere configuraties specificeren door een bestand te maken met de naam [`vercel.json`](https://vercel.com/docs/project-configuration) en de volgende commando's in te voegen. **Dit is niet verplicht voor de meeste projecten.**

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## Het Vercel Dashboard Gebruiken

1. Meld je aan bij [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss) met GitHub na het pushen van je code naar een GitHub-repository. Klik vervolgens op **Add new Project**.

![Nieuw project bij Vercel](/images/vercel-new-project.webp)

2. Importeer de GitHub-repository met je project.

![Repository importeren](/images/vercel-import-project.webp)

3. Voeg je omgevingsvariabelen toe.

![Omgevingsvariablen toevoegen](/images/vercel-env-vars.webp)

4. Klik **Deploy**. Vanaf nu zal telkens wanneer je een wijziging naar je repository pusht zal Vercel je app automatisch opnieuw uitrollen!

## De Vercel CLI Gebruiken

Om vanaf de commandline uit te rollen moet je eerst [de Vercel CLI globaal installeren](https://vercel.com/docs/cli#installing-vercel-cli).

```bash
npm i -g vercel
```

Voer het [`vercel`](https://vercel.com/docs/cli/deploying-from-cli)-commando uit om je project uit te rollen.

```bash
vercel
```

Voeg `--env DATABASE_URL=YOUR_DATABASE_URL_HERE` toe voor omgevingsvariablen zoals de databaseconnectiestring. Gebruik `--yes` als je de uitrolvragen wilt overslaan en het standaardantwoord voor elke vraag wilt geven.

```bash
vercel --env DATABASE_URL=YOUR_DATABASE_URL_HERE --yes
```

Na de eerste uitrol zal dit commando naar een previewbranch uitrollen. Je zal `--prod` moeten toevoegen om je wijzigingen direct naar de live site te pushen voor komende uitrolacties.

```bash
vercel --prod
```
