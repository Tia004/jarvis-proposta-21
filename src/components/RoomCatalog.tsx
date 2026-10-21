"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./RoomCatalog.module.css";
import { ROOMS, Room } from "@/data/roomData";
import RoomModal from "./RoomModal";

export default function RoomCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);
  const [statusAnnouncement, setStatusAnnouncement] = useState("");

  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter rooms
  const filteredRooms = ROOMS.filter(
    (room) => selectedCategory === "all" || room.category === selectedCategory
  );

  const totalSlides = filteredRooms.length;

  const nextSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay handler
  useEffect(() => {
    if (!isPlaying || totalSlides <= 1 || viewMode !== "slider") return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, totalSlides, viewMode, nextSlide]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Keyboard navigation for slider
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (viewMode !== "slider" || totalSlides <= 1) return;

    if (e.key === "ArrowRight") {
      nextSlide();
      setStatusAnnouncement(`Mostrata slide ${((currentIndex + 1) % totalSlides) + 1} di ${totalSlides}`);
    } else if (e.key === "ArrowLeft") {
      prevSlide();
      setStatusAnnouncement(`Mostrata slide ${((currentIndex - 1 + totalSlides) % totalSlides) + 1} di ${totalSlides}`);
    }
  };

  const currentRoom = filteredRooms[currentIndex];

  return (
    <section id="camere" className={styles.catalogSection} aria-labelledby="catalog-title">
      {statusAnnouncement && (
        <div className="sr-only" role="status" aria-live="polite">
          {statusAnnouncement}
        </div>
      )}

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Portfolio Camere & Suite</span>
          <h2 id="catalog-title" className="section-title">
            Ospitalita su Misura nel Cuore di Cagliari
          </h2>
          <p className="section-subtitle">
            Dalle suite con salottino privato alle doppie insonorizzate affacciate sulla Marina: ambienti accoglienti ristrutturati nel pieno rispetto della storicita dell'edificio.
          </p>
        </div>

        {/* Filter Controls and View Mode Switcher */}
        <div className={styles.controlsBar}>
          {/* Category Filter Pills */}
          <div className={styles.filterPills} role="tablist" aria-label="Filtra tipologie camere">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
              className={`${styles.filterBtn} ${selectedCategory === "all" ? styles.filterBtnActive : ""}`}
            >
              Tutte le Tipologie ({ROOMS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "suite"}
              onClick={() => setSelectedCategory("suite")}
              className={`${styles.filterBtn} ${selectedCategory === "suite" ? styles.filterBtnActive : ""}`}
            >
              Suite Marina
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "deluxe"}
              onClick={() => setSelectedCategory("deluxe")}
              className={`${styles.filterBtn} ${selectedCategory === "deluxe" ? styles.filterBtnActive : ""}`}
            >
              Deluxe Balcone
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "comfort"}
              onClick={() => setSelectedCategory("comfort")}
              className={`${styles.filterBtn} ${selectedCategory === "comfort" ? styles.filterBtnActive : ""}`}
            >
              Comfort Doppia
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "family"}
              onClick={() => setSelectedCategory("family")}
              className={`${styles.filterBtn} ${selectedCategory === "family" ? styles.filterBtnActive : ""}`}
            >
              Family Room
            </button>
          </div>

          {/* View Toggle */}
          <div className={styles.viewToggleGroup} aria-label="Modalita visualizzazione camere">
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              className={`${styles.viewToggleBtn} ${viewMode === "slider" ? styles.viewToggleBtnActive : ""}`}
              aria-label="Visualizzazione Slider controllabile"
              title="Slider Controllabile"
            >
              <i className="bi bi-sliders" aria-hidden="true"></i>
              <span className={styles.viewToggleText}>Slider</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`${styles.viewToggleBtn} ${viewMode === "grid" ? styles.viewToggleBtnActive : ""}`}
              aria-label="Visualizzazione Griglia comparativa"
              title="Griglia Comparativa"
            >
              <i className="bi bi-grid-3x3-gap" aria-hidden="true"></i>
              <span className={styles.viewToggleText}>Griglia</span>
            </button>
          </div>
        </div>

        {/* Empty State */}
        {totalSlides === 0 && (
          <div className={styles.emptyState} role="status">
            <i className="bi bi-search" aria-hidden="true"></i>
            <h3>Nessuna camera trovata</h3>
            <p>Non ci sono attualmente alloggi disponibili per la categoria selezionata.</p>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="btn btn-secondary btn-sm"
            >
              Mostra Tutte le Camere
            </button>
          </div>
        )}

        {/* 1. CONTROLLABLE SLIDER MODE */}
        {viewMode === "slider" && totalSlides > 0 && currentRoom && (
          <div
            ref={sliderRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className={styles.sliderContainer}
            aria-label="Slider interattivo camere: usa freccia destra e sinistra per cambiare camera"
          >
            {/* Slider Top Toolbar */}
            <div className={styles.sliderToolbar}>
              <div className={styles.slideCounterPill}>
                <span className={styles.slideCounterCurrent}>0{currentIndex + 1}</span>
                <span className={styles.slideCounterDivider}>/</span>
                <span className={styles.slideCounterTotal}>0{totalSlides}</span>
                <span className={styles.slideCounterLabel}>({currentRoom.categoryLabel})</span>
              </div>

              {/* Slider Controls */}
              <div className={styles.sliderActions}>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={styles.sliderControlBtn}
                  aria-label={isPlaying ? "Metti in pausa scorrimento automatico" : "Avvia scorrimento automatico"}
                  title={isPlaying ? "Pausa" : "Riproduci"}
                >
                  <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`} aria-hidden="true"></i>
                </button>

                <button
                  type="button"
                  onClick={prevSlide}
                  className={styles.sliderControlBtn}
                  aria-label="Camera precedente"
                >
                  <i className="bi bi-chevron-left" aria-hidden="true"></i>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className={styles.sliderControlBtn}
                  aria-label="Camera successiva"
                >
                  <i className="bi bi-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            {/* Showcase Stage */}
            <div className={styles.sliderStage}>
              <div className={styles.sliderImageCol}>
                <div className={styles.sliderImageWrapper}>
                  <Image
                    src={currentRoom.image}
                    alt={currentRoom.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className={styles.sliderImage}
                  />
                  <span className={styles.sliderTagBadge}>{currentRoom.tag}</span>
                </div>
              </div>

              <div className={styles.sliderInfoCol}>
                <div className={styles.categoryEyebrow}>{currentRoom.categoryLabel}</div>
                <h3 className={styles.sliderRoomTitle}>{currentRoom.name}</h3>

                <div className={styles.specsBadgeList}>
                  <span className={styles.specBadgeItem}>
                    <i className="bi bi-arrows-angle-expand" aria-hidden="true"></i>
                    {currentRoom.surface}
                  </span>
                  <span className={styles.specBadgeItem}>
                    <i className="bi bi-people" aria-hidden="true"></i>
                    {currentRoom.guests}
                  </span>
                  <span className={styles.specBadgeItem}>
                    <i className="bi bi-moon-stars" aria-hidden="true"></i>
                    {currentRoom.bedType}
                  </span>
                </div>

                <p className={styles.sliderRoomDesc}>{currentRoom.shortDescription}</p>

                {/* Highlights preview */}
                <div className={styles.highlightsPreview}>
                  {currentRoom.highlights.map((h, i) => (
                    <div key={i} className={styles.highlightMiniItem}>
                      <i className="bi bi-check2" aria-hidden="true"></i>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Price and Action Footer */}
                <div className={styles.sliderFooter}>
                  <div className={styles.sliderPriceBlock}>
                    <span className={styles.priceSubtext}>Tariffa diretta web da:</span>
                    <strong className={styles.priceAmount}>
                      € {currentRoom.priceFrom} <small>/ notte</small>
                    </strong>
                  </div>

                  <div className={styles.sliderBtnGroup}>
                    <button
                      type="button"
                      onClick={() => setActiveModalRoom(currentRoom)}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="bi bi-eye" aria-hidden="true"></i>
                      Dettagli Camera
                    </button>
                    <a
                      href="#booking"
                      className="btn btn-primary btn-sm"
                    >
                      <i className="bi bi-calendar-check" aria-hidden="true"></i>
                      Prenota Questa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Dots Indicator */}
            <div className={styles.dotsRow} role="tablist" aria-label="Indicatori slide camere">
              {filteredRooms.map((r, idx) => (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={currentIndex === idx}
                  aria-label={`Vai alla camera ${r.name}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`${styles.dotBtn} ${currentIndex === idx ? styles.dotBtnActive : ""}`}
                >
                  <span className="sr-only">{r.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. GRID COMPARISON MODE */}
        {viewMode === "grid" && totalSlides > 0 && (
          <div className={styles.roomsGrid}>
            {filteredRooms.map((room) => (
              <article key={room.id} className={styles.roomCard}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                  />
                  <span className={styles.cardTag}>{room.tag}</span>
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.cardCategory}>{room.categoryLabel}</span>
                  <h3 className={styles.cardTitle}>{room.name}</h3>

                  <div className={styles.cardSpecs}>
                    <span><i className="bi bi-arrows-angle-expand" aria-hidden="true"></i> {room.surface}</span>
                    <span><i className="bi bi-people" aria-hidden="true"></i> {room.guests}</span>
                  </div>

                  <p className={styles.cardDesc}>{room.shortDescription}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.cardPrice}>
                      <span className={styles.cardPriceLabel}>Da</span>
                      <strong className={styles.cardPriceVal}>€ {room.priceFrom}</strong>
                      <span className={styles.cardPricePeriod}>/ notte</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveModalRoom(room)}
                      className="btn btn-outline-orange btn-sm"
                    >
                      Dettagli
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Accessible Room Quick-View Modal */}
      <RoomModal
        room={activeModalRoom}
        onClose={() => setActiveModalRoom(null)}
      />
    </section>
  );
}
