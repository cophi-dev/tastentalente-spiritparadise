import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/data/galleries";

export const metadata: Metadata = { title: "Mystische Reisen" };

export default function ReisenPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="section-kicker">Mystische Reisen</p>
      <h1 className="mt-3 font-serif text-5xl">Osterinsel Januar 2026</h1>
      <p className="mt-4 max-w-3xl text-ink/70">
        Länder und Kontinente in ihren Energien zu erspüren, ist einzigartig. Impressionen zwischen den Welten.
      </p>
      <div className="mt-10">
        <Gallery images={galleries.osterinsel} alt="Osterinsel Januar 2026" />
      </div>
      <h2 className="mt-16 font-serif text-4xl">
        Sept. 2025 Meteora u. Balkan · Sept. 2019 Tibet · magische Eiswelten Island März 2020 · Finnland Jan. 2018
      </h2>
      <div className="mt-8">
        <Gallery images={galleries["andere-reisen"]} alt="Weitere Reisen" />
      </div>
    </main>
  );
}
