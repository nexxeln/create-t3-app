import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";

const commands = [
  {
    command: "create t3-app@latest",
    manager: "npm",
  },
  {
    command: "create t3-app",
    manager: "yarn",
  },
  {
    command: "create t3-app@latest",
    manager: "pnpm",
  },
  {
    command: "create t3-app@latest",
    manager: "bun",
  },
];

export default function ClipboardSelect() {
  const [coolDown, setCoolDown] = useState(false);

  const handleCopyToClipboard = async (manager: string, command: string) => {
    const nextClipboard = `${manager} ${command}`;
    try {
      await navigator.clipboard.writeText(nextClipboard);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const checkStyles = {
    strokeDasharray: 450,
    strokeDashoffset: -30,
  };

  return (
    <div className="flex items-center gap-2">
      <Menu as="div">
        <div className="relative">
          <Menu.Button className="bg-t3-purple-200/50 hover:bg-t3-purple-200/75 dark:border-t3-purple-200/20 dark:bg-t3-purple-200/10 dark:hover:border-t3-purple-200/50 relative flex cursor-pointer items-center justify-center rounded-lg border p-2 text-left focus:outline-none sm:text-sm">
            <svg
              className={`h-[1em] w-[1em] ${coolDown && "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg
              className={`animate-draw h-[1em] w-[1em] ${
                !coolDown && "hidden"
              }`}
              style={checkStyles}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter={"transition ease-out duration-100"}
            enterFrom={"transform opacity-0 -translate-y-1"}
            enterTo={"transform opacity-100 -translate-y-0"}
          >
            <Menu.Items
              className={clsx(
                "focus-none shadow-l t3-scrollbar bg-default dark:border-t3-purple-200/20 absolute right-0 mt-1 max-h-60 w-fit min-w-[6em] overflow-auto rounded-lg border text-base focus:outline-none focus-visible:outline-none sm:text-sm",
              )}
            >
              {commands.map(({ manager, command }) => (
                <Menu.Item key={manager}>
                  {({ active }) => {
                    return (
                      <button
                        className={`${
                          active && "bg-t3-purple-200/20"
                        } group bg-t3-purple-200/10 hover:bg-t3-purple-200/20 flex w-full items-center px-4 py-2 text-sm font-medium`}
                        onClick={() => {
                          handleCopyToClipboard(manager, command)
                            .then(() => {
                              setCoolDown(true);
                              setTimeout(() => {
                                setCoolDown(false);
                              }, 1000);
                            })
                            .catch((err) => console.log(err));
                        }}
                      >
                        {manager}
                      </button>
                    );
                  }}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  );
}
