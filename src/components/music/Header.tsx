"use client";

import Link from "next/link";
import { useState } from "react";
import { photos } from "@/data/photos";

const links = [
  { href: "/tastentalente", label: "Die Schule" },
  { href: "/tastentalente/preise", label: "Preise" },
  { href: "/tastentalente/ueber-mich", label: "Über mich" },
  { href: "/tastentalente/kontakt", label: "Kontakt" },
];

export function MusicHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/tastentalente" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.musicLogo}
            alt="Dr. Eva-Marie Heyde – musikschule-tastentalente"
            className="h-10 w-auto rounded-md"
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/tastentalente/kontakt" className="btn-gold !px-4 !py-2">
            Infotermin
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-full border border-ink/15 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menü
        </button>
      </div>
      {open ? (
        <nav className="grid gap-3 border-t border-ink/10 px-5 py-4 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
