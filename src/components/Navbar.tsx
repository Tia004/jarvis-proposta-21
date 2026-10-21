"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ITA" | "ENG">("ITA");
  const [langAlert, setLangAlert] = useState("");

  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const firstDrawerLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      firstDrawerLinkRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleLang = () => {
    const nextLang = currentLang === "ITA" ? "ENG" : "ITA";
    setCurrentLang(nextLang);
    setLangAlert(`Lingua impostata su: ${nextLang === "ITA" ? "Italiano" : "English (Demo)"}`);
    setTimeout(() => setLangAlert(""), 3000);
  };

  const closeDrawer = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {langAlert && (
        <div className="sr-only" role="status" aria-live="polite">
          {langAlert}
        </div>
      )}
      <div className={`container ${styles.navbarContainer}`}>
        {/* Brand identity */}
        <Link href="/" className={styles.brand} aria-label="Hotel Italia Cagliari - Torna alla Home">
          <span className={styles.brandMonogram}>H</span>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>Hotel Italia</span>
            <span className={styles.brandSubtitle}>Cagliari · Marina · Dal 1928</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Navigazione Principale">
          <ul className={styles.navList}>
            <li><a href="#hotel" className={styles.navLink}>L'Hotel</a></li>
            <li><a href="#camere" className={styles.navLink}>Camere & Suite</a></li>
            <li><a href="#servizi" className={styles.navLink}>Servizi</a></li>
            <li><a href="#esperienza" className={styles.navLink}>Percorso Ospite</a></li>
            <li><a href="#distanze" className={styles.navLink}>Posizione & Porto</a></li>
            <li><a href="#reparti" className={styles.navLink}>Reparti Assistenza</a></li>
            <li><a href="#contatti" className={styles.navLink}>Contatti</a></li>
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.headerActions}>
          <button
            type="button"
            onClick={toggleLang}
            className={styles.langBtn}
            aria-label={`Cambia lingua, attuale: ${currentLang}`}
            title="Selettore Lingua Dimostrativo"
          >
            <i className="bi bi-translate" aria-hidden="true"></i>
            <span>{currentLang}</span>
          </button>

          <a
            href={`tel:${HOTEL_INFO.phones[0].callValue}`}
            className={styles.phoneCta}
            aria-label={`Chiama subito il ricevimento h24 al numero ${HOTEL_INFO.phones[0].number}`}
          >
            <i className="bi bi-telephone-fill" aria-hidden="true"></i>
            <span className={styles.phoneCtaText}>+39 070 660410</span>
          </a>

          <a href="#booking" className={`btn btn-primary ${styles.bookingBtn}`}>
            <i className="bi bi-calendar-check" aria-hidden="true"></i>
            <span>Prenota Ora</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            ref={toggleBtnRef}
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
          >
            <i className={`bi ${mobileMenuOpen ? "bi-x-lg" : "bi-list"}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-label="Menu navigazione mobile"
      >
        <div className={styles.drawerBackdrop} onClick={closeDrawer} aria-hidden="true" />
        <div className={styles.drawerContent}>
          <div className={styles.drawerHeader}>
            <div className={styles.drawerBrand}>
              <span className={styles.brandMonogram}>H</span>
              <div>
                <strong>Hotel Italia</strong>
                <small>Ricevimento H24</small>
              </div>
            </div>
            <button
              type="button"
              className={styles.drawerCloseBtn}
              onClick={closeDrawer}
              aria-label="Chiudi menu"
            >
              <i className="bi bi-x-lg" aria-hidden="true"></i>
            </button>
          </div>

          <nav className={styles.drawerNav} aria-label="Collegamenti sezioni mobile">
            <ul className={styles.drawerList}>
              <li>
                <a ref={firstDrawerLinkRef} href="#hotel" onClick={closeDrawer} className={styles.drawerLink}>
                  <i className="bi bi-building" aria-hidden="true"></i>
                  <span>L'Hotel & Storia dal 1928</span>
                </a>
              </li>
              <li>
                <a href="#camere" onClick={closeDrawer} className={styles.drawerLink}>
                  <i className="bi bi-door-closed" aria-hidden="true"></i>
                  <span>Camere & Suite</span>
                </a>
              </li>
              <li>
                <a href="#servizi" onClick={closeDrawer} className={styles.drawerLink}>
                  <i className="bi bi-stars" aria-hidden="true"></i>
                  <span>Servizi & Colazione Sarda</span>
                </a>
              </li>
              <li>
                <a href="#esperienza" onClick={closeDrawer} className={styles.drawerLink}>
                  <i className="bi bi-compass" aria-hidden="true"></i>
                  <span>Percorso di Soggiorno</span>
                </a>
              </li>
              <li>
                <a href="#distanze" onClick={closeDrawer} className={styles.drawerLink}>
                  <i className="bi bi-geo-alt" aria-hidden="true"></i>
                  <span>Posizione, Porto & Trasporti</span>
                </a>
              </li>
              <li>
                <a href="#reparti" onClick={closeDrawer} className={styles.drawerLink}>
                  <i className="bi bi-people" aria-hidden="true"></i>
                  <span>Reparti Operativi Ufficiali</span>
                </a>
              </li>
              <li>
                <a href="#contatti" onClick={closeDrawer} className={styles.drawerLink}>
                  <i className="bi bi-envelope-check" aria-hidden="true"></i>
                  <span>Contatti & Modulo Informazioni</span>
                </a>
              </li>
              <li>
                <a href="#booking" onClick={closeDrawer} className={`${styles.drawerLink} ${styles.drawerLinkAccent}`}>
                  <i className="bi bi-calendar-heart" aria-hidden="true"></i>
                  <span>Booking & Miglior Tariffa Web</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.drawerFooter}>
            <div className={styles.drawerContactBox}>
              <p className={styles.drawerContactTitle}>Ricevimento Sempre Attivo:</p>
              <a href={`tel:${HOTEL_INFO.phones[0].callValue}`} className={styles.drawerPhone}>
                <i className="bi bi-telephone-outbound" aria-hidden="true"></i> +39 070 660410
              </a>
              <p className={styles.drawerAddress}>Via Sardegna, 31 - Cagliari (Marina)</p>
            </div>

            <div className={styles.drawerLegalLinks}>
              <Link href="/privacy" onClick={closeDrawer}>Privacy</Link>
              <span>·</span>
              <Link href="/cookie" onClick={closeDrawer}>Cookie</Link>
              <span>·</span>
              <Link href="/termini" onClick={closeDrawer}>Termini</Link>
              <span>·</span>
              <Link href="/accessibilita" onClick={closeDrawer}>Accessibilita</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
