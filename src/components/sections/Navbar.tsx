"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import CTAGroup from "@/components/CTAGroup";
import { site } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { nav, footer } = site;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-light bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 md:h-20 md:px-6">
        <a href="#hero" aria-label={footer.aldakLogoAlt} className="flex shrink-0 items-center">
          <Logo variant="aldak-blue" alt={footer.aldakLogoAlt} className="h-7 md:h-8" />
        </a>

        <nav aria-label="Seções" className="hidden items-center gap-4 xl:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium whitespace-nowrap text-navy transition-colors hover:text-blue-royal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <CTAGroup size="sm" className="sm:gap-2" buttonClassName="px-3" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? nav.menuCloseLabel : nav.menuOpenLabel}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-blue-dark hover:bg-gray-bg xl:hidden"
        >
          {open ? <X strokeWidth={2} /> : <Menu strokeWidth={2} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Seções"
          className="border-t border-gray-light bg-white xl:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-base font-medium text-navy hover:bg-gray-bg"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <CTAGroup direction="column" onClick={() => setOpen(false)} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
