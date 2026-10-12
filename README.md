# 8K Strong TV

A dark, responsive Next.js App Router website for 8K Strong TV. It includes split conversion paths for personal subscriptions and reseller panels, credit packages, trial capture, setup guides, trust pages, SEO metadata, and a multi-stage Docker deployment.

## Project structure

```text
app/
  api/health/route.js       # Container health endpoint
  api/trial/route.js        # Validated trial lead endpoint
  contact/page.js           # Contact / plan hand-off
  free-trial/page.js        # Lead capture page
  privacy-policy/page.js    # Trust page
  refund-policy/page.js     # Trust page
  reseller/page.js          # Panel features, FAQs, and credit packages
  setup-guide/page.js       # Device instructions
  terms/page.js             # Trust page
  globals.css               # Tailwind base and components
  layout.js                 # Global SEO / Open Graph metadata
  page.js                   # Homepage + FAQ structured data
components/
  FAQ.js
  Footer.js
  Header.js
  LegalPage.js
  PricingTable.js
  TrialForm.js
Dockerfile                  # Node Alpine multi-stage image
docker-compose.yml          # VPS / Coolify-ready service
```

## Local development

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

## Production deployment

Set `NEXT_PUBLIC_SITE_URL` to the public HTTPS URL. Optionally set `LEAD_WEBHOOK_URL` to a secure CRM, email-automation, or serverless endpoint; the application POSTs validated trial requests there and does not persist leads locally.

```bash
docker compose up -d --build
```

For Coolify, point the service at this repository and use the included `Dockerfile`. Add the environment variables in the Coolify UI rather than committing secrets.

## Before launch

- Replace the placeholder brand name, contact details, plan prices, and legal text with reviewed business-specific content.
- Connect checkout buttons to your approved payment provider and perform provider compliance review.
- Confirm the offered service and regional availability comply with all applicable laws and content-distribution rights.
