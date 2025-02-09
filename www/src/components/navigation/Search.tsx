/** @jsxImportSource react */

import { useCallback, useRef, useState } from "react";

import { ALGOLIA } from "../../config";

import "../../styles/algolia/style.css";

import * as docSearchReact from "@docsearch/react";
import clsx from "clsx";
import { createPortal } from "react-dom";

/** FIXME: This is still kinda nasty, but DocSearch is not ESM ready. */
const DocSearchModal =
  docSearchReact.DocSearchModal ||
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
  (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents =
  docSearchReact.useDocSearchKeyboardEvents ||
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
  (docSearchReact as any).default.useDocSearchKeyboardEvents;

export default function Search({ isLanding }: { isLanding: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [initialQuery, setInitialQuery] = useState("");

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e: KeyboardEvent) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery],
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <>
      <button
        type="button"
        aria-label="Search Create T3 App"
        ref={searchButtonRef}
        onClick={onOpen}
        className={clsx(
          "flex w-full cursor-text items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-slate-800 !transition-colors !duration-300 dark:text-slate-100",
          {
            "hover:bg-t3-purple/20 border-t3-purple-200/20 bg-t3-purple-200/10 hover:border-t3-purple-200/50 border duration-300":
              isLanding,
            "dark:hover:bg-t3-purple/20 bg-t3-purple-200/50 hover:bg-t3-purple-200/75 dark:border-t3-purple-200/20 dark:bg-t3-purple-200/10 dark:hover:border-t3-purple-200/50 border duration-300 dark:text-slate-100":
              !isLanding,
          },
        )}
      >
        <div className="flex items-center justify-center gap-1 lg:gap-3">
          <svg className="h-6 w-6" fill="none">
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Search</span>
        </div>

        <span className="rounded-md border border-current px-1">
          <span className="sr-only">Press </span>
          <kbd>/</kbd>
          <span className="sr-only"> to search</span>
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div className="z-50">
            <DocSearchModal
              initialQuery={initialQuery}
              initialScrollY={window.scrollY}
              onClose={onClose}
              indexName={ALGOLIA.indexName}
              appId={ALGOLIA.appId}
              apiKey={ALGOLIA.apiKey}
              transformItems={(items) => {
                return items.map((item) => {
                  // We transform the absolute URL into a relative URL to
                  // work better on localhost, preview URLS.
                  const a = document.createElement("a");
                  a.href = item.url;
                  const hash = a.hash === "#overview" ? "" : a.hash;
                  return {
                    ...item,
                    url: `${a.pathname}${hash}`,
                  };
                });
              }}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
