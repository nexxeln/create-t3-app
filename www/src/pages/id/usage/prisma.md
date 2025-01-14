---
title: Prisma
description: Penggunaan Prisma
layout: ../../../layouts/docs.astro
lang: id
---

Prisma adalah ORM untuk TypeScript, yang memungkinkan Anda untuk mendefinisikan skema database dan model Anda dalam file `schema.prisma`, dan kemudian menghasilkan klien yang aman untuk digunakan dalam interaksi dengan database dari backend Anda.

## Prisma Client

Terletak di `src/server/db.ts`, Prisma Client diinisiasi sebagai variabel global (sebagaimana yang direkomendasikan sebagai [best practice](https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#problem) oleh tim Prisma) dan diekspor untuk digunakan dalam rute API Anda. Kami menyertakan Prisma Client di dalam [Konteks](/id/usage/trpc#-serverapitrpcts) secara default dan merekomendasikan penggunaan ini daripada mengimpornya secara terpisah di setiap file.

## Skema

Anda akan menemukan file skema Prisma di `/prisma/schema.prisma`. File ini adalah tempat Anda mendefinisikan skema database dan model Anda, dan digunakan saat menghasilkan Prisma Client.

### Dengan NextAuth.js

Ketika Anda memilih NextAuth.js dalam kombinasi dengan Prisma, file skema dihasilkan dan disiapkan untuk Anda dengan nilai-nilai rekomendasi untuk model `User`, `Session`, `Account`, dan `VerificationToken`, sesuai dengan [dokumentasi NextAuth.js](https://next-auth.js.org/adapters/prisma).

## Basis Data Default

Basis data default adalah basis data SQLite, yang bagus untuk pengembangan dan membuat prototipe dengan cepat, tetapi tidak disarankan untuk produksi. Anda dapat mengubah basis data yang digunakan dengan mengganti `provider` dalam blok `datasource` menjadi `postgresql` atau `mysql`, dan kemudian memperbarui string koneksi dalam variabel lingkungan untuk mengarahkan ke basis data Anda.

## Menyemaikan Basis Data Anda

[Menyemaikan basis data Anda](https://www.prisma.io/docs/guides/database/seed-database) adalah cara yang bagus untuk dengan cepat mengisi basis data Anda dengan data uji untuk membantu Anda memulai. Untuk menyiapkan penyemaian, Anda perlu membuat file `seed.ts` di direktori `/prisma`, dan kemudian menambahkan skrip `seed` ke file `package.json` Anda. Anda juga memerlukan beberapa runner TypeScript yang dapat menjalankan skrip penyemaian tersebut. Kami merekomendasikan [tsx](https://github.com/esbuild-kit/tsx), yang merupakan runner TypeScript yang sangat performant yang menggunakan esbuild dan tidak memerlukan konfigurasi ESM apa pun, tetapi `ts-node` atau runner lainnya juga akan berfungsi.

```jsonc:package.json
{
  "scripts": {
    "db-seed": "NODE_ENV=development prisma db seed"
  },
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
}
```

```ts:prisma/seed.ts
import { prisma } from "../src/server/db";

async function main() {
  const id = "cl9ebqhxk00003b600tymydho";
  await prisma.example.upsert({
    where: {
      id,
    },
    create: {
      id,
    },
    update: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

Kemudian, cukup jalankan `pnpm db-seed` (atau `npm`/`yarn`) untuk menyemai basis data Anda.

## Sumber Daya Berguna

| Sumber Daya                 | Tautan                                                                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dokumentasi Prisma          | <https://www.prisma.io/docs/>                                                                                                                       |
| GitHub Prisma               | <https://github.com/prisma/prisma>                                                                                                                  |
| Prisma Migrate Playground   | <https://playground.prisma.io/guides>                                                                                                               |
| Adapter Prisma NextAuth.JS  | <https://next-auth.js.org/adapters/prisma>                                                                                                          |
| Panduan Koneksi Planetscale | <https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-planetscale> |
