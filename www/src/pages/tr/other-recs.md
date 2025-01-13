---
title: Other Recommendations
description: Libraries and Services that we recommend for many projects
layout: ../../layouts/docs.astro
lang: en
---

We recognize that the libraries included in `create-t3-app` don't solve every problem. While we encourage you to begin your project with the things that we provide, there will come a time when you need to bring in other packages. Only you can know what your project needs, but here are some things that we find ourselves recommending frequently.

These are recommendations by individual create-t3-app contributors and should not be seen as "official" endorsements by the create-t3-app team or T3-OSS. _**Please do your own research, especially before committing to paid services**_.

## State Management

_**Editor's Note**_: State management libraries can be great, but often aren't necessary. tRPC's React Query hooks should be able to take care of your server state. For client state, start with React's `useState`, and reach for one of these options when you need more.

### Zustand

**For never using Redux again**

The "modern, simple Redux" you didn't know you needed. [Poimandres](https://github.com/pmndrs) can always be trusted. You can build everything from video call apps to games to servers with this little library.

- [Zustand Homepage](https://zustand-demo.pmnd.rs/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)

### Jotai

**For never using Context again**

For a more atomic approach, Jotai is hard to beat. Also by [Poimandres](https://github.com/pmndrs), Jotai lets you define singletons that feel like global useState. A great option for stateful behaviors that don't need a state machine just yet.

- [Jotai Homepage](https://jotai.org/)
- [Jotai GitHub](https://github.com/pmndrs/jotai)

## Component Libraries

Most apps need the same handful of components - toggle buttons, dropdown menus, modals, and so on. These libraries provide great, accessible components that you can use and customize to your liking.

### Unstyled Component Libraries

Also known as headless libraries, they provide great unstyled, and accessible components that you can customize to your liking. Here are a few recommendations.

- [Radix UI](https://www.radix-ui.com/) gives you a powerful set of convenient and accessible primitives that you can style with vanilla or Tailwind CSS.

- [Headless UI](https://headlessui.com/) made by the Tailwind CSS team also provides unstyled, accessible components that integrate seamlessly with Tailwind CSS.

- [React Aria](https://react-spectrum.adobe.com/react-aria/) provides accessible UI primitives for your design system. Their Date Picker component is top tier.

### Styled Component Libraries

**For when you just want your app to look OK**

Sometimes you're building a project where you just want the UI to look decent out of the box. For Admin Dashboards and other similar projects, any of these component libraries will get the job done.

- [Chakra UI](https://chakra-ui.com)
- [Mantine](https://mantine.dev)

### Class Variance Authority

**For building UI Libraries**

Declaratively build a UI Library with different color, size, etc. variants. When your project reaches a scale where you want a standardized set of UI components with multiple variants using Tailwind CSS, CVA is a great tool.

- [Class Variance Authority GitHub](https://github.com/joe-bell/cva)

## Animations

For when you need animations in your app, here are our recommendations.

### AutoAnimate

**For animations with a single line of code**

Most animation libraries try to satisfy every possible use case, and become clunky as a result. AutoAnimate is a zero-configuration tool that will give you a significant improvement in UX with no additional developer effort.

- [AutoAnimate Homepage](https://auto-animate.formkit.com/)
- [AutoAnimate GitHub](https://github.com/formkit/auto-animate)
- [AutoAnimate Component Snippet](https://gist.github.com/hwkr/3fdea5d7f609b98c162e5325637cf3cb)

### Framer Motion

**For complex animations with declarative code**

Framer Motion provides a simple, declarative syntax and allows you to write less code to craft everything from complex animations to even gestures.

- [Framer Motion Homepage](https://framer.com/motion)
- [Framer Motion Documentation](https://www.framer.com/docs/)

## Deployments, Infrastructure, Databases and CI

### Vercel

**For hosting your app**

Vercel took the hell of web deployments and made it a set-and-forget GitHub integration. We've scaled to hundreds of thousands of users without issue. AWS-powered, just a way better interface :)

- [Vercel Homepage](https://vercel.com/)
- [Create T3 App Vercel deployment guide](/en/deployment/vercel)

### PlanetScale

**For databases without the worry**

PlanetScale is the best "serverless database platform" we've used by far. Insane scale, great developer experience, and fantastic pricing. If you're using SQL (and hopefully Prisma), this is hard to beat.

- [PlanetScale Homepage](https://planetscale.com/)

### Railway

**For hosting your infra**

"Modern Heroku". The easiest way to get a real server up and running. If Vercel and PlanetScale aren't enough, Railway probably is. Point it at a GitHub repo and go.

- [Railway Homepage](https://railway.app/)

### Upstash

**For serverless Redis**

We love Prisma and PlanetScale, but some projects require a more performant solution. Upstash allows you to get the in-memory performance of Redis in your serverless project, without having to manage the infrastructure and scaling yourself.

- [Upstash Homepage](https://upstash.com/)

### Pusher

**For serverless WebSockets**

If WebSockets are the primary focus of your project, you may want to consider a more traditional backend such as [Fastify](https://www.fastify.io/) (which [also works with tRPC!](https://trpc.io/docs/v10/fastify)). But for quickly adding WebSockets to a T3 App, Pusher is an excellent choice.

- [Pusher Homepage](https://pusher.com/)

### Soketi

Soketi is a self-hostable, simple, and fast alternative to Pusher. It's fully compatible with the Pusher SDK which you can use to connect to the server. Soketi serverless is also in beta.

- [Soketi Homepage](https://soketi.app)
- [Soketi GitHub](https://github.com/soketi/soketi)

## Analytics

User data is very valuable when you're building an app. Here are some analytics providers we recommend.

### Plausible

Need analytics? Plausible is one of the quickest ways to get them. Super minimal. It even has a [simple plugin for Next.js](https://plausible.io/docs/proxy/guides/nextjs).

- [Plausible Homepage](https://plausible.io/)

### Umami

Umami is an open-sourced, self-hostable, simple, fast, privacy-focused alternative to Google Analytics. You can deploy it really easily to Vercel, Railway, etc. with PlanetScale as your database.

- [Umami Homepage](https://umami.is/)
- [Umami GitHub](https://github.com/umami-software/umami)

## Other

### Next Bundle Analyzer

It can sometimes be difficult to determine what will be included in the build output for your app. Next Bundle Analyzer is an easy way to visualize and analyze the JavaScript bundles that are generated.

- [@next/bundle-analyzer on npm](https://www.npmjs.com/package/@next/bundle-analyzer)
