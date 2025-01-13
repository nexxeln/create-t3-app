---
title: Vercel
description: Vercel ile Dağıtım
layout: ../../../layouts/docs.astro
lang: tr
---

Projenizi [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss) ile dağıtmanızı öneriyoruz. Next.js uygulamalarını dağıtmayı çok kolaylaştırıyor.

## Proje Konfigürasyonu

Vercel, build komutunu konfigüre etmek ve dizini otomatik olarak yayınlamaya eğilimlidir. Bunun yanı sıra, bir [`vercel.json`](https://vercel.com/docs/project-configuration) dosyası oluşturarak diğer konfigürasyonlarla birlikte bu bilgileri de tanımlayabilirsiniz. **Bu, çoğu proje için gerekli değildir.**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## Vercel Kontrol Panelini Kullanmak

1. Kodunuzu GitHub projenize ekledikten sonra [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss)'e GitHub hesabınız ile kayıt olun ve **Add New Project** butonuna tıklayın.

![New project on Vercel](/images/vercel-new-project.webp)

2. GitHub projeniz ile bağlantıyı kurun.

![Import repository](/images/vercel-import-project.webp)

3. Ortam değişkenlerinizi ekleyin.

![Add environment variables](/images/vercel-env-vars.webp)

4. **Deploy** tuşuna basın. Artık ne zaman yeni bir değişiklik yapsanız, Vercel otomatik olarak projenizi tekrar dağıtacak!

## Vercel CLI Kullanımı

Komut isteminden dağıtım yapmak için öncelikle [Vercel CLI'ını yüklemelisiniz](https://vercel.com/docs/cli#installing-vercel-cli).

```bash
npm i -g vercel
```

Projenizin dağıtımını yapmak için [`vercel`](https://vercel.com/docs/cli/deploying-from-cli) komutunu kullanın.

```bash
vercel
```

Veritabanı bağlantı dizgisi gibi ortam değişkenleri için `--env DATABASE_URL=VERITABANI_STRING` seçeneğini dahil edebilirsiniz. Dağıtım sorularını atlayıp hepsine varsayılan cevabı vermek istiyorsanız `--yes` seçeneğini kullanın.

```bash
vercel --env DATABASE_URL=VERITABANI_STRING --yes
```

İlk dağıtımdan sonra bu komut, önizleme branch'ine dağıtım yapacak. Gelecekteki dağıtımlarda değişiklikleri doğrudan canlı siteye uygulamak için `--prod` seçeneğini eklemeniz gerekir.

```bash
vercel --prod
```
