---
title: S. S. S.
description: Create T3 App hakkında sıkça sorulan sorular
layout: ../../layouts/docs.astro
lang: tr
---

İşte `create-t3-app` hakkında sıkça sorulan sorular.

## Sonrasında ne var? Bununla nasıl uygulama geliştirebilirim?

Bu projeyi olabildiğince basit tutmaya çalışıyoruz, bizim oluşturduğumuz şablon ile başlayabilirsiniz ve daha sonra gerektiğinde istediğiniz eklentiyi ekleyebilirsiniz.

Eğer bu projede kullanılan farklı teknolojilerden haberdar değilseniz, lütfen teknolojinin kendi dokümantasyonuna bakınız. Eğer hala emin olamadıysanız, lütfen [Discord](https://t3.gg/discord) sunucumuza katılıp yardım isteyin.

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Şu anda nereden öğrenebilirim?

Aşağıda listelenen kaynaklar T3 Stack'ini öğrenmek için en iyi kaynaklar olmasına karşın, topluluk (ve [Theo](https://youtu.be/rzwaaWH0ksk?t=1436)) stack ile bir yerden başlayıp geliştirme yaparken öğrenmenizi öneriyor.

`create-t3-app` kullanmayı düşünüyorsanız, muhtemelen daha önce stack'in bazı parçalarını kullanmışsınızdır. Öyleyse neden bodoslama dalıp bir şeyler geliştirirken diğer kısımları öğrenmiyorsunuz?

Tabii ki bu yöntem herkes için uygun değil. Önerimizi denediğinizi düşünüyor fakat hala öğrenmek için kaynak arıyorsanız, veya öneriyi kendi başınıza deneyecek kadar kendinizden emin değilseniz, veya belki stack size çok fazla gelmişse, o zaman aşağıdaki harika `create-t3-app` derslere göz atabilirsiniz:

### Yazılar

- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)
- [Migrating your T3 App into a Turborepo](https://www.jumr.dev/blog/t3-turbo)
- [Integrating Stripe into your T3 App](https://blog.nickramkissoon.com/posts/integrate-stripe-t3)

### Videolar

- [Build a Twitter Clone with the T3 Stack - tRPC, Next.js, Prisma, Tailwind & Zod](https://www.youtube.com/watch?v=nzJsYJPCc80)
- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [The T3 Stack - How We Built It](https://www.youtube.com/watch?v=H-FXwnEjSsI)
- [An overview of the create T3 App (Next, Typescript, Tailwind, tRPC, Next-Auth)](https://www.youtube.com/watch?v=VJH8dsPtbeU)

## Neden projede `.js` dosyaları var?

[T3-Aksiyomu #3](/en/introduction#typesafety-isnt-optional) göz önünde bulundurularak, type-güvenliğini birinci sınıf vatandaş olarak kabul ediyoruz. Maalesef, tüm framework'ler ve eklentiler TypeScript'i desteklemiyor. Bu yüzden, bazı konfigürasyon dosyaları `.js` uzantılı olmalı.

Bu dosyaların bir nedenden dolayı JavaScript olduğunu vurgulamaya çalışıyoruz ve kullanıldığı kütüphane tarafından desteklenen dosya türünü (`cjs` veya `mjs`) açıkça belirterek bunu gerçekleştiriyoruz. Ayrıca, bu projedeki tüm `js` dosyalarına hala en üstteki `@ts-check` ile type kontrolü yapılmaktadır.

## Uygulamama i18n eklemekte zorlanıyorum. Kullanabileceğim bir referans var mı?

`create-t3-app` içerisinde i18n bulundurmamaya karar verdik çünkü çok tartışılan bir konu ve birden fazla uygulanma yolu var.

Fakat, eğer eklemekte zorlanıyorsanız ve bir referans projesi görmek istiyorsanız [next-18next](https://github.com/i18next/next-i18next) kullanarak nasıl T3 Uygulamanıza i18n ekleyebileceğinizi gösteren bir [referans projemiz](https://github.com/juliusmarminge/t3-i18n) var.

## Neden Next.js 13 ile gelen `/app` yerine `/pages` kullanıyoruz?

[T3-Aksiyomu #2](/en/introduction#bleed-responsibly) göz önünde bulundurularak, son teknoloji şeyleri seviyoruz fakat istikrarlığa da önem veriyoruz, router'ınızın tamamını portlamak çok mu zor, [muhtemelen son teknoloji için iyi bir yer değil](https://youtu.be/mnwUbtieOuI?t=1662). `/app` ne kadar [geleceğe göz kırpsa da](https://youtu.be/rnsC-12PVlM?t=818), gerçek hayat için hazır değil. API daha hala betada ve büyük değişikliklerin gelmesi bekleniyor.

`/app` için desteklenen, planlanan ve üzerinde çalışılan tüm özelliklerin listesini görmek isterseniz [beta Next.js dokümantasyonunu](https://beta.nextjs.org/docs/app-directory-roadmap#supported-and-planned-features) ziyaret edebilirsiniz.
