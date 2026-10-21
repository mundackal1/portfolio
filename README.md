# Alan Philip Babu — Portfolio

Personal portfolio with a dark, serif-led design: products (Room IQ, Rates IQ, Salon IQ, Chit IQ, Fin IQ, Build IQ) as case studies, client websites, toolkit and experience.

Static site, no build step. All content lives in the data blocks at the top of `js/main.js`.

## Run locally

```bash
python3 -m http.server 8085
```

Then open http://localhost:8085. Product briefs can be linked directly, e.g. `/#/work/room-iq`.

## Editing

- **Contact links, CV, photo:** `CONFIG` in `js/main.js` (set `cv` to show the CV buttons, `photo` to put your photo in the hero arch).
- **Products, websites, tools, experience:** `PRODUCTS`, `SITES`, `TOOL_GROUPS`, `TIMELINE` in `js/main.js`.
- Keep product copy high level (what and why, not how).
