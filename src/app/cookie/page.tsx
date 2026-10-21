import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export const metadata: Metadata = {
  title: "Informativa Cookie (Direttiva ePrivacy) | Hotel Italia Cagliari",
  description:
    "Informativa estesa sull'uso dei cookie e delle tecnologie di memorizzazione locale conformemente al Provvedimento Garante Privacy per Hotel Italia Co.s.s.a.t. s.p.a.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <article className={styles.card}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Trasparenza Cookie &amp; Tracciamento</span>
            <h1 className={styles.title}>Informativa Estesa sui Cookie</h1>
            <div className={styles.meta}>
              <span>
                <i className="bi bi-calendar3" aria-hidden="true" /> Aggiornato: Ottobre 2026
              </span>
              <span>
                <i className="bi bi-cookie" aria-hidden="true" /> Direttiva ePrivacy (2002/58/CE)
              </span>
              <span>
                <i className="bi bi-check-circle" aria-hidden="true" /> Solo Cookie Tecnici
              </span>
            </div>
          </header>

          <div className={styles.draftNotice} role="note">
            <strong>Dichiarazione Tecnologica - Nessun Tracciamento di Profilazione</strong>
            La presente proposta dimostrativa adotta una rigorosa politica di minimizzazione dei dati (Privacy by Design).
            Non vengono installati cookie di terze parti, cookie di profilazione commerciale, pixel di tracciamento pubblicitario
            (es. Facebook Pixel, Google Ads) o script invasivi. L&apos;unica memorizzazione locale utilizzata e strettamente
            tecnica e finalizzata alla gestione del consenso e alle preferenze di interfaccia.
          </div>

          <div className={styles.content}>
            <section>
              <h2>1. Cosa sono i Cookie e le Tecnologie Similari</h2>
              <p>
                I cookie sono brevi stringhe di testo che i siti visitati dall&apos;utente inviano al suo terminale
                (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla
                successiva visita del medesimo utente. Tecnologie similari includono il LocalStorage e il SessionStorage
                del browser HTML5.
              </p>
            </section>

            <section>
              <h2>2. Tipologie di Cookie Utilizzate</h2>
              <p>
                Conformemente alle Linee Guida del Garante Privacy dell&apos;10 giugno 2021, i cookie si distinguono in:
              </p>
              <ul>
                <li>
                  <strong>Cookie Tecnici e di Navigazione:</strong> indispensabili per il corretto funzionamento del sito,
                  la sicurezza della connessione e la memorizzazione della scelta sul consenso. Non richiedono il consenso
                  preventivo dell&apos;utente ai sensi dell&apos;art. 122 del Codice Privacy.
                </li>
                <li>
                  <strong>Cookie di Profilazione e Marketing:</strong> utilizzati per ricondurre a soggetti determinati,
                  identificati o identificabili, specifiche azioni o schemi comportamentali ricorrenti nell&apos;uso delle
                  funzionalita offerte. <em>Il presente sito NON fa uso di alcun cookie di questa categoria.</em>
                </li>
                <li>
                  <strong>Cookie Analitici Terze Parti:</strong> <em>Disattivati nella configurazione dimostrativa.</em>
                </li>
              </ul>
            </section>

            <section>
              <h2>3. Tabella Dettagliata dei Cookie e Storage Locale</h2>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Nome Identificatore</th>
                      <th scope="col">Tipologia / Fornitore</th>
                      <th scope="col">Scadenza</th>
                      <th scope="col">Scopo e Funzione Tecnica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>hotel_italia_cookie_consent</code></td>
                      <td>LocalStorage / Prima Parte</td>
                      <td>12 mesi</td>
                      <td>Memorizza la scelta dell&apos;utente (accettazione o chiusura banner cookie) per evitare la riproposizione continua</td>
                    </tr>
                    <tr>
                      <td><code>hotel_italia_promo_code</code></td>
                      <td>SessionStorage / Prima Parte</td>
                      <td>Chiusura sessione</td>
                      <td>Mantiene attivo il codice convenzione selezionato (es. TRAGHETTI) durante la compilazione del form preventivo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>4. Gestione delle Preferenze dal Browser</h2>
              <p>
                L&apos;utente puo verificare, cancellare o bloccare i cookie modificando direttamente le impostazioni di
                sicurezza del proprio programma di navigazione (browser):
              </p>
              <ul>
                <li><strong>Google Chrome:</strong> Impostazioni &gt; Privacy e sicurezza &gt; Cookie e altri dati dei siti.</li>
                <li><strong>Mozilla Firefox:</strong> Impostazioni &gt; Privacy e sicurezza &gt; Cookie e dati dei siti web.</li>
                <li><strong>Apple Safari:</strong> Preferenze &gt; Privacy &gt; Blocca tutti i cookie.</li>
                <li><strong>Microsoft Edge:</strong> Impostazioni &gt; Cookie e autorizzazioni sito &gt; Gestisci ed elimina cookie.</li>
              </ul>
              <p>
                Si segnala che la disabilitazione completa dei cookie tecnici potrebbe limitare la memorizzazione delle
                preferenze di navigazione del sito.
              </p>
            </section>

            <section>
              <h2>5. Contatti per Ulteriori Chiarimenti</h2>
              <p>
                Per qualsiasi domanda relativa alla gestione dei cookie su questa proposta dimostrativa, e possibile
                fare riferimento a {HOTEL_INFO.legal.companyName} tramite l&apos;indirizzo email: {HOTEL_INFO.emails[0].address}.
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
