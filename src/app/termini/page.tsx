import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export const metadata: Metadata = {
  title: "Termini e Condizioni di Soggiorno (Bozza) | Hotel Italia Cagliari",
  description:
    "Bozza delle condizioni generali di fornitura dei servizi alberghieri, orari di check-in/out e politiche di cancellazione per Hotel Italia Co.s.s.a.t. s.p.a.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminiPage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <article className={styles.card}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Condizioni di Soggiorno</span>
            <h1 className={styles.title}>Termini e Condizioni di Soggiorno</h1>
            <div className={styles.meta}>
              <span>
                <i className="bi bi-calendar3" aria-hidden="true" /> Aggiornato: Ottobre 2026
              </span>
              <span>
                <i className="bi bi-journal-text" aria-hidden="true" /> Bozza Contrattuale
              </span>
              <span>
                <i className="bi bi-geo-alt" aria-hidden="true" /> Foro di Cagliari
              </span>
            </div>
          </header>

          <div className={styles.draftNotice} role="note">
            <strong>Avvertenza Legale Importante - Proposta Dimostrativa</strong>
            Il presente testo costituisce una bozza di massima redatta per documentare la completezza contrattuale
            della proposta progettuale. Non vincola legalmente {HOTEL_INFO.legal.companyName} fino all&apos;eventuale
            adozione ufficiale ed approvazione dei propri organi societari. Per prenotazioni effettive fare sempre
            riferimento ai contratti emessi dalla direzione dell&apos;albergo.
          </div>

          <div className={styles.content}>
            <section>
              <h2>1. Ambito di Applicazione e Soggetto Gestore</h2>
              <p>
                Le presenti Condizioni Generali regolano i contratti di accoglienza e soggiorno alberghiero stipulati tra
                i clienti e <strong>{HOTEL_INFO.legal.companyName}</strong>, titolare dell&apos;esercizio alberghiero denominato
                &quot;{HOTEL_INFO.name}&quot;, sito in {HOTEL_INFO.legal.registeredOffice}, P.IVA {HOTEL_INFO.legal.vatNumber}.
              </p>
            </section>

            <section>
              <h2>2. Orari di Ricevimento, Check-in e Check-out</h2>
              <ul>
                <li><strong>Check-in:</strong> Le camere sono a disposizione degli ospiti a partire dalle ore 14:00 del giorno di arrivo.</li>
                <li><strong>Presidio Notturno H24:</strong> La reception e presidiata 24 ore su 24; gli arrivi successivi alle ore 20:00 o in tarda notte sono sempre garantiti senza supplementi obbligatori previa gradita segnalazione dell&apos;orario approssimativo.</li>
                <li><strong>Check-out:</strong> Le camere devono essere liberate entro e non oltre le ore 11:00 del giorno di partenza per consentire le operazioni di sanificazione.</li>
                <li><strong>Late Check-out:</strong> Eventuali prolungamenti dell&apos;occupazione della camera sono subordinati alla disponibilita dell&apos;albergo e possono comportare un supplemento tariffario.</li>
                <li><strong>Deposito Bagagli:</strong> E disponibile gratuitamente un locale custodito per il deposito dei bagagli sia prima del check-in che dopo il check-out.</li>
              </ul>
            </section>

            <section>
              <h2>3. Prenotazioni, Caparre e Politiche di Cancellazione</h2>
              <p>
                La prenotazione diviene vincolante per l&apos;albergo unicamente a seguito della trasmissione della
                conferma scritta (voucher di prenotazione) e, ove previsto, dell&apos;avvenuto versamento di una caparra
                confirmatoria o della fornitura di una carta di credito valida a garanzia.
              </p>
              <ul>
                <li><strong>Tariffa Flessibile Ordinaria:</strong> Cancellazione gratuita consentita fino a 48 ore prima della data di arrivo (ore 14:00 locali). Per cancellazioni pervenute oltre tale termine o mancata presentazione (no-show), verra addebitato l&apos;importo della prima notte.</li>
                <li><strong>Tariffa Non Rimborsabile / Promozionale:</strong> Pagamento anticipato dell&apos;intero importo al momento della conferma; non e previsto rimborso in caso di cancellazione, modifica o mancata presentazione.</li>
                <li><strong>Convenzione Traghetti:</strong> L&apos;applicazione dei codici sconto legati alla convenzione Traghetti Lines e valida esclusivamente per soggiorni prenotati direttamente con l&apos;albergo.</li>
              </ul>
            </section>

            <section>
              <h2>4. Imposta di Soggiorno del Comune di Cagliari</h2>
              <p>
                Le tariffe indicate sul sito e nei preventivi non includono l&apos;imposta di soggiorno istituita dal
                Comune di Cagliari. Tale tributo dovra essere saldato direttamente in loco al momento del check-in o del check-out
                nella misura vigente deliberata dall&apos;amministrazione comunale (salvo esenzioni previste dal regolamento comunale,
                quali minori o accompagnatori di degenti).
              </p>
            </section>

            <section>
              <h2>5. Norme di Condotta, Danni e Fumo</h2>
              <ul>
                <li>Tutte le camere e gli spazi chiusi dell&apos;albergo sono rigorosamente per non fumatori (Legge 3/2003). L&apos;eventuale violazione comportera l&apos;addebito delle spese straordinarie di sanificazione ambientale.</li>
                <li>L&apos;ospite e tenuto a custodire con diligenza le strutture dell&apos;albergo; eventuali danni arrecati agli arredi o agli impianti saranno imputati al responsabile del soggiorno.</li>
              </ul>
            </section>

            <section>
              <h2>6. Legge Applicabile e Foro Competente</h2>
              <p>
                Tutti i rapporti contrattuali sono regolati dalla legge italiana. Per qualsiasi controversia che dovesse
                sorgere in merito all&apos;interpretazione o esecuzione del soggiorno, salvo le norme imperative a tutela del
                consumatore ex D.Lgs. 206/2005 (Codice del Consumo), sara competente in via esclusiva il Foro di Cagliari.
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
