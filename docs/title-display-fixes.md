# Title display fixes

Changes implemented to ensure titles are fully and correctly displayed across the app, including responsiveness and prevention of truncation:

- Added utility `.title-text` in `src/index.css` to enforce safe wrapping:
  - `overflow-wrap: anywhere;`
  - `word-break: normal;`
  - `white-space: normal;`
  - `hyphens: auto;`
  - `text-wrap: balance;` (progressive enhancement)

- Applied `.title-text` to major headings:
  - `src/pages/Index.tsx` hero `<h1>`; also replaced static font sizes with `text-[clamp(2.5rem,10vw,8rem)]` for fluid scaling.
  - `src/pages/Shop.tsx` page `<h1>`.
  - `src/pages/Product.tsx` product title `<h1>`.
  - `src/pages/HowItWorks.tsx` hero `<h1>`.

- Removed aggressive truncation in cart item titles:
  - `src/components/CartDrawer.tsx`: replaced `truncate` with `title-text line-clamp-2` to allow two lines and safe wrapping.

Testing guidance:
- Verify hero “Your Car.” on small phones (≤375px), tablets, and desktop. Text should wrap or scale without clipping.
- Check product titles in Shop and Product pages for long names; they should wrap instead of overflow.
- Open the cart and ensure long product titles show up to two lines without ellipsis truncation.

Notes:
- The `text-wrap: balance` property is supported in modern browsers; where unsupported, `overflow-wrap` and `hyphens` ensure graceful behavior.
- No layout-breaking changes were introduced; backgrounds and animations remain intact.

