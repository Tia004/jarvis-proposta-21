# Audit Responsive Layout (da 320px Mobile a 4K Ultra-HD)

- **Data esecuzione:** 2026-10-21T01:20:54.314Z
- **File verificati:** `src/styles/tokens.css`, `src/styles/globals.css`, CSS Modules

## Strategia di Adattamento
1. **Spaziatura e Tipografia Fluida (`clamp`):**
   - Tutti i titoli e i corpi testo utilizzano `clamp(min, preferred, max)` per scalare proporzionalmente senza salti improvvisi.
   - Esempi:
     - Hero title: `clamp(2rem, 5.5vw, 4.25rem)`
     - Sezione title: `clamp(1.75rem, 3.5vw, 2.75rem)`
     - Padding container: `clamp(1rem, 3vw, 2rem)`
2. **Breakpoints Chiave:**
   - Mobile XS (320px): padding contenuti ridotto a 1rem, layout a colonna singola, touch targets >= 44x44px.
   - Mobile Standard (375px - 480px): navbar compatta, slider touch/swipe.
   - Tablet (768px - 1024px): griglia a 2 colonne per camere e servizi.
   - Desktop (1200px - 1440px): max-width `1280px` per il container principale, layout a 3/4 colonne.
   - 4K / Ultra-Wide (2560px - 3840px): container centrato con padding laterale progressivo per impedire dispersione visiva delle linee di testo.
3. **Touch Targets e Usabilita Mobile:**
   - Tutti i pulsanti di controllo slider, chiusura modali e invio form garantiscono un'area minima di tocco di 48x48px conformemente a WCAG 2.5.5.

**Verdetto:** PASSED
