import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { galleries } from "@/data/galleries";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Wegbegleiter miau & miez" };

export default function SamtpfotenPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="section-kicker">Lumi & Lucy</p>
      <h1 className="mt-3 font-serif text-5xl">Wegbegleiter miau & miez</h1>
      <p className="mt-4 text-xl text-ink/70">
        bewegende Geschichten, Trauer und gelebte Freude – seit August 2023 mit Busti & Keaton, Arturo, Lumi & Lucy
      </p>
      <div className="mt-8 overflow-hidden rounded-[2rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.katzenHero}
          alt="Lumi und Lucy"
          className="w-full object-cover"
        />
      </div>
      <div className="prose-site mt-10 space-y-5">
        <p>
          Das Zusammenführen in 2023 klappte wunderbar und erst später wurde mir bewußt, daß dies durchaus nicht
          selbstverständlich ist. Ich kalkulierte auch nicht ein, daß das Schicksal so unbarmherzig zuschlagen
          könnte; ich handelte nach meinem Herzen. Wider allen Redens von allen Seiten wollte ich den Traum einer
          langjährig glücklichen Katzentruppe nicht aufgeben.
        </p>
        <h2>Wir sind die Neuen in 2023</h2>
        <p>
          Herzlich Willkommen – in unendlicher Trauer um Lumi. Sie wurde am Mo, den 27.4.26 um 8.15 wie schlafend am
          Bordstein unserer Wohnstraße gefunden. Es schien die Sonne … es mußte gerade erst passiert sein …
        </p>
        <h2>YIN und YANG im Körperlichen entzweit</h2>
        <p>
          Die weiße Lumi, der schwarze Arturo – sie hatten ihre große Liebe gefunden. Die verschmuste und in den
          höchsten Tönen singende Lumi hatte sich in unser aller Herzen geschlichen und war die Lieblings-Queen der
          ganzen Katzentruppe.
        </p>
        <p>
          Bekanntlich kommen Dinge auf einen zu und man entscheidet sich dafür oder dagegen. Nach dem Tod DONs gab
          es Monate der Trauer und eine große Leere … Zwar schickte mir DON einige Tage nach seinem Aufstieg ins
          Universum nachts im Traum ein Bild, was zeigte, wie er mit Abendsonne im Rücken glückselig am Rande eines
          Hains saß, aber es zeigte sich kein neues Wesen. Es sollte tatsächlich 1 Jahr vergehen …
        </p>
        <h2>Hallo, ich bin der gutmütige Seniorkater Carlos</h2>
        <p>
          und liebe Kartons. Ob nun neuerdings 3 junge Kater nebst Maus am gedehnten Gummiband an und über mir
          vorbeifliegen, ist mir völlig egal. Ich bleibe in meinem Karton. Von meiner stoischen Gelassenheit kann
          Frauchen noch lernen. Alle Tiere aus dem Tierheim Elmshorn.
        </p>
        <p>
          Hallo, wir haben uns im Juli 2019 so auf unser neues Frauchen gefreut und konnten es gar nicht erwarten,
          abgeholt zu werden. Hallo, ich bin Buster und ich liebe es, die Seele baumeln zu lassen. Hallo, ich bin
          Keaton und schmuse für mein Leben gern. Wir sind beste Freunde.
        </p>
        <p>
          Unerwartet rief mich im Jahr 2022 das Tierheim an. Ob ich denn wieder 4 Kater haben wolle? Es verging
          wieder einige Zeit, bis man mir ARTURO anbot: ein sehr lebendiger und liebevoller 1-jähriger schwarzer
          Kater. Daß ich nach Arturo auch noch Pip & Spunky zu mir holte, war eigentlich nicht mein Plan.
        </p>
        <p>
          Ganz herzlichen Dank an das Tierheim Elmshorn bei Hamburg:{" "}
          <a href="http://www.tierheim-elmshorn.de/">tierheim-elmshorn.de</a>
        </p>
        <h2>Lumi & Lucy</h2>
        <p>
          Am 14.08.2023 kamen die 7 Monate jungen Kätzinnen Lumi & Lucy zu uns. Sie fanden Platz, weil das Schicksal
          die jungen Kater Pip & Spunky zu sich holte, und zu allem Unglück auch noch der lange treue Wegbegleiter
          Carlos von heute auf jetzt gehen mußte.
        </p>
        <p>
          Nur im Doppelpack sind wir zu haben … und zu zweit hat man auch viel mehr Ideen, was man alles anstellen
          kann.
        </p>
        <h2>trauriger Nachklang</h2>
        <p>
          am 21.7.21 mußten wir uns nach langem Nierenleiden schweren Herzens von Don verabschieden. Fast taggenau
          folgte Carlos zwei Jahre später am 20.7.23. Am 28.11.22 wurde Pip mittags höchstwahrscheinlich von einem
          Auto erfasst. Am 22.05.23 holte Pip seinen liebsten Freund Spunky zu sich. Carlos folgte unerwartet am
          20.07.2023. Ein großer Tumor … die Ärzte erlösten ihn noch in der Narkoseuntersuchung.
        </p>
        <p>die Seele brennt, die Seele schmerzt – in großer Demut vor dem Großen Ganzen</p>
        <h2>Der Traum</h2>
        <p>
          Es gibt ihn, diesen Traum einer gut harmonierenden Katzentruppe. Bereits nach dem Ableben Dons vor zwei
          Jahren gab sich mir ein, es würde ein weißes Weibchen Einzug halten. Ja, sagte mir die innere Stimme, zum
          schwarzen Kater gehöre das weiße Pendant: Yin und Yang.
        </p>
        <p>
          Nach gut einem Monat sind 4 von 5 Katzen hervorragend als Gruppe zusammen gewachsen. Es ist ein Märchen mit
          HAPPY-END. Im November 2024 seit 1 Jahr glücklich vereint … und Ende 2025 immer noch. Und dann schlägt das
          Schicksal am 27.4.26 wieder unbarmherzig zu.
        </p>
      </div>
      <div className="mt-10">
        <Gallery images={galleries.katzen} alt="Wegbegleiter miau und miez" />
      </div>
    </main>
  );
}
