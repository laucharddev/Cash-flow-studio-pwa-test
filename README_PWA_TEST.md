# Cash Flow Studio 3.2.1 — Offline PWA test build

**TEST ONLY — fictional data. Not secure for actual financial records.** This build extends the existing 3.2 international/mobile demo; it does not implement the final encrypted storage architecture. Original ZIPs remain untouched.

## What is new
- Installable PWA metadata and app icons.
- Service worker caches only the application shell so it can reopen without Internet after a successful first online/localhost load.
- No backend, analytics, user account, banking API, or network synchronization.
- Existing localStorage demo data and JSON import/export unchanged.

## On Mac: test locally (no hosting fee)
1. Unzip the package. Open Terminal in the extracted folder.
2. Run `python3 -m http.server 8765` (requires Python 3).
3. Visit `http://localhost:8765` in Chrome or Safari.
4. Open DevTools > Application > Service Workers (Chrome) and confirm active; refresh once.
5. Disconnect Internet while keeping localhost server running; refresh and verify UI. To simulate the server being unavailable, stop the server and revisit the same localhost URL; browser offline fallback behavior may vary.
6. Test Overview, transactions, bills, goals, JSON backup and restore with **fictional data only**.

**Important:** double-clicking index.html with `file://` can display the UI, but **does not register the service worker or establish PWA installation**. iPhone/Android installation testing needs a HTTPS deployment, which is not included.

## Known blockers for production
- localStorage is unencrypted, browser-profile scoped, and can be cleared.
- No authenticated encrypted backup, recovery keys, IndexedDB/SQLite adapter, or data migration.
- Currency selector changes formatting only, never converts amounts.
- No real tax liability calculations; Tax Center is an educational US-only reserve scenario.
- No automated browser, security, or store acceptance testing completed.
- Service worker shell cache is not a secure financial storage mechanism.

## Manual QA acceptance
- Online first load via localhost; app shell available after service worker activation.
- No external network requests; application data never placed in Cache Storage by our service worker.
- JSON import of known fictional backup, then refresh, totals unchanged.
- Broken JSON import rejected without changing records.
- No claims of production readiness until independently tested.
