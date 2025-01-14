---
title: Pengantar
description: Pengantar ke Stack T3
layout: ../../layouts/docs.astro
lang: id
---

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/YkOSUVzOAA4" title="Stack terbaik untuk proyek selanjutnya Anda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Stack T3

_"Stack T3"_ adalah sebuah stack pengembangan web yang dibuat oleh [Theo](https://twitter.com/t3dotgg) yang berfokus pada kesederhanaan, modularitas, dan typesafety full-stack.

Inti dari stack ini adalah [**Next.js**](https://nextjs.org/) dan [**TypeScript**](https://typescriptlang.org/). [**Tailwind CSS**](https://tailwindcss.com/) hampir selalu disertakan. Jika Anda melakukan sesuatu yang menyerupai backend, [**tRPC**](https://trpc.io/), [**Prisma**](https://prisma.io/), dan [**NextAuth.js**](https://next-auth.js.org/) adalah tambahan yang bagus.

Anda mungkin telah menyadari bahwa ada… banyak sekali komponen. Ini memang disengaja. Tukar masukkan komponen sesuai kebutuhan Anda - stack ini pada dasarnya adalah modular :)

## Jadi... apa itu create-t3-app? Sebuah template?

Semacam itu? `create-t3-app` adalah sebuah CLI yang dibangun oleh pengembang Stack T3 yang berpengalaman untuk mempermudah setup aplikasi Stack T3 yang modular. Ini berarti setiap komponen adalah opsional, dan "template" dihasilkan berdasarkan kebutuhan spesifik Anda.

Setelah berbagai proyek dan bertahun-tahun di teknologi ini, kami memiliki banyak pendapat dan wawasan. Kami telah melakukan yang terbaik untuk mengkodekannya ke dalam CLI ini.

Ini **BUKAN** sebuah template yang lengkap. Kami **mengharapkan** Anda membawa pustaka Anda sendiri yang memecahkan kebutuhan dari **APLIKASI ANDA**. Meskipun kami tidak ingin meresepkan solusi untuk masalah yang lebih spesifik seperti manajemen state dan penyebaran, kami [memiliki beberapa rekomendasi yang terdaftar di sini](/id/rekomendasi-lain).

## Aksioma T3

Kami akan jujur - ini adalah sebuah _proyek yang beropini_. Kami berbagi sejumlah keyakinan inti seputar pembangunan dan kami memperlakukannya sebagai dasar untuk keputusan kami.

### Memecahkan Masalah

Mudah untuk terjebak dalam perangkap "menambahkan segalanya" - kami secara eksplisit tidak ingin melakukan itu. Segala sesuatu yang ditambahkan ke `create-t3-app` harus memecahkan masalah spesifik yang ada dalam teknologi inti yang disertakan. Ini berarti kami tidak akan menambahkan hal-hal seperti pustaka state (`zustand`, `redux`) tetapi kami akan menambahkan hal-hal seperti NextAuth.js dan mengintegrasikan Prisma dan tRPC untuk Anda.

### Berdarah dengan Bertanggung Jawab

Kami suka teknologi terbaru kami. Jumlah kecepatan dan, jujur saja, kesenangan yang datang dari hal-hal baru sangat keren. Kami pikir penting untuk berdarah dengan bertanggung jawab, menggunakan teknologi berisiko di bagian yang kurang berisiko. Ini berarti kami tidak akan ⛔️ bertaruh pada teknologi database baru yang berisiko (SQL itu bagus!). Tapi kami dengan senang hati ✅ bertaruh pada tRPC karena itu hanya fungsi yang mudah untuk dipindahkan.

### Typesafety Tidak Opsional

Tujuan yang dinyatakan dari Create T3 App adalah untuk menyediakan cara tercepat untuk memulai aplikasi web full-stack, **typesafe** yang baru. Kami mengambil typesafety secara serius di bagian ini karena meningkatkan produktivitas kami dan membantu kami mengirim lebih sedikit bug. Setiap keputusan yang mengkompromikan sifat typesafe dari Create T3 App adalah keputusan yang harus dibuat dalam proyek yang berbeda.
