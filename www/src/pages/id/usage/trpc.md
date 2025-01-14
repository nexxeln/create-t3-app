---
title: tRPC
description: Penggunaan tRPC
layout: ../../../layouts/docs.astro
lang: id
---

tRPC memungkinkan kita untuk menulis API yang aman tipe end-to-end tanpa kode generasi atau beban runtime. Ini menggunakan inferensi TypeScript yang luar biasa untuk menginfer definisi tipe router API Anda dan memungkinkan Anda untuk memanggil prosedur API Anda dari frontend dengan keamanan tipe penuh dan autokomplet. Saat menggunakan tRPC, frontend dan backend Anda terasa lebih dekat daripada sebelumnya, sehingga menghasilkan pengalaman pengembang yang luar biasa.

<blockquote className="w-full relative border-l-4 italic bg-t3-purple-200 dark:text-t3-purple-50 text-zinc-900 dark:bg-t3-purple-300/20 p-2 rounded-md text-sm my-3 border-neutral-500 quote">
  <div className="relative w-fit flex items-center justify-center p-1">
    <p className="mb-4 text-lg">
      <span aria-hidden="true">&quot;</span>Saya membangun tRPC untuk memungkinkan orang bergerak lebih cepat dengan menghilangkan kebutuhan akan lapisan API tradisional, sambil tetap yakin bahwa aplikasi kita tidak akan rusak saat kita beriterasi dengan cepat.<span aria-hidden="true">&quot;</span>
    </p>
  </div>
  <cite className="flex items-center justify-end pr-4 pb-2">
    <img
      alt="Avatar of @alexdotjs"
      className="w-12 rounded-full bg-neutral-500 [margin-inline-end:16px]"
      src="https://avatars.githubusercontent.com/u/459267?v=4"
    />
    <div className="flex flex-col items-start not-italic">
      <span className=" text-sm font-semibold">Alex - pencipta tRPC</span>
      <a
        href="https://twitter.com/alexdotjs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm"
      >
        @alexdotjs
      </a>
    </div>
  </cite>
</blockquote>

## Bagaimana Cara Menggunakan tRPC?

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/2LYM8gf184U" title="Membuat API Tipe Aman dengan Mudah dengan tRPC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Penyumbang tRPC [trashh_dev](https://twitter.com/trashh_dev) membuat [talk yang luar biasa di Next.js Conf](https://www.youtube.com/watch?v=2LYM8gf184U) tentang tRPC. Kami sangat merekomendasikan Anda menontonnya jika Anda belum melakukannya.

Dengan tRPC, Anda menulis fungsi TypeScript di backend Anda, dan kemudian memanggilnya dari frontend Anda. Sebuah prosedur tRPC sederhana bisa terlihat seperti ini:

```ts:server/api/routers/user.ts
const userRouter = createTRPCRouter({
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: input,
      },
    });
  }),
});
```

Ini adalah prosedur tRPC (setara dengan penanganan rute di backend tradisional) yang pertama-tama memvalidasi input menggunakan Zod (yang merupakan library validasi yang sama yang kami gunakan untuk [variabel lingkungan](./env-variables)) - dalam hal ini, memastikan bahwa input adalah string. Jika input bukan string, akan mengirimkan error informatif.

Setelah input, kami menggabungkan fungsi resolver yang dapat berupa [query](https://trpc.io/docs/v10/react-queries), [mutation](https://trpc.io/docs/v10/react-mutations), atau [subscription](https://trpc.io/docs/v10/subscriptions). Dalam contoh kami, resolver memanggil basis data kami menggunakan klien [prisma](./prisma) kami dan mengembalikan pengguna yang `id`-nya cocok dengan yang kita lewati.

Anda mendefinisikan prosedur Anda dalam `routers` yang mewakili kumpulan prosedur terkait dengan namespace bersama. Anda mungkin memiliki satu router untuk `pengguna`, satu untuk `pos`, dan lainnya untuk `pesan`. Router-router ini kemudian dapat digabungkan menjadi satu router `appRouter` yang terpusat:

```ts:server/api/root.ts
const appRouter = createTRPCRouter({
  users: userRouter,
  posts: postRouter,
  messages: messageRouter,
});

export type AppRouter = typeof appRouter;
```

Perhatikan bahwa kami hanya perlu mengekspor definisi tipe router kami, yang berarti kami tidak pernah mengimpor kode server apa pun di client kami.

Sekarang mari panggil prosedur di frontend kami. tRPC menyediakan wrapper untuk `@tanstack/react-query` yang memungkinkan Anda memanfaatkan semua kekuatan hooks yang mereka sediakan, tetapi dengan manfaat tambahan panggilan API Anda yang diketik dan diinferensikan. Kami dapat memanggil prosedur kami dari frontend kami seperti ini:

```tsx:pages/users/[id].tsx
import { useRouter } from "next/router";
import { api } from "../../utils/api";

const UserPage = () => {
  const { query } = useRouter();
  const userQuery = api.users.getById.useQuery(query.id);

  return (
    <div>
      <h1>{userQuery.data?.name}</h1>
    </div>
  );
};
```

Anda akan segera melihat seberapa baik autokomplet dan keamanan tipe ini. Begitu Anda menulis `api.`, router Anda akan muncul dalam autokomplet, dan ketika Anda memilih router, prosedur-prosedurnya juga akan muncul. Anda juga akan mendapatkan error TypeScript jika input Anda tidak cocok dengan validator yang Anda tentukan di backend.

## Menginfer Error

Secara default, `create-t3-app` menyiapkan [formatter error](https://trpc.io/docs/error-formatting) yang memungkinkan Anda menginfer Error Zod jika Anda mendapatkan error validasi di backend.

Contoh penggunaan:

```tsx
function MyComponent() {
  const { mutate, error } = api.post.create.useMutation();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      mutate({ title: formData.get('title') });
    }}>
      <input name="title" />
      {error?.data?.zodError?.field

Errors.title && (
        {/** `mutate` mengembalikan error di `title` */}
        <span className="mb-8 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </span>
      )}

      ...
    </form>
  );
}
```

## Berkas

tRPC memerlukan cukup banyak boilerplate yang disiapkan oleh `create-t3-app`. Mari kita bahas berkas-berkas yang dihasilkan:

### 📄 `pages/api/trpc/[trpc].ts`

Ini adalah titik masuk untuk API Anda dan mengekspos router tRPC. Biasanya, Anda tidak akan banyak menyentuh file ini, tetapi jika Anda perlu, misalnya, mengaktifkan middleware CORS atau sejenisnya, berguna untuk mengetahui bahwa `createNextApiHandler` yang diekspor adalah [penangan API Next.js](https://nextjs.org/docs/api-routes/introduction) yang mengambil objek [request](https://developer.mozilla.org/en-US/docs/Web/API/Request) dan [response](https://developer.mozilla.org/en-US/docs/Web/API/Response). Ini berarti Anda dapat membungkus `createNextApiHandler` dalam middleware apa pun yang Anda inginkan. Lihat di bawah untuk [contoh potongan](#enabling-cors) menambahkan CORS.

### 📄 `server/api/trpc.ts`

File ini dibagi menjadi dua bagian, pembuatan konteks dan inisialisasi tRPC:

1. Kami mendefinisikan konteks yang diberikan ke prosedur tRPC Anda. Konteks adalah data yang akan diakses oleh semua prosedur tRPC Anda, dan merupakan tempat yang baik untuk meletakkan hal-hal seperti koneksi database, informasi otentikasi, dll. Di create-t3-app, kami menggunakan dua fungsi, untuk memungkinkan penggunaan subset konteks ketika kami tidak memiliki akses ke objek permintaan.

- `createInnerTRPCContext`: Ini adalah tempat Anda mendefinisikan konteks yang tidak bergantung pada permintaan, misalnya, koneksi database Anda. Anda dapat menggunakan fungsi ini untuk [pengujian integrasi](#sample-integration-test) atau [ssg-helpers](https://trpc.io/docs/v10/ssg-helpers) di mana Anda tidak memiliki objek permintaan.

- `createTRPCContext`: Inilah tempat Anda mendefinisikan konteks yang bergantung pada permintaan, misalnya, sesi pengguna. Anda meminta sesi menggunakan objek `opts.req`, dan kemudian meneruskan sesi ke fungsi `createInnerTRPCContext` untuk membuat konteks akhir.

2. Kami menginisialisasi tRPC dan mendefinisikan [prosedur](https://trpc.io/docs/v10/procedures) yang dapat digunakan kembali dan [middlewares](https://trpc.io/docs/v10/middlewares). Menurut konvensi, Anda sebaiknya tidak mengekspor seluruh objek `t`, tetapi sebaliknya, membuat prosedur dan middlewares yang dapat digunakan kembali dan mengekspornya.

Anda akan melihat kami menggunakan `superjson` sebagai [data transformer](https://trpc.io/docs/v10/data-transformers). Ini membuatnya sehingga tipe data Anda tetap ada saat mencapai client, sehingga jika Anda, misalnya, mengirimkan objek `Date`, client akan mengembalikan `Date` dan bukan string seperti yang terjadi pada sebagian besar API.

### 📄 `server/api/routers/*.ts`

Di sinilah Anda mendefinisikan rute dan prosedur API Anda. Menurut konvensi, Anda [membuat router terpisah](https://trpc.io/docs/v10/router) untuk prosedur terkait.

### 📄 `server/api/root.ts`

Di sini kita [menggabungkan](https://trpc.io/docs/v10/merging-routers) semua sub-router yang didefinisikan di `routers/**` menjadi satu router aplikasi.

### 📄 `utils/api.ts`

Ini adalah titik masuk frontend untuk tRPC. Di sinilah Anda akan mengimpor **definisi tipe** router dan membuat klien tRPC Anda bersama dengan hook react-query. Karena kami mengaktifkan `superjson` sebagai transformer data kami di backend, kami perlu mengaktifkannya juga di frontend. Ini karena data yang diserialkan dari backend akan dideserialkan di frontend.

Anda akan mendefinisikan [link tRPC](https://trpc.io/docs/v10/links) Anda di sini, yang menentukan aliran permintaan dari client ke server. Kami menggunakan "default" [`httpBatchLink`](https://trpc.io/docs/v10/links/httpBatchLink) yang mengaktifkan [request batching](https://cloud.google.com/compute/docs/api/how-tos/batch), serta [`loggerLink`](https://trpc.io/docs/v10/links/loggerLink) yang menghasilkan log permintaan yang berguna selama pengembangan.

Terakhir, kami mengekspor [tipe pembantu](https://trpc.io/docs/v10/infer-types#additional-dx-helper-type) yang dapat Anda gunakan untuk menginfer tipe Anda di frontend.

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/x4mu-jOiA0Q" title="Bagaimana tRPC Benar-benar Bekerja" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Kontributor Create T3 App [Christopher Ehrlich](https://twitter.com/ccccjjjjeeee) membuat [video tentang aliran data di tRPC](https://www.youtube.com/watch?v=x4mu-jOiA0Q). Video ini direkomendasikan jika Anda telah menggunakan tRPC tetapi masih merasa agak kurang jelas tentang bagaimana itu bekerja.

## Bagaimana Cara Memanggil API Saya Secara Eksternal?

Dengan API reguler, Anda dapat memanggil endpoint Anda menggunakan klien HTTP apa pun seperti `curl`, `Postman`, `fetch`, atau langsung dari browser Anda. Dengan tRPC, ini agak berbeda. Jika Anda ingin memanggil prosedur Anda tanpa klien tRPC, ada dua cara yang direkomendasikan untuk melakukannya:

### Mengekspos Satu Prosedur Secara Eksternal

Jika Anda ingin mengekspos satu prosedur secara eksternal, Anda mencari [panggilan sisi server](https://trpc.io/docs/v10/server-side-calls). Ini akan memungkinkan Anda membuat endpoint API Next.js biasa, tetapi dapat menggunakan bagian resolver dari prosedur tRPC Anda.

```ts:pages/api/users/[id].ts
import { type NextApiRequest, type NextApiResponse } from "next";
import { appRouter } from "../../../server/api/root";
import { createTRPCContext } from "../../../server/api/trpc";

const userByIdHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Buat konteks dan pemanggil
  const ctx = await createTRPCContext({ req, res });
  const caller = appRouter.createCaller(ctx);
  try {
    const { id } = req.query;
    const user = await caller.user.getById(id);
    res.status(200).json(user);
  } catch (cause) {
    if (cause instanceof TRPCError) {
      // Terjadi kesalahan dari tRPC
      const httpCode = getHTTPStatusCodeFromError(cause);
      return res.status(httpCode).json(cause);
    }
    // Terjadi kesalahan lainnya
    console.error(cause);
    res.status(500).json({ message: "Kesalahan server internal" });
  }
};

export default userByIdHandler;
```

### Mengekspos Setiap Prosedur Sebagai Endpoint REST

Jika Anda ingin mengekspos setiap prosedur secara eksternal, coba plugin yang dibuat oleh komunitas bernama [trpc-openapi](https://github.com/jlalmes/trpc-openapi/tree/master). Dengan menyediakan beberapa meta-data tambahan untuk prosedur-prosedur Anda, Anda dapat menghasilkan API REST yang sesuai dengan OpenAPI dari router tRPC Anda.

### Ini Hanya Permintaan HTTP

tRPC berkomunikasi melalui HTTP, jadi memang mungkin untuk memanggil prosedur tRPC Anda menggunakan permintaan HTTP "biasa". Namun, sintaksnya bisa jadi cukup rumit karena [protokol RPC](https://trpc.io/docs/v10/rpc) yang digunakan oleh tRPC. Jika Anda penasaran, Anda bisa melihat bagaimana permintaan dan respons tRPC terlihat di tab jaringan browser Anda, tetapi kami menyarankan untuk melakukannya hanya sebagai latihan edukatif dan tetap menggunakan salah satu solusi yang dijelaskan di atas.

## Perbandingan dengan Endpoint API Next.js

Mari kita bandingkan sebuah endpoint API Next.js dengan prosedur tRPC. Katakanlah kita ingin mengambil objek pengguna dari database dan mengembalikannya ke frontend. Kita bisa menulis endpoint API Next.js seperti ini:

```ts:pages/api/users/[id].ts
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../../server/db";

const userByIdHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "ID tidak valid" });
  }

  const examples = await prisma.example.findFirst({
    where: {
      id,
    },
  });

  res.status(200).json(examples);
};

export default userByIdHandler;
```

```ts:pages/users/[id].tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
};
```

Bandingkan dengan contoh tRPC di atas, Anda dapat melihat beberapa keunggulan tRPC:

- Daripada menentukan URL untuk setiap rute, yang bisa menjadi merepotkan untuk didebug jika ada perubahan, seluruh router Anda adalah objek dengan fitur autocomplete.
- Anda tidak perlu memvalidasi metode HTTP yang digunakan.
- Anda tidak perlu memvalidasi bahwa permintaan query atau body mengandung data yang benar dalam prosedur, karena Zod akan menangani ini.
- Daripada membuat respons, Anda dapat melempar kesalahan dan mengembalikan nilai atau objek seperti yang Anda lakukan dalam fungsi TypeScript lainnya.
- Memanggil prosedur di frontend memberikan autocomplete dan keamanan tipe.

## Potongan Kode Berguna

Berikut beberapa potongan kode yang mungkin berguna.

### Mengaktifkan CORS

Jika Anda perlu mengonsumsi API Anda dari domain yang berbeda, misalnya dalam sebuah monorepo yang mencakup aplikasi React Native, Anda mungkin perlu mengaktifkan CORS:

```ts:pages/api/trpc/[trpc].ts
import { type NextApiRequest, type NextApiResponse } from "next";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";
import cors from "nextjs-cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Aktifkan CORS
  await cors(req, res);

  // Buat dan panggil handler tRPC
  return createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
  })(req, res);
};

export default handler;
```

### Pembaruan Optimis

Pembaruan optimis adalah ketika kita memperbarui UI sebelum panggilan API selesai. Ini memberikan pengalaman yang lebih baik bagi pengguna karena mereka tidak perlu menunggu panggilan API selesai sebelum UI mencerminkan hasil dari tindakan mereka. Namun, aplikasi yang sangat mengutamakan kebenaran data sebaiknya menghindari pembaruan optimis karena ini bukan representasi "benar" dari status backend. Anda dapat membaca lebih lanjut di [dokumentasi React Query](https://tanstack.com/query/v4/docs/guides/optimistic-updates).

```tsx
const MyComponent = () => {
  const listPostQuery = api.post.list.useQuery();

  const utils = api.useContext();
  const postCreate = api.post.create.useMutation({
    async onMutate(newPost) {
      // Batalkan fetch yang sedang berlangsung (sehingga mereka

 tidak mengganti pembaruan optimis kita)
      await utils.post.list.cancel();

      // Dapatkan data dari queryCache
      const prevData = utils.post.list.getData();

      // Perbarui data secara optimis dengan pos baru kita
      utils.post.list.setData(undefined, (old) => [...old, newPost]);

      // Kembalikan data sebelumnya sehingga kita dapat mengembalikannya jika terjadi masalah
      return { prevData };
    },
    onError(err, newPost, ctx) {
      // Jika mutasi gagal, gunakan nilai konteks dari onMutate
      utils.post.list.setData(undefined, ctx.prevData);
    },
    onSettled() {
      // Sinkronkan dengan server setelah mutasi selesai
      utils.post.list.invalidate();
    },
  });
};
```

### Contoh Pengujian Integrasi

Berikut contoh pengujian integrasi yang menggunakan [Vitest](https://vitest.dev) untuk memeriksa apakah router tRPC Anda berfungsi seperti yang diharapkan, parser input menyimpulkan tipe yang benar, dan data yang dikembalikan cocok dengan hasil yang diharapkan.

```ts
import { type inferProcedureInput } from "@trpc/server";
import { expect, test } from "vitest";

import { appRouter, type AppRouter } from "~/server/api/root";
import { createInnerTRPCContext } from "~/server/api/trpc";

test("contoh router", async () => {
  const ctx = await createInnerTRPCContext({ session: null });
  const caller = appRouter.createCaller(ctx);

  type Input = inferProcedureInput<AppRouter["contoh"]["halo"]>;
  const input: Input = {
    teks: "tes",
  };

  const contoh = await caller.contoh.halo(input);

  expect(contoh).toMatchObject({ sapaan: "Halo tes" });
});
```

Jika prosedur Anda dilindungi, Anda dapat melewatkan objek `session` yang dimock saat Anda membuat konteks:

```ts
test("contoh router yang dilindungi", async () => {
  const ctx = await createInnerTRPCContext({
    session: {
      user: { id: "123", name: "John Doe" },
      expires: "1",
    },
  });
  const caller = appRouter.createCaller(ctx);

  // ...
});
```

## Sumber Daya Berguna

| Sumber Daya             | Tautan                                                    |
| ----------------------- | --------------------------------------------------------- |
| Dokumentasi tRPC        | <https://www.trpc.io>                                     |
| Banyak Contoh tRPC      | <https://github.com/trpc/trpc/tree/next/examples>         |
| Dokumentasi React Query | <https://tanstack.com/query/v4/docs/adapters/react-query> |
