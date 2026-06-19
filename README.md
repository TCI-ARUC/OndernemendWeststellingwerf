# Website Ondernemend Weststellingwerf

Nieuwe site van Ondernemend Weststellingwerf, gebouwd met **Astro** (statisch, snel,
onderhoudbaar) volgens de design-handoff. Bedoeld om door meerdere mensen via pull
requests bijgewerkt te worden.

## Aan de slag

```bash
npm install
npm run dev      # lokale dev-server op http://localhost:4321
npm run build    # productiebuild naar ./dist
npm run preview  # bekijk de productiebuild lokaal
```

## Structuur

```
src/
  styles/tokens.css        # huisstijl-tokens (kleuren, radius, schaduw) + base-styles
  layouts/Base.astro       # <head>, Mulish-fonts, tokens, header + footer, <slot/>
  components/
    SiteHeader.astro       # sticky header met active-prop
    SiteFooter.astro       # donkere footer
    KrachtCard.astro        EventCard.astro
    NieuwsCard.astro        PrijsCard.astro
    PageHero.astro          InfoBlock.astro
  pages/
    index.astro            over-ons.astro       lidmaatschap.astro
    agenda.astro           leden.astro          nieuws.astro
    contact.astro          privacy.astro
    bedrijventerreinen.astro   ondernemersfonds.astro   fonds.astro
public/img/                # afbeeldingen + logo
public/docs/               # PDF's & formulieren (Parkmanagement; SOW nog aanvullen)
```

De drie partner-stichtingen/fondsen staan in het menu gegroepeerd onder een
**Stichtingen**-dropdown:
- `bedrijventerreinen.astro` — Parkmanagement Wolvega (SPBW)
- `ondernemersfonds.astro` — Ondernemersfonds Weststellingwerf (SOW), reclamebelasting
- `fonds.astro` — Stimuleringsfonds *Ondernemend Veuruut* (nieuw, eind 2026)

## Status

- ✅ **Alle pagina's** geïmplementeerd: Home, Over ons, Lidmaatschap, Agenda,
  Leden (smoelenboek), Nieuws, Contact, Privacy en de drie stichtingen-pagina's
  (Bedrijventerreinen, Ondernemersfonds, Stimuleringsfonds).
- ✅ Gedeelde `SiteHeader` + `SiteFooter` + `Base`-layout + design-tokens.
- ✅ Herbruikbare componenten: `PageHero`, `InfoBlock`, `KrachtCard`, `EventCard`,
  `NieuwsCard`, `PrijsCard`.
- ✅ Nieuws & Agenda als **Markdown content collections** (`src/content/`).
  Nieuws heeft artikel-detailpagina's (`/nieuws/<slug>`); homepage + overzichten
  vullen zich automatisch uit de collecties.
- ✅ **GitHub Actions-deploy** naar Pages (`.github/workflows/deploy.yml`),
  eigen domein **ow.curaict.nl** via `public/CNAME`.

## Content bewerken (zonder code)

Nieuws en agenda zijn losse Markdown-bestanden:

```
src/content/nieuws/<slug>.md    # artikelen
src/content/agenda/<slug>.md    # evenementen
```

Nieuw artikel = nieuw `.md`-bestand met frontmatter (`title`, `category`, `excerpt`,
`pubDate`, optioneel `featured` en `image`). De huisstijlkleur per categorie wordt
automatisch afgeleid (zie `src/lib/taxonomy.ts`) — geen kleurcodes nodig.

## Deploy

Elke push naar `main` bouwt en publiceert de site via GitHub Actions naar GitHub Pages.

**Eenmalig instellen:**
1. Repo → Settings → Pages → **Source: GitHub Actions**.
2. DNS bij curaict.nl: een **CNAME-record** `ow` → `tci-aruc.github.io`.
   (Het `public/CNAME`-bestand koppelt het domein aan de Pages-site.)
3. In Settings → Pages het custom domain `ow.curaict.nl` invullen en
   *Enforce HTTPS* aanzetten zodra het certificaat is uitgegeven.

## Belangrijke aandachtspunten

### Logo
Het echte logo staat in `public/img/` (uitgesneden uit het aangeleverde `Logo 16_9.jpg`,
met transparante achtergrond):
- `mark-ow.png` — alleen het waaier-merkteken; gebruikt in header, footer en favicon.
- `logo-ow.png` — het volledige logo (waaier + woordmerk) voor waar dat beter past.

### Foto's
De hero en nieuwskaarten gebruiken echte foto's van Weststellingwerver ondernemers
(geen stock — expliciete eis uit het Plan van Eisen). Nieuwsartikelen zonder eigen foto
vallen terug op een net placeholder-vlak; voeg waar mogelijk een `image` toe in de
frontmatter.

### Formulieren
Het nieuwsbrief-formulier toont nu een demo-bevestiging. Koppel het in productie aan
**Laposta**. Inschrijven/inloggen linkt naar **ClubCollect** (zie de externe URL's hieronder).

### Externe koppelingen
- Ledenportaal (ClubCollect): `https://app.clubcollect.com/ma/0e1183ceb4f5c970bb0bb3080204adbabc8fe53c`
- Stiekm Trots: `https://stiekmtrots.nl`
- Nieuwsbrief: Laposta (nog te koppelen)

> Controleer de ClubCollect-URL's met het echte account; in de handoff staan ze als voorbeeld.

### Hosting
In `astro.config.mjs` staat `site` op het verwachte domein. Voor GitHub Pages onder een
sub-pad (`/<repo>/`) moet je daar ook `base: '/<repo>/'` toevoegen.
