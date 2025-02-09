import { Menu } from "@headlessui/react";
import { type MarkdownHeading } from "astro";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

interface OnThisPageLinksProps {
  headings: MarkdownHeading[];
  title: string;
  isRtl: boolean;
}

export default function OnThisPageLinks({
  headings,
  title,
  isRtl,
}: OnThisPageLinksProps) {
  const isLtr = !isRtl;

  const memoedHeadings = useMemo(() => {
    // add isVisible flag in headers
    const headers = [
      { depth: 2, slug: "overview", text: title, isVisible: true },
      ...headings.map((h) => ({ ...h, isVisible: false })),
    ];

    return headers.filter(({ depth }) => depth > 1 && depth < 4);
  }, [headings, title]);

  const [headingWithIsVisible, setHeadingWithIsVisible] =
    useState(memoedHeadings);

  useEffect(() => {
    const articleHeadings = Array.from(
      document.querySelectorAll("article :is(h1,h2,h3)"),
    );

    const allObservers = articleHeadings.map((h) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id;
            const tocItem = Array.from(
              document.querySelectorAll(`a[href="#${id}"]`),
            ).at(-1);
            // occurs when the id = "toc-heading"
            if (!tocItem) return;

            if (entry.isIntersecting) {
              const headings = headingWithIsVisible.map((h) =>
                h.slug === id
                  ? { ...h, isVisible: true }
                  : { ...h, isVisible: false },
              );
              setHeadingWithIsVisible(headings);
            }
          });
        },
        {
          rootMargin: "-100px 0% -66%",
          threshold: 1,
        },
      );

      observer.observe(h);

      return observer;
    });

    return () => {
      // unobserve elements
      articleHeadings.map((h, index) => {
        allObservers[index]?.unobserve(h);
      });
    };
  }, [headings, title]);

  return (
    <div className="bg-default sticky inset-x-0 top-[72px] z-[11] block w-full px-4 pt-2 pb-4 lg:hidden">
      <Menu>
        {({ open }) => (
          <div className="relative w-full">
            <div className="">
              <Menu.Button className="text-md bg-t3-purple-200/50 hover:bg-t3-purple-200/75 dark:border-t3-purple-200/20 dark:bg-t3-purple-200/10 dark:hover:border-t3-purple-200/50 inline-flex cursor-pointer items-center gap-1.5 rounded-md border-2 px-3 py-2 font-medium whitespace-nowrap">
                On this page
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={clsx(
                    "h-3 w-3 sm:h-4 sm:w-4",
                    isRtl && "-scale-x-100",
                  )}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      open
                        ? "M19.5 8.25l-7.5 7.5-7.5-7.5"
                        : "M8.25 4.5l7.5 7.5-7.5 7.5"
                    }
                  />
                </svg>
              </Menu.Button>
            </div>
            <Menu.Items
              dir="ltr"
              className="t3-scrollbar border-primary bg-default dark:border-t3-purple-200/20 dark:bg-default absolute top-full z-10 mt-3 max-h-[45vh] w-full overflow-y-auto rounded-md border-2 py-1.5 shadow-md"
            >
              <ul dir={isLtr ? "ltr" : "rtl"}>
                {headingWithIsVisible.map((heading) => (
                  <li key={heading.slug} className="w-full">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={clsx(
                            "text-md text-t3-purple-800 hover:bg-t3-purple-300/20 hover:text-t3-purple-400 dark:text-t3-purple-200 dark:hover:bg-t3-purple-300/10 dark:hover:text-t3-purple-50 line-clamp-1 block w-full py-2 transition-colors",
                            isLtr && (heading.depth === 2 ? "pl-3" : "pl-8"),
                            isRtl && (heading.depth === 2 ? "pr-3" : "pr-8"),
                            {
                              "bg-t3-purple-300/20 text-t3-purple-400 dark:bg-t3-purple-300/10 dark:text-t3-purple-100 underline":
                                active,
                              "bg-t3-purple-300/30 text-t3-purple-700 dark:bg-t3-purple-300/20 dark:text-t3-purple-100 font-medium underline":
                                heading.isVisible,
                            },
                          )}
                          href={`#${heading.slug}`}
                        >
                          {heading.text}
                        </a>
                      )}
                    </Menu.Item>
                  </li>
                ))}
              </ul>
            </Menu.Items>
          </div>
        )}
      </Menu>
    </div>
  );
}
