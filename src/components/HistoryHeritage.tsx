import React from "react";
import Image from "next/image";
import styles from "./HistoryHeritage.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export default function HistoryHeritage() {
  return (
    <section id="hotel" className={styles.heritageSection} aria-labelledby="heritage-title">
      <div className="container">
        <div className={styles.grid}>
          {/* Content Column */}
          <div className={styles.contentCol}>
            <span className={styles.eyebrow}>
              <i className="bi bi-clock-history" aria-hidden="true"></i> Dal 1928 a Cagliari
            </span>
            <h2 id="heritage-title" className={styles.title}>
              Un Secolo di Tradizione Ricettiva nel Cuore della Marina
            </h2>
            <p className={styles.lead}>
              Nato nel 1928 per accogliere i primi viaggiatori marittimi che sbarcavano nel porto di Cagliari, l'Hotel Italia e una delle strutture alberghiere piu storiche e rinomate del capoluogo sardo.
            </p>
            <p className={styles.paragraph}>
              Situato in Via Sardegna, tra gli aromi delle storiche trattorie e le antiche facciate ocra e terracotta, l'hotel ha saputo evolvere costantemente la propria ospitalita. I recenti interventi di valorizzazione hanno integrato tecnologie di insonorizzazione all'avanguardia, climatizzazione a basso impatto ambientale e percorsi privi di barriere architettoniche.
            </p>

            <blockquote className={styles.quoteBox}>
              <p>
                «Conservare l'autenticita della memoria marinara cagliaritana offrendo al contempo ai nostri ospiti il massimo comfort contemporaneo e un'accoglienza calorosa h24.»
              </p>
              <cite>— Direzione Hotel Italia Co.s.s.a.t. s.p.a.</cite>
            </blockquote>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>1928</span>
                <span className={styles.statLabel}>Anno di Fondazione</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>300 m</span>
                <span className={styles.statLabel}>Distanza dal Porto</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>24 h</span>
                <span className={styles.statLabel}>Reception Presidiata</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Prezzo Diretto Garantito</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className={styles.visualCol}>
            <div className={styles.visualCard}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/hero-hotel-italia.png"
                  alt="Particolare della facciata e dell'atmosfera accogliente di Hotel Italia Cagliari"
                  fill
                  sizes="(max-width: 900px) 100vw, 500px"
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
                <span className={styles.visualBadge}>
                  <i className="bi bi-geo-alt" aria-hidden="true"></i> Via Sardegna 31, Cagliari
                </span>
              </div>

              <div className={styles.cardFeatures}>
                <div className={styles.featureItem}>
                  <i className="bi bi-shield-check" aria-hidden="true"></i>
                  <div>
                    <strong>Riqualificazione Sostenibile</strong>
                    <small>Supportata da fondi PNRR e Fondo Resisto della Regione Sardegna.</small>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <i className="bi bi-universal-access" aria-hidden="true"></i>
                  <div>
                    <strong>Impegno per l'Accessibilita</strong>
                    <small>Percorsi e camere strutturati in conformita alle linee guida WCAG 2.1 AA.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
