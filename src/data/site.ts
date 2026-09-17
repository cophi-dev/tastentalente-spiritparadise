import { photos } from "@/data/photos";

export const contact = {
  name: "Dr. Eva-Marie Heyde",
  spiritName: "Dr. Eva-Marie Fabijenna Heyde",
  school: "musikschule-tastentalente",
  spirit: "SpiritParadise",
  street: "Huulkamp 25",
  zip: "22397",
  city: "Hamburg",
  phoneDisplay: "0176 – 96 199 377",
  phoneHref: "tel:+4917696199377",
  schoolEmail: "tastentalente@gmail.com",
  spiritEmail: "spiritparadise.de@gmail.com",
  instagram: "https://www.instagram.com",
};

export const prices = {
  trialLesson: { minutes: 40, price: "34,– €" },
  trialMonth: [
    {
      lesson: "30 Minuten Einzelunterricht",
      extra: "bis zu 30 Minuten Gehörbildung und Playbackspiel",
      price: "120,– €",
    },
    {
      lesson: "45 Minuten Einzelunterricht",
      extra: "bis zu 45 Minuten Gehörbildung und Playbackspiel",
      price: "160,– €",
    },
    {
      lesson: "60 Minuten Einzelunterricht",
      extra: "bis zu 60 Minuten Gehörbildung und Playbackspiel",
      price: "200,– €",
    },
  ],
  registrationFee: "79,– €",
  regular: [
    { lesson: "20 min", total: "40 min", extra: "bis zu 20 min", a: "119,99 €", b: "89,99 €" },
    { lesson: "30 min", total: "60 min", extra: "bis zu 30 min", a: "149,99 €", b: "119,99 €" },
    { lesson: "45 min", total: "80 min", extra: "bis zu 45 min", a: "189,99 €", b: "159,99 €" },
    { lesson: "60 min", total: "100 min", extra: "bis zu 60 min", a: "229,99 €", b: "199,99 €" },
  ],
};

export const books = {
  music: [
    {
      title: "Was ist absolutes Hören",
      subtitle: "Umfassende Untersuchung zum Absoluten Gehör mit eigenen Testreihen und neuen Ergebnissen.",
      meta: "Profilverlag, München 1987 · ISBN 3-89019-172-X",
      note: "vergriffen – in diversen Bibliotheken vorhanden.",
      price: null,
      image: photos.bookGehoer,
    },
    {
      title: "Wer übt mit dir?",
      subtitle:
        "Passendes Fachbuch zum gesamten Musikschulkonzept mit umfassendem Kapitel zum Thema „Lernen – warum wie?“",
      meta: "Noetzel Verlag, Wilhelmshaven 1999 · ISBN 3-7959-0753-5",
      note: "im Buchhandel erhältlich oder direkt über mich.",
      price: "24,– €",
      image: photos.bookUeben,
    },
  ],
  spirit: [
    {
      title: "Erstwohnsitz im Universum",
      subtitle: "Reisen zwischen Himmel und Erde",
      meta: "Neuauflage Juni 2018 · Spirit Rainbow Verlag, Aachen",
      price: "14,80 €",
      ebook: "eBook ePub (seit 2019) · 8,99 € ab 2021",
      image: photos.bookUniversum,
      href: "/spiritparadise/jenseits",
    },
    {
      title: "Schamanin im Millennium",
      subtitle: "Reisen zur Erkenntnis",
      meta: "Erstauflage Februar 2019 · Spirit Rainbow Verlag, Aachen",
      price: "14,80 €",
      ebook: "eBook ePub (seit 2019, Layout Nov. 2021) · 9,99 €",
      image: photos.bookSchamanin,
      href: "/spiritparadise/universum",
    },
  ],
  bundle: {
    title: "Bundle: 2 Bücher für 25,– €",
    note: "Einfach eine Mail schicken – Direktbezug hier oder über den Verlag.",
  },
  tattva: {
    title: "Der Klang des Lebens – Die reine Schwingung in uns",
    meta: "Eva-Marie Fabijenna Heyde · Tattva Viveka 69, November 2016, S. 32–42",
    image: photos.tattva,
    url: "http://www.tattva.de",
  },
};
