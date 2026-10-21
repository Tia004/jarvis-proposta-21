import React from "react";
import Image from "next/image";
import styles from "./ServicesGrid.module.css";
import { HOTEL_SERVICES } from "@/data/hotelData";

export default function ServicesGrid() {
  return (
    <section id="servizi" className={styles.servicesSection} aria-labelledby="services-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Studio & Dotazioni Alberghiere</span>
          <h2 id="services-title" className="section-title">
            Servizi Curati per un Soggiorno Perfetto
          </h2>
          <p className="section-subtitle">
            Dall'accoglienza continua senza vincoli di orario fino alla colazione tipica con prodotti della Sardegna: ogni dettaglio e pensato per rendere confortevole la vostra permanenza a Cagliari.
          </p>
        </div>

        {/* 8 Hotel Services Grid */}
        <div className={styles.grid}>
          {HOTEL_SERVICES.map((srv) => (
            <div key={srv.id} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <i className={`bi ${srv.icon}`} aria-hidden="true"></i>
                </div>
                {srv.badge && (
                  <span className={styles.badge}>{srv.badge}</span>
                )}
              </div>

              <h3 className={styles.cardTitle}>{srv.title}</h3>
              <span className={styles.cardSubtitle}>{srv.subtitle}</span>
              <p className={styles.cardDescription}>{srv.description}</p>
            </div>
          ))}
        </div>

        {/* Sardinian Breakfast Spotlight */}
        <div className={styles.breakfastSpotlight}>
          <div className={styles.spotlightImageWrapper}>
            <Image
              src="/images/colazione-sarda.png"
              alt="Buffet della prima colazione tipica sarda con dolci tradizionali e caffetteria espressa"
              fill
              sizes="(max-width: 900px) 100vw, 540px"
              className={styles.spotlightImage}
            />
            <span className={styles.spotlightTag}>Ogni Mattina 07:00 - 10:00</span>
          </div>

          <div className={styles.spotlightContent}>
            <span className={styles.spotlightEyebrow}>Esperienza Gastronomica del Mattino</span>
            <h3 className={styles.spotlightTitle}>Il Risveglio con i Sapori della Sardegna</h3>
            <p className={styles.spotlightText}>
              Iniziare la giornata all'Hotel Italia significa gustare la vera tradizione dolciaria sarda. Il nostro buffet offre quotidianamente pardulas fresche con ricotta e zafferano, sebadas aromatizzate al miele d'arancio, biscotti artigianali, pane carasau e un ricco assortimento di formaggi locali pecorini e salumi dell'isola.
            </p>

            <div className={styles.perksList}>
              <div className={styles.perkItem}>
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                <div>
                  <strong>Caffetteria Espressa Italiana</strong>
                  <small>Caffe, cappuccino e latte preparati al momento con miscele selezionate.</small>
                </div>
              </div>
              <div className={styles.perkItem}>
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                <div>
                  <strong>Attenzione a Intolleranze & Celiachia</strong>
                  <small>Prodotti biologici senza glutine e latte vegetale disponibili su richiesta.</small>
                </div>
              </div>
            </div>

            <div className={styles.spotlightCtaBox}>
              <a href="#booking" className="btn btn-outline-orange btn-sm">
                <i className="bi bi-calendar-check" aria-hidden="true"></i>
                Verifica Tariffe con Colazione Inclusa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
