import React from "react";
import styles from "./GuestExperienceTimeline.module.css";
import { GUEST_JOURNEY_STEPS } from "@/data/hotelData";

export default function GuestExperienceTimeline() {
  return (
    <section id="esperienza" className={styles.timelineSection} aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Processo di Accoglienza</span>
          <h2 id="experience-title" className="section-title">
            Come Si Svolge il Vostro Soggiorno
          </h2>
          <p className="section-subtitle">
            Dalla prima richiesta di disponibilita fino alla partenza: un'organizzazione trasparente e collaudata per assicurarvi massima tranquillita in ogni fase del viaggio.
          </p>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineTrack} aria-hidden="true" />

          <div className={styles.stepsGrid}>
            {GUEST_JOURNEY_STEPS.map((item) => (
              <div key={item.step} className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumberBadge}>0{item.step}</div>
                  <span className={styles.timeframe}>{item.timeframe}</span>
                </div>

                <div className={styles.iconCircle}>
                  <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                </div>

                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>

                <div className={styles.stepHighlight}>
                  <i className="bi bi-star-fill" aria-hidden="true"></i>
                  <span>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className={styles.guaranteeBox}>
          <div className={styles.guaranteeIcon}>
            <i className="bi bi-shield-check" aria-hidden="true"></i>
          </div>
          <div className={styles.guaranteeText}>
            <h4>Assistenza Diretta Senza Sovrapprezzi</h4>
            <p>
              Qualsiasi variazione di programma, ritardo dei traghetti o necessita speciale puo essere comunicata direttamente al ricevimento: rispondiamo tempestivamente 24 ore su 24 senza attese al centralino.
            </p>
          </div>
          <a href="#contatti" className="btn btn-primary btn-sm">
            <i className="bi bi-telephone-inbound" aria-hidden="true"></i>
            Contatta il Desk
          </a>
        </div>
      </div>
    </section>
  );
}
