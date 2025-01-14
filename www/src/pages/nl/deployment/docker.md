---
title: Docker
description: Uitrollen met Docker
layout: ../../../layouts/docs.astro
lang: nl
---

Je kan deze stack containeriseren en uitrollen als één enkele container door middel van Docker. Het is ook mogelijk om de stack uit te rollen als gedeelte van een grotere groep containers door middel van docker-compose. Zie [`ajcwebdev/ct3a-docker`](https://github.com/ajcwebdev/ct3a-docker) voor een voorbeeld-repository gebasseerd op deze documentatie.

## Docker Projectconfiguratie

Merk op dat Next.js een ander proces gebruikt voor variablen beschikbaar in de build- (beschikbaar in de frontent, voorafgaand door `NEXT_PUBLIC`) en runtime-omgeving (enkel server-side). In deze demo maken we gebruik van twee variablen, let op hun posities in het `Dockerfile`, in de commandoregelargumenten en in het `docker-compose.yml` bestand:
- `DATABASE_URL` (wordt gebruikt door de server)
- `NEXT_PUBLIC_CLIENTVAR` (wordt gebruikt door de client)

### 1. Next-configuratie

Voeg in je [`next.config.js`](https://github.com/t3-oss/create-t3-app/blob/main/cli/template/base/next.config.js) de `standalone` output optie toe om [de afbeeldingsgrootte te verkleinen door automatisch gebruik te maken van output traces](https://nextjs.org/docs/advanced-features/output-file-tracing):

```diff
export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
+ output: "standalone",
});
```

### 2. Maak het dockerignore-bestand

<details>
    <summary>
      Klik hier en plaats de inhoud in <code>.dockerignore</code>:
    </summary>
<div class="content">

```
.env
Dockerfile
.dockerignore
node_modules
npm-debug.log
README.md
.next
.git
```

</div>

</details>

### 3. Maak het Dockerfile

> Omdat we de serveromgevingsvariabelen niet in onze container trekken, zal [de validatie van het omgevingsschema](/nl/usage/env-variables) mislukken. Om dit te voorkomen moeten we een `SKIP_ENV_VALIDATION=1` flag aan het bouwcommando toevoegen zodat de env-schema's niet gevalideerd worden tijdens het bouwen.

<details>
    <summary>
      Klik hier en plaats de inhoud in <code>Dockerfile</code>:
    </summary>
<div class="content">

```docker
##### DEPENDENCIES

FROM --platform=linux/amd64 node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Installeer Prisma Client - verwijder als je Prisma niet gebruikt

COPY prisma ./

# Installeer dependencies met de gewenste package manager

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml\* ./

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi

##### BUILDER

FROM --platform=linux/amd64 node:20-alpine AS builder
ARG DATABASE_URL
ARG NEXT_PUBLIC_CLIENTVAR
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ENV NEXT_TELEMETRY_DISABLED 1

RUN \
    if [ -f yarn.lock ]; then SKIP_ENV_VALIDATION=1 yarn build; \
    elif [ -f package-lock.json ]; then SKIP_ENV_VALIDATION=1 npm run build; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && SKIP_ENV_VALIDATION=1 pnpm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi

##### RUNNER

FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV production

# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["server.js"]
```

> **_Opmerkingen_**
>
> - _Emulatie van `--platform=linux/amd64` is mogelijk niet nodig na het overzetten naar Node 18._
> - _Zie [`node:alpine`](https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine) om te begrijpen waarom `libc6-compat` mogelijk nodig is._
> - _Images gebruiken die gebasseerd zijn op Alpine 3.17 [kan problemen met Prisma opleveren](https://github.com/t3-oss/create-t3-app/issues/975). `engineType = "binary"` lost het probleem in Alpine 3.17 op, [maar heeft de bijbehorende prestatieproblemen](https://www.prisma.io/docs/concepts/components/prisma-engines/query-engine#the-query-engine-at-runtime)._
> - _Next.js verzamelt [anonieme telemetriegegevens over algemeen gebruik](https://nextjs.org/telemetry). Laat de `#` voor het eerste commentaar van `ENV NEXT_TELEMETRY_DISABLED 1` weg om telemetrie uit te schakelen tijdens de build. Doe hetzelfde met het tweede commentaar om telemetrie uit te schakelen tijdens runtime._ 

</div>
</details>

## Lokaal bouwen en uitvoeren

Bouw en voer deze image lokaal uit met de volgende commando's:

```bash
docker build -t ct3a-docker --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar .
docker run -p 3000:3000 -e DATABASE_URL="database_url_goes_here" ct3a-docker
```

Open [localhost:3000](http://localhost:3000/) om de actieve applicatie te zien.

## Docker Compose

Je kan ook Docker Compose gebruiken om je image te bouwen en uit te voeren.

<details>
    <summary>
      Volg de stappen 1-3 van hierboven, klik hier en plaats de inhoud in <code>docker-compose.yml</code>:
    </summary>
<div class="content">

```yaml
version: "3.9"
services:
  app:
    platform: "linux/amd64"
    build:
      context: .
      dockerfile: Dockerfile
      args:
        NEXT_PUBLIC_CLIENTVAR: "clientvar"
    working_dir: /app
    ports:
      - "3000:3000"
    image: t3-app
    environment:
      - DATABASE_URL=database_url_goes_here
```

Bouw en begin met uitvoeren door het `docker compose up --build` commando:

```bash
docker compose up --build
```

Open [localhost:3000](http://localhost:3000/) om de actieve applicatie te zien.

</div>
</details>

## Uitrollen naar Railway

Je kan een PaaS zoals [Railways](https://railway.app) geautomatiseerde [Dockerfile implementatie](https://docs.railway.app/deploy/dockerfiles) om je applicatie uit te rollen. Als je de [Railway CLI hebt geïnstallerd](https://docs.railway.app/develop/cli#install) kun je de applicatie uitrollen met de volgende commando's:

```bash
railway login
railway init
railway link
railway up
railway open
```

Ga naar "Variables" en neem je `DATABASE_URL`-variable op. Ga vervolgens naar "Settings" en selecteer "Generate Domain". Om een lopend voorbeeld te bekijken op Railway bezoek je [ct3a-docker.up.railway.app](https://ct3a-docker.up.railway.app/).

## Handige Hulpbronnen

| Hulpbron                               | Link                                                                 |
|----------------------------------------| -------------------------------------------------------------------- |
| Dockerfile-referentie                  | https://docs.docker.com/engine/reference/builder/                    |
| Compose file versie 3-referentie       | https://docs.docker.com/compose/compose-file/compose-file-v3/        |
| Docker CLI-referentie                  | https://docs.docker.com/engine/reference/commandline/docker/         |
| Docker Compose CLI-referentie          | https://docs.docker.com/compose/reference/                           |
| Next.js Uitrollen met Docker Image     | https://nextjs.org/docs/deployment#docker-image                      |
| Next.js in Docker                      | https://benmarte.com/blog/nextjs-in-docker/                          |
| Next.js met Docker Example             | https://github.com/vercel/next.js/tree/canary/examples/with-docker   |
| Docker Image van een Next.js-app maken | https://blog.tericcabrel.com/create-docker-image-nextjs-application/ |
