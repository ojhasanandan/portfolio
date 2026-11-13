# Sanandan Ojha — Portfolio

Personal site for research and project work in mathematics, modeling and medicine. Built with React and Vite.

## Development

```bash
npm install
```

```bash
npm run dev
```

`npm run build` produces the static site in `dist/`, including one HTML file per project page.

## Where things live

```
src/
  data/        All content. Edit these files to update the site.
    site.js      Name, contact links, education, hero facts, lenses, interests, trajectory
    work.js      Research and projects (entries with `page: true` get a page at /work/<slug>)
    record.js    Publications, talks, posters, honors, training, skills, teaching, leadership
  pages/       Home, the project page, 404
  components/  Nav, footer, theme toggle, the live hero figure, schematics
  lib/         Router and page metadata
  styles/      tokens.css (colors, type) and site.css (everything else)
scripts/       Build step that writes per-page HTML for link previews
public/        CV, favicon, link-preview image
```

## How the site is organized

- **One identity, three lenses.** The "What brings you here?" bar lets a reader choose graduate research,
  quantitative roles, or healthcare and clinical research. The choice filters the Research and Projects
  sections and shows a short tailored summary. It is stored in the URL, so a tailored link can go in each
  application: `/?for=phd`, `/?for=quant`, `/?for=health`.
- **Featured work** has its own page with motivation, what was done, a plain-language explanation of the
  method, and where the work was presented. Other entries expand in place.
- **The hero figure** runs a real ABC-SMC fit on synthetic data in the browser (`Posterior.jsx`). It is
  an illustration of the method, not research data.
- **Schematics** on the cards (`Schematic.jsx`) are diagrams of each idea. Replace them with real figures
  when available.
- **Themes:** "board" (dark, default) and "paper" (light). Colors and fonts are defined once in
  `src/styles/tokens.css`. Fraunces for headings, Instrument Sans for text, JetBrains Mono for data.

## Things to fill in

Search the `src/data/` files for `TODO`:

- `PROFILE.linkedin` in `site.js` (the LinkedIn buttons appear once it is set).
- `EDUCATION.coursework` in `site.js` (a "Selected coursework" block appears once it has entries).
- `public/Sanandan_Ojha_CV.pdf` was converted from the Word file. Replace it with your own PDF export.

## Deployment

The site is published to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.
One-time setup: in the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.

The workflow builds with `BASE_PATH=/<repository name>/`, so the site works from
`https://<user>.github.io/portfolio/`. On a custom domain or on Vercel, leave `BASE_PATH` unset and the
site is served from `/`. `vercel.json` is kept for that case.

Once the address is final, add `og:url` and a canonical link in `index.html` and make the `og:image`
address absolute.
