import type { Metadata } from "next";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Impressum" };

export default function SpiritImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 space-y-4 leading-7">
      <h1 className="font-serif text-5xl">Impressum</h1>
      <p>
        {contact.spiritName}
        <br />
        {contact.street}
        <br />
        {contact.zip} {contact.city}
      </p>
      <p>
        Telefon: {contact.phoneDisplay}
        <br />
        E-Mail: {contact.spiritEmail}
      </p>
      <p>
        Auf dieser Homepage bin ich ausdrücklich nur für meinen Inhalt verantwortlich. Dies gilt auch für Links zu
        anderen Anbietern.
      </p>
      <p>Umsatzsteuerbefreit gemäß § 19 UStG (Kleinunternehmerregelung).</p>
    </main>
  );
}
