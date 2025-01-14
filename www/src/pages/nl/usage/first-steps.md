---
title: Eerste Stappen
description: Aan de slag met Create T3 App
layout: ../../../layouts/docs.astro
lang: nl
---

Je hebt zojuist een nieuwe T3 App in de steigers gezet en staat klaar voor de start. Hier is het minimale om je app werkende te krijgen.

## Database

### MySQL, PostgreSQL

Als je MySQL of PostgreSQL als je database hebt gekozen, zal T3 app een `start-database.sh` bash-script meeleveren dat een docker container met een database kan maken voor lokale ontwikkling. Als je al een database hebt, voel je vrij om dit bestand te verwijderen en je databasegegevens in `.env` te plaatsen. Op macOS kun je ook [DBNgin](https://dbngin.com/) in plaats van Docker gebruiken.

### Prisma

Als je app Prisma bevat, voer dan `npx prism db push` vanaf de hoofdmap van je app uit. Dit commando zal je Prisma-schema met je database synchroniseren en zal de TypeScript-types voor de Prisma-Client genereren op basis van je schema. Onthoud dat je [de TypeScript-server moet herstarten](https://tinytip.co/tips/vscode-restart-ts/) nadat je dit hebt gedaan zodat deze de gegenereerde types kan ontdekken.

### Drizzle

Als je app Drizzle bevat, controleer dan het `.env`-bestand voor instructies over hoe je je `DATABSE_URL` omgevingsvariabele moet opbouwen. Wanneer je env-bestand klaar is, voer `pnpm db:push` (of de equivalent voor andere package managers) uit om je schema te pushen.

## Authenticatie

Als je app NextAuth.js bevat, laten we je aan de slag gaan met de `DiscordProvider`. Dit is een van de eenvoudigste providers die NextAuth.js biedt, maar vereist nog steeds een kleine initiële installatie door jou.

Natuurlijk, als je liever een andere authenticatieprovider gebruikt, kun je ook een van de [vele providers](https://next-auth.js.org/providers/) gebruiken die NextAuth.js biedt.

1. Je zal een Discord-account nodig hebben, dus maak er een aan als je dat nog niet hebt gedaan.
2. Navigeer naar https://discord.com/developers/applications en klik op "New Application" in de rechterbovenhoek. Geef je applicatie een naam en stem in met de Servicevoorwaarden.
3. Wanneer je applicatie is gemaakt, navigeer je naar "Settings → OAuth2 → General".
4. Kopieer de "Client ID" and voeg het toe aan je `.env` als `DISCORD_CLIENT_ID`.
5. Klik op "Reset Secret", kopieer het nieuwe secret en voeg het toe aan je `.env.` als `DISCORD_CLIENT_SECRET`.
6. Klik op "Add Redirect" en typ `http://localhost:3000/api/auth/callback/discord`.
   - Voor een productie-uitrol volg je de voorgaande stappen om een andere Discord-applicatie te maken, maar vervang je deze keer `http://localhost:3000` met de URL waarnaar je uitrolt.
7. Bewaar de Wijzigingen.
8. Stel de `NEXTAUTH_SECRET` in `.env` in. Tijdens ontwikkeling is een willekeurige string voldoende, voor productie zie de opmerking in `.env` over het genereren van een veilig secret.

Je zou nu moeten kunnen inloggen.

## Editor Instellen

De volgende extensies zijn aangeraden voor een optimale ontwikkelaarservaring. De onderstaande links bieden editor-specifieke plugin-ondersteuning.

- [Prisma Extension](https://www.prisma.io/docs/guides/development-environment/editor-setup)
- [Tailwind CSS IntelliSense Extension](https://tailwindcss.com/docs/editor-setup)
- [Prettier Extension](https://prettier.io/docs/en/editors.html)

## Volgende Stappen

- Als je app tRPC bevat, bekijk `src/pages/index.tsx` en `src/server/api/routers/post.ts` om te bekijken hoe tRPC-queries werken.
- Kijk eens rond in de Create T3 App-documentatie en de documentatie van packages die je app bevat.
- Word lid van onze [Discord](https://t3.gg/discord) en geef ons een ster op [GitHub](https://github.com/t3-oss/create-t3-app)! :)