---
title: Vercel
description: Deploy ke Vercel
layout: ../../../layouts/docs.astro
lang: id
---

Kami merekomendasikan untuk melakukan deploy aplikasi Anda ke [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss). Ini sangat mudah untuk melakukan deploy aplikasi Next.js.

## Konfigurasi Proyek

Vercel kemungkinan akan mengonfigurasi perintah pembangunan Anda dan direktori penerbitan secara otomatis. Namun, Anda juga dapat menentukan informasi ini bersama dengan konfigurasi lainnya dengan membuat file bernama [`vercel.json`](https://vercel.com/docs/project-configuration) dan menyertakan perintah-perintah berikut. **Ini tidak diperlukan untuk sebagian besar proyek.**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## Menggunakan Dashboard Vercel

1. Setelah mengunggah kode Anda ke repositori GitHub, daftar ke [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss) dengan GitHub dan klik **Tambahkan Proyek Baru**.

![Proyek baru di Vercel](/images/vercel-proyek-baru.webp)

2. Impor repositori GitHub dengan proyek Anda.

![Impor repositori](/images/vercel-impor-proyek.webp)

3. Tambahkan variabel lingkungan Anda.

![Tambahkan variabel lingkungan](/images/vercel-variabel-lingkungan.webp)

4. Klik **Deploy**. Sekarang, setiap kali Anda melakukan perubahan pada repositori Anda, Vercel akan secara otomatis melakukan redeploy aplikasi Anda!

## Menggunakan Vercel CLI

Untuk melakukan deploy dari baris perintah, Anda harus terlebih dahulu [menginstal Vercel CLI secara global](https://vercel.com/docs/cli#installing-vercel-cli).

```bash
npm i -g vercel
```

Jalankan perintah [`vercel`](https://vercel.com/docs/cli/deploying-from-cli) untuk melakukan deploy proyek Anda.

```bash
vercel
```

Sertakan `--env DATABASE_URL=URL_KONEKSI_DATABASE_ANDA_DI_SINI` untuk variabel lingkungan seperti string koneksi database. Gunakan `--yes` jika Anda ingin melewati pertanyaan-pertanyaan deployment dan memberikan jawaban default untuk setiap pertanyaan.

```bash
vercel --env DATABASE_URL=URL_KONEKSI_DATABASE_ANDA_DI_SINI --yes
```

Setelah deployment pertama, perintah ini akan melakukan deploy ke cabang pratinjau. Anda perlu menyertakan `--prod` untuk mendorong perubahan langsung ke situs langsung untuk deployment di masa mendatang.

```bash
vercel --prod
```
