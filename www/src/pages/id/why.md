---
title: Mengapa CT3A?
description: Mengapa Anda harus memilih Create T3 App untuk proyek selanjutnya
layout: ../../layouts/docs.astro
lang: id
---

Kami memulai Create T3 App karena [Theo](https://twitter.com/t3dotgg) menolak untuk membuat template dari teknologi favoritnya. Terinspirasi oleh create-next-app, [CLI Astro](https://astro.build) dan cinta umum untuk typesafety, tim Create T3 App bekerja keras untuk membangun titik awal yang terbaik untuk proyek T3 Stack baru.

Jika Anda tertarik menggunakan Next.js dengan cara yang typesafe, ini adalah tempat untuk memulai. Jika Anda penasaran tentang pilihan teknologi spesifik yang kami buat, silakan baca lebih lanjut :)

## Mengapa TypeScript?

JavaScript itu sulit. Mengapa menambah lebih banyak aturan?

Kami percaya bahwa pengalaman yang diberikan oleh TypeScript akan membantu Anda menjadi pengembang yang lebih baik. Ini memberikan umpan balik langsung saat Anda menulis kode dengan mendefinisikan tipe data yang diharapkan, dan memberikan autocomplete yang membantu di editor Anda atau memberi tahu Anda dengan garis bergelombang merah jika Anda mencoba mengakses properti yang tidak ada atau mencoba melewati nilai dengan tipe yang salah, yang sebaliknya Anda harus debug lebih lanjut. Apakah Anda baru dalam pengembangan web atau sudah berpengalaman, "keketatan" dari TypeScript akan memberikan pengalaman yang kurang frustasi, lebih konsisten daripada JS vanila.

Typesafety membuat Anda lebih cepat. Jika Anda belum yakin, Anda [mungkin menggunakan TypeScript dengan cara yang salah...](https://www.youtube.com/watch?v=RmGHnYUqQ4k)

## Mengapa Next.js?

Kami suka React. Ini telah membuat pengembangan UI dapat diakses dengan cara yang tidak pernah kami bayangkan sebelumnya. Ini juga bisa membawa pengembang ke beberapa jalan yang berat.

Next.js menawarkan pendekatan yang sedikit beropini, sangat dioptimalkan untuk membuat aplikasi menggunakan React. Mulai dari routing hingga definisi API hingga rendering gambar, kami percaya Next.js untuk membimbing pengembang menuju keputusan yang baik.

## Mengapa tRPC/Prisma/Tailwind/dll?

Meskipun kami percaya dalam menjaga segala sesuatu sesederhana mungkin, kami menemukan potongan-potongan ini digunakan di setiap proyek "aplikasi" seperti yang kami bangun. `create-t3-app` melakukan pekerjaan yang sangat baik membiarkan Anda mengadopsi potongan-potongan yang Anda butuhkan.

### tRPC

tRPC memberikan janji GraphQL tentang pengembangan klien yang mulus terhadap server yang typesafe tanpa semua boilerplate. Ini adalah penyalahgunaan TypeScript yang cerdas yang memberikan pengalaman dev yang luar biasa.

### Prisma

Prisma adalah untuk SQL, TypeScript adalah untuk JS. Ini menciptakan pengalaman pengembang yang belum pernah ada sebelumnya. Dengan menghasilkan tipe dari skema yang didefinisikan oleh pengguna yang kompatibel dengan [beberapa basis data](https://www.prisma.io/docs/concepts/database-connectors), Prisma menjamin typesafety dari ujung ke ujung dari basis data Anda hingga aplikasi Anda.

Prisma menyediakan seluruh [rangkaian alat](https://www.prisma.io/docs/concepts/overview/should-you-use-prisma#-you-want-a-tool-that-holistically-covers-your-database-workflows) yang membuat interaksi sehari-hari dengan basis data Anda lebih mudah. Terutama, Klien Prisma bertanggung jawab untuk query dan membuat SQL begitu mudah sehingga Anda hampir tidak menyadari Anda menggunakannya, dan Prisma Studio adalah GUI yang nyaman untuk basis data Anda yang memungkinkan Anda membaca dan memanipulasi data Anda dengan cepat tanpa harus menulis kode.

### Tailwind CSS

Tailwind terasa seperti "CSS mode zen".

Dengan menyediakan blok bangunan berupa warna default yang baik, spasi, dan primitif lainnya, Tailwind memudahkan pembuatan aplikasi yang tampak baik. Dan tidak seperti pustaka komponen, ia tidak menghambat Anda ketika Anda ingin membawa aplikasi Anda ke level berikutnya dan menciptakan sesuatu yang indah dan unik.

Selain itu, dengan pendekatannya yang seperti inline, Tailwind mendorong Anda untuk gaya tanpa khawatir tentang penamaan kelas, mengatur file, atau masalah lain yang tidak langsung terkait dengan masalah yang Anda coba selesaikan.

### NextAuth.js

Ketika Anda ingin sistem autentikasi di aplikasi NextJS Anda, NextAuth.js adalah solusi yang sangat baik untuk membawa kompleksitas keamanan tanpa repot harus membangunnya sendiri. Ini datang dengan daftar penyedia yang luas untuk segera menambahkan autentikasi OAuth dan menyediakan adaptor untuk banyak basis data dan ORM.
