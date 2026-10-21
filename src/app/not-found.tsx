import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export const metadata: Metadata = {
  title: "Pagina Non Trovata (404) | Hotel Italia Cagliari",
  description:
    "La pagina richiesta non e stata trovata. Consulta i contatti diretti di Hotel Italia Cagliari o torna alla pagina iniziale.",
};

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <main className={styles.card} id="main-content">
        <div className={styles.iconWrapper} aria-hidden="true">
          <i className="bi bi-compass" />
        </div>
        <div className={styles.code}>Codice Errore 404</div>
        <h1 className={styles.title}>Pagina Non Trovata</h1>
        <p className={styles.description}>
          L&apos;indirizzo web richiesto non corrisponde a una risorsa attiva di questa proposta dimostrativa.
          E possibile che la pagina sia stata spostata o che l&apos;URL digitato contenga una svista.
        </p>

        <div className={styles.actionGroup}>
          <Link href="/" className={styles.primaryBtn}>
            <i className="bi bi-house-door" aria-hidden="true" />
            Torna alla Home Page
          </Link>
          <a href={`tel:${HOTEL_INFO.phones[0].callValue}`} className={styles.secondaryBtn}>
            <i className="bi bi-telephone" aria-hidden="true" />
            Chiama Ricevimento H24
          </a>
        </div>

        <div className={styles.directLinks}>
          <span>Pagine e sezioni di rapido accesso:</span>
          <ul className={styles.linksList}>
            <li><Link href="/#camere">Camere &amp; Suite</Link></li>
            <li><Link href="/#servizi">Servizi &amp; Colazione</Link></li>
            <li><Link href="/#posizione">Posizione &amp; Distanze</Link></li>
            <li><Link href="/#contatti">Modulo Preventivo</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/accessibilita">Accessibilita</Link></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
