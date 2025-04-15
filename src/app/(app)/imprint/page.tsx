import React from 'react'

const Impressum = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Impressum</h1>
      <p className="mb-4">
        Das Geburtshaus Rundfrau Leipzig ist eine anerkannte von Hebammen geleitete Einrichtung des
        Gesundheitswesens. Unser Schwerpunkt liegt in der außerklinischen Geburtshilfe.
      </p>
      <h2 className="text-xl font-semibold mb-4">Postanschrift:</h2>
      <address className="mb-4 not-italic">
        Geburtshaus Rundfrau Leipzig GbR
        <br />
        August-Bebel-Straße 11
        <br />
        04275 Leipzig
        <br />
        Vertreten durch: Hebammen Andrea Held & Anne Halt
      </address>
      <h2 className="text-xl font-semibold mb-4">Kontakt:</h2>
      <p className="mb-4">
        Bürozeit: Mittwoch u. Donnerstag 08-14 Uhr
        <br />
        Telefon: 0341 – 49 26 57 91
        <br />
        Fax: 0341 – 49 26 57 92
        <br />
        oder über das Kontaktformular
      </p>
      <h2 className="text-xl font-semibold mb-4">
        Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO:
      </h2>
      <p className="mb-4">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die
        Sie unter{' '}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>{' '}
        finden.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        Es gelten folgende Gebühren- und Berufsordnungen:
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Hebammengesetz (HebG)</li>
        <li>Berufsordnung für Hebammen und Entbindungspfleger (HebBO)</li>
        <li>Hebammenhilfe-Gebührenverordnung (HebGV)</li>
        <li>Ausbildungs- und Prüfungsverordnung für Hebammen und Entbindungspfleger (HebAPrV)</li>
      </ul>
      <p className="mb-4">
        Die Abrechnung von Hebammen erfolgt im Wesentlichen nach dem Kassengebührenvertrag nach
        §134a SGB V und den privaten Gebührenordnungen der Bundesländer.
      </p>
    </div>
  )
}

export default Impressum
