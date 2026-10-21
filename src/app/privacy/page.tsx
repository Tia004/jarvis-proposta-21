import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export const metadata: Metadata = {
  title: "Informativa Privacy (Bozza GDPR UE 2016/679) | Hotel Italia Cagliari",
  description:
    "Bozza informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per la proposta dimostrativa di Hotel Italia Co.s.s.a.t. s.p.a.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <article className={styles.card}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Trasparenza Dati Personali</span>
            <h1 className={styles.title}>Informativa sul Trattamento dei Dati Personali</h1>
            <div className={styles.meta}>
              <span>
                <i className="bi bi-calendar3" aria-hidden="true" /> Aggiornato: Ottobre 2026
              </span>
              <span>
                <i className="bi bi-shield-check" aria-hidden="true" /> Regolamento UE 2016/679 (GDPR)
              </span>
              <span>
                <i className="bi bi-building" aria-hidden="true" /> {HOTEL_INFO.legal.companyName}
              </span>
            </div>
          </header>

          <div className={styles.draftNotice} role="note">
            <strong>Avvertenza Legale Importante - Proposta Dimostrativa</strong>
            Questo documento costituisce una bozza tecnica redatta ad uso dimostrativo per la proposta indipendente
            di rinnovamento digitale. Non sostituisce la privacy policy definitiva redatta dal consulente legale o DPO
            nominato da {HOTEL_INFO.legal.companyName}. Il presente sito dimostrativo non raccoglie dati personali reali
            ne effettua trasferimenti a terzi.
          </div>

          <div className={styles.content}>
            <section>
              <h2>1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali e <strong>{HOTEL_INFO.legal.companyName}</strong>, con sede
                legale in {HOTEL_INFO.legal.registeredOffice}, Codice Fiscale e Partita IVA {HOTEL_INFO.legal.vatNumber},
                Numero REA {HOTEL_INFO.legal.reaNumber}, Capitale Sociale {HOTEL_INFO.legal.shareCapital}.
              </p>
              <p>
                Contatti ufficiali per l&apos;esercizio dei diritti privacy:
              </p>
              <ul>
                <li>Indirizzo postale: {HOTEL_INFO.legal.registeredOffice}</li>
                <li>Posta elettronica certificata / ordinaria: {HOTEL_INFO.emails[0].address}</li>
                <li>Telefono: {HOTEL_INFO.phones[0].number}</li>
              </ul>
            </section>

            <section>
              <h2>2. Tipologia di Dati Trattati</h2>
              <p>
                Nell&apos;ambito dell&apos;ordinaria attivita di accoglienza alberghiera e gestione delle richieste di preventivo,
                possono essere trattate le seguenti categorie di dati:
              </p>
              <ul>
                <li><strong>Dati anagrafici e di contatto:</strong> nome, cognome, indirizzo email, recapito telefonico, indirizzo di residenza.</li>
                <li><strong>Dati di soggiorno e preferenze:</strong> date di arrivo e partenza, numero ospiti, tipologia camera richiesta, esigenze alimentari o di accessibilita comunicate spontaneamente dall&apos;ospite.</li>
                <li><strong>Dati di navigazione tecnica:</strong> indirizzi IP anonimizzati, log di sistema per la sicurezza informatica e cookie tecnici di sessione.</li>
              </ul>
            </section>

            <section>
              <h2>3. Finalita e Base Giuridica del Trattamento</h2>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Finalita</th>
                      <th scope="col">Base Giuridica (GDPR)</th>
                      <th scope="col">Periodo di Conservazione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Risposta a richieste di preventivo e informazioni di soggiorno</td>
                      <td>Art. 6.1.b (Esecuzione di misure precontrattuali)</td>
                      <td>12 mesi dalla richiesta o evasione della pratica</td>
                    </tr>
                    <tr>
                      <td>Gestione della prenotazione alberghiera e check-in</td>
                      <td>Art. 6.1.b (Esecuzione del contratto di ospitalita)</td>
                      <td>Durata del soggiorno + termini civilistici di legge (10 anni)</td>
                    </tr>
                    <tr>
                      <td>Comunicazione presenze all&apos;Autorita di Pubblica Sicurezza (Alloggiati Web)</td>
                      <td>Art. 6.1.c (Obbligo di legge - T.U.L.P.S. art. 109)</td>
                      <td>Termini stabiliti dalla normativa di Pubblica Sicurezza</td>
                    </tr>
                    <tr>
                      <td>Sicurezza dell&apos;infrastruttura informatica e prevenzione abusi</td>
                      <td>Art. 6.1.f (Legittimo interesse del titolare)</td>
                      <td>Massimo 6 mesi nei log tecnici di sistema</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>4. Modalita di Trattamento e Misure di Sicurezza</h2>
              <p>
                Il trattamento viene effettuato mediante strumenti manuali, informatici e telematici con logiche
                strettamente correlate alle finalita sopra indicate e, in ogni caso, in modo da garantire la sicurezza
                e la riservatezza dei dati. Vengono adottate misure tecniche conformi agli standard di settore, tra cui
                trasmissione cifrata HTTPS/TLS e controllo degli accessi.
              </p>
            </section>

            <section>
              <h2>5. Destinatari e Trasferimento dei Dati</h2>
              <p>
                I dati raccolti non vengono diffusi ne ceduti a terzi per scopi di profilazione commerciale. I dati possono
                essere comunicati a:
              </p>
              <ul>
                <li>Personale autorizzato e istruito operante presso {HOTEL_INFO.name} (Ricevimento, Booking, Amministrazione).</li>
                <li>Fornitori di servizi tecnici IT e hosting vincolati da accordi di Responsabile del Trattamento ex art. 28 GDPR.</li>
                <li>Autorita di Pubblica Sicurezza in adempimento di obblighi inderogabili di legge.</li>
              </ul>
              <p>
                Non e previsto il trasferimento di dati personali verso Paesi terzi extra-UE privi di decisione di adeguatezza.
              </p>
            </section>

            <section>
              <h2>6. Diritti dell&apos;Interessato (Artt. 15-22 GDPR)</h2>
              <p>
                In ogni momento, l&apos;interessato puo esercitare i diritti riconosciuti dal Regolamento UE 2016/679:
              </p>
              <ul>
                <li>Diritto di accesso ai dati personali (art. 15).</li>
                <li>Diritto di rettifica dei dati inesatti o integrazione (art. 16).</li>
                <li>Diritto alla cancellazione (&quot;diritto all&apos;oblio&quot;) ove applicabile (art. 17).</li>
                <li>Diritto di limitazione del trattamento (art. 18).</li>
                <li>Diritto alla portabilita dei dati (art. 20).</li>
                <li>Diritto di opposizione al trattamento (art. 21).</li>
              </ul>
              <p>
                Le richieste possono essere inviate senza formalita a <strong>{HOTEL_INFO.emails[0].address}</strong>.
                Gli interessati hanno inoltre il diritto di proporre reclamo all&apos;Autorita Garante per la Protezione
                dei Dati Personali (Piazza Venezia 11, 00187 Roma - www.garanteprivacy.it).
              </p>
            </section>
          </div>

          <Link href="/" className={styles.backBtn}>
            <i className="bi bi-arrow-left" aria-hidden="true" /> Torna alla Home Page
          </Link>
        </article>
      </div>
    </div>
  );
}
