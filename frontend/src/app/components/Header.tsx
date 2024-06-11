"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items = useAppSelector((state) => state.cart.items);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/men-clothing"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Men
          </Link>
          <Link
            href="/women-clothing"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Women
          </Link>
          <Link
            href="/jewelry"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Jewelry
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Link
            href="/cart"
            className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2"
          >
            Cart ({items.length})
            <ShoppingCartIcon className="h-5 w-5 mr-1" aria-hidden="true" />
          </Link>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
