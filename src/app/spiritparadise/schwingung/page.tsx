import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/data/galleries";

export const metadata: Metadata = { title: "Spiritualität in Musik und Natur" };

export default function SchwingungPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="section-kicker">Alles schwingt</p>
      <h1 className="mt-3 font-serif text-5xl">Spiritualität in Musik und Natur</h1>
      <div className="prose-site mt-8 space-y-5">
        <p>
          Jeder Sonnenstrahl, der uns berührt, schwingt. Er trägt die Schwingungen des Universums zu uns. Jeder Baum,
          jede Pflanze, jedes Blatt schwingt in seiner ihm/r einzigartigen Form. Fühlen wir dies und fühlen wir uns
          berührt, tritt Heilung ein. Es sind Schwingungen einzigartiger reiner Form.
        </p>
        <p>
          Jeder Gedanke ist eine Schwingung – jedes Gefühl ist eine Schwingung. Gedanken manifestieren sich im Gefühl.
          Nur positive Schwingungen tragen zur Heilung bei.
        </p>
        <p>
          Etwas in uns geht in Resonanz. Es ist die universal reine Schwingung, die tief in uns verankert ist. Es ist
          der Glaube daran. Wunder geschehen, wenn man an sie glaubt. Heilung geschieht, wenn man unabdingbar daran
          glaubt. Auf seine innere Führung kann man sich verlassen, wenn man daran glaubt.
        </p>
        <p>Ich glaube an diese Dinge tief in mir. Das ist Spiritualität.</p>
        <p>
          Musik ist Schwingung – jeder Ton erzeugt eine Schwingung. Musizieren ist gelebte Freude in der Musik. Reine
          universale Schwingungen gebracht in Musik mit spirituellem Hintergrund ist die höchste Form der Verbindung
          zum göttlichen Ursprung. Es ist die Durchdringung und Verschmelzung mit dem Hohen Geist.
        </p>
        <p>
          Kirche und Chöre sind wunderbare Orte, die den Platz dafür schaffen, mit gleichgesinnten Menschen diese
          positiven Kräfte zu verwirklichen.
        </p>
        <p>
          Inhalt des Artikels in der Tattva Viveka und im Buch Schamanin im Millennium.
        </p>
      </div>
      <div className="mt-10">
        <Gallery images={galleries.schwingt} alt="Alles schwingt" />
      </div>
      <Link href="/spiritparadise" className="btn-gold mt-8">
        Zu den Publikationen
      </Link>
    </main>
  );
}
