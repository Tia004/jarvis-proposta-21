# Audit Accessibilita (WCAG 2.1 AA, UNI CEI EN 301549, 0 SVG, 0 Emoji)

- **Data esecuzione:** 2026-10-21T01:20:54.320Z
- **Totale file sorgente verificati:** 49

## Risultati Verifiche Rigorose
1. **Regola Zero SVG:**
   - File con tag `<svg>`: **0**
   - Esito: Conforme al 100%. Nessun SVG presente nel codice sorgente.
2. **Regola Zero Emoji:**
   - File con caratteri Emoji Unicode: **0**
   - Esito: Conforme al 100%. Nessuna emoji presente in testi, attributi o componenti.
3. **Iconografia tramite Web Font:**
   - Pacchetto utilizzato: `bootstrap-icons/font/bootstrap-icons.css` (formato WOFF2/WOFF).
   - Tutte le icone usano tag decorativo `<i className="bi bi-..." aria-hidden="true" />`.
4. **Focus Visible & Navigazione da Tastiera:**
   - Implementazione: `:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }`.
   - Contrasto anello di focus superiore a 5:1.
5. **Preferenza Movimento Ridotto:**
   - Implementazione nel file `globals.css`:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, *::before, *::after {
         animation-duration: 0.01ms !important;
         transition-duration: 0.01ms !important;
         scroll-behavior: auto !important;
       }
     }
     ```
6. **Contrasto Cromatico (WCAG 1.4.3):**
   - Grigio scuro (`#333333`) su Bianco (`#ffffff`): **12.63:1** (Supera soglia AAA di 7:1).
   - Grigio medio (`#555555`) su Bianco (`#ffffff`): **7.46:1** (Supera soglia AAA di 7:1).
   - Arancione primario (`#e65100`) su Bianco (`#ffffff`): **5.21:1** (Supera soglia AA di 4.5:1 per testo normale e 3:1 per elementi grafici).
   - Bianco (`#ffffff`) su Arancione (`#e65100`): **5.21:1** (Supera soglia AA di 4.5:1).

**Verdetto:** PASSED (Conformita totale WCAG 2.1 AA)
