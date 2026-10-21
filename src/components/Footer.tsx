import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Informazioni istituzionali e legali">
      <div className="container">
        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Column 1: Identity & Heritage */}
          <div className={styles.col}>
            <div className={styles.brandRow}>
              <span className={styles.monogram}>H</span>
              <div>
                <h3 className={styles.brandTitle}>Hotel Italia Cagliari</h3>
                <span className={styles.brandBadge}>Accoglienza dal 1928 · 3 Stelle</span>
              </div>
            </div>
            <p className={styles.brandBio}>
              Nel suggestivo quartiere Marina a Cagliari, a soli 300 metri dal porto e dai traghetti e a 500 metri dalla stazione ferroviaria. Ospitalita autentica con reception attiva h24.
            </p>
            <div className={styles.socialNotice}>
              <i className="bi bi-shield-check" aria-hidden="true"></i>
              <span>Canali social esterni omessi: assenti o non verificati nel dossier pubblico.</span>
            </div>
          </div>

          {/* Column 2: Direct Contacts */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Recapiti Diretti H24</h4>
            <ul className={styles.contactList}>
              <li>
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <span>Via Sardegna, 31 · 09124 Cagliari (CA)</span>
              </li>
              <li>
                <i className="bi bi-telephone" aria-hidden="true"></i>
                <a href={`tel:${HOTEL_INFO.phones[0].callValue}`}>{HOTEL_INFO.phones[0].number}</a>
              </li>
              <li>
                <i className="bi bi-telephone" aria-hidden="true"></i>
                <a href={`tel:${HOTEL_INFO.phones[1].callValue}`}>{HOTEL_INFO.phones[1].number}</a>
              </li>
              <li>
                <i className="bi bi-envelope" aria-hidden="true"></i>
                <a href="mailto:info@hotelitaliacagliari.com">info@hotelitaliacagliari.com</a>
              </li>
              <li>
                <i className="bi bi-chat-text" aria-hidden="true"></i>
                <span>Skype: hotelitalia3</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigazione Rapida</h4>
            <ul className={styles.linksList}>
              <li><a href="#hotel">L'Hotel & Tradizione 1928</a></li>
              <li><a href="#camere">Camere & Suite</a></li>
              <li><a href="#servizi">Servizi & Prima Colazione Sarda</a></li>
              <li><a href="#esperienza">Processo di Accoglienza</a></li>
              <li><a href="#distanze">Distanze dal Porto & Trasporti</a></li>
              <li><a href="#reparti">Reparti Operativi Ufficiali</a></li>
              <li><a href="#contatti">Modulo Informazioni & Preventivi</a></li>
              <li><a href="#booking">Verifica Miglior Prezzo Web</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Institutional Grants */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Dati Societari & Trasparenza</h4>
            <div className={styles.legalBox}>
              <strong>Hotel Italia Co.s.s.a.t. s.p.a.</strong>
              <p>Via Sardegna, 31 · 09124 Cagliari (CA)</p>
              <p>Registro delle Imprese di Cagliari N. REA: CA-67249</p>
              <p>Capitale versato: Euro 103.300,00 i.v.</p>
              <p>Partita IVA e C.F.: 00140160920</p>
            </div>

            <div className={styles.grantsBox}>
              <small>
                <strong>Trasparenza Erogazioni Pubbliche:</strong> Ampliamento struttura con Fondo (R)esisto (L.R. 22/2020) e PNRR M1C3 I4.2.5 con risorse Unione Europea - NextGenEU.
              </small>
            </div>
          </div>
        </div>

        {/* Separated Legal Pages Bar */}
        <div className={styles.legalBar}>
          <div className={styles.legalLinksGroup}>
            <Link href="/privacy" className={styles.legalPageLink}>
              Informativa Privacy (GDPR)
            </Link>
            <span className={styles.separator}>·</span>
            <Link href="/cookie" className={styles.legalPageLink}>
              Cookie Policy
            </Link>
            <span className={styles.separator}>·</span>
            <Link href="/termini" className={styles.legalPageLink}>
              Termini & Condizioni d'Uso
            </Link>
            <span className={styles.separator}>·</span>
            <Link href="/accessibilita" className={styles.legalPageLink}>
              Dichiarazione di Accessibilita UNI CEI EN 301549
            </Link>
          </div>

          <div className={styles.disclaimerBox}>
            <p className={styles.disclaimerText}>
              <strong>Proposta dimostrativa indipendente:</strong> Il presente portale web rappresenta una proposta autonoma non ufficiale ad uso valutativo redatta per <em>Contatti Hotel Italia - Cagliari | Info e Prenotazioni</em>. Nessun dato reale viene memorizzato ne trasmesso a server esterni.
            </p>
          </div>

          <div className={styles.copyrightRow}>
            <span>&copy; {new Date().getFullYear()} Hotel Italia Co.s.s.a.t. s.p.a. · Tutti i diritti riservati.</span>
            <span>Sviluppo proposta Next.js con Vanilla CSS · Zero SVG · Zero Emoji</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
