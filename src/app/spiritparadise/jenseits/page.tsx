import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Erstwohnsitz im Universum" };

export default function JenseitsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="section-kicker">Über mich im Jenseits</p>
      <h1 className="mt-3 font-serif text-5xl">im Buch Erstwohnsitz im Universum</h1>
      <div className="mt-8 overflow-hidden rounded-[2rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.jenseits1} alt="Erstwohnsitz im Universum" className="w-full object-cover" />
      </div>
      <div className="prose-site mt-10 space-y-5">
        <h2>Erstwohnsitz im Universum?</h2>
        <p>Demzufolge gibt es mindestens noch einen Zweitwohnsitz.</p>
        <p>
          So, wie uns im irdischen Leben mehrere örtliche Wohnsitze gegeben sein können, verhält es sich auch
          übergeordnet außerirdisch. Unsere Seele bleibt unsterblich. Sie sucht sich vorübergehend ihren passenden
          irdischen Körper und verweilt in ihm, bis es Zeit ist, zu gehen. Sie streift den irdischen Körper ab, wie
          wir uns täglich an- und auskleiden. Es ist ihr Zweitwohnsitz auf Erden.
        </p>
        <p>
          Begleitet mich auf meinen Seelengängen in diesem Buch! Begleitet mich mit meinen Erkenntnissen, daß alles
          in uns gegeben ist. Begleitet mich auf dem Weg ins Paradies – irdisch wie überirdisch.
        </p>
        <p>
          Martina Fabijenna Rösner setzte einprägsame Textsequenzen um in malerische Heilkraft. Uns verbindet der
          gemeinsame Ursprungsname Fabijenna, eine Energie bestimmter Klänge, übersetzt in Buchstaben unseres
          heutigen Alphabets. Sabine Sangitar Wenig channelte den Namen für mich. Nähere Erläuterungen hierzu finden
          sich auf www.kryonschule.de und www.kunst-mit-fabijenna.de
        </p>
        <h2>Meditation zum segensreichen SonnenMond</h2>
        <p>
          In Traumreisen führe ich den Leser an inspirierende und erlösende Orte. Sie schaffen einen Zugang zu innerer
          Ruhe und Gelassenheit – der Alltag mit Kummer und Sorgen verlöscht.
        </p>
        <p>Liebe · Loslassen · Vergeben</p>
        <h2>Aufstieg</h2>
        <p>
          Ich durfte meine Eltern über die jenseitige Schwelle führen und auch meine geliebten Haustiere. Jeder Weg
          blieb einzigartig. Gemeinsam ist ihnen allen, daß der Weg nach oben führt, daß er sich zumeist vorher
          ankündigt, und daß es Kontakte danach gibt. Von nun an sind wir unsterblich in unser beider Herzen.
        </p>
        <h2>prachtvoller Himmels-Chor</h2>
        <p>
          Die ergreifende Wahrheit ist, daß meine Mama ihren letzten Atemzug tat, als wir mit dem aufsteigenden Boot
          das Himmelstor erreichten und ich sie dort im Feld liebender Freunde abgab. Es zeigte sich ein
          prachtvoller Engels-Chor, in dessen wunderschönem Klang ich ein Teil von ihm wurde.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.jenseits2} alt="" className="rounded-2xl object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.jenseits3} alt="" className="rounded-2xl object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.jenseits4} alt="" className="rounded-2xl object-cover" />
      </div>
      <Link href="/spiritparadise" className="btn-gold mt-8">
        Zur Publikation
      </Link>
    </main>
  );
}
