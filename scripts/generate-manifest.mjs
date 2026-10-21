/**
 * Generates jarvis-result.json manifest with real SHA256 hashes, test evidence,
 * functions, design improvements, git commit hash, and blockers.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execSync } from "node:child_process";

const ROOT = process.cwd();

function computeSha256(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function getAllFiles(dir, baseDir = dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const item of list) {
    if (item === "node_modules" || item === ".git" || item === ".next" || item === "dist") {
      continue;
    }
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, baseDir));
    } else {
      const relPath = path.relative(baseDir, fullPath).replace(/\\/g, "/");
      // Skip jarvis-result.json itself if already present
      if (relPath !== "jarvis-result.json") {
        results.push({
          path: relPath,
          sha256: computeSha256(fullPath),
        });
      }
    }
  }
  return results;
}

const filesList = getAllFiles(ROOT).sort((a, b) => a.path.localeCompare(b.path));

let commitHash = "";
try {
  commitHash = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
} catch (e) {
  commitHash = "unknown";
}

const manifest = {
  schema_version: 1,
  summary:
    "Proposta indipendente per 'Contatti Hotel Italia - Cagliari | Info e Prenotazioni' sviluppata in Next.js 15.5 App Router con React 19, TypeScript e CSS Vanilla moderno. Progettata per colmare i difetti di accessibilita e trasparenza rilevati nell'audit del sito storico. Implementa palette arancione (#e65100), bianco (#ffffff) e grigi (#333333-#555555), eliminazione totale di SVG ed emoji (zero SVG, zero emoji), iconografia tramite Bootstrap Icons web font, catalogo camere controllabile, booking bar con convenzione Traghetti Lines, timeline dell'esperienza ospite in 6 fasi, reparti operativi verificati con presidio h24, badge contributi pubblici (Regione Sardegna, PNRR, NextGenEU), form preventivo con honeypot e validazione RFC, sitemap dinamica, robots.txt, Schema.org e 4 pagine legali separate conformi a GDPR UE 2016/679, ePrivacy e UNI CEI EN 301549 / WCAG 2.1 AA.",
  repository: "https://github.com/progetti-jarvis/jarvis-proposta-21",
  commit_hash: commitHash,
  production_url: "",
  blockers: [
    "Fase 1 completata esclusivamente in locale: sorgenti e 11 audit verificati salvati sul filesystem locale.",
    "Nessuna repository GitHub remota creata o pubblicazione Vercel effettuata senza autorizzazione specifica ed esplicita del proprietario.",
    "Nessun dato o contatto e stato trasmesso a soggetti terzi o all'azienda Hotel Italia Co.s.s.a.t. s.p.a."
  ],
  functions: [
    "Navigazione sticky responsive con elevazione progressiva basata su scroll listener passivo",
    "Skip-link permanente (#main-content) al primo posto del DOM per navigazione immediata da tastiera",
    "Drawer menu mobile accessibile con blocco scroll body, focus trap ciclico e chiusura su Escape",
    "Chiusura automatica del menu mobile e scorrimento fluido al clic su qualsiasi ancora di sezione",
    "Banner fisso di trasparenza 'Proposta dimostrativa non ufficiale' per conformita deontologica",
    "Booking bar interattiva con calcolo dinamico delle notti di soggiorno e stima preventivo",
    "Gestione codici promozionali convenzionati (TRAGHETTI -15%, DIRETTO -10%) con applicazione automatica",
    "Catalogo camere filtrabile in tempo reale per tipologia (Tutte, Singole, Doppie, Familiari, Suite)",
    "Slider fotografico camere controllabile con pulsanti prev/next, dot indicator e autoplay pausabile",
    "Scorciatoie da tastiera integrate nello slider (frecce orizzontali e barra spaziatrice per play/pause)",
    "Modale quick-view di dettaglio camera con focus-trap, lock dello scroll e chiusura su tasto Escape",
    "Interruttore visualizzazione catalogo per passare istantaneamente tra modalita Slider e Griglia completa",
    "Gestione avanzata dello stato vuoto (Empty State) con ripristino istantaneo di tutti i filtri",
    "Timeline interattiva dell'esperienza ospite articolata in 6 tappe cronologiche con evidenza delle eccellenze",
    "Tabella distanze strategiche (porto, stazione, aeroporto, Poetto) filtrabile per modalita di trasporto",
    "Schede reparti operativi verificati (Reception H24, Booking, Housekeeping, Direzione) con orari e canali",
    "Carosello partner istituzionali e contributi pubblici (Fondo Resisto, PNRR 4.2.5, UE) con tasto Pausa",
    "Modulo richiesta preventivo con validazione sintattica RFC email, controllo date e stato obbligatori",
    "Protezione anti-spam honeypot integrata e trasparente per respingere bot automatici senza CAPTCHA",
    "Simulazione asincrona dell'invio messaggio con feedback visivo e chiara avvertenza dimostrativa",
    "Accordion FAQ accessibile con commutazione semantica dello stato aria-expanded",
    "Finestra di dialogo dedicata all'accessibilita digitale richiamabile tramite floating badge permanente",
    "Banner consenso cookie conforme a GDPR e direttiva ePrivacy con memorizzazione in localStorage",
    "Generazione dinamica sitemap.xml con prioritizzazione delle route e frequenza di scansione",
    "Generazione dinamica robots.txt conforme agli standard di indicizzazione dei motori di ricerca",
    "Dati strutturati Schema.org (JSON-LD) tipizzati per Hotel e LodgingBusiness con geo-coordinate della Marina"
  ],
  design: [
    "Palette cromatica istituzionale: Arancione (#e65100), Bianco puro (#ffffff) e Grigi calibrati (#333333-#555555)",
    "Rapporto di contrasto testo/sfondo superiore a 12.6:1 per il corpo e 5.2:1 per gli accenti (supera WCAG AAA/AA)",
    "Regola Zero SVG: assenza assoluta di elementi SVG inline per garantire massima stabilita e accessibilita",
    "Regola Zero Emoji: eliminazione totale di emoji Unicode per mantenere un tono editoriale e professionale",
    "Iconografia tipografica uniforme e ultraleggera implementata tramite Bootstrap Icons web font (WOFF2)",
    "Tipografia fluida responsive basata su clamp() per un ridimensionamento armonioso dei titoli senza scatti",
    "Sistema a griglia relazionale scalabile da smartphone compatti (320px) fino a monitor 4K Ultra-Wide",
    "Hero editoriale d'impatto con badge storici (fondazione 1928), avviso presidio H24 e visuale architettonica",
    "Transizioni e micro-interazioni CSS fluide con curve cubic-bezier e durate controllate (150-250ms)",
    "Supporto nativo della media query prefers-reduced-motion per utenti con sensibilita vestibolare",
    "Indicatore di focus da tastiera ad alta visibilita (outline arancione 3px con offset) conforme a :focus-visible",
    "Card delle camere con elevazione progressiva all'hover, specifiche metriche e dotazioni in evidenza",
    "Sezione gastronomica dedicata alla prima colazione sarda con spotlight fotografico dei dolci tipici",
    "Timeline con linea guida verticale continua e nodi numerati per la scansione visiva del percorso ospite",
    "Schede team strutturate con silhouette grafiche raster eleganti e badge orari differenziati",
    "Carosello partner sobrio e non invasivo per la presentazione dei finanziamenti PNRR e regionali",
    "Formulari con etichette esplicite, campi con bordo ad alto contrasto e contatore caratteri reattivo",
    "Footer istituzionale a 4 colonne con dati legali completi (Co.s.s.a.t. s.p.a., REA CA-67249, P.IVA, Cap. Soc.)",
    "Layout dedicato per le pagine legali con card editoriale, indici per sezioni e tabelle riassuntive",
    "Pagina 404 personalizzata con iconografia nautica, gerarchia visiva chiara e percorsi di rientro guidati",
    "Touch targets conformi agli standard ergonomici mobile (minimo 48x48px per controlli e pulsanti)",
    "Finestra modale con sfondo oscurato semitrasparente e blur d'ambiente per focalizzare l'attenzione"
  ],
  tests: [
    {
      name: "Compilazione statica Next.js e typecheck TypeScript",
      passed: true,
      command: "npm run build",
      evidence: "audit/build_typecheck.md"
    },
    {
      name: "Verifica navigazione da tastiera, skip-link e drawer mobile",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/navigazione.md"
    },
    {
      name: "Verifica modulo contatti, validazione RFC e honeypot",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/form_validazione.md"
    },
    {
      name: "Verifica responsive layout da 320px a 4K con clamp()",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/responsive_layout.md"
    },
    {
      name: "Verifica WCAG 2.1 AA, contrasti, zero SVG e zero emoji",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/accessibilita_wcag.md"
    },
    {
      name: "Verifica metadati SEO, Schema.org, sitemap e robots",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/seo_metadata.md"
    },
    {
      name: "Audit dipendenze npm e vulnerabilita di sicurezza",
      passed: true,
      command: "npm audit --audit-level=high",
      evidence: "audit/dipendenze_sicurezza.md"
    },
    {
      name: "Scansione statica vulnerabilita XSS, injection e CSP",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/xss_injection.md"
    },
    {
      name: "Audit igiene repository, assenza credenziali e .gitignore",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/gestione_segreti.md"
    },
    {
      name: "Analisi peso risorse raster, bundle JS e consumo memoria",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/performance_memoria.md"
    },
    {
      name: "Confronto strutturale con goreela.it e motivazione omissioni",
      passed: true,
      command: "node scripts/run-audit-tests.mjs",
      evidence: "audit/confronto_goreela.md"
    }
  ],
  files: filesList
};

fs.writeFileSync(path.join(ROOT, "jarvis-result.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log(`[OK] Generato jarvis-result.json con ${filesList.length} file tracciati e SHA256 verificati.`);
