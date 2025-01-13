---
title: Giriş
description: T3 Stack'ine Giriş
layout: ../../layouts/docs.astro
lang: tr
---

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/PbjHxIuHduU" title="The best stack for your next project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## T3 Stack

_"T3 Stack"_, [Theo](https://twitter.com/t3dotgg) tarafından geliştirilen; kolaylık, modülerlik ve full-stack type-güvenliğine odaklanan bir web geliştirme stack'idir.

İçinde hemen hemen her zaman [**Next.js**](https://nextjs.org/) ve [**TypeScript**](https://typescriptlang.org/) temelini barındırır. Eğer backend benzeri işler de yapıyorsanız [**tRPC**](https://trpc.io/), [**Prisma**](https://prisma.io/) ve [**NextAuth.js**](https://next-auth.js.org/) projenize güzel eklentiler olabilir.

Fark ettiğiniz üzere çok… fazla kütüphane/eklenti var. Bu şekilde tasarlandı. Bu parçaları istediğiniz gibi çıkarıp ekleyin. Stack, özünde modüler :)

## Peki... create-t3-app nedir? Bir şablon mu?

Gibi diyebiliriz? `create-t3-app`, T3 Stack geliştiricileri tarafından oluşturulan bir CLI'dır ve modüler bir T3 Stack projesinin kurulumunu hızlandırır. Bu, tüm eklentilerin isteğe bağlı olduğu ve "şablon"un ihtiyaçlarınıza göre oluşturulduğu anlamına gelir.

Sayısız proje ve bu teknoloji üzerinde yıllar boyunca uğraştıktan sonra birçok fikrimiz ve öngörülerimiz var. Onları bu CLI'a uygulayabilmek için elimizden gelenin en iyisini yaptık.

Bu, her şey dahil bir şablon **DEĞİLDİR**. Sizden **KENDİ** projenizdeki bir sorunu çözmeniz için kendi kütüphanelerinizi kullanmanız **beklenir**. State yönetimi veya dağıtım gibi özel problemlerin çözümlerini tek tek yazmak istemediğimiz gibi [birkaç önerimizi de buradan bulabilirsiniz](/tr/other-recs).

## T3 Aksiyomları

Açık sözlü olacağız - bu _dogma bir proje_. Geliştiricilik üzerinde birkaç temel inanç paylaşıyoruz ve bunları kararlarımızın temeli olarak kabul ediyoruz.

### Problem Çözmek

"hepsini eklemek" gibi bir hataya düşmek oldukça kolay - sizden özellikle bunu yapmanızı istemiyoruz. `create-t3-app` içine eklenen her şey, içinde bulunan temel teknolojilerde var olan bir belirli sorunu çözmelidir. Bu, (`zustand`, `redux` ) gibi state kütüphanelerini buraya eklemeyeceğimiz anlamına gelir, ancak NextAuth.js gibi şeyleri ekleyecek ve Prisma ve tRPC'yi sizin için entegre edeceğiz.

### Yeni Teknolojileri Sorumlu Kullanmak

En yeni teknolojilere bayılıyoruz. Yeni teknolojilerdeki hız miktarı ve dürüst olmak gerekirse, eğlence, çok güzel. Yeni teknolojileri sorumlu kullanmanın önemli olduğunu düşündüğümüz için riskli yeni teknolojileri az riskli yerlerde kullanıyoruz. Bu, yeni ve riskli bir veritabanı teknolojisine (SQL iyidir!) yanaşmayacağımız ⛔️ anlamına gelir. Ancak bırakmanın kolay ve önemsiz olduğu tRPC'ye mutlu bir şekilde ✅ yanaşırız.

### Zorunlu Type-güvenliği

`create-t3-app`'in asıl amacı en hızlı şekilde yeni full-stack ve **type-güvenli** bir web uygulaması oluşturmak. Verimliliğimizi artırdığı için ve daha az hatalı kodu kullanıcıya sunmayı sağladığı için type-güvenliğini ciddiye alıyoruz. `create-t3-app`'in type-güvenli doğasıyla çelişen herhangi bir karar, farklı bir projede işi olan bir karardır.
