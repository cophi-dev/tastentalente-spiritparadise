import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Infotermin, Probestunde oder Fragen an Dr. Eva-Marie Heyde, Huulkamp 25, 22397 Hamburg.",
};

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="section-kicker">Kontakt</p>
      <h1 className="mt-3 font-serif text-5xl">Jeder Kontakt ist wertvoll</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="rounded-[2rem] bg-ink p-8 text-cream md:p-10">
          <h2 className="font-serif text-3xl">ruft mich an</h2>
          <p className="mt-6 leading-7 text-cream/80">
            musikschule-tastentalente
            <br />
            {contact.name}
            <br />
            {contact.street}
            <br />
            {contact.zip} {contact.city}
          </p>
          <p className="mt-6 font-serif text-3xl">
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          </p>
          <a href={`mailto:${contact.schoolEmail}`} className="mt-3 block text-gold">
            {contact.schoolEmail}
          </a>
          <p className="mt-8 text-sm text-cream/60">
            Ihr findet mich auf facebook.com – tastentalente Eva-Marie Heyde – und auf instagram.com /
            spiritparadise.de
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <iframe
              title="Karte Huulkamp 25 Hamburg"
              className="h-56 w-full border-0"
              loading="lazy"
              src="https://maps.google.com/maps?q=Huulkamp%2025%2022397%20Hamburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-lift md:p-10">
          <h2 className="font-serif text-3xl">oder schreibt mir</h2>
          <div className="mt-6">
            <ContactForm to={contact.schoolEmail} subject="Anfrage Musikschule Tastentalente" />
          </div>
        </div>
      </div>
    </main>
  );
}
