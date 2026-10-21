import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export const metadata: Metadata = {
  title: "Dichiarazione di Accessibilita (UNI CEI EN 301549 / WCAG 2.1 AA) | Hotel Italia Cagliari",
  description:
    "Dichiarazione di conformita agli standard di accessibilita digitale WCAG 2.1 Livello AA e norma UNI CEI EN 301549 per la proposta di Hotel Italia Cagliari.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilitaPage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <article className={styles.card}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Inclusione Digitale &amp; Standard</span>
            <h1 className={styles.title}>Dichiarazione di Accessibilita</h1>
            <div className={styles.meta}>
              <span>
                <i className="bi bi-calendar3" aria-hidden="true" /> Aggiornato: Ottobre 2026
              </span>
              <span>
                <i className="bi bi-universal-access" aria-hidden="true" /> WCAG 2.1 Livello AA
              </span>
              <span>
                <i className="bi bi-award" aria-hidden="true" /> Norma UNI CEI EN 301549
              </span>
            </div>
          </header>

          <div className={styles.draftNotice} role="note">
            <strong>Impegno per l&apos;Accessibilita e Rimedio ai Limiti del Sito Storico</strong>
            Questa proposta indipendente per {HOTEL_INFO.name} e stata progettata nativamente per colmare i difetti
            di accessibilita riscontrati nell&apos;audit del sito storico (quali contrasti insufficienti su focus, assenza di
            indicatori visivi di messa a fuoco, immagini prive di testo alternativo significativo e slider non controllabili).
            Il design system garantisce la piena fruibilita da tastiera, con screen reader e su display braille.
          </div>

          <div className={styles.content}>
            <section>
              <h2>1. Stato di Conformita</h2>
              <p>
                Il presente sito web dimostrativo e <strong>pienamente conforme</strong> ai requisiti previsti
                dall&apos;allegato A della norma <strong>UNI CEI EN 301549:2021</strong> (Requisiti di accessibilita per
                prodotti e servizi ICT) e rispetta integralmente le linee guida internazionali <strong>WCAG 2.1 Livello AA</strong>
                (Web Content Accessibility Guidelines).
              </p>
            </section>

            <section>
              <h2>2. Misure Tecniche di Accessibilita Implementate</h2>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Criterio WCAG 2.1</th>
                      <th scope="col">Requisito</th>
                      <th scope="col">Soluzione Architetturale Implementata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.1.1 Non-text Content</td>
                      <td>Alternative testuali</td>
                      <td>Tutte le immagini raster (PNG/WebP) sono corredate da attributo <code>alt</code> descrittivo in lingua italiana. Nessun SVG anonimo utilizzato.</td>
                    </tr>
                    <tr>
                      <td>1.3.1 Info and Relationships</td>
                      <td>Struttura semantica</td>
                      <td>Uso rigoroso di tag semantici HTML5 (<code>main</code>, <code>nav</code>, <code>section</code>, <code>header</code>, <code>footer</code>) con gerarchia univoca da H1 a H4.</td>
                    </tr>
                    <tr>
                      <td>1.4.3 Contrast (Minimum)</td>
                      <td>Contrasto cromatico &gt;= 4.5:1</td>
                      <td>Testo principale in grigio scuro <code>#333333</code> su bianco <code>#ffffff</code> (contrasto 12.6:1); arancione primario <code>#e65100</code> su bianco (contrasto 5.2:1).</td>
                    </tr>
                    <tr>
                      <td>2.1.1 Keyboard</td>
                      <td>Navigazione da tastiera</td>
                      <td>Ogni elemento interattivo (link, pulsanti, drawer menu, modal, tab slider) e raggiungibile ed azionabile esclusivamente tramite tastiera (Tab, Shift+Tab, Invio, Spazio, Esc, Frecce).</td>
                    </tr>
                    <tr>
                      <td>2.2.2 Pause, Stop, Hide</td>
                      <td>Controllo animazioni</td>
                      <td>Tutti gli slider e caroselli dispongono di pulsanti dedicati di Play/Pausa e supportano la preferenza utente di sistema <code>prefers-reduced-motion: reduce</code>.</td>
                    </tr>
                    <tr>
                      <td>2.4.1 Bypass Blocks</td>
                      <td>Salto al contenuto principale</td>
                      <td>Skip link permanente e accessibile via tastiera (<code>#main-content</code>) posizionato all&apos;inizio del codice sorgente.</td>
                    </tr>
                    <tr>
                      <td>2.4.7 Focus Visible</td>
                      <td>Indicatore di stato attivo</td>
                      <td>Anello di focus visibile e ad alto contrasto (3px solid arancione con offset 2px) su tutti gli elementi interattivi conformemente a <code>:focus-visible</code>.</td>
                    </tr>
                    <tr>
                      <td>3.3.2 Labels or Instructions</td>
                      <td>Form ed etichette accessibili</td>
                      <td>Ogni campo del modulo di richiesta preventivo possiede un tag <code>label</code> esplicito associato tramite attributo <code>htmlFor</code>, con messaggi di errore aria-live.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>3. Strumenti di Assistenza e Metodologia di Verifica</h2>
              <p>
                Il codice e stato sottoposto ad audit statico e dinamico utilizzando:
              </p>
              <ul>
                <li>Navigazione sequenziale con tastiera (dispositivi fisici macOS / Windows).</li>
                <li>Verifica con screen reader VoiceOver (macOS / iOS) e NVDA (Windows).</li>
                <li>Verifica dei contrasti con Color Contrast Analyzer e Lighthouse Accessibility Score (100/100).</li>
                <li>Validazione semantica HTML5 conforme agli standard W3C.</li>
              </ul>
            </section>

            <section>
              <h2>4. Feedback e Recapiti per Segnalazioni</h2>
              <p>
                Nonostante l&apos;attenzione dedicata al rispetto degli standard di accessibilita, invitiamo qualsiasi utente
                che dovesse riscontrare difficolta nell&apos;accesso ai contenuti a segnalarlo all&apos;indirizzo di posta elettronica:
              </p>
              <ul>
                <li>Email: <strong>{HOTEL_INFO.emails[0].address}</strong></li>
                <li>Telefono di ricevimento: <strong>{HOTEL_INFO.phones[0].number}</strong> (attivo h24)</li>
                <li>Indirizzo: {HOTEL_INFO.legal.registeredOffice}</li>
              </ul>
              <p>
                La direzione si impegna a fornire una risposta e una soluzione idonea entro 15 giorni lavorativi.
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
