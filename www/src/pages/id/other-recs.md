---
title: Rekomendasi Lainnya
description: Perpustakaan dan Layanan yang kami rekomendasikan untuk banyak proyek
layout: ../../layouts/docs.astro
lang: id
---

Kami menyadari bahwa perpustakaan yang disertakan dalam `create-t3-app` tidak memecahkan setiap masalah. Meskipun kami mendorong Anda untuk memulai proyek Anda dengan apa yang kami sediakan, akan ada waktu ketika Anda perlu membawa paket lain. Hanya Anda yang bisa tahu apa yang dibutuhkan proyek Anda, tetapi berikut adalah beberapa hal yang sering kami rekomendasikan.

Ini adalah rekomendasi oleh individu kontributor Create T3 App dan seharusnya tidak dilihat sebagai dukungan "resmi" oleh tim Create T3 App atau T3-OSS. _**Lakukan penelitian Anda sendiri, terutama sebelum berkomitmen pada layanan berbayar**_.

## Manajemen State

_**Catatan Editor**_: Perpustakaan manajemen state bisa bagus, tetapi seringkali tidak diperlukan. Hook React Query tRPC seharusnya dapat mengatasi state server Anda. Untuk state klien, mulailah dengan `useState` React, dan gunakan salah satu opsi ini saat Anda membutuhkan lebih banyak.

### Zustand

**Untuk tidak pernah menggunakan Redux lagi**

Redux modern dan sederhana yang Anda tidak tahu Anda butuhkan. [Poimandres](https://github.com/pmndrs) selalu dapat dipercaya. Anda dapat membangun segalanya mulai dari aplikasi panggilan video hingga permainan hingga server dengan perpustakaan kecil ini.

- [Zustand Homepage](https://zustand-demo.pmnd.rs/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)

### Jotai

**Untuk tidak pernah menggunakan Context lagi**

Untuk pendekatan yang lebih atomik, Jotai sulit untuk dikalahkan. Juga oleh [Poimandres](https://github.com/pmndrs), Jotai memungkinkan Anda mendefinisikan singleton yang terasa seperti useState global. Pilihan bagus untuk perilaku yang memerlukan stateful yang belum membutuhkan mesin state.

- [Jotai Homepage](https://jotai.org/)
- [Jotai GitHub](https://github.com/pmndrs/jotai)

## Perpustakaan Komponen

Sebagian besar aplikasi membutuhkan beberapa komponen yang sama - tombol toggle, menu dropdown, modal, dan sebagainya. Perpustakaan ini menyediakan komponen-komponen yang bagus, dapat diakses, yang dapat Anda gunakan dan sesuaikan sesuai keinginan Anda.

### Perpustakaan Komponen Tanpa Gaya

Juga dikenal sebagai perpustakaan tanpa kepala, mereka menyediakan komponen yang bagus, tanpa gaya, dan dapat diakses yang dapat Anda sesuaikan sesuai keinginan Anda. Berikut beberapa rekomendasi.

- [Radix UI](https://www.radix-ui.com/) memberikan seperangkat dasar yang nyaman dan dapat diakses yang dapat Anda gayakan dengan vanilla atau Tailwind CSS.

- [Headless UI](https://headlessui.com/) dibuat oleh tim Tailwind CSS juga menyediakan komponen yang tidak memiliki gaya dan dapat diakses yang berintegrasi dengan sempurna dengan Tailwind CSS.

- [React Aria](https://react-spectrum.adobe.com/react-aria/) menyediakan dasar UI yang dapat diakses untuk sistem desain Anda. Komponen Date Picker mereka adalah yang terbaik.

### Perpustakaan Komponen Dengan Gaya

**Untuk saat Anda hanya ingin tampilan aplikasi Anda terlihat baik**

Kadang-kadang Anda membangun proyek di mana Anda hanya ingin tampilan UI terlihat bagus dari awal. Untuk Dasbor Admin dan proyek serupa lainnya, salah satu perpustakaan komponen ini akan menyelesaikan pekerjaan dengan baik.

- [Chakra UI](https://chakra-ui.com)
- [Mantine](https://mantine.dev)
- [@shadcn/ui](https://ui.shadcn.com/)

### Otoritas Varians Kelas

**Untuk membangun Perpustakaan UI**

Bangun Perpustakaan UI secara deklaratif dengan berbagai variasi warna, ukuran, dll. Ketika proyek Anda mencapai skala di mana Anda ingin sekumpulan komponen UI standar dengan berbagai variasi menggunakan Tailwind CSS, CVA adalah alat yang bagus.

- [Class Variance Authority GitHub](https://github.com/joe-bell/cva)

## Animasi

Ketika Anda membutuhkan animasi dalam aplikasi Anda, berikut rekomendasi kami.

### AutoAnimate

**Untuk animasi dengan satu baris kode**

Sebagian besar perpustakaan animasi mencoba memenuhi setiap kasus penggunaan yang mungkin, dan menjadi kikuk sebagai hasilnya. AutoAnimate adalah alat tanpa konfigurasi yang akan memberikan peningkatan yang signifikan dalam UX tanpa usaha pengembang tambahan.

- [AutoAnimate Homepage](https://auto-animate.formkit.com/)
- [AutoAnimate GitHub](https://github.com/formkit/auto-animate)
- [Potongan Kode Komponen AutoAnimate](https://gist.github.com/hwkr/3fdea5d7f609b98c162e5325637cf3cb)

### Framer Motion

**Untuk animasi kompleks dengan kode yang deklaratif**

Framer Motion menyediakan sintaksis yang sederhana dan deklaratif dan memungkinkan Anda menulis kode yang lebih sedikit untuk membuat segala sesuatu mulai dari animasi kompleks hingga gerakan.

- [Framer Motion Homepage](https://framer.com/motion)
- [Dokumentasi Framer Motion](https://www.framer.com/docs/)

## Penyimpanan, Infrastruktur, Basis Data, dan CI

### Vercel

**Untuk hosting aplikasi Anda**

Vercel mengatasi masalah penyebaran web dan membuatnya menjadi integrasi GitHub yang dapat diatur dan dilupakan. Kami telah mengskalakan hingga ratusan ribu pengguna tanpa masalah. Berbasis AWS, hanya memiliki antarmuka yang lebih baik :)

- [Vercel Homepage](https://vercel.com/)
- [Panduan penyebaran Create T3 App Vercel](/id/deployment/vercel)

### PlanetScale

**Untuk basis data tanpa kekhawatiran**

PlanetScale adalah platform "basis data serverless" terbaik yang pernah kami gunakan. Skala yang luar biasa, pengalaman pengembang yang hebat, dan harga fantastis. Jika Anda menggunakan SQL (dan semoga Prisma), ini sulit untuk dikalahkan.

- [PlanetScale Homepage](https://planetscale.com/)

### Railway

**Untuk hosting infrastruktur Anda**

"Heroku Modern". Cara termudah untuk mendapatkan server nyata yang berfungsi. Jika Vercel dan PlanetScale belum cukup, Railway mungkin akan cocok. Tunjukkannya ke repositori GitHub dan jalankan.

- [Railway Homepage](https://railway.app/)

### Upstash

**Untuk Redis serverless**

Kami suka Prisma dan PlanetScale, tetapi beberapa proyek memerlukan solusi yang lebih cepat. Upstash memungkinkan Anda mendapatkan kinerja in-memory Redis dalam proyek serverless Anda, tanpa harus mengelola infrastruktur dan penyesuaian sendiri.

- [Upstash Homepage](https://upstash.com/)

### Pusher

**Untuk WebSockets serverless**

Jika WebSockets menjadi fokus utama proyek Anda, Anda mungkin ingin mempertimbangkan backend yang lebih tradisional seperti [Fastify](https://www.fastify.io/) (yang [juga bekerja dengan tRPC!](https://trpc.io/docs/v10/fastify)). Tetapi jika Anda ingin dengan cepat menambahkan WebSockets ke T3 App, Pusher adalah pilihan yang sangat baik.

- [Pusher Homepage](https://pusher.com/)

### Soketi

Soketi adalah alternatif self-hostable, sederhana, dan cepat untuk Pusher. Ini sepenuhnya kompatibel dengan SDK Pusher yang dapat Anda gunakan untuk terhubung ke server. Soketi serverless juga dalam versi beta.

- [Soketi Homepage](https://soketi.app)
- [Soketi GitHub](https://github.com/soketi/soketi)

## Analitik

Data pengguna sangat berharga saat Anda membangun aplikasi. Berikut beberapa penyedia analitik yang kami rekomendasikan.

### Plausible

Butuh analitik? Plausible adalah salah satu cara tercepat untuk mendapatkannya. Sangat minimalis. Bahkan memiliki [plugin sederhana untuk Next.js](https://plausible.io/docs/proxy/guides/nextjs).

- [Plausible Homepage](https://plausible.io/)

### Umami

Umami adalah alternatif Google Analytics yang open-source, dapat di-hosting sendiri, sederhana, cepat, dan berfokus pada privasi. Anda dapat dengan mudah mendeploynya ke Vercel, Railway, dll. dengan PlanetScale sebagai basis datanya atau Anda juga bisa menggunakan versi cloudnya.

- [Umami Homepage](https://umami.is/)
- [Umami GitHub](https://github.com/umami-software/umami)
- [Umami Cloud](https://cloud.umami.is/)

## Lainnya

### Next Bundle Analyzer

Terkadang sulit untuk menentukan apa yang akan disertakan dalam output build aplikasi Anda. Next Bundle Analyzer adalah cara mudah untuk memvisualisasikan dan menganalisis bundel JavaScript yang dihasilkan.

- [@next/bundle-analyzer di npm](https://www.npmjs.com/package/@next/bundle-analyzer)
