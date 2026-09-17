import type { Metadata } from "next";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Datenschutz" };

export default function SpiritDatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 space-y-5 leading-7 text-ink/80">
      <h1 className="font-serif text-5xl">Datenschutz</h1>
      <p>
        Verantwortlich: {contact.spiritName}, {contact.street}, {contact.zip} {contact.city},{" "}
        {contact.spiritEmail}.
      </p>
      <p>
        Diese Website speichert keine Tracking-Cookies. Der Hostinganbieter verarbeitet technisch notwendige
        Server-Logfiles zum Betrieb der Seite (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      <p>
        Das Kontaktformular öffnet Ihr E-Mail-Programm. Es werden keine Formulardaten auf diesem Server gespeichert.
        Bestellungen (z. B. Bücher-Bundle) erfolgen per E-Mail.
      </p>
      <p>
        Sie haben die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch
        und Beschwerde bei einer Aufsichtsbehörde.
      </p>
    </main>
  );
}
