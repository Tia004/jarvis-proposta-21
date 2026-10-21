"use client";

import React, { useState } from "react";
import styles from "./FaqAccordion.module.css";
import { FAQ_ITEMS } from "@/data/hotelData";

export default function FaqAccordion() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-1", "faq-2"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.faqSection} aria-labelledby="faq-title">
      <div className="container container-narrow">
        <div className="section-header">
          <span className="section-eyebrow">Domande Frequenti</span>
          <h2 id="faq-title" className="section-title">
            Informazioni Utili per il Tuo Soggiorno
          </h2>
          <p className="section-subtitle">
            Tutto cio che c'e da sapere su arrivi, orari h24, convenzioni marittime e dotazioni per una vacanza senza pensieri.
          </p>
        </div>

        <div className={styles.accordionList}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div key={item.id} className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ""}`}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className={styles.accordionButton}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={styles.indicatorIcon} aria-hidden="true">
                      <i className={`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"}`} />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={styles.accordionPanel}
                >
                  <div className={styles.panelContent}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.supportBox}>
          <i className="bi bi-headset" aria-hidden="true"></i>
          <div>
            <strong>Hai una domanda specifica o una richiesta speciale?</strong>
            <p>Il ricevimento e attivo h24: risponderemo con piacere a ogni richiesta personalizzata.</p>
          </div>
          <a href="tel:+39070660410" className="btn btn-secondary btn-sm">
            Chiama Ora
          </a>
        </div>
      </div>
    </section>
  );
}
