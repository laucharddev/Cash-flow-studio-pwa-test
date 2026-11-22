# Cash Flow Studio 3.1 — Changes and limits

- Added local JSON backup import with schema validation, 3 MB limit, replacement warning, and no server upload.
- Added savings-goal editing, remaining amount, and approximate months to target.
- Added explicit negative business-result display while maintaining the reserve calculation zero floor.
- Retained original localStorage key for same-origin compatibility and preserved all original ZIP files separately.

## Important limits
This is an educational local demo, not a production financial or tax service. Import is not a secure cloud backup. Browser localStorage is readable by anyone with access to the browser profile. Tax Center is only a configurable 1099 reserve illustration, not an IRS or state tax estimate. No tax documents or sensitive information should be entered.

## Manual QA
Open index.html locally, create/edit a goal, export a backup, modify the goal, import the backup and verify restoration. Test invalid JSON rejection and cancel import. Use fictional data only.
