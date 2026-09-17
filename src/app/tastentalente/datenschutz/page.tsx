import type { Metadata } from "next";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 prose-site space-y-5">
      <h1 className="font-serif text-5xl">Datenschutz</h1>
      <p>
        Verantwortlich: {contact.name}, {contact.street}, {contact.zip} {contact.city},{" "}
        <a href={`mailto:${contact.schoolEmail}`}>{contact.schoolEmail}</a>.
      </p>
      <p>
        Diese Website speichert keine Tracking-Cookies und setzt keine Analyse-Tools ein. Beim Aufruf werden durch
        den Hostinganbieter technisch notwendige Server-Logfiles (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite)
        verarbeitet, soweit dies für den Betrieb und die Sicherheit der Website erforderlich ist (Art. 6 Abs. 1 lit.
        f DSGVO).
      </p>
      <p>
        Das Kontaktformular öffnet ausschließlich Ihr eigenes E-Mail-Programm. Es werden dabei keine Formulardaten
        auf diesem Server gespeichert. Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre
        Angaben zur Beantwortung der Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
      </p>
      <p>
        Die eingebettete Karte auf der Kontaktseite wird von Google Maps bereitgestellt. Beim Laden können Daten an
        Google übermittelt werden. Die Karte ist optional; Sie können uns auch ohne Kartenanzeige erreichen.
      </p>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
        und Widerspruch sowie das Beschwerderecht bei einer Aufsichtsbehörde.
      </p>
    </main>
  );
}
