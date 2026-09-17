import type { Metadata } from "next";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-serif text-5xl">Impressum</h1>
      <div className="mt-8 space-y-3 leading-7 text-ink/80">
        <p>
          {contact.name}
          <br />
          {contact.street}
          <br />
          {contact.zip} {contact.city}
        </p>
        <p>
          Telefon: <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <br />
          E-Mail: <a href={`mailto:${contact.schoolEmail}`}>{contact.schoolEmail}</a>
        </p>
        <p>
          Ich bin ausdrücklich auf dieser Homepage nur für meinen Inhalt verantwortlich. Dies gilt speziell auch
          für weiterführende Links zu anderen Webseiten.
        </p>
      </div>
    </main>
  );
}
