---
title: Tailwind CSS
description: Penggunaan Tailwind CSS
layout: ../../../layouts/docs.astro
lang: id
---

## Apa itu Tailwind CSS?

Tailwind CSS adalah kerangka kerja CSS [bertumpu pada utilitas](https://tailwindcss.com/docs/utility-first) kecil untuk membangun desain kustom tanpa perlu beralih konteks seperti yang biasa dilakukan dalam CSS biasa. Ini adalah kerangka kerja CSS murni dan tidak menyediakan komponen atau logika pra-dibangun, serta menyediakan [seperangkat manfaat yang sangat berbeda](https://www.youtube.com/watch?v=CQuTF-bkOgc) dibandingkan dengan pustaka komponen seperti Material UI.

Tailwind CSS membuat penulisan CSS menjadi sangat mudah dan cepat, seperti yang ditunjukkan oleh contoh berikut:

CSS Lama:

1. Tulis CSS, seringkali di file terpisah

```css
.my-class {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 1rem;
}
```

2. Impor CSS ke dalam komponen Anda

```jsx
import "./my-class.css";
```

3. Tambahkan kelas ke HTML Anda

```html
<div class="my-class">...</div>
```

Setara dalam Tailwind:

1. Hanya menulis kelas dalam HTML Anda

```html
<div
  class="flex flex-col items-center justify-center rounded border border-gray-200 bg-white p-4"
>
  ...
</div>
```

Ketika digunakan bersama dengan Komponen React, Tailwind CSS sangat kuat untuk dengan cepat membangun UI.

Tailwind CSS memiliki sistem desain bawaan yang indah, yang keluar dari kotak dengan palet warna yang dipilih dengan hati-hati, pola penentuan ukuran untuk gaya seperti lebar/tinggi dan padding/margin untuk desain seragam, serta breakpoint media untuk membuat tata letak responsif. Sistem desain ini dapat disesuaikan dan diperluas untuk membuat perangkat alat gaya yang sesuai dengan kebutuhan proyek Anda.

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/T-Zv73yZ_QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Tru Narla yang lebih dikenal sebagai [mewtru](https://twitter.com/trunarla) memberikan presentasi luar biasa tentang [membangun sistem desain menggunakan Tailwind CSS](https://www.youtube.com/watch?v=T-Zv73yZ_QI).

## Penggunaan

Pastikan Anda telah menginstal plugin editor untuk Tailwind untuk meningkatkan pengalaman menulis Tailwind.

### Ekstensi dan Plugin

- [Ekstensi VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Integrasi JetBrains](https://www.jetbrains.com/help/webstorm/tailwind-css.html#ws_css_tailwind_install)
- [Neovim LSP](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#tailwindcss)

### Pemformatan

Kelas-kelas Tailwind CSS dapat dengan mudah menjadi sedikit berantakan, jadi pemformat untuk kelas-kelas tersebut adalah suatu keharusan. [Plugin Prettier Tailwind CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) mengurutkan kelas-kelas dalam [urutan yang direkomendasikan](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted) sehingga kelas-kelas sesuai dengan bundel css yang dihasilkan. Saat memilih Tailwind dalam CLI, kami akan menginstal dan mengonfigurasi ini untuk Anda.

### Penggunaan Kelas Secara Kondisional

Menggunakan kelas secara kondisional dengan menggunakan operator ternary bisa menjadi sangat berantakan dan sulit dibaca. Paket-paket berikut membantu dalam mengorganisir kelas-kelas Anda saat menggunakan logika kondisional.

- [clsx](https://github.com/lukeed/clsx)
- [classnames](https://github.com/JedWatson/classnames)

## Sumber Daya Berguna

| Sumber Daya                | Tautan                                                     |
| -------------------------- | ---------------------------------------------------------- |
| Dokumentasi Tailwind       | <https://tailwindcss.com/docs/editor-setup/>               |
| Daftar Cepat Tailwind      | <https://nerdcave.com/tailwind-cheat-sheet/>               |
| awesome-tailwindcss        | <https://github.com/aniftyco/awesome-tailwindcss/>         |
| Komunitas Tailwind         | <https://github.com/tailwindlabs/tailwindcss/discussions/> |
| Server Discord Tailwind    | <https://tailwindcss.com/discord/>                         |
| Kanal Youtube TailwindLabs | <https://www.youtube.com/tailwindlabs/>                    |
| Tailwind Playground        | <https://play.tailwindcss.com/>                            |
