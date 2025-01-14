---
title: Langkah Pertama
description: Memulai dengan Aplikasi T3 Baru Anda
layout: ../../../layouts/docs.astro
lang: id
---

Anda baru saja membuat kerangka dasar aplikasi T3 baru dan siap untuk mulai. Berikut adalah langkah-langkah dasar untuk membuat aplikasi Anda berfungsi.

## Database

### Prisma

Jika aplikasi Anda menggunakan Prisma, pastikan untuk menjalankan `npx prisma db push` dari direktori root aplikasi Anda. Perintah ini akan menyinkronkan skema Prisma Anda dengan database Anda dan akan menghasilkan jenis TypeScript untuk Prisma Client berdasarkan skema Anda. Perhatikan bahwa Anda perlu [memulai ulang server TypeScript](https://tinytip.co/tips/vscode-restart-ts/) setelah melakukan ini agar dapat mendeteksi jenis yang dihasilkan.

### Drizzle

Jika aplikasi Anda menggunakan Drizzle, periksa file `.env` untuk petunjuk tentang bagaimana membuat variabel lingkungan `DATABASE_URL` Anda. Setelah file lingkungan Anda siap, jalankan `pnpm db:push` (atau yang setara untuk manajer paket lainnya) untuk mengirimkan skema Anda.

## Otentikasi

Jika aplikasi Anda menggunakan NextAuth.js, kami memulai dengan `DiscordProvider`. Ini adalah salah satu penyedia paling sederhana yang ditawarkan oleh NextAuth.js, tetapi masih memerlukan sedikit setup awal dari Anda.

Tentu saja, jika Anda lebih suka menggunakan penyedia otentikasi yang berbeda, Anda juga dapat menggunakan salah satu [banyak penyedia](https://next-auth.js.org/providers/) yang ditawarkan oleh NextAuth.js.

1. Anda akan memerlukan akun Discord, jadi daftarkan satu jika Anda belum memiliki akun.
2. Buka <https://discord.com/developers/applications> dan klik "Aplikasi Baru" di sudut kanan atas. Beri nama aplikasi Anda dan setujui Ketentuan Layanan.
3. Setelah aplikasi Anda dibuat, buka "Pengaturan → OAuth2 → Umum".
4. Salin "Client ID" dan tambahkan ke file `.env` Anda sebagai `DISCORD_CLIENT_ID`.
5. Klik "Reset Secret", salin rahasia baru, dan tambahkan ke file `.env` Anda sebagai `DISCORD_CLIENT_SECRET`.
6. Klik "Tambahkan Redirect" dan ketik `http://localhost:3000/api/auth/callback/discord`.
   - Untuk implementasi produksi, ikuti langkah-langkah sebelumnya untuk membuat Aplikasi Discord lainnya, tetapi kali ini gantilah `http://localhost:3000` dengan URL tempat Anda akan mendeploy aplikasi Anda.
7. Simpan Perubahan.
8. Tetapkan `NEXTAUTH_SECRET` di dalam file `.env`. Di dalam pengembangan, setiap string akan berfungsi, untuk produksi lihat catatan di dalam file `.env` tentang cara menghasilkan rahasia yang aman.

Anda sekarang seharusnya dapat masuk.

## Pengaturan Editor

Berikut adalah ekstensi yang direkomendasikan untuk pengalaman pengembangan yang optimal. Tautan di bawah ini menyediakan dukungan plugin yang spesifik untuk editor.

- [Ekstensi Prisma](https://www.prisma.io/docs/guides/development-environment/editor-setup)
- [Ekstensi Tailwind CSS IntelliSense](https://tailwindcss.com/docs/editor-setup)
- [Ekstensi Prettier](https://prettier.io/docs/en/editors.html)

## Langkah Selanjutnya

- Jika aplikasi Anda mencakup tRPC, periksa `src/pages/index.tsx` dan `src/server/api/routers/post.ts` untuk melihat bagaimana kueri tRPC bekerja.
- Jelajahi dokumen Create T3 App, serta dokumen paket-paket yang digunakan oleh aplikasi Anda.
- Bergabunglah dengan [Discord](https://t3.gg/discord) kami dan berikan kami bintang di [GitHub](https://github.com/t3-oss/create-t3-app)! :)
