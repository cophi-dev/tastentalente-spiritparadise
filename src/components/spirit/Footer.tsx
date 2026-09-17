import Link from "next/link";
import { contact } from "@/data/site";

export function SpiritFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-night text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-white">inspirierende Momente</p>
          <p className="mt-3 text-sm leading-6 text-mist/70">
            SpiritParadise
            <br />
            {contact.spiritName}
            <br />
            {contact.street}, D-{contact.zip} {contact.city}
          </p>
        </div>
        <div className="text-sm leading-6 text-mist/75">
          <p>Umsatzsteuerbefreit gemäß § 19 UStG (Kleinunternehmerregelung).</p>
          <p className="mt-3">
            Lieferungen in Deutschland. Bücher auch über den Buchhandel und den Spirit Rainbow Verlag.
          </p>
        </div>
        <div className="text-sm">
          <a href={contact.phoneHref} className="block">
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.spiritEmail}`} className="block">
            {contact.spiritEmail}
          </a>
          <Link href="/tastentalente" className="mt-4 inline-block text-gold">
            Zur Musikschule Tastentalente →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-mist/50">
        <Link href="/spiritparadise/impressum">Impressum</Link>
        {" · "}
        <Link href="/spiritparadise/datenschutz">Datenschutz</Link>
        {" · "}
        <Link href="/">Beide Websites</Link>
      </div>
    </footer>
  );
}
