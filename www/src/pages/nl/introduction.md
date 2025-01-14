---
title: Introduction
description: Introduction to the T3 Stack
layout: ../../layouts/docs.astro
lang: en
---

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/YkOSUVzOAA4" title="The best stack for your next project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## The T3 Stack

The _"T3 Stack"_ is a web development stack made by [Theo](https://twitter.com/t3dotgg) focused on simplicity, modularity, and full-stack typesafety.

The core pieces are [**Next.js**](https://nextjs.org/) and [**TypeScript**](https://typescriptlang.org/). [**Tailwind CSS**](https://tailwindcss.com/) is almost always included. If you're doing anything resembling backend, [**tRPC**](https://trpc.io/), [**Prisma**](https://prisma.io/), and [**NextAuth.js**](https://next-auth.js.org/) are great additions too.

You may have noticed that there are a… lot of pieces. That's by design. Swap pieces in and out as you need - this stack is modular at its core :)

## So... what is create-t3-app? A template?

Kind of? `create-t3-app` is a CLI built by seasoned T3 Stack devs to streamline the setup of a modular T3 Stack app. This means each piece is optional, and the "template" is generated based on your specific needs.

After countless projects and many years on this tech, we have lots of opinions and insights. We've done our best to encode them into this CLI.

This is **NOT** an all-inclusive template. We **expect** you to bring your own libraries that solve the needs of **YOUR** application. While we don't want to prescribe solutions to more specific problems like state management and deployment, we [do have some recommendations listed here](/en/other-recs).

## T3 Axioms

We'll be frank - this is an _opinionated project_. We share a handful of core beliefs around building and we treat them as the basis for our decisions.

### Solve Problems

It's easy to fall into the trap of "adding everything" - we explicitly don't want to do that. Everything added to `create-t3-app` should solve a specific problem that exists within the core technologies included. This means we won't add things like state libraries (`zustand`, `redux`) but we will add things like NextAuth.js and integrate Prisma and tRPC for you.

### Bleed Responsibly

We love our bleeding edge tech. The amount of speed and, honestly, fun that comes out of new shit is really cool. We think it's important to bleed responsibly, using riskier tech in the less risky parts. This means we wouldn't ⛔️ bet on risky new database tech (SQL is great!). But we happily ✅ bet on tRPC since it's just functions that are trivial to move off.

### Typesafety Isn't Optional

The stated goal of Create T3 App is to provide the quickest way to start a new full-stack, **typesafe** web application. We take typesafety seriously in these parts as it improves our productivity and helps us ship fewer bugs. Any decision that compromises the typesafe nature of Create T3 App is a decision that should be made in a different project.
