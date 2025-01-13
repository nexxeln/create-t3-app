---
title: Docker
description: Docker ile Dağıtım
layout: ../../../layouts/docs.astro
lang: en
---

Bu stack'i konteynerize ederek Docker ile tek konteyner olarak veya docker-compose kullanarak bir konteyner grubunun parçası olarak dağıtımını yapabilirsiniz. Bu dokümantasyona göre oluşturulmuş örnek projeye bakabilirsiniz: [`ajcwebdev/ct3a-docker`](https://github.com/ajcwebdev/ct3a-docker)

## Docker Proje Konfigürasyonu

Please note that Next.js requires a different process for build time (available in the frontend, prefixed by `NEXT_PUBLIC`) and runtime environment, server-side only, variables. In this demo we are using two variables, pay attention to their positions in the `Dockerfile`, command-line arguments, and `docker-compose.yml`:

- `DATABASE_URL` (used by the server)
- `NEXT_PUBLIC_CLIENTVAR` (used by the client)

### 1. Next Konfigürasyonu

In your [`next.config.mjs`](https://github.com/t3-oss/create-t3-app/blob/main/cli/template/base/next.config.mjs), add the `standalone` output-option configuration to [reduce image size by automatically leveraging output traces](https://nextjs.org/docs/advanced-features/output-file-tracing):

```diff
export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
+ output: "standalone",
});
```

### 2. dockerignore dosyasını oluşturun

<details>
    <summary>
      Click here and include contents in <code>.dockerignore</code>:
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

### 3. Create Dockerfile

> Since we're not pulling the server environment variables into our container, the [environment schema validation](/en/usage/env-variables) will fail. To prevent this, we have to add a `SKIP_ENV_VALIDATION=1` flag to the build command so that the env-schemas aren't validated at build time.

<details>
    <summary>
      Click here and include contents in <code>Dockerfile</code>:
    </summary>
<div class="content">

```docker
##### DEPENDENCIES

FROM --platform=linux/amd64 node:16-alpine3.16 AS deps
RUN apk add --no-cache libc6-compat openssl1.1-compat
WORKDIR /app

# Install Prisma Client - remove if not using Prisma

COPY prisma ./

# Install dependencies based on the preferred package manager

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml\* ./

RUN \
 if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
 elif [ -f package-lock.json ]; then npm ci; \
 elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
 else echo "Lockfile not found." && exit 1; \
 fi

##### BUILDER

FROM --platform=linux/amd64 node:16-alpine3.16 AS builder
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

FROM --platform=linux/amd64 node:16-alpine3.16 AS runner
WORKDIR /app

ENV NODE_ENV production

# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]

```

> **_Notes_**
>
> - _Emulation of `--platform=linux/amd64` may not be necessary after moving to Node 18._
> - _See [`node:alpine`](https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine) to understand why `libc6-compat` might be needed._
> - _Using Alpine 3.17 based images [can cause issues with Prisma](https://github.com/t3-oss/create-t3-app/issues/975). Setting `engineType = "binary"` solves the issue in Alpine 3.17, [but has an associated performance cost](https://www.prisma.io/docs/concepts/components/prisma-engines/query-engine#the-query-engine-at-runtime)._
> - _Next.js collects [anonymous telemetry data about general usage](https://nextjs.org/telemetry). Uncomment the first instance of `ENV NEXT_TELEMETRY_DISABLED 1` to disable telemetry during the build. Uncomment the second instance to disable telemetry during runtime._

</div>
</details>

## Build and Run Image Locally

Build and run this image locally with the following commands:

```bash
docker build -t ct3a-docker --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar .
docker run -p 3000:3000 -e DATABASE_URL="database_url_goes_here" ct3a-docker
```

Open [localhost:3000](http://localhost:3000/) to see your running application.

## Docker Compose

You can also use Docker Compose to build the image and run the container.

<details>
    <summary>
      Follow steps 1-4 above, click here, and include contents in <code>docker-compose.yml</code>:
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

Run this using the `docker compose up` command:

```bash
docker compose up
```

Open [localhost:3000](http://localhost:3000/) to see your running application.

</div>
</details>

## Deploy to Railway

You can use a PaaS such as [Railway's](https://railway.app) automated [Dockerfile deployments](https://docs.railway.app/deploy/dockerfiles) to deploy your app. If you have the [Railway CLI installed](https://docs.railway.app/develop/cli#install) you can deploy your app with the following commands:

```bash
railway login
railway init
railway link
railway up
railway open
```

Go to "Variables" and include your `DATABASE_URL`. Then go to "Settings" and select "Generate Domain." To view a running example on Railway, visit [ct3a-docker.up.railway.app](https://ct3a-docker.up.railway.app/).

## Useful Resources

| Resource                             | Link                                                                 |
| ------------------------------------ | -------------------------------------------------------------------- |
| Dockerfile reference                 | https://docs.docker.com/engine/reference/builder/                    |
| Compose file version 3 reference     | https://docs.docker.com/compose/compose-file/compose-file-v3/        |
| Docker CLI reference                 | https://docs.docker.com/engine/reference/commandline/docker/         |
| Docker Compose CLI reference         | https://docs.docker.com/compose/reference/                           |
| Next.js Deployment with Docker Image | https://nextjs.org/docs/deployment#docker-image                      |
| Next.js in Docker                    | https://benmarte.com/blog/nextjs-in-docker/                          |
| Next.js with Docker Example          | https://github.com/vercel/next.js/tree/canary/examples/with-docker   |
| Create Docker Image of a Next.js app | https://blog.tericcabrel.com/create-docker-image-nextjs-application/ |
