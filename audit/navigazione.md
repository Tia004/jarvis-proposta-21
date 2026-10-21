# Audit Navigazione e Menu Mobile da Tastiera

- **Data esecuzione:** 2026-10-21T01:20:54.313Z
- **Componenti verificati:** `Navbar.tsx`, `layout.tsx`, `Navbar.module.css`

## Criteri Verificati
1. **Navigazione Sticky e Rilevamento Scroll:**
   - La navbar implementa `sticky: true` con `top: 0` e `z-index: 1000`.
   - All'attivazione dello scroll (>40px), la classe CSS applica sfondo pieno e ombreggiatura (`box-shadow: var(--shadow-sm)`).
2. **Skip to Main Content Link:**
   - Presente nel `layout.tsx` come primo elemento del DOM con `href="#main-content"`.
   - Accessibile via tabulazione con classe `.skipLink` conforme WCAG 2.4.1.
3. **Menu Mobile Drawer da Tastiera:**
   - Pulsante hamburger corredato da `aria-expanded`, `aria-controls="mobile-drawer"`, `aria-label`.
   - Gestione tasto **Escape**: chiude istantaneamente il drawer e ripristina il focus sull'hamburger toggle (`escapeHandler: true`).
   - Focus trap circolare: intercetta Tab / Shift+Tab all'interno del drawer per impedire la perdita del focus (`focusTrap: true`).
   - Blocco scroll (`document.body.style.overflow = "hidden"`) all'apertura del drawer per evitare scorrimenti accidentali dello sfondo.
4. **Ancore Fluide e Chiusura Automatica:**
   - I link di navigazione interna (`#camere`, `#servizi`, `#distanze`, `#team`, `#partner`, `#contatti`) chiudono automaticamente il drawer e portano al landmark corrispondente.

**Verdetto:** PASSED
