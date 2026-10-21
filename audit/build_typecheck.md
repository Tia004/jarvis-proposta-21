# Audit Build & Typecheck - Next.js 15.5 App Router

- **Data esecuzione:** 2026-10-21T01:20:54.311Z
- **Framework:** Next.js 15.5.28 (React 19.0.0, TypeScript 5.7.3)
- **Modalita:** Prerendering statico (SSG) di tutte le route

## Esito Compilazione
Tutti i tipi TypeScript e i moduli CSS sono stati compilati con esito positivo (**zero errori, zero warning**).

```
> contatti-hotel-italia-cagliari-proposta-21@1.0.0 build
> next build

   ▲ Next.js 15.5.28

   Creating an optimized production build ...
 ✓ Compiled successfully in 1453ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10) 
   Generating static pages (4/10) 
   Generating static pages (7/10) 
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                    26.7 kB         133 kB
├ ○ /_not-found                            371 B         103 kB
├ ○ /accessibilita                         371 B         107 kB
├ ○ /cookie                                371 B         107 kB
├ ○ /privacy                               371 B         107 kB
├ ○ /robots.txt                            127 B         103 kB
├ ○ /sitemap.xml                           127 B         103 kB
└ ○ /termini                               371 B         107 kB
+ First Load JS shared by all             103 kB
  ├ chunks/255-b1e2483a7e02feee.js       46.6 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)  prerendered as static content
```

## Route Generate
- `/`: Home page onepage reattiva con catalogo camere, calcolatore tariffe, timeline, mappa e contatti.
- `/accessibilita`: Dichiarazione di conformita UNI CEI EN 301549 / WCAG 2.1 AA.
- `/privacy`: Bozza informativa trattamento dati personali (GDPR UE 2016/679).
- `/cookie`: Informativa estesa cookie e storage locale.
- `/termini`: Condizioni generali di soggiorno e cancellazione.
- `/_not-found`: Pagina 404 accessibile con link di navigazione rapida.
- `/sitemap.xml`: Mappa del sito dinamica per i motori di ricerca.
- `/robots.txt`: Direttive di crawling conformi.

**Verdetto:** PASSED
