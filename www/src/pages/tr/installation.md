---
title: Kurulum
description: Create T3 App için kurulum talimatları
layout: ../../layouts/docs.astro
lang: tr
---

`create-t3-app` kullanarak bir uygulama oluşturmak için aşağıdaki üç komuttan birini çalıştırın ve daha sonra karşınıza çıkan soruları yanıtlayın:

### npm

```bash
npm create t3-app@latest
```

### yarn

```bash
yarn create t3-app
```

### pnpm

```bash
pnpm create t3-app@latest
```

Uygulamanız oluşturulduktan sonra, yeni uygulamanıza başlamak için [ilk adımlar](/tr/usage/first-steps) sayfasını inceleyin.

## Gelişmiş kullanım

| Seçenek           | Açıklama                                                                 |
| ----------------- | ------------------------------------------------------------------------ |
| `[dir]`           | Proje adını içeren bir klasör argümanı ekleyin                           |
| `--noGit`         | Uygulamanız için yeni bir git projesi oluşturmamasını özellikle belirtin |
| `-y`, `--default` | Soruları atlayarak yeni projenizi varsayılan ayarlarla oluşturun         |
| `--noInstall`     | Gerekli kütüphaneleri yüklemeyerek projeyi oluşturun                     |

## Deneysel kullanım

CI için, herhangi bir soru cevaplamak zorunda kalmayadan uygulama oluşturabileceğiniz deneysel seçeneklerimiz var. Eğer bu kullanım size uyuyorsa, bu seçenekleri kullanabilirsiniz. Lütfen bu seçeneklerin deneysel olduğunu ve ileride semver versiyonlamayı takip etmeyerek değişebileceğini aklınızda bulundurun.

| Seçenek      | Açıklama                        |
| ------------ | ------------------------------- |
| `--CI`       | CI modunda olduğunuzu belirtin  |
| `--trpc`     | Projeye tRPC dahil edin         |
| `--prisma`   | Projeye Prisma dahil edin       |
| `--nextAuth` | Projeye NextAuth.js dahil edin  |
| `--tailwind` | Projeye Tailwind CSS dahil edin |

**Not: Eğer `CI` seçeneğini koymazsanız geri kalan tüm seçenekler geçersiz sayılır.**

İstemediğiniz eklentileri özellikle belirtmek zorunda değilsiniz. Fakat, belirtmek isterseniz, `false` argümanını kullanabilirsiniz, örneğin `--nextAuth false`.

### Örnek

Aşağıdaki komut, tRPC ve Tailwind CSS kullanarak bir T3 Uygulaması oluşturur.

```bash
pnpm dlx create-t3-app@latest --CI --trpc --tailwind
```
