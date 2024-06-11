"use client";

import { useState } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const HoverPopover = ({ label, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <Link href={link} legacyBehavior>
          <a className="flex items-center">
            {label}
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </a>
        </Link>
        <PopoverButton as="div" />
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          {children}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default HoverPopover;
