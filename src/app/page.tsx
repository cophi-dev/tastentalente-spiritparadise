import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Dr. Eva-Marie Heyde · zwei Websites",
  description:
    "Musikschule Tastentalente in Hamburg-Alstertal und Spirit Paradise – Bücher, Reisen und Samtpfoten.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-night text-cream">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <p className="section-kicker">Hamburg-Alstertal</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white md:text-6xl">
          Dr. Eva-Marie Heyde
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-cream/70">
          Pianistin, Musikpädagogin, Autorin. Zwei Seiten – eine Schule für das Klavierspiel und ein
          spiritueller Raum für Bücher, Reisen und die Miau-Truppe.
        </p>
      </div>
      <div className="grid min-h-[70vh] md:grid-cols-2">
        <Link href="/tastentalente" className="group relative min-h-[420px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.musicHero}
            alt="Klaviatur im Abendlicht"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <div className="relative flex h-full flex-col justify-end p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Play & practise</p>
            <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Musikschule Tastentalente</h2>
            <p className="mt-3 max-w-md text-cream/80">
              Klavier-Einzelunterricht, Gehörbildung und Playbacküben – einmalig in Hamburg-Alstertal.
            </p>
            <span className="btn-gold mt-6 w-fit">Zur Musikschule</span>
          </div>
        </Link>
        <Link href="/spiritparadise" className="group relative min-h-[420px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.spiritHero}
            alt="Impression zwischen Himmel und Erde"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">inspirierende Momente</p>
            <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Spirit Paradise</h2>
            <p className="mt-3 max-w-md text-cream/80">
              Spirituelle Publikationen, mystische Reisen und Wegbegleiter miau & miez.
            </p>
            <span className="btn-gold mt-6 w-fit">Zu Spirit Paradise</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
