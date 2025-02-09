import { type MDXComponents } from "mdx/types";
import Link from "next/link";
import * as React from "react";

import { Steps } from "./components/mdx";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => (
      <h1 className="mt-10 scroll-m-20 text-3xl font-bold" {...props} />
    ),
    h2: (props) => (
      <h2
        className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-bold first:mt-0"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-4 scroll-m-20 text-xl font-bold" {...props} />
    ),
    p: (props) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
    ),
    a: ({ children, href }) => {
      const isExternal = href?.startsWith("http");
      const Component = isExternal ? "a" : Link;
      return (
        <Component
          href={href!}
          className="decoration-primary underline decoration-2 underline-offset-4"
        >
          {children}
        </Component>
      );
    },
    code: (props) => (
      <code
        className="bg-muted text-muted-foreground relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        {...props}
      />
    ),
    pre: ({ children, ...rest }) => (
      <pre
        className="bg-muted text-muted-foreground relative my-4 overflow-x-auto rounded border p-4 font-mono text-sm font-semibold"
        {...rest}
      >
        {children}
      </pre>
    ),

    Steps: Steps,

    // Pass through all other components.
    ...components,
  };
}
