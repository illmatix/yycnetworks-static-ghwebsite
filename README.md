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
  - assets/styles.css — Built Tailwind CSS (generated)
- src/styles.css — Tailwind source with @tailwind and component utilities
- tailwind.config.js — Tailwind configuration (scans public/**/*.html)

## Environment variables

This project includes an example environment file for storing constants you may want to keep private or configurable.

- Copy .env.example to .env and set your values:
  cp .env.example .env
- .env is already ignored by git.
- Suggested keys:
  - SITE_URL: Public URL of the deployed site
  - CONTACT_EMAIL: Email address to show on the contact page
  - FORMSPREE_ID: Your Formspree form ID

Note: The static HTML files currently use placeholder values. If you want CI to inject .env values into the HTML (e.g., set the Formspree ID automatically), let me know and I’ll add a tiny injection step to the GitHub Actions workflow.

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
  - Organization on index.html
  - Service + Offers on realty.html
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
