# Plan de testare – Landing Page Wavely

## Obiective
- Verificarea funcționalității complete, accesibilității (WCAG 2.1 AA) și performanței (Lighthouse ≥ 90).

## Teste funcționale
- Navigare principală: linkuri către `Shop`, `Customize`, `Contact`, `PrivacyPolicy`, `Terms`, `CookiePolicy` funcționează.
- CTA‑uri Hero: „Explorează produsele” și „Contactează‑ne” navighează corect.
- Secțiuni: Servicii/Produse, Cum funcționează, Trust se încarcă corect și sunt vizibile pe toate dimensiunile.

## Accesibilitate
- Tastatură: `Tab` parcurge în ordine logică; link „Skip to content” focalizabil.
- Screen readers: Titlul „Wavely” anunțat, butoane/CTA au etichete descriptive.
- Contrast: verificat cu instrumente (axe, Lighthouse A11y).

## Performanță
- LCP < 2.5s pe conexiune 4G simulată; 
- Imagini non‑critice au `loading="lazy"`; logo SVG mic.
- Lighthouse: scoruri Performance/Accessibility/Best Practices/SEO ≥ 90.

## Cross‑browser
- Chrome, Firefox, Edge, Safari: randare consistentă, fără erori în consolă.

## Procedură
1. `npm run dev` și deschide `http://localhost:8080/`.
2. Rulează Lighthouse în DevTools (Mobile și Desktop).
3. Rulează axe DevTools sau Accessibility Insights.
4. Testează navigarea și CTA‑urile.

## Criterii de acceptare
- Toate testele de mai sus trec și scorurile ≥ 90.
