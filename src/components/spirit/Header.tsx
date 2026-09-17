"use client";

import Link from "next/link";
import { useState } from "react";
import { photos } from "@/data/photos";

const links = [
  { href: "/spiritparadise", label: "Home" },
  { href: "/spiritparadise/diesseits", label: "Im Diesseits" },
  { href: "/spiritparadise/jenseits", label: "Im Jenseits" },
  { href: "/spiritparadise/universum", label: "Im Universum" },
  { href: "/spiritparadise/reisen", label: "Mystische Reisen" },
  { href: "/spiritparadise/schwingung", label: "Musik & Natur" },
  { href: "/spiritparadise/samtpfoten", label: "Miau & Miez" },
  { href: "/spiritparadise/kontakt", label: "Kontakt" },
];

export function SpiritHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night/90 text-mist backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/spiritparadise" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.spiritLogo}
            alt="spirit paradise"
            className="h-10 w-auto rounded-md bg-white px-2 py-1"
          />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.16em] text-mist/75 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full border border-white/20 px-3 py-2 text-sm lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menü
        </button>
      </div>
      {open ? (
        <nav className="grid gap-3 border-t border-white/10 px-5 py-4 lg:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
