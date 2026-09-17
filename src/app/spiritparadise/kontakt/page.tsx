import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Kontakt" };

export default function SpiritKontaktPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="section-kicker">Kontakt</p>
      <h1 className="mt-3 font-serif text-5xl">Jeder Kontakt ist wertvoll.</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="rounded-[2rem] bg-night p-8 text-mist">
          <p>per Email an:</p>
          <a href={`mailto:${contact.spiritEmail}`} className="mt-3 block font-serif text-3xl text-white">
            {contact.spiritEmail}
          </a>
          <p className="mt-8 leading-7">
            SpiritParadise
            <br />
            {contact.spiritName}
            <br />
            {contact.street}
            <br />
            D-{contact.zip} {contact.city}
            <br />
            Telefon {contact.phoneDisplay}
          </p>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-lift">
          <ContactForm to={contact.spiritEmail} subject="Anfrage Spirit Paradise" />
        </div>
      </div>
    </main>
  );
}
