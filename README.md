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

The temporary `workers.dev` deployment sends `X-Robots-Tag: noindex, nofollow`
through a hostname-specific `_headers` rule. The canonical domains do not get
that header, and `robots.txt` permits crawling. Keep the temporary-host rule to
avoid indexing a duplicate copy.

Both canonical hostnames are configured as Workers Custom Domains in
`wrangler.jsonc`. The Cloudflare Free zone was created on 2026-11-16 and the
custom-domain bindings and DNS records were verified through the API. At that
time activation was pending the domain owner's GoDaddy nameserver change to:

- `etienne.ns.cloudflare.com`
- `julissa.ns.cloudflare.com`

After that change, verify zone activation, HTTPS, the homepage and robots.txt
on both canonical hostnames. Registration and renewals remain with GoDaddy.
