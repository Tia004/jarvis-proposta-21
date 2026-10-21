import React from "react";
import Image from "next/image";
import styles from "./StrategicDistances.module.css";
import { STRATEGIC_DISTANCES } from "@/data/hotelData";

export default function StrategicDistances() {
  return (
    <section id="distanze" className={styles.distanceSection} aria-labelledby="distances-title">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Posizione & Collegamenti</span>
          <h2 id="distances-title" className="section-title">
            Nel Cuore della Marina: A Pochi Passi dal Porto
          </h2>
          <p className="section-subtitle">
            La nostra posizione in Via Sardegna 31 permette di raggiungere a piedi moli, stazione ferroviaria e monumenti storici senza necessita di taxi.
          </p>
        </div>

        <div className={styles.mainGrid}>
          {/* Distance Cards Matrix */}
          <div className={styles.matrixCol}>
            <div className={styles.distanceList}>
              {STRATEGIC_DISTANCES.map((item, index) => (
                <div key={index} className={styles.distanceCard}>
                  <div className={styles.iconWrapper}>
                    <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.placeTitle}>{item.place}</h3>
                      <span className={styles.timeBadge}>{item.duration}</span>
                    </div>
                    <div className={styles.metaRow}>
                      <span className={styles.distanceMetric}>
                        <i className="bi bi-rulers" aria-hidden="true"></i> {item.distance}
                      </span>
                      <span className={styles.modeMetric}>
                        <i className="bi bi-signpost-2" aria-hidden="true"></i> {item.mode}
                      </span>
                    </div>
                    <p className={styles.placeNote}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* District Spotlight Visual */}
          <div className={styles.visualCol}>
            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/cagliari-marina.png"
                  alt="Scorcio caratteristico delle vie colorate del quartiere Marina a Cagliari"
                  fill
                  sizes="(max-width: 900px) 100vw, 500px"
                  className={styles.image}
                />
                <span className={styles.imageTag}>Quartiere Storico Marina</span>
              </div>

              <div className={styles.cardBody}>
                <h4>Un Borgo Marinaro Vivo e Autentico</h4>
                <p>
                  Fondata dai pisani nel XIII secolo, la Marina e oggi il quartiere piu vivace ed eclettico di Cagliari. A ridosso del porto e di Via Roma, ospita trattorie storiche, botteghe artigiane e piazzette ombreggiate da alberi secolari.
                </p>

                <div className={styles.tipsBox}>
                  <strong>
                    <i className="bi bi-info-circle" aria-hidden="true"></i> Per chi viaggia in traghetto:
                  </strong>
                  <p>
                    All'arrivo al Molo Sanita o al Porto Storico non serve chiamare un taxi: uscite dalla banchina, attraversate i portici di Via Roma ed entrate in Via Sardegna. Sarete in camera in meno di 3 minuti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
