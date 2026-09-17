import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Vita und Fachliteratur",
  description:
    "Dr. Eva-Marie Heyde – Pianistin, Musikpädagogin, Autorin. Vita und Fachbücher zum Musikschulkonzept.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="section-kicker">Über mich</p>
      <h1 className="mt-3 font-serif text-5xl">Vita und Fachliteratur zum Thema</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.musicPortrait}
          alt="Dr. Eva-Marie Heyde"
          className="w-full rounded-[2rem] object-cover shadow-lift"
        />
        <div>
          <p className="font-serif text-3xl">Dr. Eva-Marie Heyde</p>
          <p className="mt-3 text-ink/70">Pianistin · Musikpädagogin · Autorin</p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold">
            Bandspiel · Klavierunterricht · wissenschaftl. Arbeit
          </p>
          <div className="mt-6 space-y-4 leading-7 text-ink/80">
            <p>Abgeschlossenes Hochschul- und Unistudium mit Promotion in Systematischer Musikwissenschaft.</p>
            <p>Entwicklung eines innovativen computergestützten Musikschulkonzepts.</p>
            <p>
              Hauptansinnen, Freude am Spiel zu fördern, komplexe Inhalte verständig zu vermitteln und möglichst
              effektiv zu lernen.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-4xl">Fachliteratur</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {books.music.map((book) => (
            <article key={book.title} className="flex gap-5 rounded-3xl bg-white p-5 shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={book.image} alt={book.title} className="h-44 w-28 rounded-xl object-cover" />
              <div>
                <h3 className="font-serif text-2xl">{book.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{book.subtitle}</p>
                <p className="mt-3 text-xs text-ink/55">{book.meta}</p>
                <p className="mt-2 text-sm">{book.note}</p>
                {book.price ? <p className="mt-3 font-serif text-2xl">{book.price}</p> : null}
              </div>
            </article>
          ))}
        </div>
        <article className="mt-8 grid gap-6 rounded-3xl bg-paper p-6 md:grid-cols-[180px_1fr] md:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={books.tattva.image} alt={books.tattva.title} className="w-full rounded-xl" />
          <div>
            <h3 className="font-serif text-2xl">{books.tattva.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{books.tattva.meta}</p>
            <p className="mt-3 text-sm">
              Auf{" "}
              <a href={books.tattva.url} className="text-gold">
                www.tattva.de
              </a>{" "}
              können auch einzelne Artikel heruntergeladen werden.
            </p>
            <p className="mt-3 text-sm">
              Weitere spirituelle Literatur auf{" "}
              <Link href="/spiritparadise" className="text-gold">
                Spirit Paradise
              </Link>
              .
            </p>
          </div>
        </article>
        <Link href="/tastentalente/kontakt" className="btn-gold mt-8">
          Buch direkt bestellen
        </Link>
      </section>
    </main>
  );
}
