# All Natural Cat Litter

Marketing website for Purrify.ca - a holistic, toxin-free cat litter brand.

## Tech Stack

- **Framework:** Astro 5.x (static site generation)
- **Styling:** UnoCSS with custom theme (Wind3 preset)
- **Fonts:** Cormorant Garamond (display), Karla (body) via Google Fonts
- **SEO:** @astrojs/sitemap for automatic sitemap generation

## Project Structure

```
src/
  components/     # Reusable Astro components
  layouts/        # Page layouts (BaseLayout, JourneyLayout)
  pages/          # File-based routing
    the-natural-path/   # Educational content section
public/
  og-image.png    # Social sharing image (1200x630)
  favicon.svg     # Site favicon
  logo.svg        # Brand logo
```

## Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
```

## Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| sage | #87A878 | Primary brand color |
| cream | #FAF8F5 | Background |
| earth | #5C4B3A | Text |
| sand | #E8DCC4 | Accents |
| mist | #E8EDE6 | Cards/sections |

### UnoCSS Shortcuts
- `container-narrow/wide/full` - Responsive containers
- `breathing-space` - Generous section padding
- `btn-primary/secondary/gentle` - Button variants
- `card-organic/journey` - Card styles
- `text-display/heading/body` - Typography presets

## Pages

- `/` - Homepage
- `/philosophy` - Brand philosophy
- `/recommendations` - Product recommendations
- `/community` - Community page
- `/the-natural-path/` - Educational content hub
  - `/toxin-free-living`
  - `/nurturing-instincts`
  - `/transition-journey`
  - `/multi-cat-harmony`
  - `/litter-box-sanctuary`
  - `/natural-ingredients`

## Deployment

Static output to `dist/` folder. Deploy to any static hosting (Netlify, Vercel, Cloudflare Pages).

Site URL: https://allnaturalcatlitter.com
