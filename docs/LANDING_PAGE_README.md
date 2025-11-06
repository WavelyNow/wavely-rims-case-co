# Wavely – Landing Page (Nou)

Scop: înlocuirea integrală a landing page-ului cu o versiune modernă, accesibilă și performantă.

## Structură principală
- `src/pages/Index.tsx`: pagină nouă cu secțiuni Hero, Servicii/Produse, Cum funcționează, Trust.
- `src/components/Logo.tsx`: componentă SVG accesibilă, folosită în `Navigation`.
- `public/wavely-logo.svg`: fișier SVG pentru logo.

## Accesibilitate (WCAG 2.1 AA)
- Link „Skip to content” pentru utilizatorii de tastatură.
- Landmarks semantice (`header`, `main`, `section`) și ierarhie de titluri corectă.
- Texte alternative pentru imagini (`alt`) și butoane descriptive.
- Contrast ridicat conform temei existente.

## Performanță
- Imagini lazy pentru secțiuni non‑critice; logo și imaginea Hero decode/`loading` setate pentru LCP.
- DOM minim și CSS reutilizat din sistemul UI existent.
- SVG pentru logo (mic, rapid, scalabil).

## Cross‑browser
- Doar HTML/CSS standard; fără API‑uri experimentale.
- Testat manual pe Chrome, Firefox, Edge; Safari prevăzut prin CSS compatibil.

## Conținut legal
- Linkuri către: `PrivacyPolicy`, `Terms`, `CookiePolicy`, `ReturnPolicy` (existente).
- Dacă apar documente Word (doc/docx), pot fi convertite ulterior în pagini JSX dedicate.

## Instrucțiuni de rulare
1. `npm install`
2. `npm run dev`
3. Accesează `http://localhost:8080/`

