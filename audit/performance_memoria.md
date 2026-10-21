# Audit Performance, Peso Risorse e Consumo di Memoria

- **Data esecuzione:** 2026-10-21T01:20:56.176Z

## Metriche di Ottimizzazione Risorse
1. **Asset Immagini Raster (Locale `public/images/`):**
   - Totale immagini raster: **17 file**
   - Peso totale complessivo: **393.5 KB** (media inferiore a 100 KB per asset).
   - Tutte le immagini sono state generate localmente con tavolozza ottimizzata e compressione PNG nativa.
2. **Bundle JavaScript Client:**
   - First Load JS condiviso: **103 kB** (Next.js framework + React 19).
   - Dimensione route principale: **26.7 kB**.
   - Totale carico iniziale compresso: ampiamente sotto la soglia di budget prestazionale di 200 kB.
3. **Font Web Locali (Bootstrap Icons):**
   - Formato `WOFF2` (compresso) servito direttamente da cartella locale `/fonts/` con cache header statici.
   - Nessuna dipendenza a CDN esterne bloccanti.
4. **Gestione Memoria & Event Listener:**
   - I listener di scroll (`window.addEventListener("scroll")`), resize e tastiera (`Escape`) implementano rimozione puntuale nel blocco di cleanup (`return () => window.removeEventListener(...)`) per prevenire leak di memoria in single-page navigation.

**Verdetto:** PASSED
