---
title: TypeScript
description: Penggunaan TypeScript
layout: ../../../layouts/docs.astro
lang: id
---

<blockquote className="w-full relative border-l-4 italic bg-t3-purple-200 dark:text-t3-purple-50 text-zinc-900 dark:bg-t3-purple-300/20 p-2 rounded-md text-sm my-3 border-neutral-500 quote">
  <div className="relative w-fit flex items-center justify-center p-1">
    <p className="mb-4 text-lg">
      <span aria-hidden="true">&quot;</span>Bangun jaringan keamanan, bukan pagar pelindung<span aria-hidden="true">&quot;</span>
    </p>
  </div>
  <cite className="flex items-center justify-end pr-4 pb-2">
    <img
      alt="Avatar of @t3dotgg"
      className="w-12 rounded-full bg-neutral-500 [margin-inline-end:16px]"
      src="/images/theo_300x300.webp"
    />
    <div className="flex flex-col items-start not-italic">
      <span className=" text-sm font-semibold">Theo - pencipta T3 Stack</span>
      <a
        href="https://twitter.com/t3dotgg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm"
      >
        @t3dotgg
      </a>
    </div>
  </cite>
</blockquote>

Baik Anda seorang pengembang baru atau berpengalaman, kami berpikir bahwa TypeScript adalah suatu keharusan. Ini mungkin tampak menakutkan pada awalnya, tetapi seperti banyak alat lainnya, ini adalah sesuatu yang banyak orang tidak pernah menyesalinya setelah mulai menggunakannya.

Ini memberikan umpan balik langsung saat Anda menulis kode Anda dengan mendefinisikan tipe data yang diharapkan, dan entah memberikan penyelesaian otomatis yang berguna di editor kode Anda, atau berteriak pada Anda dengan garis-garis merah bergelombang jika Anda mencoba mengakses properti yang tidak ada atau mencoba meneruskan nilai dengan jenis yang salah, yang sebaliknya akan membuat Anda harus melakukan debugging lebih lanjut.

Mungkin ini adalah alat yang memberikan produktivitas terbanyak kepada para pengembang; memberikan dokumentasi kode yang Anda tulis atau konsumsi langsung di editor Anda, dan memberikan umpan balik instan saat Anda melakukan kesalahan adalah benar-benar tak ternilai.

## Inferensi Tipe

Meskipun banyak pengembang TypeScript baru khawatir tentang _menulis_ TypeScript, banyak manfaatnya sebenarnya tidak memerlukan Anda untuk mengubah kode Anda sama sekali, terutama inferensi. Inferensi berarti jika sesuatu memiliki tipe, tipe itu akan mengikuti selama aliran aplikasi tanpa perlu dideklarasikan ulang di tempat lain. Ini berarti bahwa, sebagai contoh, begitu Anda telah mendefinisikan tipe argumen yang diterima oleh suatu fungsi, sisa fungsi tersebut biasanya akan aman dalam hal tipe tanpa memerlukan kode khusus TypeScript lebih lanjut. Pengembang perpustakaan banyak bekerja keras untuk mempertahankan tipe-tipe perpustakaan mereka, yang berarti bahwa kami sebagai pengembang aplikasi dapat mengambil manfaat dari inferensi dan dokumentasi bawaan dalam editor kode Anda yang diberikan oleh tipe-tipe ini.

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/RmGHnYUqQ4k" title="Anda Mungkin Salah Menggunakan TypeScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Lihat video Theo tentang [Anda mungkin salah menggunakan TypeScript](https://www.youtube.com/watch?v=RmGHnYUqQ4k).

## Penggunaan Kuat dari Inferensi Tipe

### Zod

[Zod](https://github.com/colinhacks/zod) adalah perpustakaan validasi skema yang dibangun di atas TypeScript. Tulis skema yang mewakili sumber kebenaran tunggal untuk data Anda, dan Zod akan memastikan bahwa data Anda valid di seluruh aplikasi Anda, bahkan melintasi batas jaringan dan API eksternal.

### Tanstack Query

[Tanstack Query](https://tanstack.com/query/v4/) memberikan Anda kueri dan mutasi yang deklaratif, selalu terkini, dan dikelola otomatis yang secara langsung meningkatkan pengalaman pengembang dan pengguna Anda.

## Sumber Daya Berguna

| Sumber Daya                                                      | Tautan                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------------- |
| Panduan TypeScript                                               | <https://www.typescriptlang.org/docs/handbook/>                     |
| Tutorial TypeScript untuk Pemula                                 | <https://github.com/total-typescript/beginners-typescript-tutorial> |
| Tantangan Tipe                                                   | <https://github.com/type-challenges/type-challenges>                |
| Saluran Youtube "Rodney Mullen" (Matt Pocock) tentang TypeScript | <https://www.youtube.com/c/MattPocockUk/videos>                     |
