---
title: Docker
description: Deployment dengan Docker
layout: ../../../layouts/docs.astro
lang: id
---

Anda dapat membuat kontainer untuk tumpukan ini dan mendeploynya sebagai satu kontainer menggunakan Docker, atau sebagai bagian dari kelompok kontainer menggunakan docker-compose. Lihat [`ajcwebdev/ct3a-docker`](https://github.com/ajcwebdev/ct3a-docker) untuk repositori contoh berdasarkan dokumen ini.

## Konfigurasi Proyek Docker

Harap perhatikan bahwa Next.js memerlukan proses yang berbeda untuk waktu kompilasi (tersedia di frontend, diawali dengan `NEXT_PUBLIC`) dan variabel runtime, hanya server-side. Dalam demo ini, kami menggunakan dua variabel, perhatikan posisinya dalam `Dockerfile`, argumen baris perintah, dan `docker-compose.yml`:

- `DATABASE_URL` (digunakan oleh server)
- `NEXT_PUBLIC_CLIENTVAR` (digunakan oleh client)

### 1. Konfigurasi Next

Di [`next.config.mjs`](https://github.com/t3-oss/create-t3-app/blob/main/cli/template/base/next.config.mjs) Anda, tambahkan konfigurasi output-option `standalone` untuk [mengurangi ukuran gambar secara otomatis dengan memanfaatkan jejak output](https://nextjs.org/docs/advanced-features/output-file-tracing):

```diff
export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
+ output: "standalone",
});
```

### 2. Buat file .dockerignore

<details>
    <summary>
      Klik di sini dan sertakan konten dalam <code>.dockerignore</code>:
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

### 3. Buat Dockerfile

> Karena kita tidak menarik variabel lingkungan server ke dalam kontainer kami, validasi skema lingkungan akan gagal. Untuk mencegah ini, kita harus menambahkan flag `SKIP_ENV_VALIDATION=1` ke perintah build sehingga skema env tidak divalidasi saat waktu kompilasi.

<details>
    <summary>
      Klik di sini dan sertakan konten dalam <code>Dockerfile</code>:
    </summary>
<div class="content">

```docker
##### DEPENDENCIES

FROM --platform=linux/amd64 node:16-alpine3.17 AS deps
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

FROM --platform=linux/amd64 node:16-alpine3.17 AS builder
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

FROM --platform=linux/amd64 node:16-alpine3.17 AS runner
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

> **_Catatan_**
>
> - _Emulasi `--platform=linux/amd64` mungkin tidak perlu setelah beralih ke Node 18._
> - _Lihat [`node:alpine`](https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine) untuk memahami mengapa `libc6-compat` mungkin diperlukan._
> - _Menggunakan gambar berbasis Alpine 3.17 [dapat menyebabkan masalah dengan Prisma](https://github.com/t3-oss/create-t3-app/issues/975). Menetapkan `engineType = "binary"` memecahkan masalah di Alpine 3.17, [tetapi memiliki biaya kinerja terkait](https://www.prisma.io/docs/concepts/components/prisma-engines/query-engine#the-query-engine-at-runtime)._
> - _Next.js mengumpulkan [data telemetri anonim tentang penggunaan umum](https://nextjs.org/telemetry). Hapus komentar pada contoh pertama `ENV NEXT_TELEMETRY_DISABLED 1` untuk menonaktifkan telemetri selama waktu kompilasi. Hapus komentar pada contoh kedua untuk menonaktifkan telemetri selama waktu runtime._

</div>
</details>

## Bangun dan Jalankan Gambar Secara Lokal

Bangun dan jalankan gambar ini secara lokal dengan perintah berikut:

```bash
docker build -t ct3a-docker --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar .
docker run -p 3000:3000 -e DATABASE_URL="database_url_goes_here" ct3a-docker


```

Buka [localhost:3000](http://localhost:3000/) untuk melihat aplikasi yang berjalan.

## Docker Compose

Anda juga dapat menggunakan Docker Compose untuk membangun gambar dan menjalankan kontainer.

<details>
    <summary>
      Ikuti langkah 1-4 di atas, klik di sini, dan sertakan konten dalam <code>docker-compose.yml</code>:
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

Jalankan ini menggunakan perintah `docker compose up`:

```bash
docker compose up
```

Buka [localhost:3000](http://localhost:3000/) untuk melihat aplikasi yang berjalan.

</div>
</details>

## Deploy ke Railway

Anda dapat menggunakan PaaS seperti [Railway](https://railway.app) yang otomatis [menggunakan Dockerfile untuk mendeploy aplikasi](https://docs.railway.app/deploy/dockerfiles) untuk mendeploy aplikasi Anda. Jika Anda telah menginstal [Railway CLI](https://docs.railway.app/develop/cli#install), Anda dapat mendeploy aplikasi Anda dengan perintah berikut:

```bash
railway login
railway init
railway link
railway up
railway open
```

Buka "Variables" dan sertakan `DATABASE_URL` Anda. Kemudian buka "Settings" dan pilih "Generate Domain." Untuk melihat contoh yang berjalan di Railway, kunjungi [ct3a-docker.up.railway.app](https://ct3a-docker.up.railway.app/).

## Sumber Daya Berguna

| Sumber Daya                                 | Tautan                                                                 |
| ------------------------------------------- | ---------------------------------------------------------------------- |
| Referensi Dockerfile                        | <https://docs.docker.com/engine/reference/builder/>                    |
| Referensi Compose file versi 3              | <https://docs.docker.com/compose/compose-file/compose-file-v3/>        |
| Referensi CLI Docker                        | <https://docs.docker.com/engine/reference/commandline/docker/>         |
| Referensi CLI Docker Compose                | <https://docs.docker.com/compose/reference/>                           |
| Next.js Deployment dengan Docker Image      | <https://nextjs.org/docs/deployment#docker-image>                      |
| Next.js di Docker                           | <https://benmarte.com/blog/nextjs-in-docker/>                          |
| Contoh Next.js dengan Docker                | <https://github.com/vercel/next.js/tree/canary/examples/with-docker>   |
| Membuat Gambar Docker dari aplikasi Next.js | <https://blog.tericcabrel.com/create-docker-image-nextjs-application/> |
