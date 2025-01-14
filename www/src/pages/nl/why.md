---
title: Why CT3A?
description: Why you should pick Create T3 App for your next project
layout: ../../layouts/docs.astro
lang: en
---

We started Create T3 App because [Theo](https://twitter.com/t3dotgg) refused to make a template of his favorite technologies. Inspired by create-next-app, [Astro's CLI](https://astro.build), and a general love for typesafety, the Create T3 App team worked hard to build the best possible starting point for new T3 Stack projects.

If you're interested in using Next.js in a typesafe way, this is the place to start. If you're curious about any of the specific technology choices we made, read on :)

## Why TypeScript?

JavaScript is hard. Why add more rules?

We firmly believe the experience TypeScript provides will help you be a better developer. It provides live feedback as you write your code by defining expected data types, and either provides helpful autocomplete in your editor or yells at you with red squiggly lines if you're trying to access a property that doesn't exist or trying to pass a value of the wrong type, which you would otherwise have to debug further down the line. Whether you're new to web development or a seasoned pro, the "strictness" of TypeScript will provide a less frustrating, more consistent experience than vanilla JS.

Typesafety makes you faster. If you're not convinced, you [might be using TypeScript wrong...](https://www.youtube.com/watch?v=RmGHnYUqQ4k)

## Why Next.js?

We love React. It has made UI development accessible in ways we never imagined before. It also can lead developers down some rough paths.

Next.js offers a lightly opinionated, heavily optimized approach to creating applications using React. From routing to API definitions to image rendering, we trust Next.js to lead developers toward good decisions.

## Why tRPC/Prisma/Tailwind/etc?

While we believe in keeping things as simple as possible, we find these pieces being used in every "app" like project we build. `create-t3-app` does a great job of letting you adopt the pieces you need.

### tRPC

tRPC delivers on GraphQL's promise of seamless client development against a typesafe server without all of the boilerplate. It's a clever abuse of TypeScript that provides an incredible dev experience.

### Prisma

Prisma is to SQL what TypeScript is to JS. It created a developer experience that didn't exist before. By generating types from a user-defined schema compatible with [several databases](https://www.prisma.io/docs/concepts/database-connectors), Prisma guarantees end-to-end typesafety from your database to your app.

Prisma provides a whole [suite of tools](https://www.prisma.io/docs/concepts/overview/should-you-use-prisma#-you-want-a-tool-that-holistically-covers-your-database-workflows) making daily interactions with your database easier. Notably, the Prisma Client is responsible for querying and making SQL so easy you'll barely notice you're using it, and Prisma Studio is a convenient GUI for your database that lets you read and manipulate your data quickly without having to write code.

### Tailwind CSS

Tailwind feels like "zen-mode CSS".

By providing building blocks in the form of good default colors, spacing, and other primitives, Tailwind makes it easy to create a good-looking app. And unlike component libraries, it does not hold you back when you want to take your app to the next level and create something beautiful and unique.

Additionally, with its inline-like approach, Tailwind encourages you to style without worrying about naming classes, organizing files, or any other issue not directly tied to the problem you're trying to solve.

### NextAuth.js

When you want an authentication system in your NextJS application, NextAuth.js is an excellent solution to bring in the complexity of security without the hassle of having to build it yourself. It comes with an extensive list of providers to quickly add OAuth authentication and provides adapters for many databases and ORMs.
