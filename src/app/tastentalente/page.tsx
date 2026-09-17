import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Play & practise einmalig in Hamburg-Alstertal",
  description:
    "Komplette Musikausbildung bis zur Hochschulreife: Klavier-Einzelunterricht, Gehörbildung und Playbacküben bei Dr. Eva-Marie Heyde in Hamburg-Alstertal.",
};

const pillars = [
  {
    title: "Einzelunterricht Klavier & Musiktheorie",
    text: "Individuelle Wünsche verbinden sich mit professionellem Unterricht. Das Repertoire reicht über verschiedenste Stilrichtungen und fokussiert sich in sehr fortgeschrittenem Stadium auf die Klassik. Im Popbereich werden neben dem klassischen Notenlesen Improvisation und Banderfahrung vermittelt. Musiktheorie wird verständlich und umfassend erklärt. Jedes eingeübte Musikstück wird mit einer Aufnahme archiviert.",
  },
  {
    title: "Gehörbildung",
    text: "In Form eigenständiger Arbeit werden zuvor vermittelte musiktheoretische Inhalte konsequent angewendet und gelernt, seien es nun Intervalle, Akkorde, Tonleitern, Rhythmen und dergleichen mehr.",
  },
  {
    title: "Playbacküben",
    text: "Ausgewählte Musikstücke können hier angehört werden: so klingt der fertige Titel richtig. Auf geht’s zum Üben: Tempo reduzieren, mitspielen, nur bestimmte Stellen üben … Nach Bedarf können vielschichtigste Funktionen eingestellt werden.",
  },
];

export default function MusicHome() {
  return (
    <main>
      <section className="relative min-h-[88vh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.musicHero}
          alt="Klavier in warmem Licht"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/20" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Hamburg-Alstertal</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-white md:text-7xl">
            Play & practise
          </h1>
          <p className="mt-2 font-serif text-2xl text-cream/85 md:text-3xl">einmalig in Hamburg-Alstertal</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/80">
            Ob klein oder groß, jung oder jung geblieben, Anfänger oder fortgeschritten – ich biete eine
            komplette Musikausbildung bis zur Hochschulreife.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/tastentalente/kontakt" className="btn-gold">
              Infotermin vereinbaren
            </Link>
            <Link href="/tastentalente/preise" className="btn-outline border-white/30 text-white hover:bg-white hover:text-ink">
              Angebot & Preise
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="section-kicker">herzlich willkommen</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Ein Instrument zu erlernen, möge Freude bereiten.</h2>
          <div className="prose-site mt-6 space-y-4">
            <p>
              Damit es gut klingt, ist es erforderlich, regelmäßig etwas zu tun. Mein Konzept bietet hierfür
              alle Voraussetzungen.
            </p>
            <p>
              Auf Wunsch erhält jeder Schüler einen Flyer, auf dem wichtige Punkte festgehalten sind, wie man
              erfolgreich übt … und dann seid ihr dran!
            </p>
            <p>
              Hier geht’s zum passenden Fachbuch:{" "}
              <Link href="/tastentalente/ueber-mich" className="font-semibold text-gold">
                Wer übt mit dir?
              </Link>
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-lift">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.musicPortrait}
            alt="Dr. Eva-Marie Heyde"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-kicker">Konzept</p>
          <h2 className="mt-3 font-serif text-4xl">3 Säulen des Unterrichts</h2>
          <p className="mt-4 max-w-3xl text-ink/75">
            Das Klavierspiel im Einzelunterricht bildet das Zentrum der Ausbildung. Im Unterricht werden auch
            systematisch musiktheoretische Inhalte vermittelt. Einmalig ist, die gelernten Inhalte der
            Unterrichtsstunde in eigenständigem Üben sofort anzuwenden. Dafür sind spezielle Übeplätze für
            Playbacküben und Gehörbildung eingerichtet. Musik hat mit Hören zu tun. Dies wird sukzessive in der
            Wahrnehmung geschult. Die 3 Unterrichtssäulen verbinden sich zu einer ganzheitlichen Musikausbildung.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="rounded-3xl bg-cream p-7 shadow-lift">
                <p className="font-serif text-5xl text-gold/70">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif text-2xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-2">
        <div className="rounded-[2rem] bg-forest p-8 text-cream md:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Probestunde</p>
          <h2 className="mt-3 font-serif text-4xl">Es geht sofort los</h2>
          <p className="mt-4 leading-7 text-cream/80">
            Kontakt aufnehmen – Termin vereinbaren und mit Probestunde oder Anmeldung loslegen. Wir fangen beim
            Kennenlernen direkt an: so lernt ihr mich und mein Konzept am besten kennen.
          </p>
          <p className="mt-4 font-serif text-3xl">40 Minuten · 34,– €</p>
          <Link href="/tastentalente/preise" className="btn-gold mt-6">
            Alle Preise ansehen
          </Link>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-lift md:p-12">
          <p className="section-kicker">Direkt erreichen</p>
          <h2 className="mt-3 font-serif text-4xl">Ruft mich an</h2>
          <p className="mt-4 leading-7 text-ink/75">
            {contact.name}
            <br />
            {contact.street}, {contact.zip} {contact.city}
          </p>
          <p className="mt-6 font-serif text-3xl">
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          </p>
          <a href={`mailto:${contact.schoolEmail}`} className="mt-2 block text-gold">
            {contact.schoolEmail}
          </a>
        </div>
      </section>
    </main>
  );
}
