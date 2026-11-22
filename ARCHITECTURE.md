# Architecture & roadmap

## MVP (delivered)
Single-page, offline-first, static frontend; no backend. Local JSON state persisted in browser storage. Tax reserve calculator is explicitly illustrative and user-rate-based. Manual-only inputs, no tax uploads.

## Phase 2 (after QA)
Automated regression tests, keyboard/screen-reader audit, edit transactions, bill recurrence, opening balance, reconciliation, budget envelopes, month-specific goal contributions, data import/export validation, and clear onboarding.

## Phase 3 (requires budget/security/legal review)
Secure accounts, encrypted persistence, backup/recovery, consent and retention controls, validated tax calculation engine by tax year and jurisdiction, documented IRS/state source rules, test corpus, qualified tax review, and secure document handling only after threat modeling.

## Tax calculation boundaries
A 1099 gross receipt is not automatically profit; 1099-K amounts can overlap with other 1099 forms. A single uploaded tax document cannot establish a person's full tax liability. Never label a percentage-based savings reserve an exact tax calculation.

## Nonfunctional goals
No paid services, no remote calls, responsive layout, no dependency on CDN, no collection of real personal information. Source ZIPs preserved independently.
