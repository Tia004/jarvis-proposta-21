"use client";

import React, { useState, useId } from "react";
import styles from "./BookingBar.module.css";

export default function BookingBar() {
  const checkInId = useId();
  const checkOutId = useId();
  const roomsId = useId();
  const adultsId = useId();
  const childrenId = useId();
  const promoId = useId();

  // Initial defaults
  const today = new Date().toISOString().split("T")[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 2);
  const tomorrow = tomorrowDate.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  
  const [estimateResult, setEstimateResult] = useState<{
    nights: number;
    totalEstimated: number;
    discountApplied: boolean;
    promoText: string;
  } | null>(null);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();

    const dIn = new Date(checkIn);
    const dOut = new Date(checkOut);
    const diffTime = dOut.getTime() - dIn.getTime();
    const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    // Base average room rate for direct web bookings
    const baseRatePerNight = 95;
    let total = baseRatePerNight * nights * rooms;

    const normalizedPromo = promoCode.trim().toUpperCase();
    let discountApplied = false;
    let promoText = "";

    if (normalizedPromo === "TRAGHETTI" || normalizedPromo === "TRAGHETTI2026") {
      total = Math.round(total * 0.88); // 12% ferry discount
      discountApplied = true;
      promoText = "Sconto Convenzione Traghetti Lines applicato (-12%)";
    } else if (normalizedPromo === "DIRETTO" || normalizedPromo === "MARINA") {
      total = Math.round(total * 0.90); // 10% direct booking promo
      discountApplied = true;
      promoText = "Sconto Prenotazione Diretta Web applicato (-10%)";
    }

    setEstimateResult({
      nights,
      totalEstimated: total,
      discountApplied,
      promoText
    });
  };

  return (
    <section id="booking" className={styles.bookingSection} aria-labelledby="booking-title">
      <div className="container">
        <div className={styles.bookingCard}>
          <div className={styles.cardHeader}>
            <div className={styles.headerTitleWrap}>
              <span className={styles.headerTag}>
                <i className="bi bi-tag-fill" aria-hidden="true"></i>
                MIGLIOR PREZZO GARANTITO
              </span>
              <h2 id="booking-title" className={styles.headerTitle}>
                Preventivo Diretto & Verifica Disponibilita
              </h2>
            </div>
            <p className={styles.headerDescription}>
              Inserisci le date desiderate per calcolare la stima immediata della tariffa ufficiale, senza intermediari ne commissioni aggiuntive.
            </p>
          </div>

          <form onSubmit={calculateEstimate} className={styles.formGrid}>
            {/* Check-in */}
            <div className={styles.inputGroup}>
              <label htmlFor={checkInId} className={styles.label}>
                <i className="bi bi-calendar-event" aria-hidden="true"></i>
                Data di Arrivo
              </label>
              <input
                id={checkInId}
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className={styles.input}
              />
            </div>

            {/* Check-out */}
            <div className={styles.inputGroup}>
              <label htmlFor={checkOutId} className={styles.label}>
                <i className="bi bi-calendar-check" aria-hidden="true"></i>
                Data di Partenza
              </label>
              <input
                id={checkOutId}
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className={styles.input}
              />
            </div>

            {/* Rooms */}
            <div className={styles.inputGroup}>
              <label htmlFor={roomsId} className={styles.label}>
                <i className="bi bi-door-open" aria-hidden="true"></i>
                Camere
              </label>
              <select
                id={roomsId}
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className={styles.select}
              >
                <option value={1}>1 Camera</option>
                <option value={2}>2 Camere</option>
                <option value={3}>3 Camere</option>
                <option value={4}>4 Camere</option>
              </select>
            </div>

            {/* Adults */}
            <div className={styles.inputGroup}>
              <label htmlFor={adultsId} className={styles.label}>
                <i className="bi bi-people" aria-hidden="true"></i>
                Adulti
              </label>
              <select
                id={adultsId}
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className={styles.select}
              >
                <option value={1}>1 Adulto</option>
                <option value={2}>2 Adulti</option>
                <option value={3}>3 Adulti</option>
                <option value={4}>4 Adulti</option>
              </select>
            </div>

            {/* Children */}
            <div className={styles.inputGroup}>
              <label htmlFor={childrenId} className={styles.label}>
                <i className="bi bi-person" aria-hidden="true"></i>
                Bambini (0-12)
              </label>
              <select
                id={childrenId}
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className={styles.select}
              >
                <option value={0}>0 Bambini</option>
                <option value={1}>1 Bambino</option>
                <option value={2}>2 Bambini</option>
                <option value={3}>3 Bambini</option>
              </select>
            </div>

            {/* Promo Code */}
            <div className={styles.inputGroup}>
              <label htmlFor={promoId} className={styles.label}>
                <i className="bi bi-ticket-perforated" aria-hidden="true"></i>
                Codice Speciale / Ferry
              </label>
              <input
                id={promoId}
                type="text"
                placeholder="es. TRAGHETTI"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className={styles.input}
              />
            </div>

            {/* Submit button */}
            <div className={styles.btnWrapper}>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <i className="bi bi-calculator" aria-hidden="true"></i>
                <span>Calcola Preventivo</span>
              </button>
            </div>
          </form>

          {/* Dynamic feedback panel */}
          {estimateResult && (
            <div className={styles.resultBox} role="status" aria-live="polite">
              <div className={styles.resultHeader}>
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                <div>
                  <strong>Preventivo Diretto Stimato: € {estimateResult.totalEstimated}</strong>
                  <p>
                    Durata soggiorno: {estimateResult.nights} {estimateResult.nights === 1 ? "notte" : "notti"} · {rooms} {rooms === 1 ? "camera" : "camere"} per {adults} {adults === 1 ? "adulto" : "adulti"}
                    {children > 0 && ` e ${children} ${children === 1 ? "bambino" : "bambini"}`}
                  </p>
                </div>
              </div>

              {estimateResult.discountApplied && (
                <div className={styles.discountBadge}>
                  <i className="bi bi-percent" aria-hidden="true"></i> {estimateResult.promoText}
                </div>
              )}

              <div className={styles.resultActions}>
                <a href="#contatti" className="btn btn-primary btn-sm">
                  <i className="bi bi-envelope-paper" aria-hidden="true"></i>
                  Richiedi Conferma per Queste Date
                </a>
                <button
                  type="button"
                  onClick={() => setEstimateResult(null)}
                  className="btn btn-secondary btn-sm"
                >
                  Modifica Date
                </button>
              </div>

              <small className={styles.demoDisclaimer}>
                Nota dimostrativa: questa e una stima orientativa calcolata a scopo di proposta progettuale; non verra addebitato alcun costo e non vengono raccolti dati di pagamento.
              </small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
