# Card Benefit Tracker

A standalone, installable web app for tracking premium credit card benefit deadlines.
No account, no server, no database, nothing sent anywhere. Every byte of data lives in
the browser's local storage on whatever device you're using.

## What "no backend" actually means here

- Add a card, mark a benefit used, build a custom card type — all of it writes straight
  to `localStorage` on that device. There is nothing else it could write to.
- Two people using this on their own phones have completely separate data. There is no
  shared database, so there's nothing to leak between users.
- If you clear your browser's site data, or switch phones, your data is gone unless you
  used **Export backup** first. This is a real trade-off of the no-backend model, not a
  bug — see "Backup and moving devices" below.
- Reminders come from **Add to calendar** — a downloaded `.ics` file with an alarm 5 days
  before each benefit resets, importable into whatever calendar app you already use. This
  works reliably because your phone's calendar app is already good at notifications; this
  app doesn't need to be.

## Hosting it (so your buddies can just open a link)

Any static file host works — GitHub Pages is free and simple:

1. Push this folder's contents to a GitHub repo (`index.html`, `benefit-engine.js`,
   `manifest.json`, `sw.js`, `icons/`).
2. Repo → Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
3. Share the resulting `https://<you>.github.io/<repo>/` link.

## Installing it on a phone (this is the whole "app" experience)

**iPhone (Safari):** open the link → Share icon → **Add to Home Screen**.
**Android (Chrome):** open the link → the app should show an **Install** banner
automatically (built into this app via the browser's install prompt) → tap Install.
If the banner doesn't appear, use the browser menu → **Add to Home Screen** / **Install app**.

Once installed, it opens full-screen with its own icon, no browser address bar — behaves
like a normal app. It also works offline after the first load, since the service worker
(`sw.js`) caches the app's own files.

## Backup and moving devices

Since there's no account and no sync, moving your data between your phone and laptop, or
recovering it after clearing browser data, is manual:

- **Export backup** (sidebar) downloads a JSON file with everything — cards, usage,
  custom card types.
- **Import backup** on the other device loads that file in, replacing whatever's there.

Set a personal reminder to export every so often if this matters to you. There's no
version history — an import overwrites, it doesn't merge.

## Extending the card library

`benefit-engine.js` holds `CARD_LIBRARY`, the built-in cards (Platinum, Aspire, CSR,
Venture X, Marriott Bonvoy Brilliant, Amex Business Platinum, Amex Gold). Edit it directly
to add cards for everyone who uses this build, or use **Build custom card** in the app —
no code required, stored locally on that device only.

Each benefit needs:
```js
{ id:"unique-id", name:"Benefit name", desc:"Short description",
  cadence:"annual-calendar", amount:200 }
```

| cadence | resets |
|---|---|
| `monthly` | 1st of each calendar month |
| `quarterly` | Jan-Mar / Apr-Jun / Jul-Sep / Oct-Dec |
| `semiannual-calendar` | Jan-Jun / Jul-Dec |
| `annual-calendar` | Jan 1 - Dec 31 |
| `annual-anniversary` | the card's own open/renewal date |
| `every4years` | e.g. Global Entry, anchored to card open date |

Amounts and terms drift — issuers change these mid-year. Treat the built-in library as a
starting point, not gospel.

## What was deliberately left out

This used to be a multi-user version with Supabase auth, a database, and scheduled email
reminders via Vercel + Resend. That's a real, working architecture (still buildable later
if cross-device sync or automated email ever becomes worth the added complexity), but it's
a different kind of project — you're the operator of other people's data at that point,
with real infrastructure to maintain. This version trades that away on purpose for
something that's free, has zero ongoing maintenance, and can't leak anyone's data because
there's no shared place for it to leak from.
