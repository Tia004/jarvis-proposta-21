# Audit Modulo Contatti e Preventivo (Privacy & Anti-Abuso)

- **Data esecuzione:** 2026-10-21T01:20:54.313Z
- **Componente verificato:** `ContactForm.tsx`

## Requisiti di Sicurezza e Funzionalita
1. **Assenza di Invii Reali Non Configurati:**
   - Il modulo gestisce lo stato `isSubmitting` con simulazione asincrona (1.2s) e feedback visivo.
   - Nessun endpoint esterno non autorizzato riceve dati: compare avviso esplicito di *proposta dimostrativa*.
2. **Protezione Anti-Spam (Honeypot):**
   - Campo nascosto `website` (`tabIndex: -1`, `aria-hidden="true"`, `style.display: none`).
   - Se compilato da bot automatici, la richiesta viene respinta silenziosamente senza elaborazione (`hasHoneypot: true`).
3. **Validazione Sintattica Rigorosa:**
   - Validazione Nome (minimo 3 caratteri).
   - Validazione RFC Email con regex standard.
   - Validazione Date (Check-out obbligatoriamente successivo a Check-in).
   - Validazione Tipologia camera e conteggio ospiti.
   - Validazione Checkbox obbligatorio presa visione informativa privacy.
4. **Accessibilita & Micro-Interazioni:**
   - Ogni campo ha un'etichetta associata con `htmlFor` ed id univoco.
   - Errori visualizzati con stato `aria-invalid="true"` e messaggi dedicati.
   - Contatore caratteri in tempo reale (max 600 caratteri per il messaggio).
   - Integrazione con codici sconto convenzione (es. `TRAGHETTI`).

**Verdetto:** PASSED
