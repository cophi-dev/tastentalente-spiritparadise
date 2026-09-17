import Link from "next/link";
import { contact } from "@/data/site";

export function MusicFooter() {
  return (
    <footer className="mt-20 border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">musikschule-tastentalente</p>
          <p className="mt-3 text-sm leading-6 text-cream/70">
            {contact.name}
            <br />
            {contact.street}
            <br />
            {contact.zip} {contact.city}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Nützliche Links</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/tastentalente">Klavier · Gehörbildung · Playbacküben</Link>
            </li>
            <li>
              <Link href="/tastentalente/ueber-mich">Fachliteratur</Link>
            </li>
            <li>
              <Link href="/tastentalente/preise">Angebot und Preise</Link>
            </li>
            <li>
              <Link href="/spiritparadise">Spirit Paradise – Samtpfoten</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Jetzt Termin vereinbaren</p>
          <p className="mt-4 text-sm leading-6 text-cream/80">
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <br />
            <a href={`mailto:${contact.schoolEmail}`}>{contact.schoolEmail}</a>
          </p>
          <Link href="/tastentalente/kontakt" className="btn-gold mt-5">
            Kontaktformular
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-cream/50">
        <p className="mb-2 italic">ein herzlicher gruss</p>
        <Link href="/tastentalente/impressum">Impressum</Link>
        {" · "}
        <Link href="/tastentalente/datenschutz">Datenschutz</Link>
        {" · "}
        <Link href="/">Beide Websites</Link>
      </div>
    </footer>
  );
}
