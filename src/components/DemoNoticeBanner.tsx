import React from "react";
import styles from "./DemoNoticeBanner.module.css";

export default function DemoNoticeBanner() {
  return (
    <aside className={styles.banner} role="complementary" aria-label="Avviso Proposta Dimostrativa">
      <div className={styles.container}>
        <span className={styles.tag}>
          <i className="bi bi-info-circle" aria-hidden="true"></i>
          PROPOSTA INDIPENDENTE
        </span>
        <p className={styles.text}>
          Documento di proposta progettuale e dimostrazione tecnica non ufficiale per <strong>Hotel Italia Cagliari</strong>. Nessun dato reale raccolto.
        </p>
        <a href="#contatti" className={styles.link}>
          Dettagli Progetto <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </aside>
  );
}
