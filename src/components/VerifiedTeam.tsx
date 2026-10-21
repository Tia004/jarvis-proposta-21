import React from "react";
import Image from "next/image";
import styles from "./VerifiedTeam.module.css";
import { OPERATIONAL_DEPARTMENTS } from "@/data/hotelData";

export default function VerifiedTeam() {
  return (
    <section id="reparti" className={styles.teamSection} aria-labelledby="team-title">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Reparti Operativi & Assistenza</span>
          <h2 id="team-title" className="section-title">
            Canali Verificati di Contatto e Accoglienza
          </h2>
          <p className="section-subtitle">
            Ciascun reparto di Hotel Italia Co.s.s.a.t. s.p.a. e a disposizione con recapiti dedicati per garantirvi risposte rapide ed esaustive prima, durante e dopo il vostro arrivo a Cagliari.
          </p>
        </div>

        {/* 4 Departments Grid */}
        <div className={styles.grid}>
          {OPERATIONAL_DEPARTMENTS.map((dept) => (
            <article key={dept.id} className={styles.deptCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={dept.image}
                  alt={`Silhouette rappresentativa del reparto ${dept.name} di Hotel Italia`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.image}
                />
                <span className={styles.hoursBadge}>
                  <i className="bi bi-clock" aria-hidden="true"></i> {dept.hours}
                </span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.deptName}>{dept.name}</h3>
                <span className={styles.deptRole}>{dept.role}</span>
                <p className={styles.deptDesc}>{dept.description}</p>

                {/* Capabilities list */}
                <div className={styles.capabilitiesBlock}>
                  <strong className={styles.capTitle}>Presidi Operativi:</strong>
                  <ul className={styles.capList}>
                    {dept.capabilities.map((c, i) => (
                      <li key={i}>
                        <i className="bi bi-check" aria-hidden="true"></i>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact links */}
                <div className={styles.contactRow}>
                  <a
                    href={`mailto:${dept.email}`}
                    className={styles.mailLink}
                    aria-label={`Scrivi al reparto ${dept.name}: ${dept.email}`}
                  >
                    <i className="bi bi-envelope" aria-hidden="true"></i>
                    <span>{dept.email}</span>
                  </a>
                  <a
                    href={`tel:${dept.phone.replace(/\s+/g, "")}`}
                    className={styles.phoneLink}
                    aria-label={`Telefona al reparto ${dept.name}: ${dept.phone}`}
                  >
                    <i className="bi bi-telephone" aria-hidden="true"></i>
                    <span>{dept.phone}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Deontological Transparency Note */}
        <div className={styles.transparencyNote} role="note">
          <div className={styles.noteIcon}>
            <i className="bi bi-shield-lock" aria-hidden="true"></i>
          </div>
          <div className={styles.noteContent}>
            <strong>Nota Deontologica di Trasparenza Aziendale</strong>
            <p>
              In conformita con i rigorosi standard professionali e di protezione dei dati, la presente proposta non espone nominativi o ritratti fotografici personali non espressamente autorizzati da Hotel Italia Co.s.s.a.t. s.p.a., presentando con precisione i soli reparti di servizio effettivi e i rispettivi canali di posta e telefonia verificati pubblicamente nel dossier ufficiale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
