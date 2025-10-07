# YYC Networks — Static Site

A modern, static marketing site for web & software consulting plus a fixed‑price realty website package. Built with Tailwind CSS and deployable to free static hosts.

## Quick start

1. Install dependencies (Node 18+):
   npm install

2. Build Tailwind CSS (outputs to public/assets/styles.css):
   npm run build

3. Open the site:
   Open public/index.html in your browser, or serve the folder with any static server.

4. Develop with live rebuilds:
   npm run dev

## Structure

- public/ — Static HTML pages
  - index.html — Landing page
  - services.html — Consulting, one‑off projects, support
  - realty.html — Realty website package (IDX + CRM) with pricing
  - contact.html — Contact form (Formspree placeholder)
  - privacy.html — Privacy Policy (Canada/US)
  - terms.html — Terms of Service
  - assets/styles.css — Built Tailwind CSS (generated)
- src/styles.css — Tailwind source with @tailwind and component utilities
- tailwind.config.js — Tailwind configuration (scans public/**/*.html)

## Environment variables

This project injects environment values into the built HTML both locally and in CI.

Local (optional):
- Copy .env.example to .env and set your values:
  cp .env.example .env
- When you run `npm run build`, tokens in HTML will be replaced from your `.env` if set.
- `.env` is ignored by git.

GitHub Pages CI injection:
- Add these GitHub Actions Secrets in your repo (Settings → Secrets and variables → Actions → New repository secret):
  - SITE_URL — Public URL of the deployed site (e.g., https://<user>.github.io/<repo>/)
  - CONTACT_EMAIL — Email address to show on the contact page
  - FORMSPREE_ID — Your Formspree form ID (the part after /f/)
- On each deployment, the workflow runs the same injection script with the secrets and replaces the following tokens in HTML:
  - %SITE_URL% in public/index.html (og:url + JSON‑LD Organization.url)
  - %CONTACT_EMAIL% in public/contact.html (mailto link + visible text)
  - %FORMSPREE_ID% in public/contact.html (form action URL)

Notes:
- If a variable/secret is not set, its token remains unchanged in the output (no failure).
- Tokens are simple literal strings. If you add new pages/fields, use the same %VAR_NAME% pattern and we can extend the injection to replace them.

## Contact form (free)

This project uses Formspree as a free email form backend.

- Create a free Formspree project and obtain a form ID.
- Replace the action URL in public/contact.html:
  https://formspree.io/f/your_form_id
- Optionally update the visible mailto link on the contact page.

## Images (free)

All demo images are hot‑linked from Unsplash using their free CDN. Replace with your own hosted images anytime. For fully local hosting, download assets into public/assets/images and update src attributes.

## SEO

- Basic meta tags and social cards (Open Graph/Twitter) are added.
- JSON‑LD schema:
  - Organization on index.html (includes sameAs → https://chadpayne.ca and founder Person → Chad Payne)
  - Service + Offers on realty.html
- Identity/relationship signals:
  - rel=me and rel=author tags pointing to https://chadpayne.ca on all pages
  - Visible footer link to “Resume (Chad Payne)” across the site
- For the realty product’s SEO needs, plan to use a third‑party SEO plugin that supports schema.org (specific choice depends on the stack used for the IDX integration).

## Hosting (free)

- GitHub Pages (with CI/CD):
  - Push this repository to GitHub and ensure your default branch is `main` (or update the workflow if different).
  - In your repo: Settings → Pages → Build and deployment → Source: GitHub Actions.
  - The included workflow at `.github/workflows/deploy-pages.yml` will:
    - Install dependencies and build Tailwind (`npm install && npm run build`).
    - Publish the `public/` directory to GitHub Pages automatically on every push to `main`.
  - URLs on GitHub project pages use `/REPO_NAME/` in the path, so all internal links in this repo are relative (no leading slash) to work on Pages and locally.
- Netlify:
  - New site from Git
  - Build command: npm run build (optional; you can also prebuild locally)
  - Publish directory: public

## Customization

- Branding: Update colors in tailwind.config.js under theme.extend.colors.brand
- Logo: Replace the favicon and emoji with your own assets
- Copy: Edit the HTML pages directly
- Pricing: Update realty.html pricing if it changes

## Roadmap / Questions

Status and remaining info needed to tailor the site further:

- [x] Set brand name to "YYC Networks" across the site.
- [x] Implement textual logo (YYC badge + wordmark) in header and footer.
- [x] Apply initial brand color palette (warm orange). Tweak anytime in tailwind.config.js.
- [ ] Confirm preferred email for contact form and mailto link.
- [ ] Confirm geographic market focus for the realty package.
- [ ] Confirm preferred IDX provider(s) and CRM choice (e.g., HubSpot, Zoho, Follow Up Boss, etc.).
- [ ] Confirm domain and hosting preference (GitHub Pages already configured; Netlify optional).
- [ ] Provide any portfolio items or testimonials to include.

## License

This repository contains marketing copy and scaffolding you own. Unsplash images are for demo; verify licenses before production use.
