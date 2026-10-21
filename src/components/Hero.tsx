import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-main-title">
      {/* Background raster image with editorial overlay */}
      <div className={styles.bgWrapper} aria-hidden="true">
        <Image
          src="/images/hero-hotel-italia.png"
          alt="Facciata storica e atmosfera di Hotel Italia nel quartiere Marina a Cagliari"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          {/* Historical Heritage Badge */}
          <div className={styles.badgeWrapper}>
            <span className={styles.heritageBadge}>
              <i className="bi bi-award" aria-hidden="true"></i>
              Dal 1928 · 3 Stelle nel Centro di Cagliari
            </span>
            <span className={styles.locationBadge}>
              <i className="bi bi-geo-alt" aria-hidden="true"></i>
              Via Sardegna, 31 (Marina)
            </span>
          </div>

          <h1 id="hero-main-title" className={styles.heroTitle}>
            Contatti & Accoglienza nel Cuore della Marina di Cagliari
          </h1>

          <p className={styles.heroSubtitle}>
            A soli <strong>300 metri dal Porto</strong> e a <strong>500 metri dalla Stazione Centrale</strong>. Nel quartiere storico della Marina, punto d'approdo privilegiato per chi viaggia in Sardegna. Reception presidiata 24 ore su 24, assistenza diretta e garanzia della miglior tariffa web senza intermediari.
          </p>

          {/* Action CTAs */}
          <div className={styles.ctaGroup}>
            <a href="#booking" className={`btn btn-primary ${styles.mainCta}`}>
              <i className="bi bi-calendar2-check" aria-hidden="true"></i>
              <span>Verifica Disponibilita & Tariffe</span>
            </a>

            <a
              href={`tel:${HOTEL_INFO.phones[0].callValue}`}
              className={`btn btn-secondary ${styles.phoneBtn}`}
              aria-label={`Chiama direttamente il ricevimento al numero ${HOTEL_INFO.phones[0].number}`}
            >
              <i className="bi bi-telephone-fill" aria-hidden="true"></i>
              <span>Chiama Ricevimento H24</span>
            </a>

            <a href="#contatti" className={`btn btn-outline-orange ${styles.contactBtn}`}>
              <i className="bi bi-envelope" aria-hidden="true"></i>
              <span>Invia Richiesta</span>
            </a>
          </div>

          {/* Rapid Contact Quick Bar */}
          <div className={styles.quickContactBar} aria-label="Canali veloci di assistenza">
            <div className={styles.quickContactItem}>
              <i className="bi bi-clock-history" aria-hidden="true"></i>
              <div>
                <strong>Check-in Flessibile H24</strong>
                <span>Nessun limite di orario per gli arrivi notturni</span>
              </div>
            </div>

            <div className={styles.quickContactItem}>
              <i className="bi bi-tsunami" aria-hidden="true"></i>
              <div>
                <strong>Convenzione Traghetti</strong>
                <span>Codice sconto marittimo con Traghetti Lines</span>
              </div>
            </div>

            <div className={styles.quickContactItem}>
              <i className="bi bi-shield-check" aria-hidden="true"></i>
              <div>
                <strong>Miglior Prezzo Garantito</strong>
                <span>Tariffa web diretta piu conveniente del web</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
