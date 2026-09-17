import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/data/galleries";
import { books } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Spirit Paradise · inspirierende Momente",
  description:
    "Spirituelle Publikationen von Dr. Eva-Marie Fabijenna Heyde, mystische Reisen und Wegbegleiter miau & miez.",
};

export default function SpiritHome() {
  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden bg-night text-cream">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.spiritHero}
          alt="Impressionen zwischen Himmel und Erde"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Impressionen zwischen</p>
          <h1 className="mt-3 font-serif text-5xl text-white md:text-7xl">Himmel und Erde</h1>
          <p className="mt-4 max-w-xl text-lg text-cream/80">
            herzlich willkommen · spirituelle Publikationen · {books.bundle.title}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="section-kicker">Dr. Eva-Marie Fabijenna Heyde</p>
        <h2 className="mt-3 font-serif text-4xl">spirituelle Publikationen</h2>
        <p className="mt-4 max-w-2xl text-ink/70">{books.bundle.note}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <article className="rounded-3xl bg-white p-5 shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={books.tattva.image} alt={books.tattva.title} className="h-72 w-full rounded-2xl object-cover" />
            <h3 className="mt-4 font-serif text-2xl">Der Klang des Lebens</h3>
            <p className="mt-2 text-sm text-ink/70">{books.tattva.meta}</p>
            <a href={books.tattva.url} className="mt-3 inline-block text-sm text-gold">
              Artikel auf tattva.de
            </a>
          </article>
          {books.spirit.map((book) => (
            <article key={book.title} className="rounded-3xl bg-white p-5 shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={book.image} alt={book.title} className="h-72 w-full rounded-2xl object-cover" />
              <h3 className="mt-4 font-serif text-2xl">{book.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{book.subtitle}</p>
              <p className="mt-2 text-xs text-ink/50">{book.meta}</p>
              <p className="mt-3 font-serif text-2xl">{book.price}</p>
              <p className="text-sm text-ink/60">{book.ebook}</p>
              <Link href={book.href} className="mt-4 inline-block text-sm font-semibold text-gold">
                Mehr erfahren
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-ink/65">
          Alle Verkaufspreise werden vom Verlag festgesetzt. Die Bücher und eBooks sind in jedem Buchhandel
          erhältlich oder auch im Direktbezug hier oder über den Verlag. „nicht verfügbar“ heißt, daß es im
          Onlinegeschäft nicht gelagert ist; das Buch kann in jeder Buchhandlung oder im Direktbezug hier oder über
          den Verlag bestellt werden. Weitere Informationen:{" "}
          <a href="http://www.spirit-rainbow-verlag.de">spirit-rainbow-verlag.de</a>
        </p>
        <Link href="/spiritparadise/kontakt" className="btn-gold mt-6">
          Bundle für 25,– € per Mail bestellen
        </Link>
      </section>

      <section className="bg-night py-16 text-cream">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-serif text-4xl text-white">Ich bin dann mal weg · PERU 2024</h2>
          <div className="mt-8">
            <Gallery images={galleries.peru} alt="Peru 2024" />
          </div>
          <h2 className="mt-16 font-serif text-4xl text-white">YUCATAN MEXIKO 2025</h2>
          <div className="mt-8">
            <Gallery images={galleries.yucatan} alt="Yucatan Mexiko 2025" />
          </div>
          <h2 className="mt-16 font-serif text-4xl text-white">Chile · Argentinien · Brasilien 2026</h2>
          <div className="mt-8">
            <Gallery images={galleries.chile} alt="Chile Argentinien Brasilien 2026" />
          </div>
          <Link href="/spiritparadise/reisen" className="btn-gold mt-10">
            Weitere mystische Reisen
          </Link>
        </div>
      </section>
    </main>
  );
}
