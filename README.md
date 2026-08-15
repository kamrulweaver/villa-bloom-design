# Seaweed Luxury Villa — Hostinger-ready static site

This project is built with TanStack Start and exported to a static HTML bundle that can be uploaded directly to any Hostinger shared-hosting folder or subdomain.

## Quick start (local development)

```sh
npm install        # or bun install
npm run dev        # or bun run dev
```

Open `http://localhost:8080` to preview the site.

## Build for Hostinger

Run the export script to generate the static `hostinger/` folder:

```sh
bun run build:hostinger
# or, if you prefer npm:
npm run build:hostinger
```

This:

1. Builds the project for production.
2. Renders the homepage to a static `index.html`.
3. Rewrites all asset paths to relative URLs so the site works from any subdomain or subfolder.
4. Copies `dist/client` into `hostinger/`.
5. Adds a `contact.php` handler that receives the enquiry form and emails `reservations@seaweedvilla.com`.

## Upload to Hostinger

1. Download or clone the project from GitHub.
2. If you haven't already, run `bun run build:hostinger` (or `npm run build:hostinger`).
3. Upload the **contents** of the `hostinger/` folder — not the folder itself — to your Hostinger `public_html` or subdomain document root.
4. The enquiry form is sent to `contact.php`, which uses the PHP `mail()` function. Make sure your Hostinger plan supports sending mail, and update the `$to` address in `hostinger/contact.php` if needed.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

