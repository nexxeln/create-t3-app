import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

import { KNOWN_LANGUAGES, type KnownLanguageCode } from "../../config";
import { getIsRtlFromLangCode } from "../../languages";

interface LanguageSelectProps {
  language: KnownLanguageCode;
}

export default function LanguageSelect({ language }: LanguageSelectProps) {
  const handleSelect = (code: string) => {
    const [_1, _2, ...slug] = window.location.pathname.split("/");
    window.location.pathname = `/${code}/${slug.join("/")}`;
  };

  const isRTL = getIsRtlFromLangCode(language);

  return (
    <div className="flex items-center gap-2">
      <Listbox value={language} onChange={handleSelect}>
        <div className="relative">
          <Listbox.Button className="relative flex cursor-pointer items-center justify-center rounded-lg border bg-t3-purple-200/50 p-2 text-left hover:bg-t3-purple-200/75 focus:outline-none sm:text-sm dark:border-t3-purple-200/20 dark:bg-t3-purple-200/10 dark:hover:border-t3-purple-200/50">
            <svg
              viewBox="0 0 88.6 77.3"
              className="h-6 w-6 text-slate-900 dark:text-t3-purple-100"
              role="img"
            >
              <path
                fill="currentColor"
                d="M61 24.6h7.9l18.7 51.6h-7.7l-5.4-15.5H54.3l-5.6 15.5h-7.2L61 24.6zM72.6 55l-8-22.8L56.3 55h16.3z"
              ></path>
              <path
                fill="currentColor"
                d="M53.6 60.6c-10-4-16-9-22-14 0 0 1.3 1.3 0 0-6 5-20 13-20 13l-4-6c8-5 10-6 19-13-2.1-1.9-12-13-13-19h8c4 9 10 14 10 14 10-8 10-19 10-19h8s-1 13-12 24c5 5 10 9 19 13l-3 7zm-52-44h56v-8h-23v-7h-9v7h-24v8z"
              ></path>
            </svg>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter={"transition ease-out duration-100"}
            enterFrom={"transform opacity-0 -translate-y-1"}
            enterTo={"transform opacity-100 -translate-y-0"}
          >
            <Listbox.Options
              dir="ltr"
              className={clsx(
                "focus-none shadow-l t3-scrollbar absolute right-0 mt-1 max-h-60 w-fit overflow-auto rounded-lg border bg-default text-base focus:outline-none focus-visible:outline-none sm:text-sm dark:border-t3-purple-200/20",
                isRTL && "text-right",
              )}
            >
              {Object.entries(KNOWN_LANGUAGES).map(([code, name]) => (
                <Listbox.Option
                  key={code}
                  className={({ selected, active }) =>
                    `focus-none relative cursor-pointer bg-t3-purple-200/50 px-4 py-2 text-slate-900 outline-none hover:bg-t3-purple-300/75 dark:bg-t3-purple-200/10 dark:text-t3-purple-100 dark:hover:bg-t3-purple-200/20 ${
                      selected && "bg-t3-purple-400/75 dark:bg-t3-purple-400/20"
                    } ${active && "bg-t3-purple-300/75 dark:bg-t3-purple-200/20"}`
                  }
                  value={code}
                >
                  {({ selected }) => (
                    <span
                      className={clsx(
                        "truncate",
                        selected && "font-medium",
                        !selected && "font-normal",
                      )}
                    >
                      {name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
