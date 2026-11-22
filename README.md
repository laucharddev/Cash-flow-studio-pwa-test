# Cash Flow Studio 3.0 — local-only prototype

## Open
Unzip the package and open `index.html` in a modern browser (Chrome, Edge, Firefox or Safari). No installation, account, server, internet connection or paid dependency is required. Keep `index.html`, `styles.css`, and `app.js` together.

## Scope
- Overview: month-filtered income, expenses, net cash flow, unpaid bills and cautious planning availability.
- Transactions: create/delete income, expenses and transfers; transfers are excluded from cash flow.
- Bills: due dates, paid/unpaid toggle; bills are not automatically booked as expenses.
- Goals: savings targets and monthly planning set-asides.
- Tax Center: manual **fictional** inputs and a user-selected percentage reserve on positive 1099 net profit. It does NOT compute actual tax owed, refund, self-employment tax, federal or state income tax. W-2 and withholding fields are contextual only.
- Settings: export sample data, restore example, clear browser data.

## Privacy & limitations
Use fictional data ONLY. Entries persist in browser localStorage, which is not encrypted, access-controlled, backed up, or appropriate for SSNs, bank records, tax returns or sensitive financial data. No tax-document upload or tax filing. Do not use as production software. Browser storage may be unavailable in some private/file contexts.

## Source relationship
Re-implemented the conceptual modules from `Cash_Flow_Studio_V2_1_Review_Pack.zip` (Dashboard, Transactions, Bills_Calendar, Buffer_And_Goals, Sample_Month_3000, Settings, Read_Me_And_QA). This is a fresh static web prototype, not a direct Excel-to-code conversion. Source ZIPs are not changed.

## Architecture
`index.html` (views and controls) → `app.js` (state, calculation functions, validation, localStorage) → `styles.css` (responsive UI). No external scripts, analytics, APIs or network requests. A future production build needs user authentication, encrypted backend, threat modeling, tax rules versioning, verified tax engines, privacy/legal review, accessibility testing and independent financial calculation tests.

## QA scenarios
1. Default November 2026: income $3,000; expenses $1,550; net $1,450; unpaid bills $155; monthly goal set-asides $175; available $1,120.
2. Switch to October 2026: income $2,500; expenses $0; net $2,500; unpaid bills $0; available $2,325.
3. Add a transfer: net remains unchanged.
4. Mark a bill paid: unpaid bills and available amount update; expense totals do not change.
5. Tax: 1099 receipts $12,000 minus expenses $3,000 = $9,000; at 25% reserve = $2,250.
6. Delete/restore sample data and export demo JSON.

## Commercial release gate
NOT READY FOR SALE. No real documents or user financial data. Do not enable paid access until legal/work authorization, software security, accuracy and customer testing are complete.
