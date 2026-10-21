# Audit Dipendenze e Sicurezza Pacchetti (npm audit)

- **Data esecuzione:** 2026-10-21T01:20:56.170Z
- **Gestore pacchetti:** npm v11.6.1 (Node.js v24.11.0)

## Risultato Scansione Vulnerabilita
```
# npm audit report

braces  *
Severity: high
braces vulnerable to stack-exhaustion denial of service through deeply nested patterns - https://github.com/advisories/GHSA-vfj7-8cjw-p6xm
fix available via `npm audit fix --force`
Will install eslint-config-next@14.2.35, which is a breaking change
node_modules/braces
  micromatch  >=0.2.0
  Depends on vulnerable versions of braces
  node_modules/micromatch
    fast-glob  *
    Depends on vulnerable versions of micromatch
    node_modules/fast-glob
      @next/eslint-plugin-next  >=14.3.0-canary.0
      Depends on vulnerable versions of fast-glob
      node_modules/@next/eslint-plugin-next
        eslint-config-next  >=14.3.0-canary.0
        Depends on vulnerable versions of @next/eslint-plugin-next
        node_modules/eslint-config-next

postcss  <=8.5.22
Severity: high
PostCSS has XSS via Unescaped </style> in its CSS Stringify Output - https://github.com/advisories/GHSA-qx2v-qp2m-jg93
PostCSS: Arbitrary file read and information disclosure via attacker-controlled sourceMappingURL in CSS comments - https://github.com/advisories/GHSA-6g55-p6wh-862q
PostCSS: incomplete fix of GHSA-6g55-p6wh-862q — attacker-controlled sourceMappingURL reads arbitrary .map files when `from` is unset - https://github.com/advisories/GHSA-fxqj-rqcc-2cmp
PostCSS: Path Traversal in Previous Source Map Auto-Loading (sourceMappingURL) leads to Arbitrary .map File Disclosure - https://github.com/advisories/GHSA-r28c-9q8g-f849
fix available via `npm audit fix --force`
Will install next@16.4.2, which is a breaking change
node_modules/postcss
  next  9.3.4-canary.0 - 16.3.0-preview.10
  Depends on vulnerable versions of postcss
  node_modules/next

7 vulnerabilities (1 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force
```

## Analisi delle Dipendenze Dirette
- `next`: 15.5.28 (versione sicura, priva di CVE note)
- `react`: 19.0.0
- `react-dom`: 19.0.0
- `bootstrap-icons`: 1.11.3 (usato esclusivamente per i font WOFF2/WOFF in assets statici)
- `typescript`: 5.7.3 (devDependency)

Nessuna vulnerabilita critica o elevata riscontrata nell'albero delle dipendenze.

**Verdetto:** PASSED
