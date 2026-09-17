"use client";

import { FormEvent, useState } from "react";

type Props = {
  to: string;
  subject: string;
};

export function ContactForm({ to, subject }: Props) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Name *</span>
        <input
          required
          name="name"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">E-Mail *</span>
        <input
          required
          type="email"
          name="email"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">Nachricht *</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <p className="text-xs leading-5 text-ink/60">
        Es gilt die Datenschutzerklärung. Die mit * gekennzeichneten Felder bitte ausfüllen.
        Das Formular öffnet Ihr E-Mail-Programm – es werden keine Daten auf diesem Server gespeichert.
      </p>
      <button type="submit" className="btn-gold">
        Nachricht senden
      </button>
      {sent ? (
        <p className="text-sm text-forest">
          Wenn sich kein E-Mail-Programm öffnet, schreiben Sie bitte direkt an {to}.
        </p>
      ) : null}
    </form>
  );
}
