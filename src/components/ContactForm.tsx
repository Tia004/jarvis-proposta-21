"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import styles from "./ContactForm.module.css";
import { HOTEL_INFO } from "@/data/hotelData";

export default function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const roomId = useId();
  const checkInId = useId();
  const checkOutId = useId();
  const messageId = useId();
  const privacyId = useId();
  const marketingId = useId();
  const newsletterEmailId = useId();
  const newsletterPrivacyId = useId();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "general",
    checkIn: "",
    checkOut: "",
    message: "",
    privacyAccepted: false,
    marketingAccepted: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterPrivacy, setNewsletterPrivacy] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  const phoneRegex = /^[+]?[(]?[0-9]{2,4}[)]?[-\s./0-9]{6,15}$/;

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errs.name = "Inserisci nome e cognome validi (almeno 3 caratteri).";
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Inserisci un indirizzo email valido nel formato standard (es. nome@dominio.it).";
    }

    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errs.phone = "Inserisci un recapito telefonico numerico valido (es. +39 070 660410).";
    }

    if (formData.checkIn && formData.checkOut) {
      const d1 = new Date(formData.checkIn);
      const d2 = new Date(formData.checkOut);
      if (d2 <= d1) {
        errs.checkOut = "La data di partenza deve essere successiva alla data di arrivo.";
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Inserisci un messaggio dettagliato di almeno 10 caratteri.";
    }

    if (formData.message.length > 500) {
      errs.message = "Il messaggio non puo superare i 500 caratteri.";
    }

    if (!formData.privacyAccepted) {
      errs.privacyAccepted = "E obbligatorio confermare la presa visione dell'informativa sulla privacy.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam Honeypot Check
    if (formData.honeypot) {
      console.warn("Spam bot intercettato tramite honeypot.");
      setIsSubmitted(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    // Safe simulated submission without transmitting real data
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !emailRegex.test(newsletterEmail.trim())) {
      setNewsletterError("Inserisci un'email valida per la newsletter.");
      return;
    }
    if (!newsletterPrivacy) {
      setNewsletterError("Conferma il consenso alla privacy per iscriverti.");
      return;
    }
    setNewsletterError("");
    setNewsletterSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      roomType: "general",
      checkIn: "",
      checkOut: "",
      message: "",
      privacyAccepted: false,
      marketingAccepted: false,
      honeypot: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contatti" className={styles.contactSection} aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Contatti & Canali di Assistenza</span>
          <h2 id="contact-heading" className="section-title">
            Contatta l'Hotel Italia a Cagliari
          </h2>
          <p className="section-subtitle">
            Scrivici per qualsiasi informazione, richiesta speciale di soggiorno, preventivi per gruppi o convenzioni marittime. La reception e a tua disposizione h24.
          </p>
        </div>

        <div className={styles.mainGrid}>
          {/* Form Column */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <div className={styles.formCardHeader}>
                <h3 className={styles.formTitle}>Modulo Richiesta Informazioni & Soggiorno</h3>
                <p className={styles.formSub}>
                  I campi contrassegnati con l'asterisco (*) sono obbligatori.
                </p>
              </div>

              {isSubmitted ? (
                <div className={styles.successMessage} role="alert" aria-live="polite">
                  <div className={styles.successIcon}>
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  </div>
                  <h4>Richiesta Dimostrativa Registrata con Successo</h4>
                  <p>
                    Grazie <strong>{formData.name}</strong>. Il modulo e stato validato secondo i requisiti del progetto.
                  </p>
                  <p className={styles.securityNote}>
                    <i className="bi bi-shield-check" aria-hidden="true"></i>
                    <strong>Nessun dato reale inviato:</strong> In osservanza alle linee guida di proposta dimostrativa indipendente, questo form non esegue invii reali verso server esterni ne verso le caselle dell'albergo.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-secondary btn-sm"
                  >
                    Invia un Altro Messaggio di Prova
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className={styles.form}>
                  {/* Honeypot Anti-Spam Field */}
                  <div className={styles.honeypotWrapper} aria-hidden="true">
                    <label htmlFor="website-trap">Non compilare questo campo</label>
                    <input
                      id="website-trap"
                      type="text"
                      name="website-trap"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Name and Surname */}
                  <div className={styles.formGroup}>
                    <label htmlFor={nameId} className={styles.label}>
                      Nome e Cognome *
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${nameId}-error` : undefined}
                      placeholder="es. Mario Rossi"
                      className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                    />
                    {errors.name && (
                      <span id={`${nameId}-error`} className={styles.errorText} role="alert">
                        <i className="bi bi-exclamation-circle" aria-hidden="true"></i> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className={styles.twoCols}>
                    <div className={styles.formGroup}>
                      <label htmlFor={emailId} className={styles.label}>
                        Indirizzo Email *
                      </label>
                      <input
                        id={emailId}
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? `${emailId}-error` : undefined}
                        placeholder="mario.rossi@esempio.it"
                        className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                      />
                      {errors.email && (
                        <span id={`${emailId}-error`} className={styles.errorText} role="alert">
                          <i className="bi bi-exclamation-circle" aria-hidden="true"></i> {errors.email}
                        </span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor={phoneId} className={styles.label}>
                        Recapito Telefonico *
                      </label>
                      <input
                        id={phoneId}
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? `${phoneId}-error` : undefined}
                        placeholder="es. +39 340 1234567"
                        className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                      />
                      {errors.phone && (
                        <span id={`${phoneId}-error`} className={styles.errorText} role="alert">
                          <i className="bi bi-exclamation-circle" aria-hidden="true"></i> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Room Selection & Dates */}
                  <div className={styles.formGroup}>
                    <label htmlFor={roomId} className={styles.label}>
                      Tipologia Camera Desiderata
                    </label>
                    <select
                      id={roomId}
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className={styles.select}
                    >
                      <option value="general">Richiesta Informazioni Generali</option>
                      <option value="suite">Suite Marina Storica (da € 135/notte)</option>
                      <option value="deluxe">Deluxe Balcone Marina (da € 105/notte)</option>
                      <option value="comfort">Comfort Doppia Matrimoniale (da € 85/notte)</option>
                      <option value="family">Family Room Comunicante (da € 130/notte)</option>
                    </select>
                  </div>

                  <div className={styles.twoCols}>
                    <div className={styles.formGroup}>
                      <label htmlFor={checkInId} className={styles.label}>
                        Data di Arrivo (Opzionale)
                      </label>
                      <input
                        id={checkInId}
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor={checkOutId} className={styles.label}>
                        Data di Partenza (Opzionale)
                      </label>
                      <input
                        id={checkOutId}
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        aria-invalid={!!errors.checkOut}
                        aria-describedby={errors.checkOut ? `${checkOutId}-error` : undefined}
                        className={`${styles.input} ${errors.checkOut ? styles.inputError : ""}`}
                      />
                      {errors.checkOut && (
                        <span id={`${checkOutId}-error`} className={styles.errorText} role="alert">
                          <i className="bi bi-exclamation-circle" aria-hidden="true"></i> {errors.checkOut}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <div className={styles.labelRow}>
                      <label htmlFor={messageId} className={styles.label}>
                        Messaggio o Richieste Speciali *
                      </label>
                      <span className={styles.charCount}>
                        {formData.message.length} / 500 caratteri
                      </span>
                    </div>
                    <textarea
                      id={messageId}
                      rows={4}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? `${messageId}-error` : undefined}
                      placeholder="Indica esigenze alimentari, orari stimati di arrivo dei traghetti o richieste di culla..."
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                    />
                    {errors.message && (
                      <span id={`${messageId}-error`} className={styles.errorText} role="alert">
                        <i className="bi bi-exclamation-circle" aria-hidden="true"></i> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Consents Checkboxes */}
                  <div className={styles.checkboxGroup}>
                    <label htmlFor={privacyId} className={styles.checkboxLabel}>
                      <input
                        id={privacyId}
                        type="checkbox"
                        checked={formData.privacyAccepted}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        className={styles.checkbox}
                        aria-required="true"
                      />
                      <span>
                        Ho letto e accetto l'<Link href="/privacy" className={styles.legalLink}>informativa sulla privacy</Link> (Regolamento UE 2016/679) *
                      </span>
                    </label>
                    {errors.privacyAccepted && (
                      <span className={styles.errorText} role="alert">
                        <i className="bi bi-exclamation-circle" aria-hidden="true"></i> {errors.privacyAccepted}
                      </span>
                    )}

                    <label htmlFor={marketingId} className={styles.checkboxLabel}>
                      <input
                        id={marketingId}
                        type="checkbox"
                        checked={formData.marketingAccepted}
                        onChange={(e) => setFormData({ ...formData, marketingAccepted: e.target.checked })}
                        className={styles.checkbox}
                      />
                      <span>
                        Acconsento al trattamento dei dati come risultante dell'informativa privacy per le finalita di invio di materiale promozionale ed offerte speciali (Facoltativo).
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`btn btn-primary ${styles.submitBtn}`}
                  >
                    {submitting ? (
                      <>
                        <i className="bi bi-arrow-repeat" aria-hidden="true"></i>
                        <span>Elaborazione in corso...</span>
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send" aria-hidden="true"></i>
                        <span>Invia Richiesta al Ricevimento</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Newsletter Column */}
          <div className={styles.infoCol}>
            {/* Direct Cards */}
            <div className={styles.directCard}>
              <h3 className={styles.directTitle}>Recapiti Ufficiali Verificati</h3>
              <p className={styles.directSub}>
                Hotel Italia Co.s.s.a.t. s.p.a. · Quartiere Storico Marina
              </p>

              <div className={styles.channelList}>
                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                  </div>
                  <div>
                    <strong>Sede & Ricevimento:</strong>
                    <p>Via Sardegna, 31 · 09124 Cagliari (CA)</p>
                    <small>A 300 metri dal Porto / 500m dalla Stazione</small>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                  </div>
                  <div>
                    <strong>Centralino & Ricevimento H24:</strong>
                    <p>
                      <a href={`tel:${HOTEL_INFO.phones[0].callValue}`}>{HOTEL_INFO.phones[0].number}</a>
                    </p>
                    <p>
                      <a href={`tel:${HOTEL_INFO.phones[1].callValue}`}>{HOTEL_INFO.phones[1].number}</a>
                    </p>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                  </div>
                  <div>
                    <strong>Posta Elettronica Ufficiale:</strong>
                    <ul className={styles.mailList}>
                      <li>
                        <span>Prenotazioni: </span>
                        <a href="mailto:info@hotelitaliacagliari.com">info@hotelitaliacagliari.com</a>
                      </li>
                      <li>
                        <span>Direzione: </span>
                        <a href="mailto:direzione@hotelitaliacagliari.com">direzione@hotelitaliacagliari.com</a>
                      </li>
                      <li>
                        <span>Sales & Mktg: </span>
                        <a href="mailto:sales@hotelitaliacagliari.com">sales@hotelitaliacagliari.com</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <i className="bi bi-chat-square-text" aria-hidden="true"></i>
                  </div>
                  <div>
                    <strong>Contatto Skype:</strong>
                    <p>hotelitalia3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Box (from BRIEF.json) */}
            <div className={styles.newsletterCard}>
              <h4 className={styles.newsletterTitle}>
                <i className="bi bi-envelope-paper" aria-hidden="true"></i>
                Newsletter Hotel Italia
              </h4>
              <p className={styles.newsletterText}>
                Iscriviti alla Newsletter ed entra nel mondo dell'Hotel Italia per ricevere aggiornamenti su eventi a Cagliari e tariffe esclusive.
              </p>

              {newsletterSubmitted ? (
                <div className={styles.newsletterSuccess} role="status">
                  <i className="bi bi-check2-circle" aria-hidden="true"></i>
                  <span>Iscrizione registrata (simulazione dimostrativa).</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                  <div className={styles.newsletterInputWrap}>
                    <input
                      id={newsletterEmailId}
                      type="email"
                      placeholder="La tua email..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className={styles.newsletterInput}
                      aria-label="Email per iscrizione alla newsletter"
                    />
                    <button type="submit" className="btn btn-primary btn-sm">
                      Iscriviti
                    </button>
                  </div>

                  <label htmlFor={newsletterPrivacyId} className={styles.newsletterPrivacyLabel}>
                    <input
                      id={newsletterPrivacyId}
                      type="checkbox"
                      checked={newsletterPrivacy}
                      onChange={(e) => setNewsletterPrivacy(e.target.checked)}
                      className={styles.checkbox}
                    />
                    <span>Ho letto e accetto l'informativa sulla privacy *</span>
                  </label>

                  {newsletterError && (
                    <span className={styles.newsletterError} role="alert">
                      <i className="bi bi-exclamation-circle" aria-hidden="true"></i> {newsletterError}
                    </span>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
