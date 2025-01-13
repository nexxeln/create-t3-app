---
title: Tailwind CSS
description: Usage of Tailwind CSS
layout: ../../../layouts/docs.astro
lang: en
---

## What is Tailwind CSS?

Tailwind CSS is a tiny, [utility first](https://tailwindcss.com/docs/utility-first) CSS framework for building custom designs, without the context switching that regular CSS requires. It is purely a CSS framework and does not provide any pre-built components or logic, and provides [a very different set of benefits](https://www.youtube.com/watch?v=CQuTF-bkOgc) compared to a component library like Material UI.

It makes CSS incredibly easy and quick to write, as shown by the following example:

Old CSS:

1. Write CSS, often in a separate file

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

2. Import CSS into your component

```jsx
import "./my-class.css";
```

3. Add the class to your HTML

```html
<div class="my-class">...</div>
```

Equivalent in Tailwind:

1. Just write classes in your HTML

```html
<div
  class="flex flex-col items-center justify-center rounded border border-gray-200 bg-white p-4"
>
  ...
</div>
```

When used together with React Components, it is extremely powerful for quickly building UIs.

Tailwind CSS has a beautiful built-in design system, that comes out of the box with a carefully chosen color palette, sizing patterns for styles such as width/height and padding/margin for a uniform design, as well as media breakpoints for creating responsive layouts. This design system can be customized and extended to create the exact toolbox of styles that your project needs.

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/T-Zv73yZ_QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Tru Narla better known as [mewtru](https://twitter.com/trunarla) gave an amazing talk on [building a design system using Tailwind CSS](https://www.youtube.com/watch?v=T-Zv73yZ_QI).

## Usage

Make sure you have editor plugins for Tailwind installed to improve your experience writing Tailwind.

### Extensions and Plugins

- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [JetBrains Integration](https://www.jetbrains.com/help/webstorm/tailwind-css.html#ws_css_tailwind_install)
- [Neovim LSP](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#tailwindcss)

### Formatting

Tailwind CSS classes can easily get a bit messy, so a formatter for the classes is a must have. [Tailwind CSS Prettier Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) sorts the classes in the [recommended order](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted) so that the classes match the outputted css bundle. When selecting Tailwind in the CLI, we will install and configure this for you.

### Conditionally Applying Classes

Conditionally adding classes using ternaries can get very messy and hard to read. These packages help in organizing your classes when using some conditional logic.

- [clsx](https://github.com/lukeed/clsx)
- [classnames](https://github.com/JedWatson/classnames)

## Useful Resources

| Resource                     | Link                                                     |
| ---------------------------- | -------------------------------------------------------- |
| Tailwind Docs                | https://tailwindcss.com/docs/editor-setup/               |
| Tailwind Cheat Sheet         | https://nerdcave.com/tailwind-cheat-sheet/               |
| awesome-tailwindcss          | https://github.com/aniftyco/awesome-tailwindcss/         |
| Tailwind Community           | https://github.com/tailwindlabs/tailwindcss/discussions/ |
| Tailwind Discord Server      | https://tailwindcss.com/discord/                         |
| TailwindLabs Youtube Channel | https://www.youtube.com/tailwindlabs/                    |
| Tailwind Playground          | https://play.tailwindcss.com/                            |
