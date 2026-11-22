# Cash Flow Studio 3.2 — International & Mobile Demo

Open `index.html` in a desktop browser. On a phone, transfer/unzip the folder and open `index.html` in a browser that permits local HTML files. Mobile behavior varies across iOS/Android browsers; this is NOT a hosted website, PWA or native app.

## New
- Mobile-friendly cards for transaction and bill tables; larger touch targets.
- Currency display selector: USD, CAD, EUR, GBP, HTG. **Display only: no currency conversion.** Never mix currencies in a dataset.
- English and French number formatting preference. The French option changes number formatting, NOT the full interface language.
- US tax labels clarified; Tax Center remains a US-only educational reserve scenario.
- Separate browser storage key from 3.0/3.1. On first launch, read existing legacy data if accessible, without changing the original key.
- Existing demo JSON backup imports remain supported. Currency preference is not changed on import.

## Critical limitations
- Demo only. Use fictitious data; browser localStorage is not secure for sensitive information.
- No cloud sync, bank connection, login, native mobile installer, exchange rate conversion or Canadian tax calculations.
- No automated browser/device QA completed. Validate manually on Safari iOS, Chrome Android, Safari Mac and Chrome desktop before any sales claim.
- Changing currency is a formatting operation, not conversion. For CAD users start with a clean demo dataset and enter CAD amounts.

## QA checklist
1. Open app, verify Dashboard and six tabs.
2. Settings > choose CAD: $ formatting changes; numeric totals stay unchanged.
3. Add transaction and bill; verify mobile card layouts.
4. Export JSON; re-import; confirm counts and totals.
5. Refresh and check persistence.
6. Verify V3.0 and V3.1 originals are unchanged.
7. Test mobile browsers and tax disclaimer.
