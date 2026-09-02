# cancerbits.github.io

Source for the **Developmental Cancer Genomics** (Halbritter Lab) website at
St. Anna Children's Cancer Research Institute (CCRI), Vienna — rebuilt as a
static [Astro](https://astro.build) site styled with
[Tailwind CSS](https://tailwindcss.com), ready to deploy on GitHub Pages.

This repository is a GitHub **user/organization** Pages site
(`cancerbits.github.io`), so it is served from the domain root — no `base`
path or custom subpath configuration is needed.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks + outputs static site to ./dist
npm run preview   # serve ./dist locally
```

Node.js 20+ is recommended (matches the CI workflow).

## Project structure

```
.
├── .github/workflows/deploy.yml   # builds & deploys to GitHub Pages on push to main
├── public/                        # static assets copied as-is (images, favicon, robots.txt)
├── src/
│   ├── components/                # Header, Footer, PageBanner, PersonCard, PublicationItem, ...
│   ├── content/
│   │   ├── config.ts              # Zod schemas for all content collections
│   │   ├── people/*.md            # current team members
│   │   ├── publications/*.yaml    # one file per paper/preprint
│   │   ├── funding/*.yaml         # active grants
│   │   └── projects/*.yaml        # highlighted past projects
│   ├── data/                      # site.ts (nav/address/socials), alumni.ts, collaborators.ts
│   ├── layouts/                   # BaseLayout.astro, PageLayout.astro
│   ├── pages/                     # index, people/, research/, publications/, join/, contact/, 404
│   └── styles/global.css          # Tailwind entrypoint + small component classes
├── scripts/gen_publications.py    # provenance: script used to generate the publications/*.yaml
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Adding or editing content

All editable content lives under `src/content/` and `src/data/` — no
component code needs to change for routine updates.

- **New team member**: add `src/content/people/<slug>.md` with frontmatter
  matching the `people` schema in `src/content/config.ts` (`name`, `role`,
  `photo`, `order`, `links`).
- **New publication**: add `src/content/publications/<slug>.yaml`. Set
  `section` to `preprint`, `main`, or `other` to control which list it
  appears in, and `order` to control position within that list.
  `authorsHtml` accepts `<u>...</u>` to mark lab members and `<sup>...</sup>`
  for equal-contribution symbols, matching the convention used throughout
  the existing entries.
- **New funding / past project**: add a YAML file under
  `src/content/funding/` or `src/content/projects/` respectively.
- **Nav, address, email, social links**: edit `src/data/site.ts`.
- **Alumni / collaborators**: edit `src/data/alumni.ts` /
  `src/data/collaborators.ts`.

Astro validates all of the above against the schemas in
`src/content/config.ts` at build time — a malformed entry will fail the
build with a clear error rather than silently breaking the page.

## Deploying

The included workflow (`.github/workflows/deploy.yml`) builds the site and
deploys it via GitHub's official Pages actions on every push to `main`. In
the repository settings, under **Settings → Pages → Build and deployment**,
set the source to **GitHub Actions** (not "Deploy from a branch").

No `CNAME` file is included since this is the default `*.github.io` domain;
add one under `public/` if a custom domain is later configured.

