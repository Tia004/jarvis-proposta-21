"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieConsentBanner.module.css";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hotel_italia_cookie_consent");
    if (!saved) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = (type: "essential" | "all") => {
    localStorage.setItem("hotel_italia_cookie_consent", type);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className={styles.bannerWrapper}
      role="region"
      aria-label="Informativa sui Cookie e Consenso"
    >
      <div className={styles.bannerContent}>
        <div className={styles.iconBox}>
          <i className="bi bi-cookie" aria-hidden="true"></i>
        </div>

        <div className={styles.textBox}>
          <strong>Trasparenza Cookie & Privacy (GDPR UE 2016/679)</strong>
          <p>
            Questo sito dimostrativo utilizza esclusivamente <strong>cookie tecnici ed essenziali</strong> per il funzionamento della sessione e la memorizzazione delle preferenze. Nessun cookie di profilazione o tracciamento pubblicitario di terze parti viene rilasciato. Per maggiori dettagli consulta la nostra{" "}
            <Link href="/cookie" className={styles.cookieLink}>
              Cookie Policy
            </Link>.
          </p>
        </div>

        <div className={styles.buttonsGroup}>
          <button
            type="button"
            onClick={() => handleAccept("essential")}
            className={`btn btn-primary btn-sm ${styles.acceptBtn}`}
          >
            Accetta Solo Essenziali
          </button>
          <button
            type="button"
            onClick={() => handleAccept("all")}
            className="btn btn-secondary btn-sm"
          >
            Accetta Tutti
          </button>
        </div>
      </div>
    </div>
  );
}
