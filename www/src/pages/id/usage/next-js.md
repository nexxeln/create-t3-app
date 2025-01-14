---
title: Next.js
description: Penggunaan Next.js
layout: ../../../layouts/docs.astro
lang: id
---

Next.js adalah framework backend untuk aplikasi React Anda.

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/W4UhNo3HAMw" title="Next.js adalah framework backend" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Lihat [presentasi Theo tentang Next.js Conf](https://www.youtube.com/watch?v=W4UhNo3HAMw) untuk mendapatkan pemahaman yang lebih baik tentang apa itu Next.js dan bagaimana cara kerjanya.</p>

## Mengapa Harus Menggunakannya?

Kami mencintai React. Ini telah membuat pengembangan UI dapat diakses dengan cara yang belum pernah kami bayangkan sebelumnya. Ini juga dapat membimbing pengembang ke jalur yang sulit. Next.js menawarkan pendekatan yang sedikit berpendapat dan sangat dioptimalkan untuk membuat aplikasi menggunakan React. Mulai dari routing hingga definisi API hingga rendering gambar, kami percayakan Next.js untuk membimbing pengembang menuju keputusan yang baik.

Menggabungkan Next.js dengan [Vercel](https://vercel.com/) membuat pengembangan dan penyebaran aplikasi web lebih mudah daripada sebelumnya. Paket gratis mereka yang sangat murah hati dan antarmuka yang sangat intuitif menyediakan solusi klik-dan-pilih untuk mendeploy situs Anda (Kami ❤️ Vercel)

## Dapatkan Static/Server Props

Salah satu fitur utama Next.js adalah kemampuan pengambilan data. Kami sangat menyarankan untuk membaca [dokumentasi resmi](https://nextjs.org/docs/basic-features/data-fetching) untuk memahami cara menggunakan setiap metode dan bagaimana perbedaannya. `getServerSideProps` umumnya tidak disarankan kecuali ada alasan yang baik, karena itu adalah panggilan pemblokiran dan akan melambatkan situs Anda. [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) adalah alternatif yang bagus untuk `getServerSideProps` ketika data bersifat dinamis dan dapat diambil secara bertahap.

Jika Anda perlu menggunakan fitur ini, periksa tautan-tautan berikut: [Advanced tRPC - Pemanggil, fungsi, dan gSSP](https://www.youtube.com/watch?v=G2ZzmgShHgQ) dan [SSG-Helpers](https://trpc.io/docs/v9/ssg-helpers)

## Sumber Daya Berguna

| Sumber Daya                    | Tautan                               |
| ------------------------------ | ------------------------------------ |
| Dokumentasi Next.js            | <https://nextjs.org/docs>            |
| GitHub Next.js                 | <https://github.com/vercel/next.js>  |
| Blog Next.js                   | <https://nextjs.org/blog>            |
| Discord Next.js                | <https://nextjs.org/discord>         |
| Twitter Next.js                | <https://twitter.com/nextjs>         |
| Saluran YouTube Vercel/Next.js | <https://www.youtube.com/c/VercelHQ> |
