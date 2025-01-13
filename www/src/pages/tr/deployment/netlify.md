---
title: Netlify
description: Netlify ile Dağıtım
layout: ../../../layouts/docs.astro
lang: en
---

Netlify is an alternative deployment provider in a similar vein to Vercel. See [`ajcwebdev/ct3a-netlify`](https://github.com/ajcwebdev/ct3a-netlify) for an example repo based on this doc.

## Why Host on Netlify

Conventional wisdom says Vercel has superior Next.js support because Vercel develops Next.js. They have a vested interest in ensuring the platform is tuned for optimal performance and DX with Next.js. For the majority of use cases this will be true and it won't make sense to deviate from the standard path.

There's also a common sentiment that many Next.js features are only supported on Vercel. While it's true that new Next.js features will be tested and supported on Vercel at the time of release by default, it's also the case that other providers like Netlify will [quickly implement and release support](https://www.netlify.com/blog/deploy-nextjs-13/) for [stable Next.js features](https://docs.netlify.com/integrations/frameworks/next-js/overview/).

There are relative pros and cons for all deployment providers since no single host can have the best support for all use cases. For example, Netlify built their own [custom Next.js runtime](https://github.com/netlify/next-runtime) for Netlify's Edge Functions (which run on Deno Deploy) and [maintain unique middleware to access and modify HTTP responses](https://github.com/netlify/next-runtime#nextjs-middleware-on-netlify).

> _NOTE: To track the status of non-stable Next 13 features see [Using the Next 13 `app` directory on Netlify](https://github.com/netlify/next-runtime/discussions/1724)._

## Project Configuration

There are numerous ways to configure your build instructions including directly through the Netlify CLI or Netlify dashboard. While not required, it is advisable to create and include a [`netlify.toml`](https://docs.netlify.com/configure-builds/file-based-configuration/) file. This ensures forked and cloned versions of the project will be easier to reproducibly deploy.

```toml
[build]
  command = "next build"
  publish = ".next"
```

## Using the Netlify Dashboard

1. Push your code to a GitHub repository and sign up for [Netlify](https://app.netlify.com/signup). After you've created an account, click on **Add new site** and then **Import an existing project**.

![New project on Netlify](/images/netlify-01-new-project.webp)

2. Connect your Git provider.

![Import repository](/images/netlify-02-connect-to-git-provider.webp)

3. Select your project's repository.

![Select your project's repository](/images/netlify-03-pick-a-repository-from-github.webp)

4. Netlify will detect if you have a `netlify.toml` file and automatically configure your build command and publish directory.

![Nextjs build settings](/images/netlify-04-configure-build-settings.webp)

5. Click **Show advanced** and then **New variable** to add your environment variables.

![Add environment variables](/images/netlify-05-env-vars.webp)

6. Click **Deploy site**, wait for the build to complete, and view your new site.

## Using the Netlify CLI

To deploy from the command line you must first push your project to a GitHub repo and [install the Netlify CLI](https://docs.netlify.com/cli/get-started/). You can install `netlify-cli` as a project dependency or install it globally on your machine with the following command:

```bash
npm i -g netlify-cli
```

To test your project locally, run the [`ntl dev`](https://docs.netlify.com/cli/get-started/#run-a-local-development-environment) command and open [`localhost:8888`](http://localhost:8888/) to view your locally running Netlify app:

```bash
ntl dev
```

Run the [`ntl init`](https://docs.netlify.com/cli/get-started/#continuous-deployment) command to configure your project:

```bash
ntl init
```

Import your project's environment variables from your `.env` file with [`ntl env:import`](https://cli.netlify.com/commands/env#envimport):

```bash
ntl env:import .env
```

Deploy your project with [`ntl deploy`](https://docs.netlify.com/cli/get-started/#manual-deploys). You'll need to pass the `--build` flag to run the build command before deployment and the `--prod` flag to deploy to your site's main URL:

```bash
ntl deploy --prod --build
```

To view a running example on Netlify, visit [ct3a.netlify.app](https://ct3a.netlify.app/).
