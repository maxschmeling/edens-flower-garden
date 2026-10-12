# Eden's Flower Garden

Static website for [Eden's Flower Garden](https://edensflowergarden.com/), hosted with Cloudflare Workers Static Assets.

## Local development

```bash
npm install
npm run dev
```

The site contains no application server, framework runtime, database, or external asset CDN. HTML, CSS, JavaScript, photos, and fonts are all served from `public/`.

## Deployment

```bash
npm run check
npm run deploy
```

The temporary `workers.dev` deployment intentionally sends `X-Robots-Tag: noindex, nofollow` and disallows crawling in `robots.txt`. Remove those safeguards when the canonical domain moves to Cloudflare.

Before attaching `edensflowergarden.com`, add the domain to the correct Cloudflare account, verify all imported DNS records, and ask the domain owner to update its authoritative nameservers.
