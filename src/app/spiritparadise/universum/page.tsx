import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/data/galleries";

export const metadata: Metadata = { title: "Schamanin im Millennium" };

export default function UniversumPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="section-kicker">Über mich im Universum</p>
      <h1 className="mt-3 font-serif text-5xl">im Buch Schamanin im Millennium</h1>
      <p className="mt-4 max-w-3xl text-xl text-ink/70">Reisen durch das Universum zur Erkenntnis</p>
      <div className="prose-site mt-8 max-w-3xl space-y-5">
        <p>
          Meine Seelenreisen entfernen sich immer mehr vom irdischen Standpunkt aus gesehen. Dies geschieht in
          zunehmender Beschäftigung mit schamanischem Denken und Fühlen. Jede Reise bringt eine Erkenntnis für unser
          Leben hier auf der Erde.
        </p>
        <h2>Magie der Sonne</h2>
        <p>
          Die Kraft der Sonne ermöglicht mir die Reisen. In Verbindung mit ihr zeigen sich mir immer mehr Orte und
          beschützende Wegbegleiter. Im Ursprung ist alles vorhanden – den Zugang dazu mögen wir derzeit als
          menschliche Wesen wieder aktivieren. Jeder kann dies tun – die Voraussetzung ist, bereit zu sein, sich
          gefühlsmäßig für diese Welt zu öffnen.
        </p>
        <h2>Seelenfabrik auf Plejadus</h2>
        <p>
          Es zeigt sich mir die Hohepriesterin Lara und in weiterer Verbindung werde ich mit ihr eins. Sie arbeitet
          und wirkt auf Plejadus und ich begreife, daß mein Leben auch dort besteht. Es scheint, daß das große Ziel
          meiner Reisen Plejadus ist. In einem großen Hauptkapitel beschreibe ich das Sein dort – die
          Produktionsstätte für Seelen, die jenseitige Welt nach dem Tod und vor der Geburt und die Verbindung zur
          Erde.
        </p>
        <p>Es ist ein einziges großes Finale.</p>
        <p>
          Im Begreifen und Fühlen eines Hauchs universaler Zusammenhänge fühle ich mich im All-Eins aufgehoben und
          beschützt. Es ist das, was ich unter spiritueller Führung verstehe.
        </p>
      </div>
      <div className="mt-10">
        <Gallery images={galleries.universum} alt="Schamanin im Millennium" />
      </div>
      <Link href="/spiritparadise" className="btn-gold mt-8">
        Zur Publikation
      </Link>
    </main>
  );
}
