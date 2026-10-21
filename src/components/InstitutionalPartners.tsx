"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./InstitutionalPartners.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

interface PartnerItem {
  id: string;
  name: string;
  category: string;
  legalReference: string;
  image: string;
  description: string;
}

const PARTNERS: PartnerItem[] = [
  {
    id: "regione-sardegna",
    name: "Regione Autonoma della Sardegna",
    category: "Supporto Istituzionale e Regionale",
    legalReference: "Fondo (R)esisto - L.R. n. 22/2020",
    image: "/images/partner-regione-sardegna.png",
    description: "Sovvenzioni a favore delle imprese ex art. 14 della Legge Regionale n. 22/2020 per il sostegno e la continuita aziendale."
  },
  {
    id: "unione-europea",
    name: "Unione Europea - NextGenEU",
    category: "Fondi Europei di Sviluppo",
    legalReference: "NextGenerationEU",
    image: "/images/partner-unione-europea.png",
    description: "Sito e interventi realizzati con finanziamenti dell'Unione Europea a supporto della transizione digitale e sostenibile del turismo."
  },
  {
    id: "pnrr",
    name: "PNRR Turismo 4.2.5",
    category: "Piano Nazionale Ripresa e Resilienza",
    legalReference: "Missione 1, Componente 3, Inv. 4.2.5",
    image: "/images/partner-pnrr.png",
    description: "Riqualificazione, miglioramento tecnologico e potenziamento dell'accessibilita delle strutture ricettive alberghiere."
  },
  {
    id: "fondo-resisto",
    name: "Fondo Resisto",
    category: "Ampliamento Struttura Produttiva",
    legalReference: "Attuazione L.R. 22/2020",
    image: "/images/partner-fondo-resisto.png",
    description: "Misure regionali a supporto della tutela occupazionale e del rafforzamento delle capacita ricettive nell'isola."
  },
  {
    id: "traghetti-lines",
    name: "Convenzione Traghetti Lines",
    category: "Partner Collegamenti Marittimi",
    legalReference: "Accordo Ospitalita Sardegna",
    image: "/images/partner-traghetti-lines.png",
    description: "Accordo convenzionato per offrire tariffe agevolate sui traghetti per chi soggiorna presso Hotel Italia Cagliari."
  }
];

export default function InstitutionalPartners() {
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

  const totalPartners = PARTNERS.length;

  const nextPartner = useCallback(() => {
    setActivePartnerIndex((prev) => (prev + 1) % totalPartners);
  }, [totalPartners]);

  const prevPartner = useCallback(() => {
    setActivePartnerIndex((prev) => (prev - 1 + totalPartners) % totalPartners);
  }, [totalPartners]);

  useEffect(() => {
    if (!isCarouselPlaying) return;
    const timer = setInterval(() => {
      nextPartner();
    }, 5000);
    return () => clearInterval(timer);
  }, [isCarouselPlaying, nextPartner]);

  return (
    <section className={styles.partnersSection} aria-labelledby="partners-title">
      <div className="container">
        <div className={styles.sectionTop}>
          <div>
            <span className={styles.eyebrow}>Trasparenza Istituzionale & Partner</span>
            <h2 id="partners-title" className={styles.title}>
              Fondi Pubblici, Sovvenzioni & Accordi Verificati
            </h2>
            <p className={styles.subtitle}>
              Conformemente agli obblighi di trasparenza previsti dalla normativa e dal dossier aziendale di Hotel Italia Co.s.s.a.t. s.p.a.
            </p>
          </div>

          <div className={styles.controlsGroup}>
            <button
              type="button"
              onClick={() => setIsCarouselPlaying(!isCarouselPlaying)}
              className={styles.ctrlBtn}
              aria-label={isCarouselPlaying ? "Metti in pausa carosello partner" : "Avvia carosello partner"}
              title={isCarouselPlaying ? "Pausa" : "Riproduci"}
            >
              <i className={`bi ${isCarouselPlaying ? "bi-pause-fill" : "bi-play-fill"}`} aria-hidden="true"></i>
            </button>
            <button
              type="button"
              onClick={prevPartner}
              className={styles.ctrlBtn}
              aria-label="Partner precedente"
            >
              <i className="bi bi-chevron-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              onClick={nextPartner}
              className={styles.ctrlBtn}
              aria-label="Partner successivo"
            >
              <i className="bi bi-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Responsive Logo Grid with Active Carousel Spotlight */}
        <div className={styles.partnersGrid}>
          {PARTNERS.map((partner, idx) => (
            <div
              key={partner.id}
              className={`${styles.partnerCard} ${activePartnerIndex === idx ? styles.partnerCardActive : ""}`}
              onClick={() => setActivePartnerIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePartnerIndex(idx);
                }
              }}
              aria-label={`Dettaglio per ${partner.name}`}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={partner.image}
                  alt={`Badge autorizzato ${partner.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className={styles.logoImage}
                />
              </div>
              <div className={styles.cardInfo}>
                <strong className={styles.partnerName}>{partner.name}</strong>
                <span className={styles.partnerRef}>{partner.legalReference}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Highlight Box of Selected Partner */}
        <div className={styles.detailBox} role="region" aria-live="polite">
          <div className={styles.detailHeader}>
            <span className={styles.detailCategory}>{PARTNERS[activePartnerIndex].category}</span>
            <h3 className={styles.detailTitle}>{PARTNERS[activePartnerIndex].name}</h3>
          </div>
          <p className={styles.detailText}>{PARTNERS[activePartnerIndex].description}</p>
          <div className={styles.detailFooter}>
            <span className={styles.verifiedTag}>
              <i className="bi bi-patch-check" aria-hidden="true"></i> Fonte: Documento Ufficio Registro Imprese e Portale Co.s.s.a.t. s.p.a.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
