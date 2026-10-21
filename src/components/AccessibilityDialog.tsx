"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./AccessibilityDialog.module.css";

export default function AccessibilityDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Accessibility Trigger Button */}
      <aside aria-label="Accessibilita e conformita">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={styles.floatBtn}
          aria-label="Apri pannello informazioni accessibilita UNI CEI EN 301549"
          title="Accessibilita WCAG 2.1 AA"
        >
          <i className="bi bi-universal-access" aria-hidden="true"></i>
          <span className={styles.floatBtnText}>Accessibilita</span>
        </button>
      </aside>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-dialog-title"
        >
          <div className={styles.dialogCard}>
            <div className={styles.dialogHeader}>
              <div className={styles.titleWrap}>
                <i className="bi bi-universal-access-circle" aria-hidden="true"></i>
                <div>
                  <h3 id="a11y-dialog-title" className={styles.dialogTitle}>
                    Impegno per l'Accessibilita Web
                  </h3>
                  <span className={styles.dialogSubtitle}>
                    Conforme UNI CEI EN 301549 & WCAG 2.1 Livello AA
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={styles.closeBtn}
                aria-label="Chiudi finestra accessibilita"
              >
                <i className="bi bi-x-lg" aria-hidden="true"></i>
              </button>
            </div>

            <div className={styles.dialogBody}>
              <p>
                In conformita con la missione di garantire a ogni ospite pari dignita, comfort e indipendenza, questa proposta di redesign adotta i piu stringenti criteri di accessibilita digitale, risolvendo le criticita storicamente segnalate:
              </p>

              <ul className={styles.improvementsList}>
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true"></i>
                  <div>
                    <strong>Alternative Testuali Raster</strong>: Tutte le immagini dispongono di descrizioni testuali contestuali; eliminati tutti i file grafici SVG non accessibili.
                  </div>
                </li>
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true"></i>
                  <div>
                    <strong>Focus Visibile ad Alto Contrasto</strong>: Indicatore di focus a 3px solido con contrasto elevato superiore al rapporto 4.5:1.
                  </div>
                </li>
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true"></i>
                  <div>
                    <strong>Completa Operabilita da Tastiera</strong>: Menu drawer, slider delle camere, form e modali interamente gestibili tramite tasti Tab, Invio, Spazio ed Escape.
                  </div>
                </li>
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true"></i>
                  <div>
                    <strong>Controllo Movimento & Riduzione Animazioni</strong>: Supporto per la direttiva <code>prefers-reduced-motion</code> e controlli Play/Pausa su tutti gli scorrimenti.
                  </div>
                </li>
              </ul>

              <div className={styles.dialogFooter}>
                <Link
                  href="/accessibilita"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary btn-sm"
                >
                  <i className="bi bi-file-earmark-text" aria-hidden="true"></i>
                  Leggi la Dichiarazione Completa
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-secondary btn-sm"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
