import type { Metadata } from "next";
import Link from "next/link";
import { prices } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Angebot und Preise",
  description:
    "Probestunde, Probemonat und monatliche Tarife für Klavier-Einzelunterricht, Gehörbildung und Playbacküben in Hamburg-Alstertal.",
};

export default function PreisePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="section-kicker">Angebot und Preise</p>
      <h1 className="mt-3 font-serif text-5xl">es geht sofort los</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
        Kontakt aufnehmen – Termin vereinbaren und mit Probestunde oder Anmeldung loslegen. Probestunde: wir
        fangen beim Kennenlernen direkt an: so lernt ihr mich und mein Konzept am besten kennen. Danach
        unterhalten wir uns, ob ein weiterer Probemonat mit 4 Unterrichtsterminen folgen soll. Erst danach setzen
        wir uns zur Anmeldung zusammen, die dann einen fortlaufenden regelmäßigen Unterricht garantiert.
        Unterrichtsmaterialien sind in der Probezeit kostenfrei – erst nach Anmeldung besprechen wir, was
        benötigt wird. … und wer möchte und zu Hause noch nix hat: Keyboard und Metronom können günstig pro Monat
        bei mir gemietet werden!
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl bg-forest p-8 text-cream">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Erste Probestunde</p>
          <h2 className="mt-3 font-serif text-3xl">40 Minuten</h2>
          <p className="mt-3 text-cream/80">
            Hineinschnuppern ins Klavierspiel, in Gehörbildung und Playbackspiel. Bitte {prices.trialLesson.price}{" "}
            mitbringen.
          </p>
          <p className="mt-6 font-serif text-4xl">{prices.trialLesson.price}</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-lift">
          <p className="section-kicker">Weiterer Probemonat</p>
          <h2 className="mt-3 font-serif text-3xl">4 Termine zur Auswahl</h2>
          <p className="mt-3 text-sm text-ink/70">zahlbar bei Terminvereinbarung</p>
          <ul className="mt-5 space-y-4">
            {prices.trialMonth.map((item) => (
              <li key={item.price} className="flex items-start justify-between gap-4 border-b border-ink/10 pb-3">
                <span>
                  <strong>{item.lesson}</strong>
                  <br />
                  <span className="text-sm text-ink/65">{item.extra}</span>
                </span>
                <span className="shrink-0 font-serif text-2xl">{item.price}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-4xl">Regelmäßiger Unterricht</h2>
        <div className="mt-6 grid gap-4 text-sm leading-6 text-ink/75 md:grid-cols-2">
          <p>Unterricht regelmäßig wöchentlich oder 14-tägig bei fest vereinbartem Termin.</p>
          <p>Ratenzahlung jeweils zum Ersten des Monats gemäß Auswahl in der Preisliste.</p>
          <p>
            Unterrichtsfreie Zeit: gesetzliche Feiertage, 2 Wochen flexibel im Jahr und je 2 Wochen pro Quartal –
            sofern nicht anders angekündigt, zu den Hamburger Schulferien.
          </p>
          <p>Schülernachholtermine garantiert 1× pro Quartal.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-ink/10 p-6">
            <h3 className="font-serif text-2xl">Variante A</h3>
            <p className="mt-2 text-sm text-ink/70">Kündigungsfrist 1 Monat zum Monatsletzten</p>
          </div>
          <div className="rounded-3xl border border-gold/40 bg-gold/10 p-6">
            <h3 className="font-serif text-2xl">Variante B</h3>
            <p className="mt-2 text-sm text-ink/70">Kündigungsfrist 3 Monate zum Monatsletzten</p>
          </div>
        </div>
        <p className="mt-6 rounded-2xl bg-paper p-5 text-sm">
          Einmalige Anmeldegebühr <strong>{prices.registrationFee}</strong> inklusive Praxisbuch. Noten und
          weiteres Zubehör gemäß Absprache.
        </p>
      </section>

      <section className="mt-12 overflow-x-auto rounded-[2rem] bg-white p-4 shadow-lift md:p-8">
        <h2 className="px-2 font-serif text-3xl">Monatliche Tarife</h2>
        <p className="mt-2 max-w-3xl px-2 text-sm text-ink/65">
          Intensiv-Einzelunterricht, wöchentlich oder 14-tägig. Playbacküben + Gehörbildung zeitlich vor oder nach
          der Einzelstunde.
        </p>
        <table className="mt-6 min-w-[720px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink/10 text-xs uppercase tracking-[0.12em] text-ink/50">
              <th className="px-3 py-3">Einzelunterricht</th>
              <th className="px-3 py-3">Gesamtzeit vor Ort</th>
              <th className="px-3 py-3">Playbacküben + Gehörbildung</th>
              <th className="px-3 py-3">Variante A / Monat</th>
              <th className="px-3 py-3">Variante B / Monat</th>
            </tr>
          </thead>
          <tbody>
            {prices.regular.map((row) => (
              <tr key={row.lesson} className="border-b border-ink/5">
                <td className="px-3 py-4 font-semibold">{row.lesson}</td>
                <td className="px-3 py-4">{row.total}</td>
                <td className="px-3 py-4">{row.extra}</td>
                <td className="px-3 py-4 font-serif text-xl">{row.a}</td>
                <td className="px-3 py-4 font-serif text-xl text-forest">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 px-2 text-sm text-ink/60">ab 60 min wöchentlich individuelle Vereinbarung</p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h2 className="font-serif text-3xl">Kurse & Workshops</h2>
          <p className="mt-4 leading-7 text-ink/75">
            Kurse für 2–3 Personen: Intensivunterrichtszeiten der Teilnehmer aufaddiert und Übeprogramme
            integriert. Crashkurs auf Anfrage. Workshop zur Musikschulgründung auf Anfrage.
          </p>
          <Link href="/tastentalente/kontakt" className="btn-gold mt-6">
            Unverbindlich anfragen
          </Link>
        </div>
        <div className="overflow-hidden rounded-[2rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.miauTruppe}
            alt="Die Miau-Truppe"
            className="h-full w-full object-cover"
          />
          <p className="mt-3 text-sm text-ink/60">
            Mehr zur Miau-Truppe auf{" "}
            <Link href="/spiritparadise/samtpfoten" className="text-gold">
              Spirit Paradise
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
