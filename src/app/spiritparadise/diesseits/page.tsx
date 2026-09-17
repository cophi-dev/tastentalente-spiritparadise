import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Schwingen in Freiheit" };

export default function DiesseitsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="section-kicker">Über mich im Diesseits</p>
      <h1 className="mt-3 font-serif text-5xl">Schwingen in Freiheit</h1>
      <p className="mt-4 text-xl text-ink/70">
        Es ist magisch, die Schwingungen der Welt zu spüren. Alles schwingt, alles geht in Resonanz. Das ist die
        verbindende Kommunikation zwischen diesseitiger und jenseitiger Welt.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.diesseits1} alt="Eva-Marie Fabijenna" className="rounded-3xl object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.diesseits2} alt="Dr. Eva-Marie F. Heyde" className="rounded-3xl object-cover" />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <p className="rounded-2xl bg-white p-5 italic">gut gelaunt · hoch lebe die Freude</p>
        <p className="rounded-2xl bg-white p-5 italic">schlecht gelaunt · in Demut vor dem GrossenGanzen</p>
      </div>
      <div className="prose-site mt-10 space-y-5">
        <p>
          In Parallelwelten erlebe ich seit meiner Jugendzeit Erstaunliches. Doch erst mit dunklen und
          verlustreichen Jahren wuchs in mir die tiefe Überzeugung, Erkenntnisse aus der übersinnlichen Wahrnehmung
          als Lebenshilfe im menschlichen Alltag anzuwenden.
        </p>
        <p>
          In einem einzigen Schaffensdrang entstanden die Bücher Erstwohnsitz im Universum und Schamanin im
          Millennium. Sie zeigen eine tiefe Spiritualität in uns, verbunden mit den Elementen der Natur und den
          Tieren, wie man es im schamanischen Denken und Fühlen kennt.
        </p>
        <p>
          Jeder von uns trägt diese wunderbaren Energien und Informationen in sich – es gilt, sich dies wieder
          bewußt zu machen. Das Fühlen dieser Bewußtheit läßt alles eins werden, eingebettet in liebender Fürsorge
          und Geborgenheit.
        </p>
        <p>
          Als Autorin, Pianistin und Pädagogin widme ich den Großteil meines Lebens den wunderbaren Energien des
          Schreibens, Musizierens und des Lehrens.
        </p>
        <p>
          <strong>Musik.</strong> Die Musik nimmt einen zentralen Stellenwert ein, siehe hierzu:{" "}
          <Link href="/tastentalente">Musikschule Tastentalente</Link>.
        </p>
        <p>
          <strong>Natur.</strong> Sich mit Pflanzen und Tieren zu umgeben und sich in der Natur aufzuhalten, ist
          Tankstelle für Körper, Geist und Seele. Seit vielen Jahren verbinde ich mich in der Natur mit dem All-Eins.{" "}
          <Link href="/spiritparadise/schwingung">Spiritualität in Musik und Natur</Link>
        </p>
        <p>
          <strong>Reisen.</strong> Länder und Kontinente in ihren Energien zu erspüren, ist einzigartig.{" "}
          <Link href="/spiritparadise/reisen">Mystische Reisen</Link>
        </p>
        <p>
          <strong>Große Liebe.</strong> In Memoriam an meinen ersten wunderbaren Kater Leary in den 90er Jahren und
          den einige Monate später hinzu genommenen 1-jährigen schwarzen Panther Janosch, der trotz chronischer
          Krankheit 15 Jahre an meiner Seite sein konnte. Beide finden sich heute äußerlich wie auch in manchem
          Charakterzug in Buster und Arturo wieder. Dann kamen und gingen herzallerliebste Vierbeiner, weil sie in
          jungen Jahren überfahren wurden oder von schwerer Krankheit erlöst werden mußten: Maya & Jojo, Joujou,
          Pheli, Joshi. Joujou war über Jahre eine unkomplizierte draußen-Katze und erinnert äußerlich wie auch in
          diesem Charakterzug an Keaton. Nachdem Janosch ging, kamen Don & Carlos zu mir. Alle finden Einzug in mein
          Buch „Erstwohnsitz im Universum“.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.diesseits3} alt="Zwillingskater Don Carlos" className="rounded-3xl" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.diesseits4} alt="Buster Keaton" className="rounded-3xl" />
      </div>
      <Link href="/spiritparadise/samtpfoten" className="btn-gold mt-8">
        Zur gelebten Freude: miau & miez
      </Link>
    </main>
  );
}
