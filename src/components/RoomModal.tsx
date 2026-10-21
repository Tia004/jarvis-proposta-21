"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./RoomModal.module.css";
import { Room } from "@/data/roomData";

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!room) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [room, onClose]);

  if (!room) return null;

  return (
    <div
      className={styles.modalBackdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-room-title"
    >
      <div ref={modalRef} className={styles.modalCard}>
        {/* Modal Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className={styles.closeBtn}
          aria-label="Chiudi finestra dettagli camera"
        >
          <i className="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        {/* Modal Media */}
        <div className={styles.imageWrapper}>
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className={styles.image}
          />
          <span className={styles.imageBadge}>{room.tag}</span>
        </div>

        {/* Modal Body */}
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.category}>{room.categoryLabel}</span>
            <h3 id="modal-room-title" className={styles.title}>{room.name}</h3>
            <div className={styles.specsRow}>
              <span><i className="bi bi-arrows-angle-expand" aria-hidden="true"></i> {room.surface}</span>
              <span><i className="bi bi-people" aria-hidden="true"></i> {room.guests}</span>
              <span><i className="bi bi-moon-stars" aria-hidden="true"></i> {room.bedType}</span>
            </div>
          </div>

          <p className={styles.description}>{room.fullDescription}</p>

          {/* Highlights */}
          <div className={styles.sectionBlock}>
            <h4 className={styles.blockTitle}>Punti di Forza:</h4>
            <ul className={styles.highlightsList}>
              {room.highlights.map((h, i) => (
                <li key={i}>
                  <i className="bi bi-check2-circle" aria-hidden="true"></i>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities checklist */}
          <div className={styles.sectionBlock}>
            <h4 className={styles.blockTitle}>Dotazioni e Comfort Inclusi:</h4>
            <div className={styles.amenitiesGrid}>
              {room.amenities.map((a, i) => (
                <div key={i} className={styles.amenityItem}>
                  <i className="bi bi-check" aria-hidden="true"></i>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className={styles.footer}>
            <div className={styles.priceBox}>
              <span className={styles.priceLabel}>Tariffa diretta da:</span>
              <strong className={styles.priceVal}>€ {room.priceFrom} <small>/ notte</small></strong>
            </div>

            <div className={styles.actionBtns}>
              <a
                href="#contatti"
                onClick={onClose}
                className="btn btn-primary"
              >
                <i className="bi bi-calendar-plus" aria-hidden="true"></i>
                Richiedi Disponibilita
              </a>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
